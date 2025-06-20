import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class FakeBasketDBService {
  private basket: Item[] = [];
  constructor() {}
  get basketLength() {
    return this.basket.length;
  }
  getBasket() {
    return [...this.basket];
  }
  addToBasket(item: Item) {
    this.basket.push(item);
  }
  clearBasket() {
    this.basket = [];
  }
}
