import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingridient } from '../../../models/ingridient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  editMode = false;
  editNumberIndex: number;
  editedItem: Ingridient;
  @ViewChild('f') ngForm: NgForm;

  private startedEditingSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editNumberIndex = index;
        this.editedItem = this.shoppingListService.getIngridient(index);
        this.ngForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddOrUpdateItem(form: NgForm) : void {
    const value = form.value;
    const newIngridient = new Ingridient(value.name, value.amount);
    
    if (this.editMode) {
      this.shoppingListService.updateIngridient(this.editNumberIndex, newIngridient);
    }
    else {
      this.shoppingListService.addIngridient(newIngridient);
    }
    
    this.clear();
  }

  onClear() {
    this.clear();
  }

  clear() {
    this.editMode = false;
    this.editedItem = null;
    this.editNumberIndex = null;
    this.ngForm.reset();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngridient(this.editNumberIndex);
      this.clear();
    }
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }

}
