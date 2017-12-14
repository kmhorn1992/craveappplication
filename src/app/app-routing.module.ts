import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent} from './rest/rest.component';
import { SingrestComponent} from './singrest/singrest.component';
import { SavedComponent } from './saved/saved.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MexicanPageComponent } from './mexican-page/mexican-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: 'rest-page', component: RestComponent},
  
  { path: 'saved', component: SavedComponent },
  { path: 'search-page', component: SearchPageComponent},
  { path: 'mexican-page', component:MexicanPageComponent},
  {  path: 'single-page', component: SingrestComponent } 

 
  

];
@NgModule({
  imports: [ RouterModule.forRoot( routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}