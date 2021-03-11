import '../pages/index.css';

import Card from './Card.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import Section from './Section.js';

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


function createCard({name, link}) {
  const card = new Card(name, link, '#element-template', imagePopup.open.bind(imagePopup))
  return card.renderer();
}

const imagePopup = new PopupWithImage('#image');

const section = new Section({items: initialCards, renderer: createCard }, '.elements');
section.render();

const cardEdit = document.querySelector('#cartEdit'); //кнопка открывающая попап с новым местом
cardEdit.addEventListener('click', () => cardPopup.open());

const cardPopup = new PopupWithForm('#cart', (data) => section.addItem(createCard({name: data.title, link: data.link})));

const profilePopup = new PopupWithForm('#profile', ({name, occupation}) => userInfo.setUserInfo({name, occupation}));
const userInfo = new UserInfo('.profile__info-name', '.profile__info-occupation');

const editorButton = document.querySelector('#editProfile'); //кнопка открывающая попап с профилем
const nameInput = document.querySelector('.popup__input_name'); //имя профиля (новое)
const occupationInput = document.querySelector('.popup__input_occupation'); //род деятельности профиля (новый)

function openProfile() {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  occupationInput.value = data.occupation;
  profilePopup.open();
}

editorButton.addEventListener('click', () => openProfile());

profilePopup.setEventListeners();
cardPopup.setEventListeners();
imagePopup.setEventListeners();

const cardForm = document.querySelector('form[name="popup-card"]'); //форма нового места
const profileForm = document.querySelector('form[name="popup-profile"]'); //форма попапа с профилем
const [profileFormValidator, cardFormValidator] = [profileForm, cardForm].map(form => new FormValidator(  
  {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }, form));

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();