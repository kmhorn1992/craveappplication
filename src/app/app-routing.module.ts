import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent} from './rest/rest.component';
import { SingrestComponent} from './singrest/singrest.component';
import { SavedComponent } from './saved/saved.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MexicanPageComponent } from './mexican-page/mexican-page.component';
import { ChineseComponent } from './chinese/chinese.component';
import { ItalianComponent } from './italian/italian.component';
import { ChinesesingleComponent } from './chinesesingle/chinesesingle.component';
import { ItaliansingleComponent } from './italiansingle/italiansingle.component';
import { Component } from '@angular/core/src/metadata/directives';
import { MexsingleComponent } from './mexsingle/mexsingle.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: 'rest-page', component: RestComponent},
  { path: 'chinese-page', component: ChineseComponent},
  { path: 'italian-page', component: ItalianComponent},
  { path: 'saved', component: SavedComponent },
  { path: 'search-page', component: SearchPageComponent},
  { path: 'mexican-page', component:MexicanPageComponent},
  {  path: 'single-page', component: SingrestComponent },
  { path: 'chinese-single', component: ChinesesingleComponent} ,
  { path: ' italian-single', component: ItaliansingleComponent},
  { path: 'mex-single', component: MexsingleComponent}

 
  

];
@NgModule({
  imports: [ RouterModule.forRoot( routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}