import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent} from './rest/rest.component';

import { SavedComponent } from './saved/saved.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/rest-page', pathMatch: 'full' },
  { path: 'rest-page', component: RestComponent},
  
  { path: 'saved', component: SavedComponent },
  { path: 'search-page', component: SearchPageComponent},
 
  

];
@NgModule({
  imports: [ RouterModule.forRoot( routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}