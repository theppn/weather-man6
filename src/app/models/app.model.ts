import {Tab} from './tab.model';

export class App {
  lastUpdated: number;
  city: string;
  countryCode: string;
  tabs: Array<Tab>;
  refreshInterval: number;

  constructor() {
    this.lastUpdated = 0;
    this.city = '';
    this.countryCode = '';
    this.tabs = [];
    this.refreshInterval = 3600000;
  }
}
