import { Component, OnInit, Output } from "@angular/core";
import { IRestaurant, Restaurants } from '../rest/rest';
import { RestService } from '../rest/rest.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({  
selector: 'app-mexican-page',
  templateUrl: './mexican-page.component.html',
  styleUrls: ['./mexican-page.component.scss']
})
export class MexicanPageComponent implements OnInit {
 restaurants: Array<any>
 restaurant: IRestaurant[]
 

  constructor(
      private svc: RestService,
  ) { }
  getRestaurants(): void {
    this.svc.getRestaurants()
    .then((restaurants)  => {
      this.restaurants = restaurants.filter(r => r.type === 'Mexican');
  })
  }
  ngOnInit() {
    this.getRestaurants();
  }
}

