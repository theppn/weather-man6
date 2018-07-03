import {Tab} from './tab.model';
import {FormControl, FormGroup} from '@angular/forms';

export class App {
  weatherForm: FormGroup;
  city: FormControl;
  countryCode: FormControl;
  lastUpdated: number;
  tabs: Array<Tab>;
  error: string;

  /**
   * @constructor
   */
  constructor() {
    this.lastUpdated = 0;
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
