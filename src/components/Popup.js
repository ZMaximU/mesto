const esc = 27; //приравниваем элемент esc к коду ключа esc на клавиатуре

export class Popup {
  constructor (selector) {
    this._element = document.querySelector(selector);
    this._submitButton = this._element.querySelector('.popup__close');
    this._escCloseCallback = this._handleEscClose.bind(this);
    this._closeByCloseButton = this.close.bind(this);
    this._closeByClickOutsideForm = (event) => { 
      if( event.target == this._element){ 
        this.close();
      }
    };    
  }

  open() {
    document.body.addEventListener('keydown', this._escCloseCallback);
    this._element.classList.remove('popup_hidden');
  }

  close() {
    document.body.removeEventListener('keydown', this._escCloseCallback);
    this._element.classList.add('popup_hidden');
  }

  _handleEscClose(evt) {
    if (evt.keyCode === esc) {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('click', this._closeByClickOutsideForm);
    this._submitButton.addEventListener('click', this._closeByCloseButton);
  }
}