let popup = document.querySelector('#profile');
let profileForm = document.querySelector('form[name="form-profile"]');
let editorButton = document.querySelector('#editProfile');
let closeButton = document.querySelector('.form__close');
let name = document.querySelector('.profile__info-name');
let occupation = document.querySelector('.profile__info-occupation');
let nameInput = document.querySelector('.form__input_name');
let occupationInput = document.querySelector('.form__input_occupation');

const elementTemplate = document.querySelector('#element-template').content;
const cardsElement = document.querySelector('.elements');

function closeForm() {
  popup.classList.add('form_hidden');
}

closeButton.addEventListener('click', closeForm);

function openForm() {
  popup.classList.remove('form_hidden');
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
}

editorButton.addEventListener('click', openForm);

function saveProfile(event) {
  event.preventDefault();  
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closeForm();
}

profileForm.addEventListener('submit', saveProfile);

let cart = document.querySelector('#cart');
let cartEdit = document.querySelector('#cartEdit');
let cartClose = document.querySelector('#cartClose');
let titleInput = document.querySelector('.form__input_title');
let linkInput = document.querySelector('.form__input_link');

function closeCart() {
  cart.classList.add('form_hidden');
}

cartClose.addEventListener('click', closeCart);

function openCart() {
  cart.classList.remove('form_hidden');
}

cartEdit.addEventListener('click', openCart);

let cardForm = document.querySelector('form[name="form-card"]');

cardForm.addEventListener('submit', saveCard);

function saveCard(event) {
  event.preventDefault();  
  const card = 
  { 
    name : titleInput.value,  
    link : linkInput.value
  };
  drawCard(card);
  cart.classList.add('form_hidden');
}

function like(event) {
  const index = event.target.parentElement.parentElement.getAttribute('data-index');
  if (event.target.classList.contains('element__button_active')){
    event.target.classList.remove('element__button_active')
  }
  else {
    event.target.classList.add('element__button_active')
  }
//  cards[index].like = true;
}

function deleteCard(event){
    event.target.parentElement.remove();
}

function drawCard(card) {
  cards.push(card);
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element').setAttribute("data-index", cards.indexOf(card));
  cardElement.querySelector('.element .element__image').src = card.link;
  cardElement.querySelector('.element .element__image').alt = card.name;
  cardElement.querySelector('.element__group .element__name').textContent = card.name;
  const likeButton = cardElement.querySelector('.element__button');
  likeButton.addEventListener('click', like);
  const deleteButton = cardElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteCard);
  const elementImage = cardElement.querySelector('.element__image')
  elementImage.addEventListener('click', openPopup)
  cardsElement.prepend(cardElement);  
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

const cards = [];
initialCards.forEach(c=>drawCard(c));

const popupImage = document.querySelector('#image')

function openPopup(event) {
  const image = document.querySelector('.popup__image');
  const text = document.querySelector('.popup__text')
  image.src = event.target.src;
  image.alt = event.target.alt;
  text.textContent = event.target.alt;
  popupImage.classList.remove('popup_hidden')
}

function closePopup() {
  popupImage.classList.add('popup_hidden')
}

const closePopupImage = document.querySelector('.popup__close')
closePopupImage.addEventListener('click', closePopup)