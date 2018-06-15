import {Element} from './element.model';
export class Tab {
  date: number;
  elements: Array<Element>;

  constructor(d: number) {
    this.date = d;
    this.elements = [];
  }

  addElements(el: Array<Element>) {
    this.elements = el;
  }

  getDate(): number {
    return this.date;
  }

  getElements(): Array<Element> {
    return this.elements;
  }
}
