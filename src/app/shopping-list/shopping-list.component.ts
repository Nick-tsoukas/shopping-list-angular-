import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.html',
    styleUrls: ['./shopping-list.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('apple', 4),
        new Ingredient('carrort', 3)
    ];
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  

