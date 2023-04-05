export class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._link, this._name)
      });
  
  }

  _toggleLike() {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _trashCard() {
    this._card.remove();
    this._card = null;
  }
}