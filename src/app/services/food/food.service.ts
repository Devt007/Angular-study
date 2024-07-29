import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
     
      {
        id:1,
        name:'Noddles',
        cookTime:'12-20',
        price:20,
        favorite:false,
        origins:['germany'],
        stars:4.8,
        imageUrl:'/assets/images/FOOD/food-2.jpg.webp',
        tags:['SlowFood' , 'Lunch'],
     },
     {
      id:2,
      name:'Pizza',
      cookTime:'20-30',
      price:40,
      favorite:false,
      origins:['china','middle east'],
      stars:4.9,
      imageUrl:'/assets/images/FOOD/food-3.jpg.webp',
      tags:['SlowFood' , 'Lunch'],
    },
    {
    id:3,
    name:'French Fries',
    cookTime:'10-20',
    price:50,
    favorite:false,
    origins:['persia','french'],
    stars:4.6,
    imageUrl:'/assets/images/FOOD/food-4.jpg.webp',
    tags:['SlowFood' , 'Lunch'],
    },
    {
    id:4,
    name:'Manchurian',
    cookTime:'15-25',
    price:90,
    favorite:false,
    origins:['Indian'],
    stars:4.3,
    imageUrl:'/assets/images/FOOD/food-5.jpg.webp',
    tags:['SlowFood' , 'Lunch'],
    },
   {
    id:5,
    name:'Soup',
    cookTime:'10-15',
    price:80,
    favorite:false,
    origins:['france'],
    stars:4.6,
    imageUrl:'/assets/images/FOOD/food-6.jpg.webp',
    tags:['SlowFood' , 'Lunch'],
    },
  
    ]
  }
}
