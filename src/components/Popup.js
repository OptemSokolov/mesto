export class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._escClose = this._handleEscClose.bind(this);
    this._closeByClickOnOverlay = this._closePopupOverlay.bind(this);
  }

  open () {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._escClose);
  }

  close () {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._escClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closePopupOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__close-icon")
      .addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", this._closeByClickOnOverlay);
  }
}