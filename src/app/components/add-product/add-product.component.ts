import { AfterViewInit, Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
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
export class AddProductComponent implements OnInit, AfterViewInit {
  formGroup!: FormGroup;
  productAdded: boolean = false;
  isUpdatingItem: boolean = false;
  updateItem: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private fakeProductsDbService: FakeProductsDBService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isUpdatingItem = params['update'] === 'true';
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      inStock: [true, Validators.required],
      rating: [],
      brand: ['', Validators.required],
      image: [''],
    });
  }
  ngAfterViewInit() {
    if (this.isUpdatingItem) {
      this.updateItem = JSON.parse(
        localStorage.getItem('itemToUpdate')!.toString()
      );
      this.formGroup.controls['id'].setValue(this.updateItem.id);
      this.formGroup.controls['name'].setValue(this.updateItem.name.toString());
      this.formGroup.controls['price'].setValue(this.updateItem.price);
      this.formGroup.controls['category'].setValue(
        this.updateItem.category.toString()
      );
      this.formGroup.controls['inStock'].setValue(
        this.updateItem.inStock.toString() == 'true'
      );
      this.formGroup.controls['brand'].setValue(
        this.updateItem.brand.toString()
      );
      this.formGroup.controls['image'].setValue(
        this.updateItem.image.toString()
      );
    }
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
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 5000);
    this.formGroup.reset();
  }
  updateProductInDB() {
    this.fakeProductsDbService.updateProduct(
      this.formGroup.controls['id'].value,
      this.formGroup.getRawValue()
    );
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 5000);
  }
  toggleProductAdded() {
    this.productAdded = false;
  }
}
