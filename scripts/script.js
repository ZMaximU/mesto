let popup = document.querySelector('.form');
let form = document.querySelector('form');
let editorButton = document.querySelector('.profile__info-button');
let closeButton = document.querySelector('.form__close');
let name = document.querySelector('.profile__info-name');
let occupation = document.querySelector('.profile__info-occupation');
let nameInput = document.querySelector('.form__input_name');
let occupationInput = document.querySelector('.form__input_occupation');

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

function saveForm(evt) {
  evt.preventDefault();  
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closeForm();
}

form.addEventListener('submit', saveForm);