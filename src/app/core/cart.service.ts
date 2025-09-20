import { Injectable } from "@angular/core";
import { Product } from "@shared/product.model";

@Injectable({providedIn: 'root'})
export class CartService{
    cart: Product[] = [];

    add(product: Product){
        this.cart.push(product)
    }
}