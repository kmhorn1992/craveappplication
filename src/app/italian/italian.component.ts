import { Component, OnInit, Output } from "@angular/core";
import { IRestaurant, Restaurants } from '../rest/rest';
import { RestService } from '../rest/rest.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrls: ['./italian.component.scss']
})
export class ItalianComponent implements OnInit {
  restaurants: Array<any>
  restaurant: IRestaurant[]
  
 
   constructor(
       private svc: RestService,
   ) { }
   getRestaurants(): void {
     this.svc.getRestaurants()
     .then((restaurants)  => {
       this.restaurants = restaurants.filter(r => r.type === 'Italian');
   })
   }
   ngOnInit() {
     this.getRestaurants();
   }
 }


