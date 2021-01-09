let form = document.querySelector('form');
let editorButton = document.querySelector('.profile__info-button');
let closeButton = document.querySelector('.form__close');
let saveButton = document.querySelector('.form__button');
let name = document.querySelector('.profile__info-name');
let occupation = document.querySelector('.profile__info-occupation');
let nameInput = document.querySelector('.form__input_name');
let occupationInput = document.querySelector('.form__input_occupation');

function closeForm(evt) {
  form.classList.add('form_hidden');  
  evt.preventDefault();
}

closeButton.addEventListener('click', closeForm);

function openForm() {
  form.classList.remove('form_hidden');
  nameInput.value = name.textContent;
  occupationInput.value = occupation.textContent;
}

editorButton.addEventListener('click', openForm);

function saveForm(evt) {
  evt.preventDefault();  
  name.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
}

saveButton.addEventListener('click', saveForm);