import {Component, Input, OnInit} from '@angular/core';
import {Tab} from '../models/tab.model';
import { ElementComponent } from '../element/element.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  standalone: true,
  imports: [CommonModule, ElementComponent]
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
