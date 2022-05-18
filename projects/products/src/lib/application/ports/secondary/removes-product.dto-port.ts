import { InjectionToken } from '@angular/core';

export const REMOVES_PRODUCT_DTO = new InjectionToken<RemovesProductDtoPort>('REMOVES_PRODUCT_DTO');

export interface RemovesProductDtoPort {
  remove(id: string): void;
}
