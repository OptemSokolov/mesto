import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

// ПР4
// const container = document.querySelector('.container');
const popupProfile = document.querySelector('.popup-profile');
const profileEditButton = document.querySelector('.profile__edit-button');

const inputUsername = document.querySelector('#username');
const inputAbout = document.querySelector('#about');
const username = document.querySelector('.profile__title');
const about = document.querySelector('.profile__description');
// ПР5
// const cards = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card').content;
const popupPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup-image');
const addButton = document.querySelector('.profile__add-button');
const inputPlaceName = document.querySelector('#place-name');
const inputPlaceLink = document.querySelector('#place-link');
// const buttonClosePlace = document.querySelector('.popup__close-icon_type_add-picture');
const photoPopupImage = document.querySelector('.popup__image-photo');
const titlePopupImage = document.querySelector('.popup__image-title');

// ПР7 Сортировка
const profileForm = document.forms["form-profile"];
const placeForm = document.forms['form-place'];


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

// Функция появления формы (общая)
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener("mousedown", closePopupOverlay);
  document.addEventListener("keydown", (closePopupEscape));
};
// Функция скрытия формы (общая)
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener("mousedown", closePopupOverlay);
  document.removeEventListener("keydown", (closePopupEscape));
};
// Функция закрытия попапов нажатием на крестик
const closeButtons = document.querySelectorAll('.popup__close-icon');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
// Функция закрытия попапа по клику на ескейп
const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};
// Функция закрытия попапа по клику на оверлей
const closePopupOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
};

// Функция срохранения изменений профиля
const saveUserInfo = (evt) => {
  evt.preventDefault();
  username.textContent = inputUsername.value;
  about.textContent = inputAbout.value;
  closePopup(popupProfile);
};


// Функция редактирования профиля
const editProfile = () => {
  inputUsername.value = username.textContent;
  inputAbout.value = about.textContent;
  openPopup(popupProfile);
};


// Функция добавления стандартных карточек
const addCard = (item) => {
  const userCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = userCard.querySelector('.card__image');
  const cardLikeButton = userCard.querySelector('.card__like-button');
  const cardDeleteButton = userCard.querySelector('.card__delete-button');
  userCard.querySelector('.card__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.setAttribute('alt', item.name);
  cardImage.addEventListener('click', openPlaceImage);
  // cardImage.addEventListener('click', () => handleCardClick(item));
  cardDeleteButton.addEventListener('click', deleteCard);
  cardLikeButton.addEventListener('click', toggleLike);
  return userCard;
};
initialCards.forEach(item => {
  cardsList.append(addCard(item));
});

// Функция открытия формы добавления плэйс
const openPopupPlace = () => {
  openPopup(popupPlace);
};
// Функция создания/сохранения новой карточки
const submitPopupPlace = (evt) => {
  evt.preventDefault();
  const card = { name: inputPlaceName.value, link: inputPlaceLink.value, alt: inputPlaceName.value };
  const newCard = addCard(card);
  cardsList.prepend(newCard);
  closePopup(popupPlace);
  evt.target.reset()
};
//Функция удаления карточки
function deleteCard(evt) {
  const cardRemove = evt.target.closest('.card');
  cardRemove.remove();
};
// Функция открытия большой картинки
function openPlaceImage(event) {
  photoPopupImage.src = event.target.src;
  photoPopupImage.alt = event.target.alt;
  titlePopupImage.textContent = event.target.alt;
  openPopup(popupImage);
};
// Функция добавления лайка
function toggleLike(evt) {
  evt.target.classList.toggle('card__like-button_active');
};

// Вызов функций попап профиль
profileEditButton.addEventListener('click', editProfile);
profileForm.addEventListener('submit', saveUserInfo);
// Вызов функций попап плэйс
addButton.addEventListener('click', openPopupPlace);
placeForm.addEventListener('submit', submitPopupPlace);


// ПР7 ---------------------------------------------------------------------

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


export {formValidationList, openPopup, initialCards, photoPopupImage};