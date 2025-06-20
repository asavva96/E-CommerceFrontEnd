import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FakeBasketDBService } from '../../services/fakeBasketDBservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: Item;
  constructor(
    public fakeBasketDBservice: FakeBasketDBService,
    private router: Router
  ) {}
  addToCard(item: Item) {
    this.fakeBasketDBservice.addToBasket(item);
  }
  updateProduct(item: Item) {
    localStorage.setItem('itemToUpdate', JSON.stringify(item));
    this.router.navigate(['/addproduct'], {
      queryParams: { update: true },
    });
  }
}
