import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from "app/services/recipes.service";
import { Recipe } from "app/models/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }

  onAddIngridient() {
    (<FormArray>this.recipeForm.get('ingridients')).push(
      this.buildIngridientFormGroup(null, null)
    );
  }

  private buildIngridientFormGroup(name: string, amount: number) : FormGroup {
    return new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe['ingridients'])
      {
        for(let ingridient of recipe.ingridients) {
          recipeIngridients.push(
            this.buildIngridientFormGroup(ingridient.name, ingridient.amount)
          );
        }
      }

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingridients': recipeIngridients
    });

  }

  onSubmit() {
    // const recipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingridients']);

    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value)
      this.router.navigate(['/recipes', this.id]);
    }
    else {
      this.recipesService.addRecipe(this.recipeForm.value);
      this.router.navigate(['/recipes', this.recipesService.getRecipesCount() - 1])
    }

  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngridient(index: number) {
    (<FormArray>this.recipeForm.get('ingridients')).removeAt(index);
  }

}
