import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestFidesioComponent } from './test-fidesio/test-fidesio.component';
import {ApiGlobalService} from './api-global.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestFidesioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
