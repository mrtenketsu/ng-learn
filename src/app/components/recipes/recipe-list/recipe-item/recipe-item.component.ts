

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipesService } from '../../../../services/recipes.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: 'recipe-item.component.html',
    styles: [ "recipe-item.component.css" ]
})
export class RecipeItemComponent {
    
    @Input() recipe: Recipe;
    @Input() index: number;

    constructor() { }

}



