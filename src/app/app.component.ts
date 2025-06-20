import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FakeBasketDBService } from './services/fakeBasketDBservice';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-Commerce';
  constructor(public fakeBasketDBservice: FakeBasketDBService) {}
}
