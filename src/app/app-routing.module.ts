import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '@shared/cart/cart.component';
import { CatalogComponent } from '@catalog/catalog.component';
import { SearchComponent } from '@catalog/search/search.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Shop" },
  { path: 'search', component: SearchComponent, title: "Search - Shop" },
  { path: 'cart', component: CartComponent, title: "Cart - Shop" },
  { path: 'hire', loadChildren: () => import('./edupoint/edupoint.module').then(m => m.EdupointModule) },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
