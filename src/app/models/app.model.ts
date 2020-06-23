import {Tab} from './tab.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    this.lastUpdated = null;
    this.city = new FormControl('', [Validators.required]);
    this.countryCode = new FormControl('fr', [Validators.required]);
    this.weatherForm = new FormGroup({
      'city': this.city,
      'countryCode': this.countryCode
    });
  }
}
