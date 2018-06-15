import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Tab} from '../models/tab.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
  @Input() data: Tab;
  show: boolean;
  constructor() {
    this.show = false;
  }
  ngOnInit() {}

  onClick() {
    this.show = !this.show;
    console.log('TEST ', this.show);
  }
}
