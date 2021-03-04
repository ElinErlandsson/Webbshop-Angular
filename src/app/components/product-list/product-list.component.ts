import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from './../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  opacity = 0;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((productList) => (this.productList = productList));
  }

  /* Click event, adds product to cart and show a preview of the cart */
  addToCart(product) {
    this.cartService.addToCart(product);
    this.cartPreview();
  }

  /* Show the cart preview */
  cartPreview(){
    this.opacity = 1;

    setTimeout(() => {
      this.opacity = 0
    },3000)
  }

}
