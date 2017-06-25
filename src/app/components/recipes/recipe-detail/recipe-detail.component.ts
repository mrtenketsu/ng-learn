import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../../models/recipe.model';
import { RecipesService } from '../../../services/recipes.service';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    );
  }

  toShoppingListClicked() {
    this.recipesService.addIngridientsToShoppingList(this.recipe.ingridients);
  }

  onDeleteRecipe() {

    if (this.authService.isAuthenticated()) {
      this.recipesService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
    else {
      this.router.navigate(['/signin']);
    }
    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
