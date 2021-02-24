import Card from './Card.js'
import FormValidator from './FormValidator.js'

const profileElement = document.querySelector('#profile'); //попап с профилем
const profileForm = document.querySelector('form[name="popup-profile"]'); //Формы модальных окон
const editorButton = document.querySelector('#editProfile'); //кнопка открывающая попап с профилем
const closeButton = document.querySelector('.popup__close'); //кнопка закрывающая попап с профилем
const name = document.querySelector('.profile__info-name'); //имя профиля (текущее)
const occupation = document.querySelector('.profile__info-occupation'); //род деятельности профиля (текущий)
const nameInput = document.querySelector('.popup__input_name'); //имя профиля (новое)
const occupationInput = document.querySelector('.popup__input_occupation'); //род деятельности профиля (новый)

const cardsElement = document.querySelector('.elements'); //секция с карточками

function closePopup(popup) {
  popup.classList.add('popup_hidden');
}

closeButton.addEventListener('click', () => closePopup(profileElement));

function openPopup(popup) {
  popup.classList.remove('popup_hidden');
}

function openProfile() {
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
  profileFormValidator.enableValidation();
  openPopup(profileElement);
}

editorButton.addEventListener('click', () => openProfile());

function saveProfile(event) {
  event.preventDefault();
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closePopup(profileElement);
}

profileForm.addEventListener('submit', saveProfile);

const cardElement = document.querySelector('#cart'); //попап с новым местом
const cardEdit = document.querySelector('#cartEdit'); //кнопка открывающая попап с новым местом
const cardClose = document.querySelector('#cartClose'); //кнопка закрывающая попап с новым местом
const titleInput = document.querySelector('.popup__input_title'); //название нового места
const linkInput = document.querySelector('.popup__input_link'); //ссылка на изображение нового места
const cardForm = document.querySelector('form[name="popup-card"]'); //форма нового места

cardClose.addEventListener('click', () => closePopup(cardElement));

cardEdit.addEventListener('click', () => {openPopup(cardElement); cardFormValidator.enableValidation()});

cardForm.addEventListener('submit', saveCard);

function saveCard(event) {
  event.preventDefault();
  const card = new Card(titleInput.value, linkInput.value, '#element-template');
  cardsElement.prepend(card.getCardElement());
  closePopup(cardElement);
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

initialCards.forEach(c => {
  const card = new Card(c.name, c.link, '#element-template')
  cardsElement.prepend(card.getCardElement())
});

document.querySelectorAll('.popup').forEach(element => element.addEventListener('click', (evt) => {
  if (evt.target === element) {
    closePopup(element);
  }
 }));

document.body.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    const element = document.querySelector('.popup:not(.popup_hidden)');
    if(element) {
      closePopup(element);
    }
  }
});

const popupImage = document.querySelector('#image');
const closePopupImage = document.querySelector('#imageClose')
closePopupImage.addEventListener('click', () => closePopup(popupImage))

const [profileFormValidator, cardFormValidator] = [profileForm, cardForm].map(form => new FormValidator(  
  {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }, form));