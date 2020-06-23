import {Component, Input} from '@angular/core';
import {Element} from '../models/element.model';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.less']
})
export class ElementComponent {
  @Input() data: Element;
  readonly iconUrl = environment.iconUrl;
  readonly iconFormat = environment.iconFormat;
}
