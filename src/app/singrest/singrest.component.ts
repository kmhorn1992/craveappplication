import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { RestComponent } from '../rest/rest.component';
@Component({
  selector: 'app-singrest',
  templateUrl: './singrest.component.html',
  styleUrls: ['./singrest.component.scss']
})
export class SingrestComponent implements OnInit {
  rest$;

  constructor(
    private svc: RestService
  ) { }

  ngOnInit() {
    this.rest$ = this.svc.getRestaurant(16)
      .then((rest) => {
        return rest;
      }); 
  }

  
}
