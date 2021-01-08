let Form = document.querySelector('form');
let editorButton = document.querySelector('.profile__info-button');
let closeButton = document.querySelector('.form__close');
let saveButton = document.querySelector('.form__button');
let Name = document.querySelector('.profile__info-name');
let Occupation = document.querySelector('.profile__info-occupation');

function closeForm(evt) {
  Form.classList.add('form_hidden');  
  evt.preventDefault();
}

closeButton.addEventListener('click', closeForm);

function openForm() {
  Form.classList.remove('form_hidden');
}

editorButton.addEventListener('click', openForm);

function saveForm(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.form__name');
  let occupationInput = document.querySelector('.form__occupation');
  Name.textContent = nameInput.value;
  Occupation.textContent = occupationInput.value;
}

saveButton.addEventListener('click', saveForm);