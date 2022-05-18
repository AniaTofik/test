import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_PRODUCT_DTO, AddsProductDtoPort } from '../../../application/ports/secondary/adds-product.dto-port';

@Component({ selector: 'lib-products', templateUrl: './products.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ProductsComponent {
  readonly productForm: FormGroup = new FormGroup({name: new FormControl(), price: new FormControl()});

  constructor(@Inject(ADDS_PRODUCT_DTO) private _addsProductDto: AddsProductDtoPort) {
  }

  onProductFormSubmited(productForm: FormGroup): void {
    this._addsProductDto.add({
      name: productForm.get('name')?.value,
      price: productForm.get('price')?.value,
    });
  }
}
