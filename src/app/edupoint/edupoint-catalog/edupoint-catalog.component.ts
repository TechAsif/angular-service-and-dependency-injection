import { Component } from '@angular/core';
import { Product } from '@shared/product.model';
import { teachers } from './teachers';

@Component({
  selector: 'edupoint-catalog',
  standalone: false,
  templateUrl: './edupoint-catalog.component.html',
  styleUrls: ['./edupoint-catalog.component.css'],
  providers: []
})
export class EdupointCatalogComponent {
  teachers: Product[] = teachers;
  private cart: Product[] = [];

  constructor() { }

  addToCart(teacher: Product) {
    this.cart.push(teacher);
  }
}
