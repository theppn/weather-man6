import {Element} from './element.model';
export class Tab {
  date: number;
  elements: Array<Element>;

  /**
   * @constructor
   * @param {number} d - date
   */
  constructor(d: number) {
    this.date = d;
    this.elements = [];
  }

  /**
   * adds elements value
   * @param {Array<Element>} el
   */
  addElements(el: Array<Element>) {
    this.elements = el;
  }

  /**
   * gets date
   * @returns {number}
   */
  getDate(): number {
    return this.date;
  }

  /**
   * gets elements
   * @returns {Array<Element>}
   */
  getElements(): Array<Element> {
    return this.elements;
  }
}
