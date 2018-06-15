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

  /**
   * @constructor
   */
  constructor() {
    this.show = false;
  }

  /**
   * hooks on init
   */
  ngOnInit() {}

  /**
   * shows/hides tab content on click
   */
  onClick() {
    this.show = !this.show;
  }
}
