import { Component, OnInit, Output } from "@angular/core";
import { IRestaurant, Restaurants } from './rest'
import { RestService } from './rest.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  restaurants: IRestaurant[];
  
      constructor( 
          private svc: RestService )
          {}  
          
          getRestaurants(): void {
          this.svc.getRestaurants()
              .then(restaurants => this.restaurants = restaurants
              )};
  
  
      ngOnInit(): void {
          this.getRestaurants();
      }
  }
