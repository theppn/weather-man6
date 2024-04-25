import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {TabComponent} from './tab.component';
import {ElementComponent} from '../element/element.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TabComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
  });

  it('hidden as default', () => {
    expect(component.show).toBeFalsy();
  });

  it('show', () => {
    component.onClick();
    expect(component.show).toBeTruthy();
  });
});
