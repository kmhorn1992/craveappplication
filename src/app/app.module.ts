import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule, MatTabsModule, MatGridListModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import { SinglerestComponent } from './singlerest/singlerest.component';
import { SavedComponent } from './saved/saved.component';


@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    SinglerestComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
