import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selector, submitCallback)  {
    super(selector);
    this._form = this._element.querySelector('form');
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const inputs = this._element.querySelectorAll('.popup__input');
    const result = {};
    inputs.forEach(i => {
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
    this._element.querySelector('.popup__button').disabled = true;
  }
}