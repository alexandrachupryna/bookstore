import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../carts.model';

@Component({
  selector: 'app-cart-order-info',
  templateUrl: './cart-order-info.component.html',
  styleUrls: ['./cart-order-info.component.css']
})
export class CartOrderInfoComponent {
  cartPrice: number = 0;
  cartAmount: number = 0;
  deliveryMode: string = 'post';
  deliveryPrice: number = 0;
  totalPrice: number = 0;
  carts: Cart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.carts = this.cartService.getCarts();
    this.cartAmount = this.cartService.getBooksAmount();
    this.cartPrice = this.cartService.getBooksPrice();
    this.deliveryPrice = this.cartService.getDeliverySum(this.deliveryMode)
    this.totalPrice = this.cartService.getTotalSum()

    this.cartService.cartListChanged.subscribe(
      (carts: Cart[]) => {
        this.carts = carts;
        this.cartService.getBooksAmount()
        this.cartAmount = this.cartService.getBooksAmount();
        this.cartPrice = this.cartService.getBooksPrice();
      }
    );

    this.cartService.deliveryPriceChanged.subscribe(
      (price: number) => {
        this.deliveryPrice = price;
      }
    );

    this.cartService.totalPriceChanged.subscribe(
      (price: number) => {
        this.totalPrice = price;
      }
    );
  }
}
