import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabComponent} from './tab.component';
import {ElementComponent} from '../element/element.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabComponent, ElementComponent]
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
