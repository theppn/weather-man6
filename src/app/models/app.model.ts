import {Tab} from './tab.model';

export class App {
  city: string;
  countryCode: string;
  lastUpdated: number;
  tabs: Array<Tab>;
  error: string;

  /**
   * @constructor
   */
  constructor() {
    this.lastUpdated = 0;
    this.city = '';
    this.countryCode = '';
    this.tabs = [];
    this.error = '';
  }

  /**
   * sets tabs value
   * @param {Array<Tab>} t
   */
  setTabs(t: Array<Tab>) {
    this.tabs = t;
  }
}
