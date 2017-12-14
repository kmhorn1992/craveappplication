import { Injectable } from '@angular/core';
import { IRestaurant, Restaurants} from './rest';


@Injectable()
export class RestService {
  restaurants: Array<IRestaurant> = Restaurants;

  getRestaurants():Promise<IRestaurant[]> {
    return Promise.resolve(this.restaurants);
  }
  
  getAllRestaurantsByType(type: string):Promise<IRestaurant> {
    return this.getRestaurants()
    .then((restaurants) => {
      return restaurants.find(restaurant => restaurant.type ===type);
    })
  }

  getRestaurant(id: number): Promise<IRestaurant> {
    return this.getRestaurants()
      .then((restaurants) => {
        return restaurants.find(restaurant => restaurant.id ===id);
      });
  }
}

