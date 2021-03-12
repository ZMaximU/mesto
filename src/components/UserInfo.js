export default class UserInfo {
  constructor(name, occupation) {
    this._nameElement = document.querySelector(name);
    this._occupationElement = document.querySelector(occupation);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent       
    }
  }

  setUserInfo({name, occupation}) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = occupation;
  }
}