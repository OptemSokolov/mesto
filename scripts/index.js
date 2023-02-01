let container = document.querySelector('.container');
let popup = document.querySelector('.popup');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const likeButton = container.querySelector('.card__like-button');
const closeButton = popup.querySelector('.popup__close-icon');
const saveButton = popup.querySelector('.popup__container');
let inputUsername = popup.querySelector('.popup__input_value_name');
let inputAbout = popup.querySelector('.popup__input_value_about');
let username = container.querySelector('.profile__title');
let about = container.querySelector('.profile__description');

function editProfile() {
  inputUsername.value = username.textContent;
  inputAbout.value = about.textContent;
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function saveUserInfo(evt) {
  evt.preventDefault();
  username.textContent = inputUsername.value;
  about.textContent = inputAbout.value;
  closePopup();
};

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('submit', saveUserInfo);