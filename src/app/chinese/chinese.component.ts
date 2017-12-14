import { Component, OnInit, Output } from "@angular/core";
import { IRestaurant, Restaurants } from '../rest/rest';
import { RestService } from '../rest/rest.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent implements OnInit {
  restaurants: Array<any>
  restaurant: IRestaurant[]
  
 
   constructor(
       private svc: RestService,
   ) { }
   getRestaurants(): void {
     this.svc.getRestaurants()
     .then((restaurants)  => {
       this.restaurants = restaurants.filter(r => r.type === 'Chinese');
   })
   }
   ngOnInit() {
     this.getRestaurants();
   }
 }


