import { CartService } from 'src/app/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product;

  opacity = 0;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartServices: CartService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe((product) => (this.product = product));
  }

  /* Click event, adds product to cart and show a preview of the cart */
  addToCart(product) {
    this.cartServices.addToCart(product);
    this.cartPreview()
  }

  /* Show the cart preview */
  cartPreview(){
    this.opacity = 1;

    setTimeout(() => {
      this.opacity = 0
    },3000)
  }

}
