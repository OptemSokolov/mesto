export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  // Отрисовка всеъ элементов
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // Принимает DOM элемент и добавляет в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}