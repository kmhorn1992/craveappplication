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

  constructor() { }

  ngOnInit() {
  }

}
