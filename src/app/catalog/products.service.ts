import { Product } from "@shared/product.model";
import { productsArray } from "./products-data";

export class ProductService {
    getProducts() : Product[] {
        return productsArray;
    }
}