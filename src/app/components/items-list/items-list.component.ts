import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { FakeProductsDBService } from '../../services/fakeProductsDBservice';
@Component({
  selector: 'app-items-list',
  imports: [ItemComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent {
  PRODUCTS: any;
  constructor(private fakeProductsDbService: FakeProductsDBService) {
    this.PRODUCTS = this.fakeProductsDbService.getAll();
  }
}
