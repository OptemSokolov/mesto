// Объект с константами из форм
const formValidationList = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__input_type_error",
};

// Функция запуска валидации
function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((item) => {
    item.addEventListener("input", () => {
      toggleButton(item, config);
    });
    addInputListeners(item, config);
    toggleButton(item, config);
    item.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButton(item, config);
      }, 0);
    });
  });
}

// функция валидности данных инпутов
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = "";
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

// Функция переключения состояния кнопки
function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

// Функция добавления слушателей на импуты
function addInputListeners(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  inputList.forEach(function (item) {
    item.addEventListener("input", (event) => {
      handleFormInput(event, config);
    });
  });
};

// Вызов функции включения валидации
enableValidation(formValidationList);