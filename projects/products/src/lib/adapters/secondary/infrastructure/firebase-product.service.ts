import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsProductDtoPort } from '../../../application/ports/secondary/adds-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { RemovesProductDtoPort } from '../../../application/ports/secondary/removes-product.dto-port';

@Injectable()
export class FirebaseProductService
  implements AddsProductDtoPort, GetsAllProductDtoPort, RemovesProductDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(product: Partial<ProductDTO>): void {
    this._client.collection('products').add(product);
  }

  getAll(criterion: Partial<ProductDTO>): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('products')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: ProductDTO[]) => filterByCriterion(data, criterion)));
  }

  remove(id: string): void {
    this._client.doc('products/'+id).delete();
  }
}
