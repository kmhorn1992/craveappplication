import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest/rest.service';

@Component({
  selector: 'app-searchterm',
  templateUrl: './searchterm.component.html',
  styleUrls: ['./searchterm.component.scss']
})
export class SearchtermComponent implements OnInit {
  dishes$: any;

  constructor(
    private svc: RestService
  ) { }

  ngOnInit() {
    this.dishes$ = this.svc.getChickenDishes()
      .then((dishes) => {
        return dishes;
      });
  }

}
