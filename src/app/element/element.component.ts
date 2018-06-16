import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../models/element.model';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.less']
})
export class ElementComponent implements OnInit {
  @Input() data: Element;
  iconUrl: string;
  iconFormat: string;

  /**
   * retrieves icon url and format from environment
   */
  constructor() {
    this.iconUrl = environment.iconUrl;
    this.iconFormat = environment.iconFormat;

  }

  ngOnInit() {
  }

}
