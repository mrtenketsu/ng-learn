


import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingridient } from '../models/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipesService {
  
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.commitRecipesChanged();
  }

  getRecipes() : Recipe[] {
    return this.recipes;
  }

  getRecipe(index: number) : Recipe {
    return this.recipes[index];
  }

  getRecipesCount() : number {
    return this.recipes.length;
  }

  addIngridientsToShoppingList(ingridients: Ingridient[]) {
    this.shoppingListService.addIngridients(ingridients);
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.getNextRecipeId();
    this.recipes.push(recipe);
    this.commitRecipesChanged();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.commitRecipesChanged();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.commitRecipesChanged();
  }

  private getNextRecipeId() : number {
    let topId: number = -1;
    this.recipes.forEach(r => {
      if (r.id > topId)
        topId = r.id;
    });
    return topId + 1;
  }

  private commitRecipesChanged() {
    this.recipesChanged.next(this.recipes.slice());
  }

}