import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { PDetailsComponent } from './components/p-details/p-details.component';
const routes: Routes = [
  {path:"",redirectTo:"products", pathMatch:"full"},
  {path:"products", component:ProductComponent},
  {path:"cart", component:CartComponent},
  {path:"pd", component:PDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
