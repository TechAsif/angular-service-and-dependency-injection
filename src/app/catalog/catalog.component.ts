import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductService } from './products.service';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  private productService : ProductService;
  // private cartService: CartService;


  constructor(private cartService : CartService) { 
    this.productService = new ProductService();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
