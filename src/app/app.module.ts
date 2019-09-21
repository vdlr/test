import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirthdaylistComponent } from './birthdaylist/birthdaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
