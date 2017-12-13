import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { SinglerestComponent } from './singlerest/singlerest.component';


@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    SinglerestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
