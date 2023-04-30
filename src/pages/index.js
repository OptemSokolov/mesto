import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";

// import './index.css';

const placeForm = document.forms['form-place'];
const profileForm = document.forms["form-profile"];
const avatarForm = document.forms["form-avatar"]
const profileEditButton = document.querySelector('.profile__edit-button');
const avatarEditButton = document.querySelector('.profile__avatar-button')
const addButton = document.querySelector('.profile__add-button');
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
const editProfileForm = new FormValidator(formValidationList, profileForm);
editProfileForm.enableValidation();
const addCardForm = new FormValidator(formValidationList, placeForm);
addCardForm.enableValidation();
const editAvatarForm = new FormValidator(formValidationList, avatarForm);
editAvatarForm.enableValidation();



// -------------- Запускаем API

let profileID =  null;

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "4130b02e-b786-4f80-b6e6-56f64d995bcf",
    "content-type": "application/json",
  },
});

const cards = api.getAllCards();


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
              card.countLikes(data.likes);
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          api
            .putLike(id)
            .then((data) => {
              card.addLike();
              card.countLikes(data.likes);
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
    profileID
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
  editProfileForm.resetValidation();
  popupProfile.open();
});

// -------------- Добавление новой карточки

const addNewCard = new PopupWithForm('.popup-place', {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов из PopupWithForm
    addNewCard.setButtonLoading("Сохранение...");
    api
      .saveCard(inputValues)
      .then((data) => {
        addNewCard.close();
        renderCard(data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        addNewCard.setButtonLoading("Создать");
      });
  },
});

addButton.addEventListener("click", () => {
  addNewCard.open();
});

addNewCard.setEventListeners();


// -------------- Редактирование профиля

// Получаем данные пользователя для добавления на страницу
const myUserInfo = api.getUserInfo();

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
    profileID = myUserInfo._id;

    cardsList.renderItems(cards);
  })
  .catch((err) => {
    alert(err);
  });