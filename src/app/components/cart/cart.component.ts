import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  /* Animation, slides out when you delete a product */
  animations: [
    trigger('fadeOut', [
      transition('* => void', [
        animate('500ms ease-out', style({transform:'translateX(-1000px)'}))
      ])
    ])
  ]
})

export class CartComponent implements OnInit {

  items;

  constructor(private cartService: CartService) {
    /* Gets all the products that was put in the cart */
    this.items = this.cartService.getItems();
   }

  ngOnInit() {

  }

  /* Useing a reduce method on items that multiplay the current price with the current qty nad store it. To get the total price. */
  calcTotalPrice(){
    return this.items.reduce((acc, curr) => acc+= curr.price * curr.qty, 0);
  }

  /* Gets the delete funtion */
  deleteItem(i){
    this.cartService.deleteItem(i);
  }

  /* Gets the qty function */
  incrementQty(item){
    this.cartService.incrementQty(item);
  }

  decrementQty(item){
    this.cartService.decrementQty(item);
  }

}
