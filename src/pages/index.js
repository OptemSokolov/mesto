import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";


// // const popupProfile = document.querySelector('.popup-profile');
// const inputUsername = document.querySelector('#username');
// const inputAbout = document.querySelector('#about');
// const username = document.querySelector('.profile__title');
// const about = document.querySelector('.profile__description');
// const popupPlace = document.querySelector('.popup-place');
// // const popupImage = document.querySelector('.popup-image');
// const inputPlaceName = document.querySelector('#place-name');
// const inputPlaceLink = document.querySelector('#place-link');
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

// Функция создания новой карточки
function createCard(item) {
  const card = new Card({data: item, handleCardClick}, "#card");
  return card.generateCard();
};

// Рендер карточки и добавление на страницу
function renderCard(item) {
  const card = createCard(item);
  cardsList.addItem(card);
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

//создаем экземпляр класса, передаем в него селекторы html разметки
const newUserInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

//создаем экземпляр класса
const popupProfile = new PopupWithForm(".popup-profile", {
  callbackSubmitForm: (inputValues) => {
    //callbackSubmitForm передает значения инпутов в метод setUserInfo класса UserInfo
    newUserInfo.setUserInfo(inputValues);
  },
});

popupProfile.setEventListeners();

//слушатель на кнопку редактирования данных профиля
profileEditButton.addEventListener("click", () => {
  //перед открытием попапа передаем данные из разметки в инпуты, открываем попап
  //при клике методом getUserInfo() получаем объект и значение этого объекта ставим в инпуты, затем открываем попап
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


export {formValidationList};


// -------------------------------------------------------------------

// // Функция появления формы (общая)
// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');
//   popup.addEventListener("mousedown", closePopupOverlay);
//   document.addEventListener("keydown", (closePopupEscape));
// };
// // Функция скрытия формы (общая)
// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');
//   popup.removeEventListener("mousedown", closePopupOverlay);
//   document.removeEventListener("keydown", (closePopupEscape));
// };
// // Функция закрытия попапов нажатием на крестик
// const closeButtons = document.querySelectorAll('.popup__close-icon');
// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });
// // Функция закрытия попапа по клику на ескейп
// const closePopupEscape = (evt) => {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// };
// // Функция закрытия попапа по клику на оверлей
// const closePopupOverlay = (event) => {
//   if (event.target === event.currentTarget) {
//     closePopup(event.currentTarget);
//   }
// };

// // Функция срохранения изменений профиля
// const saveUserInfo = (evt) => {
//   evt.preventDefault();
//   username.textContent = inputUsername.value;
//   about.textContent = inputAbout.value;
//   closePopup(popupProfile);
// };

// // Функция редактирования профиля
// const editProfile = () => {
//   inputUsername.value = username.textContent;
//   inputAbout.value = about.textContent;
//   openPopup(popupProfile);
// };

// // Функция открытия формы добавления плэйс
// const openPopupPlace = () => {
//   openPopup(popupPlace);
// };

// // Функция сохранения новой карточки
// const submitPopupPlace = (evt) => {
//   evt.preventDefault();
//   const newCard = {
//     name: inputPlaceName.value,
//     link: inputPlaceLink.value,
//   };
//   renderCard(newCard);
//   closePopup(popupPlace);
//   evt.target.reset();
// };

// // Вызов функций попап профиль
// profileEditButton.addEventListener('click', editProfile);
// profileForm.addEventListener('submit', saveUserInfo);
// // Вызов функций попап плэйс
// addButton.addEventListener('click', openPopupPlace);
// placeForm.addEventListener('submit', submitPopupPlace);