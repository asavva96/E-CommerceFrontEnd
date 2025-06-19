import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  { path: 'products', component: ItemsListComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
