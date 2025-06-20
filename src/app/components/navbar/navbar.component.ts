import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FakeUsersDBService } from '../../services/fakeUsersDBservice';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { BasketComponent } from '../../basket/basket.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class NavbarComponent {
  isMenuOpen = false;
  @Input() itemsInCard: number = 0;
  constructor(public dialog: MatDialog) {}
  ROUTES = [
    // { path: 'home', name: 'Home' },
    { path: 'products', name: 'Products' },
    { path: 'addproduct', name: 'Add Product' },
  ];
  showBasket() {
    const dialogRef = this.dialog.open(BasketComponent, {
      width: '50vh',
      height: '50vh',
    });
    dialogRef.afterClosed().subscribe();
  }
}
