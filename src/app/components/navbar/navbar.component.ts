import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FakeUsersDBService } from '../../services/fakeUsersDBservice';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;

  ROUTES = [
    // { path: 'home', name: 'Home' },
    { path: 'products', name: 'Products' },
    { path: 'addproduct', name: 'Add Product' },
  ];
}
