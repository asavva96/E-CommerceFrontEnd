import { Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'products', component: ItemsListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
