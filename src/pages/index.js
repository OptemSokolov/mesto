import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

import './index.css';

const placeForm = document.forms['form-place'];
const profileForm = document.forms["form-profile"];
const avatarForm = document.forms["form-avatar"]
const profileEditButton = document.querySelector('.profile__edit-button');
const avatarEditButton = document.querySelector('.profile__avatar-button')
const profileAddButton = document.querySelector('.profile__add-button');
const elementsListSelector = ".cards__list";


// -------------- Валидация

// Объект с константами из форм
const formValidationList = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__input_type_error",
};

// Валидация форм профиль и плейс
const profileEditForm = new FormValidator(formValidationList, profileForm);
profileEditForm.enableValidation();
const addCardForm = new FormValidator(formValidationList, placeForm);
addCardForm.enableValidation();
const avatarEditForm = new FormValidator(formValidationList, avatarForm);
avatarEditForm.enableValidation();



// -------------- Запускаем API

let profileId =  null;

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "4130b02e-b786-4f80-b6e6-56f64d995bcf",
    "content-type": "application/json",
  },
});

const cards = api.getAllCards();
// Получаем данные пользователя для добавления на страницу
const myUserInfo = api.getUserInfo();


// -------------- Удаление карточки

const popupDeleteCard = new PopupWithSubmit(".popup-delete", {
  functionWithSubmit: (id, card) => {
    api
      .deleteCard(id)
      .then(() => {
        popupDeleteCard.close();
        card.trashCard();
      })
      .catch((err) => {
        alert(err);
      });
  },
});


// -------------- Отрисовка начальной страницы с карточками


function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick,
      handleLikeClick: (id) => {
        if (card.isCardLiked()) {
          api
            .removeLike(id)
            .then((data) => {
              card.deleteLike();
              card.setLikesCount(data.likes);
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          api
            .putLike(id)
            .then((data) => {
              card.addLike();
              card.setLikesCount(data.likes);
            })
            .catch((err) => {
              alert(err);
            });
        }
      },

      handleDeleteClick: (id) => {
        popupDeleteCard.open(id, card);
      },
    },
    "#card-template",
    profileId
  );
  return card.generateCard();
}

popupDeleteCard.setEventListeners();

// Отрисовка карточек на странице
function renderCard(item) {
  const newCardElement = createCard(item);
  cardsList.addItem(newCardElement);
};

const cardsList = new Section({ renderer: renderCard }, elementsListSelector);

// -------------- Большое изображение карточки

const popupImage = new PopupWithImage('.popup-image');

function handleCardClick(link, name) {
  popupImage.openImagePopup(link, name);
};

popupImage.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  profileEditForm.resetValidation();
  popupProfile.open();
});

// -------------- Добавление новой карточки

const newCard = new PopupWithForm('.popup-place', {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов из PopupWithForm
    newCard.setButtonLoading("Сохранение...");
    api
      .saveCard(inputValues)
      .then((data) => {
        newCard.close();
        renderCard(data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        newCard.setButtonLoading("Создать");
      });
  },
});

profileAddButton.addEventListener("click", () => {
  newCard.open();
});

newCard.setEventListeners();


// -------------- Редактирование профиля

const newUserInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__avatar",
});


const popupProfile = new PopupWithForm(".popup-profile", {
  callbackSubmitForm: (data) => {
    popupProfile.setButtonLoading("Сохранение...");
    api
      .editUserInfo({ name: data.name, about: data.description })
      .then((data) => {
        popupProfile.close();
        newUserInfo.setUserInfo(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupProfile.setButtonLoading("Сохранить");
      });
  },
});

popupProfile.setEventListeners();


// --------------  Аватар

const popupEditAvatar = new PopupWithForm(".popup-avatar", {
  callbackSubmitForm: (inputValues) => {
    popupEditAvatar.setButtonLoading("Сохранение...");
    api
      .editAvatar({ avatar: inputValues.avatar })
      .then((data) => {
        popupEditAvatar.close();
        newUserInfo.setUserInfo(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditAvatar.setButtonLoading("Сохранить");
      });
  },
});
avatarEditButton.addEventListener("click", () => {
  popupEditAvatar.open();
});
popupEditAvatar.setEventListeners();


// -------------- Промисы

Promise.all([myUserInfo, cards])
  .then(([myUserInfo, cards]) => {
    newUserInfo.setUserInfo(myUserInfo);
    profileId = myUserInfo._id;

    cardsList.renderItems(cards);
  })
  .catch((err) => {
    alert(err);
  });