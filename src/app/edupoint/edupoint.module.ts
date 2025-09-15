import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EdupointRoutingModule } from './edupoint-routing.module';
import { EdupointCatalogComponent } from './edupoint-catalog/edupoint-catalog.component';

@NgModule({
  declarations: [EdupointCatalogComponent],
  imports: [SharedModule, EdupointRoutingModule],
  providers: [],
})
export class EdupointModule { }
