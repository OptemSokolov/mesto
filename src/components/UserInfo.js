export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.profileNameSelector); //'.profile__title'
    this._description = document.querySelector(data.descriptionSelector); //'profile__description'
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      description: this._description.textContent,
    };

    return userInfo;
  }

  setUserInfo(inputValues) {
    this._profileName.textContent = inputValues.name;
    this._description.textContent = inputValues.description;
  }
}