import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  items;

  constructor( private cartService: CartService) {
    this.items = this.cartService.getItems();
   }

  ngOnInit(): void {
  }

  /* Useing a reduce method on items that multiplay the current price with the current qty nad store it. To get the total price. */
  calcTotalPrice(){
    return this.items.reduce((acc, curr) => acc+= curr.price * curr.qty, 0);
  }
}
