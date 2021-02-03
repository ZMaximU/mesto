function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(form =>{
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);
    inputs.forEach(formInput => {
      const formError = form.querySelector(`.${formInput.id}-error`);
      formInput.addEventListener('input', () => {
          isValid(formInput, formError, {inputErrorClass, errorClass});
          toggleButtonState(inputs, button, inactiveButtonClass);
        });
    });
  });
}

function showInputError(formInput, formError, {inputErrorClass, errorClass}) {
  formInput.classList.add(inputErrorClass);
  formError.textContent = formInput.validationMessage;
  formError.classList.add(errorClass);
};

function hideInputError(formInput, formError, {inputErrorClass, errorClass}) {
  formInput.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
  formError.textContent = '';
};

function isValid(formInput, formError, {inputErrorClass, errorClass}) {
  if (!formInput.validity.valid) {
    showInputError(formInput, formError, {inputErrorClass, errorClass});
  } else {
    hideInputError(formInput, formError, {inputErrorClass, errorClass});
  }
};

const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid); 

const toggleButtonState = (inputList, popupButton, inactiveButtonClass) => {
  popupButton.disabled = hasInvalidInput(inputList);
  if (popupButton.disabled){
    popupButton.classList.add(inactiveButtonClass);
  } else {
    popupButton.classList.remove(inactiveButtonClass);
  }
};

const forms = [profileForm, cardForm];

enableValidation({
  formSelector: '.popup',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

function validateForm(form){
  form.querySelectorAll('.popup__input').forEach(formInput => {
    const formError = form.querySelector(`.${formInput.id}-error`);
    isValid(formInput, formError, {inputErrorClass: 'popup__input_type_error', errorClass: 'popup__input-error_active'}); 
  });
}