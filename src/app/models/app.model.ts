import {Tab} from './tab.model';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

export class App {
  weatherForm: UntypedFormGroup;
  city: UntypedFormControl;
  countryCode: UntypedFormControl;
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
    this.city = new UntypedFormControl('', [Validators.required]);
    this.countryCode = new UntypedFormControl('fr', [Validators.required]);
    this.weatherForm = new UntypedFormGroup({
      'city': this.city,
      'countryCode': this.countryCode
    });
  }
}
