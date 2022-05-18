import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [ProductsComponent],
  	providers: [],
  	exports: [ProductsComponent] })
export class ProductsComponentModule {
}
