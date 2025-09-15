import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdupointCatalogComponent } from './edupoint-catalog/edupoint-catalog.component';
import { CartComponent } from '@shared/cart/cart.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: 'edu-point', component: EdupointCatalogComponent, title: "Edu Point - Book Shop" },
  { path: 'edu-cart', component: CartComponent, title: "Edu Cart - Book Shop" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class EdupointRoutingModule { }
