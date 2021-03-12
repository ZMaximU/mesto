import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selector, submitCallback)  {
    super(selector);
    this._form = this._element.querySelector('form');
    this._submitCallback = submitCallback;
    this._inputs = this._element.querySelectorAll('.popup__input');
    this._submitButton = this._element.querySelector('.popup__button');
  }

  _getInputValues() {
    const result = {};
    this._inputs.forEach(i => {
      result[i.name] = i.value;
    });
    return result;
  }

  setEventListeners()
  {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => { 
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  close() {    
    super.close();
    this._form.reset();
    this._submitButton.disabled = true;
  }
}