export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._addInputListeners();
    this._toggleButton();
  }

  resetValidation() {
    this._toggleButton();
  }

  // Показать сообщение об ошибке
  _showInputError(item) {
    this._inputId = item.id;
    this._errorElement = this._form.querySelector(`#${this._inputId}-error`);
    item.classList.add(this._config.errorClass);
    this._errorElement.textContent = item.validationMessage;
  }

   //Скрыть сообщение об ошибке
  _hideInputError(item) {
    this._inputId = item.id;
    this._errorElement = this._form.querySelector(`#${this._inputId}-error`);
    item.classList.remove(this._config.errorClass);
    this._errorElement.textContent = "";
  }

    // функция валидности данных инпутов
  _handleFormInput(item) {
    if (item.validity.valid) {
      this._hideInputError(item);
    } else {
      this._showInputError(item);
    }
  }

     // Функция переключения состояния кнопки
  _toggleButton() {
    const isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !isFormValid; 
    this._buttonSubmit.classList.toggle(
      this._config.inactiveButtonClass,
      !isFormValid
    );
  }

   // Слушатели
   _addInputListeners() {
    this._form.querySelectorAll(this._config.inputSelector).forEach((item) => {
      item.addEventListener("input", () => {
        this._handleFormInput(item);
        this._toggleButton();
      });
    });
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });
  }
}