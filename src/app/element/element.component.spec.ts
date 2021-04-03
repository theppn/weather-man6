import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {Element} from '../models/element.model';
import {ElementComponent} from './element.component';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ElementComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
