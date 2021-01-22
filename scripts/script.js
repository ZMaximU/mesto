const profileElement = document.querySelector('#profile');
const profileForm = document.querySelector('form[name="popup-profile"]');
const editorButton = document.querySelector('#editProfile');
const closeButton = document.querySelector('.popup__close');
const name = document.querySelector('.profile__info-name');
const occupation = document.querySelector('.profile__info-occupation');
const nameInput = document.querySelector('.popup__input_name');
const occupationInput = document.querySelector('.popup__input_occupation');

const elementTemplate = document.querySelector('#element-template').content;
const cardsElement = document.querySelector('.elements');

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

const cardElement = document.querySelector('#cart');
const cardEdit = document.querySelector('#cartEdit');
const cardClose = document.querySelector('#cartClose');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

cardClose.addEventListener('click', () => closePopup(cardElement));

cardEdit.addEventListener('click', () => openPopup(cardElement));

const cardForm = document.querySelector('form[name="popup-card"]');

cardForm.addEventListener('submit', saveCard);

function saveCard(event) {
  event.preventDefault();
  const card =
  {
    name: titleInput.value,
    link: linkInput.value
  };
  cards.push(card);
  cardsElement.prepend(getCardElement(card));
  closePopup(cardElement);
}

function like(event) {
  event.target.classList.toggle('element__button_active');
}

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function getCardElement(card) {
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element .element__image').src = card.link;
  cardElement.querySelector('.element .element__image').alt = card.name;
  cardElement.querySelector('.element__group .element__name').textContent = card.name;
  const likeButton = cardElement.querySelector('.element__button');
  likeButton.addEventListener('click', like);
  const deleteButton = cardElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', deleteCard);
  const elementImage = cardElement.querySelector('.element__image');
  elementImage.addEventListener('click', openImagePopup);
  return cardElement;
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
initialCards.forEach(c => cardsElement.prepend(getCardElement(c)));

const popupImage = document.querySelector('#image');
const image = document.querySelector('.popup__image');
const text = document.querySelector('.popup__text');

function openImagePopup(event) {
  image.src = event.target.src;
  image.alt = event.target.alt;
  text.textContent = event.target.alt;
  openPopup(popupImage);
}

const closePopupImage = document.querySelector('#imageClose')
closePopupImage.addEventListener('click', () => closePopup(popupImage))