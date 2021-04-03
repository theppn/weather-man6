import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TabComponent} from './tab/tab.component';
import {ApiService} from './services/api.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ElementComponent} from './element/element.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TabComponent,
        ElementComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        ApiService
      ]
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather-man6');
  }));
});
