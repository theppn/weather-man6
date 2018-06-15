import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {App} from './models/app.model';
import {ApiService} from './services/api.service';
import {Tab} from './models/tab.model';
import {Element} from './models/element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent extends App implements OnInit {
  @ViewChild('city') cityInput: ElementRef;
  @ViewChild('countryCode') countryCodeInput: ElementRef;

  constructor(protected api: ApiService) {
    super();
  }

  ngOnInit() {
    this.lastUpdated = null;
  }

  putParis() {
    this.cityInput.nativeElement.value = 'Paris';
    this.countryCodeInput.nativeElement.value = 'fr';
  }

  onSubmit(city, cc) {
    this.error = '';
    if (city !== '' && cc !== '') {
      this.api.getForecast(city, cc)
        .subscribe((data: Object) => {
          this.lastUpdated = Date.now();
          this.parseData(data);
        }, err => {
          this.error = 'Erreur de requête';
          console.log('getForecast error: ', err);
        });
    } else {
      this.error = 'Entrées invalides';
      console.log('getForecast error: invalid values');
    }
  }

  private parseData(data: Object) {
    if (data.hasOwnProperty('list')) {
      let list = data['list'];
      // making sure we have 5d/3h data
      if (list.length === 40) {
        const tabs: Array<Tab> = [];
        const step = 24 * 3600 * 1000;
        let elements: Array<Element> = [];

        // sorting by date just in case
        list = list.sort((a, b) => {
          return a['dt'] - b['dt'];
        });

        let currentDay = new Date(list[0]['dt'] * 1000).setHours(0, 0, 0, 0);
        let currentTab = new Tab(currentDay);

        for (let i = 0; i < list.length; i++) {
          const el = list[i];
          // on next day, push elements to tab, push current tab to tabs and create new tab
          // careful, dt is in s, ms is required
          if (el['dt'] * 1000 > (currentDay + step)) {
            currentTab.addElements(elements);
            tabs.push(currentTab);
            elements = [];
            currentDay = currentDay + step;
            currentTab = new Tab(currentDay);
          }
          elements.push(new Element(el['dt'] * 1000,
            el['weather'][0]['icon'],
            el['weather'][0]['description'],
            el['main']['temp'],
            el['main']['pressure'],
            el['main']['humidity'],
            el['wind']['speed'])
          );
          // on last element, push everything remaining
          if (i === (list.length - 1)) {
            currentTab.addElements(elements);
            tabs.push(currentTab);
          }
        }
        this.setTabs(tabs);
      } else {
        this.error = 'Données invalides';
        console.log('getForecast error: 40 entries expected for 5d/3h data, something is off');
      }
    }
  }
}
