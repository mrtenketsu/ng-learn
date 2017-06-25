import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Ingridient } from '../../models/ingridient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingridients: Ingridient[] = [];
  ingridientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients();
    this.ingridientsSubscription = this.shoppingListService.ingridientsChanged.subscribe(
      (ingridients: Ingridient[]) => this.ingridients = ingridients
    );
  }

  ngOnDestroy() {
    if (this.ingridientsSubscription != null)
      this.ingridientsSubscription.unsubscribe();
  }

  onItemEdit(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
