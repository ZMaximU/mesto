export default class FormValidator {
  constructor(
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    }, form) {

    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(inputSelector));
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._button = this._form.querySelector(submitButtonSelector);    
  }

  enableValidation() {
    this._inputs.forEach(formInput => {
      const formError = this._form.querySelector(`.${formInput.id}-error`);
      formInput.addEventListener('input', (evt) => {
        evt.preventDefault();
        this._isValid(formInput, formError);
        this._toggleButtonState();
      });
    });
  }

  _showInputError(formInput, formError) {
    formInput.classList.add(this._inputErrorClass);
    formError.textContent = formInput.validationMessage;
    formError.classList.add(this._errorClass);
  };

  _hideInputError(formInput, formError) {
    formInput.classList.remove(this._inputErrorClass);
    formError.classList.remove(this._errorClass);
    formError.textContent = '';
  };

  _isValid(formInput, formError) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formError);
    } else {
      this._hideInputError(formInput, formError);
    }
  };

  _hasInvalidInput() {
    return this._inputs.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    this._button.disabled = this._hasInvalidInput(); //эта строчка изменяет атрибут disabled
    if (this._button.disabled) {
      this._button.classList.add(this._inactiveButtonClass);
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
    }
  };

  _validateForm() {
    this._form.querySelectorAll('.popup__input').forEach(formInput => {
      const formError = this._form.querySelector(`.${formInput.id}-error`);
      this._isValid(formInput, formError);
    });
  }
}