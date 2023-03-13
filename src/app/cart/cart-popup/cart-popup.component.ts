import { AuthService } from '../../popup-reg-auth/auth.service';
import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent implements OnInit {
  isPopupOpen: boolean = false;
  cartPrice: number = 0;

  constructor(private cartService: CartService, private authService: AuthService) {}

  ngOnInit() {
    this.cartPrice = this.cartService.getBooksPrice();

    this.cartService.popupToggled.subscribe(
      (mode: boolean) => {
        this.isPopupOpen = mode;
      }
    )

    this.cartService.cartListChanged.subscribe(
      () => {
        this.cartPrice = this.cartService.getBooksPrice();
      }
    );
  }

  closePopup() {
    this.isPopupOpen = false;
    this.cartService.togglePopup(false)
  }

  onContinue() {
    this.closePopup()
    this.authService.togglePopup(true);
  }
}
