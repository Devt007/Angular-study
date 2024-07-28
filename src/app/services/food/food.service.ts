import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return[
      '/assets/images/FOOD/food-1.jpg.webp',
      '/assets/images/FOOD/food-2.jpg.webp',
      '/assets/images/FOOD/food-3.jpg.webp',
      '/assets/images/FOOD/food-4.jpg.webp',
      '/assets/images/FOOD/food-5.jpg.webp',
    ]
  }
}
