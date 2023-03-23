import {openPopup, popupImage} from "./index.js";

const photoPopupImageSrc = document.querySelector(".popup__image-photo");
const photoPopupImageAlt = document.querySelector(".popup__image-photo");
const titlePopupImage = document.querySelector(".popup__image-title");



class Card {
  constructor(link, name, templateSelector) {
    this._link = link;
    this._name = name;
    this._templateSelector = templateSelector;
    
  }

  _getTemplate() {
    const cardImage = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardImage;
  }

  generateCard() { 
    this._element = this._getTemplate(); 
    this._element.querySelector(".card__image").src = this._link; 
    this._element.querySelector(".card__image").alt = this._name; 
    this._element.querySelector(".card__title").textContent = this._name; 
    
    // Добавление лайка 
    this._likeButton = this._element.querySelector(".card__like-button"); 
    this._card = this._element; 
    
    this._setEventListeners(); 
    return this._element; 

  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._toggleLike();
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._trashCard();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", (event) => {
        this._openCard();
      });
  }

  _toggleLike() {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _openCard() {
    photoPopupImageSrc.src = this._link;
    photoPopupImageAlt.alt = this._name;
    titlePopupImage .textContent = this._name;
    openPopup(popupImage);
  }

  _trashCard() {
    this._card.remove();
    this._card = null;
  }
}

export {Card};