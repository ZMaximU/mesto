export default class Card {
  constructor(name, link, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(template);    
    this._handleCardClick = handleCardClick;
  }

  _like(event) {
    event.target.classList.toggle('element__button_active');
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  renderer() {
    const cardElement = this._template.content.cloneNode(true);
    const image = cardElement.querySelector('.element__image');
    image.src = this._link;
    image.alt = this._name;
    cardElement.querySelector('.element__group .element__name').textContent = this._name;
    const likeButton = cardElement.querySelector('.element__button');
    likeButton.addEventListener('click', this._like);
    const deleteButton = cardElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', this._deleteCard);
    image.addEventListener('click', this._handleCardClick);
    return cardElement;
  }

}