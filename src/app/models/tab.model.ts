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
}
