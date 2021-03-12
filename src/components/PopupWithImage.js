import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super (selector)
  }

  open(event){
    const image = document.querySelector('.popup__image');
    const text = document.querySelector('.popup__text');
    image.src = event.target.src;
    image.alt = event.target.alt;
    text.textContent = event.target.alt;
    super.open();
  }
}