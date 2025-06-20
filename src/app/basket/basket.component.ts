import { Component, OnInit } from '@angular/core';
import { FakeBasketDBService } from '../services/fakeBasketDBservice';
import { Item } from '../models/item';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  imports: [MatIconModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent implements OnInit {
  totalPrice = 0;
  basketItems: Item[] = [];
  constructor(public fakeBasketDBservice: FakeBasketDBService) {}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.totalPrice = 0;
    this.basketItems = this.fakeBasketDBservice.getBasket();
    this.basketItems.forEach((product: Item) => {
      this.totalPrice += product.price;
    });
    // Round to 2 decimal places
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }
  proceedToCheckOut() {
    this.fakeBasketDBservice.clearBasket();
    this.loadData();
  }
}
