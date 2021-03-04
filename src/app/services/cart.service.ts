import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []

  constructor() { }

  /* Add the product to the cart (the emty items array) and if it already exists, then it will just increment the qty  */
  addToCart(product){
    const existing = this.items.find(({id}) => product.id === id);
    if (existing) {
      existing.qty +=1;
      return;
    }
    this.items.push({...product, qty: 1});
  }

  /* Gets all the product that was added to the cart */
  getItems() {
    return this.items
  }

  /* Delete a product in the cart */
  deleteItem(i){
    this.items.splice(i,1);
  }

  /* Increment and decrement the qty of the products */
  incrementQty(item){
    item.qty++
  }

  decrementQty(item){
    if(item.qty -1 < 1){
      item.qty = 1;
    }
    else{
      item.qty -= 1;
    }
  }

}
