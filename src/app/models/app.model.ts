import {Tab} from './tab.model';

export class App {
  lastUpdated: number;
  tabs: Array<Tab>;
  error: string;

  constructor() {
    this.lastUpdated = 0;
    this.tabs = [];
    this.error = '';
  }

  setTabs(t: Array<Tab>) {
    this.tabs = t;
  }
}
