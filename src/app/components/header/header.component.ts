import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  items;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  calcTotal() {
    return this.items.reduce((acc, curr) => acc+= curr.qty , 0);

  }
}
