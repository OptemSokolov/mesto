export class Card {
  constructor(
    { data, handleCardClick, handleLikeClick, handleDeleteClick }, 
    templateSelector, profileId
    ) {
    this._link = data.link;
    this._name = data.name;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._profileId = profileId;
    this._likesOnCard = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._popupImageSrc = document.querySelector(".popup__image-photo");
    this._popupImageAlt = document.querySelector(".popup__image-photo");
    this._popupImageName = document.querySelector(".popup__image-title");
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
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._card = this._element; 
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeCaption = this._element.querySelector(".card__like-sum"); 
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this.setLikesCount(this._likesOnCard);
    
    this._likeStatus();

    this.deleteTrashButton();
    
    return this._element; 
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this._cardId);
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._cardId);
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
  }

  addLike() {
    this._likeButton.classList.add('card__like-button_active');
  }

  deleteLike() {
    this._likeButton.classList.remove('card__like-button_active');
  }

  setLikesCount(data) {
    this.likeArray = data;
    this._likeCaption.textContent = data.length;
  }

  isCardLiked() {
    return this.likeArray.some(
      (item) =>
        item._id === this._profileId
    );
  }

  _likeStatus() {
    if (this.isCardLiked()) {
      this.addLike();
    } else {
      this.deleteLike();
    }
  }

  trashCard() {
    this._card.remove();
    this._card = null;
  }

  deleteTrashButton() {
    if (this._profileId !== this._userId) {
      this._deleteButton.remove();
    }
  }
}