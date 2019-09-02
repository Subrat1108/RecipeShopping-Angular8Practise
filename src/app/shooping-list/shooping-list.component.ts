import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Potato', 5),
  new Ingredient('Tomato', 10)
];
  constructor() { }

  ngOnInit() {
  }

}