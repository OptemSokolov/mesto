import {openPopup, initialCards, photoPopupImage} from "./index.js";

class Card {
  constructor(link, name, templateSelector) {
    this._link = link;
    this._name = name;
    this._templateSelector = templateSelector;

  }
}

export {Card};