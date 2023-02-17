const container = document.querySelector('.container');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const saveButton = document.querySelector('.form-profile');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-icon');
const inputUsername = document.querySelector('.popup__input_value_name');
const inputAbout = document.querySelector('.popup__input_value_about');
const username = document.querySelector('.profile__title');
const about = document.querySelector('.profile__description');

// Функция появления формы (общая)
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
// Функция скрытия формы (общая)
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
// Функция закрытия попапов
closeButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Функция редактирования профиля
function editProfile() {
  inputUsername.value = username.textContent;
  inputAbout.value = about.textContent;
  openPopup(popupProfile);
};
// Функция срохранения изменений профиля
function saveUserInfo(evt) {
  evt.preventDefault();
  username.textContent = inputUsername.value;
  about.textContent = inputAbout.value;
  closePopup(popupProfile);
};
// Вызов функций попап профиль
editButton.addEventListener('click', editProfile);
saveButton.addEventListener('submit', saveUserInfo);

// ПР5
//Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cards = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card').content;

// Попап Плэйс
const popupPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup-image');
const addButton = document.querySelector('.profile__add-button');
const inputPlaceName = document.querySelector('.popup__input_place_name');
const inputPlaceLink = document.querySelector('.popup__input_place_link');
const buttonClosePlace = document.querySelector('.popup__close-icon_type_add-picture');
const createButton = document.querySelector('.form-place');
const photoPopupImage = document.querySelector('.popup__image-photo');
const titlePopupImage = document.querySelector('.popup__image-title');

// Функция открытия формы добавления плэйс
function openPopupPlace() {
  openPopup(popupPlace);

};
// Вызов функций попап плэйс
addButton.addEventListener('click', openPopupPlace);

// Открытие фотографии
function openPlaceImage(event) {
  photoPopupImage.src = event.target.src;
  photoPopupImage.alt = event.target.alt;
  titlePopupImage.textContent = event.target.alt;
  openPopup(popupImage);
};

// Функция добавления стандартных карточек
function addCard(item) {
  const userCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = userCard.querySelector('.card__image');
  const cardLikeButton = userCard.querySelector('.card__like-button');
  const cardDeleteButton = userCard.querySelector('.card__delete-button');

  userCard.querySelector('.card__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.setAttribute('alt', item.name);
  cardImage.addEventListener('click', openPlaceImage);
  cardDeleteButton.addEventListener('click', deleteCard);
  cardLikeButton.addEventListener('click', addLike);

  return userCard;
}

initialCards.forEach(item => {
  cardsList.append(addCard(item));
});

// Функция создания/сохранения новой карточки
function submitPopupPlace(evt) {
  evt.preventDefault();
  const card = { name: inputPlaceName.value, link: inputPlaceLink.value, alt: inputPlaceName.value };
  const newCard = addCard(card);
  cardsList.prepend(newCard);
  closePopup(popupPlace);
  evt.target.reset()
};

createButton.addEventListener('submit', submitPopupPlace);

//Функция удаления карточки
function deleteCard(evt) {
  const cardRemove = evt.target.closest('.card');
  cardRemove.remove();
};
// Функция добавления лайка
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_active');
};
