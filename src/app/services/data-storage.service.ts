



import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { RecipesService } from "app/services/recipes.service";
import { Recipe } from "app/models/recipe.model";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class DataStorageService {

    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    private readonly recipesResource = 'https://ng-recipe-book-13242.firebaseio.com/recipes.json';

    constructor(private http: Http,
                private recipesService: RecipesService,
                private authService: AuthService) { }

    storeData() {
        this.http.put(this.recipesResource + `?auth=${ this.authService.getToken() }`, this.recipesService.getRecipes(), { headers: this.headers }).subscribe(
            response => { },
            error => console.log(error)
        )
    }

    fetchData() {
        //  + `?auth=${ this.authService.getToken() }`
        this.http.get(this.recipesResource, { headers: this.headers }).subscribe(
            response => {
                const recipes = response.json() as Recipe[];
                recipes.forEach(recipe => {
                    if (!recipe['ingridients'])
                        recipe['ingridients'] = [];
                });
                
                this.recipesService.setRecipes(recipes);
            },
            error => console.log(error)
        )
    }

}