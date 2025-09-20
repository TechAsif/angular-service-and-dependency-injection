import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';

@Component({
  selector: 'catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = productsArray;
  private cart: Product[] = [];


  constructor() { 

  }
  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
