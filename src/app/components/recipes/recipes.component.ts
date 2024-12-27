import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    standalone: false
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      new Recipe(
        'spaghetti',
        'echt slecht',
        'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
      ),
      new Recipe(
        'spaghetti',
        'echt slecht',
        'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
      ),
      new Recipe(
        'spaghetti',
        'echt slecht',
        'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
      ),
      new Recipe(
        'spaghetti',
        'echt slecht',
        'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
      ),
      new Recipe(
        'spaghetti',
        'echt slecht',
        'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
      ),
    ];
  }

  ngOnInit(): void {}
}
