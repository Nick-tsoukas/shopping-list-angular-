import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes : Recipe[] = [
    new Recipe('Steak', 'Steak and Eggs with sea salt and butter', '../../assets/images/steak-compressor.jpg'),
    new Recipe('Soup', 'Carrot soup made with vegetable and chicken stock', '../../assets/images/soup.jpg'),
    new Recipe('Steak', 'Steak and Eggs with sea salt and butter', '../../assets/images/steak-compressor.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
