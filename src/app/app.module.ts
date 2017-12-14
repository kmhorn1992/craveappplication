import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule, MatTabsModule, MatGridListModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';

import { SavedComponent } from './saved/saved.component';
import { RestService } from './rest/rest.service';
import { SearchPageComponent } from './search-page/search-page.component';
import { MexicanPageComponent } from './mexican-page/mexican-page.component';
import { SingrestComponent } from './singrest/singrest.component';
import { ChineseComponent } from './chinese/chinese.component';
import { ItalianComponent } from './italian/italian.component';
import { MexsingleComponent } from './mexsingle/mexsingle.component';
import { ChinesesingleComponent } from './chinesesingle/chinesesingle.component';
import { ItaliansingleComponent } from './italiansingle/italiansingle.component';
import { SearchtermComponent } from './searchterm/searchterm.component';




@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    
    SavedComponent,
    SearchPageComponent,
    MexicanPageComponent,
    SingrestComponent,
    ChineseComponent,
    ItalianComponent,
    MexsingleComponent,
    ChinesesingleComponent,
    ItaliansingleComponent,
    SearchtermComponent,
    
    
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
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
