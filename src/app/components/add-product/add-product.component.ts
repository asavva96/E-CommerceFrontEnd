import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item';
import { FakeProductsDBService } from '../../services/fakeProductsDBservice';
@Component({
  selector: 'app-add-product',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fakeProductsDbService: FakeProductsDBService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      inStock: [true, Validators.required],
      rating: [0],
      brand: ['', Validators.required],
    });
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.controls['name'].value);
    var itemToInsert: Item = {
      id: 0,
      name: this.formGroup.controls['name'].value,
      price: this.formGroup.controls['price'].value,
      category: this.formGroup.controls['category'].value,
      inStock: this.formGroup.controls['inStock'].value,
      brand: this.formGroup.controls['brand'].value,
      image: '',
    };
    this.fakeProductsDbService.add(itemToInsert);
  }
}
