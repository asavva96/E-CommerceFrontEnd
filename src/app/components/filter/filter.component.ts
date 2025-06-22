import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  showFilters = false;
  showFiltersToggle() {
    this.showFilters = !this.showFilters;
  }
}
