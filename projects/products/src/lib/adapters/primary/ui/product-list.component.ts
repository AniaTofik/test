import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import { GETS_ALL_PRODUCT_DTO, GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { REMOVES_PRODUCT_DTO, RemovesProductDtoPort } from '../../../application/ports/secondary/removes-product.dto-port';

@Component({ selector: 'lib-product-list', templateUrl: './product-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ProductListComponent {
  productList$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(@Inject(GETS_ALL_PRODUCT_DTO) private _getsAllProductDto: GetsAllProductDtoPort, @Inject(REMOVES_PRODUCT_DTO) private _removesProductDto: RemovesProductDtoPort) {
  }

  onRemoveProductClicked(id : string): void {
    this._removesProductDto.remove(id);
  }
}
