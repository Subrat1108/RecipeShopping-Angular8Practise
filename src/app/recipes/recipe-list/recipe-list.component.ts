import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [new Recipe('Test name', 'Test Decription to test', 'https://www.cubesnjuliennes.com/wp-content/uploads/2019/03/Best-Shahi-Tukda-Recipes.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
