import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class FakeProductsDBService {
  private items: Item[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 25.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.5,
      brand: 'Logitech',
      image: '../assets/wirelessmouse.jpg',
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: 49.99,
      category: 'Footwear',
      inStock: false,
      rating: 4.2,
      brand: 'Nike',
      image: '../assets/runningshoes.jpg',
    },
    {
      id: 3,
      name: 'Coffee Maker',
      price: 79.95,
      category: 'Home Appliances',
      inStock: false,
      rating: 4.7,
      brand: 'Keurig',
      image: '../assets/coffeemachine.jpg',
    },
    {
      id: 4,
      name: 'Bluetooth Headphones',
      price: 89.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.6,
      brand: 'Sony',
      image: '../assets/wirelessheadphones.jpg',
    },
    {
      id: 5,
      name: 'Asus Vistabook',
      price: 600.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.4,
      brand: 'Asus',
      image: '../assets/asusvistabook.jpg',
    },
  ];
  constructor() {}
  getAll() {
    return [...this.items];
  }
  add(item: Item) {
    let id = this.items.length + 1;
    item.id = id;
    this.items.push(item);
  }
  delete(index: number) {
    if (index > -1 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}
