import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '@catalog/products.service';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Product[] = [];
  searchTerm: string = '';
  cart: Product[] = [];
  private productService : ProductService;

  constructor(private cartService : CartService) { 
    this.productService = new ProductService();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product)
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
