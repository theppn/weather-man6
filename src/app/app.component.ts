import {Component, OnInit} from '@angular/core';
import { App } from './models/app.model';
import { ApiService } from './services/api.service';
import { Tab } from './models/tab.model';
import {Element} from './models/element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent extends App implements OnInit{

  constructor(api: ApiService) {
    super();
  }

  ngOnInit() {
    this.api.getForecast(this.city, this.countryCode)
      .subscribe((data: Object) => {
        this.lastUpdated = Date.now();
        this.parseData(data);
      }, err => {
        console.log('getForecast error: ', err);
    };
  }

  private parseData(data: Object) {
    if (data.hasOwnProperty('list')) {
      const list = data['list'];
      // making sure we have 5d/3h data
      if (list.length === 40) {
        let tabs = Array<Tab>;
        let elements =  Array<Element>;
        for (let i = 0; i < list.length; i++) {
          const el = list[i];
          elements.push(new Element(el['dt'],
            el['weather']['icon'],
            el['weather']['description'],
            el['main']['temp'],
            el['main']['pressure'],
            el['main']['humidity'],
            el['wind']['speed']));
          if ((i % 7 === 0) && i !== 0) {

          }
        }
      } else {
        console.log('getForecast error: 40 entries expected for 5d/3h data, something is off');
      }
    }
  }
}
