import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageModule } from './pages/products.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => ProductsPageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
