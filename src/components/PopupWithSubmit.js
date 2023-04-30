import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor(popup, { functionWithSubmit }) {
    super(popup);
    this._functionWithSubmit = functionWithSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }

  open(id, card) {
    //card получаем из open в handleDeleteClick (index.js)
    super.open();
    this._card = card;
    this._id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._functionWithSubmit(this._id, this._card);
    });
  }
}