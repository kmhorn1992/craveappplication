import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent} from './rest/rest.component';
import { SinglerestComponent } from './singlerest/singlerest.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  { path: '', redirectTo: '/rest-page', pathMatch: 'full' },
  { path: 'rest-page', component: RestComponent},
  { path: 'single-page', component: SinglerestComponent},
  { path: 'saved', component: SavedComponent }
 
  

];
@NgModule({
  imports: [ RouterModule.forRoot( routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}