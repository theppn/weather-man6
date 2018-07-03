import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { TabComponent } from './tab/tab.component';
import { ElementComponent } from './element/element.component';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {FormsModule} from '@angular/forms';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
