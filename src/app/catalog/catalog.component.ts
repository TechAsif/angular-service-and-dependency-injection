import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  private cart: Product[] = [];


  constructor() { 

  }
  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
