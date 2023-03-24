import {openPopup, popupImage} from "./index.js";

const photoPopupImageSrc = document.querySelector(".popup__image-photo");
const photoPopupImageAlt = document.querySelector(".popup__image-photo");
const titlePopupImage = document.querySelector(".popup__image-title");

// Добавить handleCardClick из ревью ПР7

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
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button"); 
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._card = this._element; 

    this._cardImage.src = this._link; 
    this._cardImage.alt = this._name; 
    this._cardTitle.textContent = this._name; 
       
    this._setEventListeners(); 
    return this._element; 

  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
        this._toggleLike();
      });
    this._deleteButton.addEventListener("click", () => {
        this._trashCard();
      });
    this._cardImage.addEventListener("click", (event) => {
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