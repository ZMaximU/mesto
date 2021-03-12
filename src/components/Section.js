export default class Section {
  constructor({items, renderer}, selector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(selector);
  }

  render() {
    this.items.forEach(element => this.addItem(this.renderer(element)));
  }

  addItem(element) {
    this.container.prepend(element);    
  }
}