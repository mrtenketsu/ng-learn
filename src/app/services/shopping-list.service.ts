


import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Ingridient } from '../models/ingridient.model';

@Injectable()
export class ShoppingListService {
  
  ingridientsChanged = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();

  private ingridients: Ingridient[] = [];

  getIngridient(index: number) : Ingridient {
    return this.ingridients[index];
  }

  getIngridients() : Ingridient[] {
    return this.ingridients.slice();
  }

  updateIngridient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient;
    this.commitIngridientsChanged();
  }

  addIngridientByNameAndAmount(name: string, amount: number) {
    const ingridient = new Ingridient(name, amount);
    this.addIngridient(ingridient);
  }

  addIngridient(newIngridient: Ingridient) {
    this.ingridients.push(newIngridient);
    this.commitIngridientsChanged();
  }

  addIngridients(ingridients: Ingridient[]) : void {
    this.ingridients.push(...ingridients);
    this.commitIngridientsChanged();  
  }

  deleteIngridient(index: number) {
    this.ingridients.splice(index, 1);
    this.commitIngridientsChanged();
  }

  private commitIngridientsChanged() {
    this.ingridientsChanged.next(this.ingridients.slice());
  }

}
