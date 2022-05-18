import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsPage } from './products.page';
import { ProductsComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/products.component-module';
import { FirebaseProductServiceModule } from '../../../projects/products/src/lib/adapters/secondary/infrastructure/firebase-product.service-module';
import { ProductListComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/product-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ProductsPage,
        }
      ]),
  ProductsComponentModule,
  FirebaseProductServiceModule,
  ProductListComponentModule
],
  	declarations: [ProductsPage],
  	providers: [],
  	exports: [] })
export class ProductsPageModule {
}
