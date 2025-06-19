import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items-list',
  imports: [ItemComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent {
  PRODUCTS = [
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
      inStock: true,
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
      image: '../assets/runningshoes.jpg',
    },
    {
      id: 5,
      name: 'Asus Vistabook',
      price: 600.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.4,
      brand: 'Manduka',
      image: '../../assets/wirelessmouse.jpg',
    },
  ];
}
