import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

import './index.css';

const placeForm = document.forms['form-place'];
const profileForm = document.forms["form-profile"];
const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const elementsListSelector = ".cards__list";

// Массив карточек
const initialCards = [
  {
    name: 'Великий Новгород',
    link: 'https://images.unsplash.com/photo-1632214298882-03a0aa4bcc90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
  },
  {
    name: 'Валдай',
    link: 'https://farm5.staticflickr.com/4398/37307634182_91ff589e19_o.jpg'
  },
  {
    name: 'Петергоф',
    link: 'https://images.unsplash.com/photo-1577695912741-960e89e5dcee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
  },
  {
    name: 'Калининград',
    link: 'https://s0.rbk.ru/v6_top_pics/media/img/9/62/756164904017629.jpg'
  },
  {
    name: 'Воронеж',
    link: 'https://blog.ostrovok.ru/wp-content/uploads/2020/10/v_6.jpg'
  },
];

// -------------- Отрисовка начальной страницы с карточками

function createCard(item) {
  const card = new Card({data: item, handleCardClick}, "#card");
  return card.generateCard();
};

function renderCard(item) {
  const newCardElement = createCard(item);
  cardsList.addItem(newCardElement);
};

const cardsList = new Section({
  items: initialCards,
  renderer: renderCard
  },
  elementsListSelector
);

cardsList.renderItems();


// -------------- Большое изображение карточки

const popupImage = new PopupWithImage('.popup-image');

function handleCardClick(link, name) {
  popupImage.openImagePopup(link, name);
};

popupImage.setEventListeners();


// -------------- Редактирование профиля

const newUserInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

const popupProfile = new PopupWithForm(".popup-profile", {
  callbackSubmitForm: (inputValues) => {
    newUserInfo.setUserInfo(inputValues);
  },
});

popupProfile.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const info = newUserInfo.getUserInfo();
  popupProfile.setinputValues(info);
  editProfileForm.resetValidation();
  popupProfile.open();
});


// -------------- Добавление новой карточки

const addNewCard = new PopupWithForm('.popup-place', {
  callbackSubmitForm: (inputValues) => {
    renderCard(inputValues);
  }
})

addButton.addEventListener("click", () => {
  addNewCard.open();
});

addNewCard.setEventListeners();


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