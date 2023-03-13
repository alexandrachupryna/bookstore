import { Book } from './../../../books/books.model';
import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../carts.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart!: Cart;
  amountCart: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAddCart() {
    this.cartService.addCardItemAmount(this.cart)
  }

  onReduceCart() {
    this.cartService.reduceCartItemAmount(this.cart)
  }

  onRemove() {
    this.cartService.deleteCartItem(this.cart)
  }
}
