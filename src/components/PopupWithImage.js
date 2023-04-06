import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImageSrc = this._popup.querySelector(".popup__image-photo");
    this._popupImageName = this._popup.querySelector(".popup__image-title");
  }

  openImagePopup(link, name) {
    super.open();
    this._popupImageSrc.src = link;
    this._popupImageName.alt = name;
    this._popupImageName.textContent = name;
  }
}