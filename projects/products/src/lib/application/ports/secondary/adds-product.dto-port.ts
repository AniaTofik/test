import { InjectionToken } from '@angular/core';
import { ProductDTO } from './product.dto';

export const ADDS_PRODUCT_DTO = new InjectionToken<AddsProductDtoPort>('ADDS_PRODUCT_DTO');

export interface AddsProductDtoPort {
  add(product: Partial<ProductDTO>): void;
}
