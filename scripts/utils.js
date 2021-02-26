export function closePopup(popup) {
  popup.classList.add('popup_hidden');
  document.body.removeEventListener('keydown', escClose);
}

export function openPopup(popup) {
  popup.classList.remove('popup_hidden');
  document.body.addEventListener('keydown', escClose);
}

const esc = 27; //приравниваем элемент esc к коду ключа esc на клавиатуре

function escClose (evt) {
  if (evt.keyCode === esc) {
    const element = document.querySelector('.popup:not(.popup_hidden)');
    closePopup(element);
  }
};