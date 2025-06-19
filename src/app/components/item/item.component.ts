import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: Item;
  addToCard(item: Item) {
    console.log(item);
  }
}
