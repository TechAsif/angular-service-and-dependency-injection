import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductsService } from './products.service';

@Component({
  selector: 'catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  private cart: Product[] = [];
  private productService: ProductsService;

  constructor() { 
    this.productService = new ProductsService();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
