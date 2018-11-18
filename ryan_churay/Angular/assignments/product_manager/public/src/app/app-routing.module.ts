import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { EditComponent } from './products/edit/edit.component';
import { CreateComponent } from './products/create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
    {path: '', component: AllproductsComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'create', component: CreateComponent},
  ]},
  { path: '**', redirectTo: 'products' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
