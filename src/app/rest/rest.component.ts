import { Component, OnInit, Output } from "@angular/core";
import { IRestaurant, Restaurants } from './rest'
import { RestService } from './rest.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  restaurants: Array<any>;
  restaurant: IRestaurant;
  
      constructor( 
          private svc: RestService,
          private dialog: MatDialogModule
        )
          {}  
          
          getRestaurants(): void {
          this.svc.getRestaurants()
              .then(restaurants => this.restaurants = restaurants
              )};
  
  
      ngOnInit(): void {
          this.getRestaurants();
      }
  }
  