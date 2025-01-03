import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
    standalone: false
})
export class RecipeCardComponent implements OnInit {
  @Input('recipe') recipe: Recipe | undefined;

  constructor() {}

  ngOnInit(): void {}
}
