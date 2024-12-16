import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'products', component: Product },
  { path: 'add-product', component: AddProductComponent },
  { path: '**', component: NotFoundComponent }, // Path not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
