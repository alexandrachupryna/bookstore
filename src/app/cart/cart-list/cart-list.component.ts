import { CartService } from './../cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../carts.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  carts: Cart[] = [];
  @Input() isPopup!: boolean;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.carts = this.cartService.getCarts();
    this.cartService.cartListChanged.subscribe(
      (carts: Cart[]) => {
        this.carts = carts;
      }
    );
  }
}
