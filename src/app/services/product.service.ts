import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from './../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /* Get all objects from product array */
  getProducts(): Observable<Product[]>{
    return of(PRODUCTS);
    }

  /* Get every product id */
  getProduct(id: number): Observable<Product>{
    return of(PRODUCTS.find((product) => product.id == id));
  }
}
