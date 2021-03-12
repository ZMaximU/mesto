import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super (selector);
    this._image = this._element.querySelector('.popup__image');
    this._text = this._element.querySelector('.popup__text');
  }

  open(event){    
    this._image.src = event.target.src;
    this._image.alt = event.target.alt;
    this._text.textContent = event.target.alt;
    super.open();
  }
}