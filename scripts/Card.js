import {openPopup, closePopup} from './utils.js'

export default class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  }

  _like(event) {
    event.target.classList.toggle('element__button_active');
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  _openImagePopup(event) {
    const popupImage = document.querySelector('#image');
    const image = document.querySelector('.popup__image');
    const text = document.querySelector('.popup__text');
    image.src = event.target.src;
    image.alt = event.target.alt;
    text.textContent = event.target.alt;
    openPopup(popupImage);   
  }

  getCardElement() {
    const cardElement = document.querySelector(this._template).content.cloneNode(true);
    const image = cardElement.querySelector('.element .element__image');
    image.src = this._link;
    image.alt = this._name;
    cardElement.querySelector('.element__group .element__name').textContent = this._name;
    const likeButton = cardElement.querySelector('.element__button');
    likeButton.addEventListener('click', this._like);
    const deleteButton = cardElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', this._deleteCard);
    const elementImage = cardElement.querySelector('.element__image');
    elementImage.addEventListener('click', this._openImagePopup);
    return cardElement;
  }

}