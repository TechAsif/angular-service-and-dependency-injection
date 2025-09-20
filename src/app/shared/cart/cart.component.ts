import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'shop-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private cart: Product[] = [];
 

  constructor(private cartService : CartService) { 
  
  }

  ngOnInit() { }

  get cartItems() {
    return this.cartService.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: Product) {
    this.cart.filter(p => p.id !== product.id);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/books/' + product.imageName;
  }
}
