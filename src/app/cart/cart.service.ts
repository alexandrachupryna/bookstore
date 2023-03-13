import { BookFormat } from './../books/books.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../books/books.model';
import { Cart } from './carts.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartListChanged = new EventEmitter<Cart[]>();
  deliveryPriceChanged = new EventEmitter<number>();
  totalPriceChanged = new EventEmitter<number>();
  private carts: Cart[] = [];
  private deliveryMode: string = 'post';
  private deliveryPrice: number = 10;
  private totalPrice: number = 0;
  private isPopupOpen: boolean = false;
  popupToggled = new EventEmitter<boolean>();

  constructor() { }

  getCarts() {
    return this.carts.slice();
  }

  addCartItem(book: Book, format: BookFormat, price: number, amount: number) {
    const newCart = new Cart(book, format, price, 1)

    const relevantCart = this.carts.find(cartItem => cartItem.book === book && cartItem.format === format)

    if (relevantCart) {
      relevantCart.amount = relevantCart.amount + amount;
    } else {
      this.carts.push(newCart);
    }

    this.cartListChanged.emit(this.carts.slice())
  }

  addCardItemAmount(cart: Cart) {
    let targetCart = this.carts.find(cartItem => cartItem === cart)
    if (targetCart) targetCart.amount++;
    this.totalPrice = this.getTotalSum()
    this.cartListChanged.emit(this.carts.slice())
    this.totalPriceChanged.emit(this.totalPrice)
  }

  reduceCartItemAmount(cart: Cart) {
    let targetCart = this.carts.find(cartItem => cartItem === cart)
    if (targetCart && targetCart.amount > 1) {
      targetCart.amount--;
    }
    this.totalPrice = this.getTotalSum()
    this.cartListChanged.emit(this.carts.slice())
    this.totalPriceChanged.emit(this.totalPrice)
  }

  deleteCartItem(cart: Cart) {
    this.carts = this.carts.filter(cartItem => cartItem !== cart);
    this.totalPrice = this.getTotalSum()
    this.cartListChanged.emit(this.carts.slice())
    this.totalPriceChanged.emit(this.totalPrice)
  }

  getBooksAmount() {
    return this.carts.reduce((accumulator, curValue) => accumulator + curValue.amount, 0)
  }

  getBooksPrice() {
    return this.carts.reduce((accumulator, curValue) => accumulator + (curValue.price * curValue.amount), 0)
  }

  getDeliverySum(deliveryMode:string) {
    return deliveryMode === 'post' ? 10 : 20;
  }

  changeDeliveryMode(deliveryMode:string) {
    this.deliveryMode = deliveryMode;
    this.deliveryPrice = this.getDeliverySum(this.deliveryMode)
    this.totalPrice = this.getTotalSum()
    this.deliveryPriceChanged.emit(this.deliveryPrice)
    this.totalPriceChanged.emit(this.totalPrice)
  }

  getTotalSum():number {
    return this.getBooksPrice() + this.getDeliverySum(this.deliveryMode)
  }

  togglePopup(mode: boolean) {
    this.isPopupOpen = mode;
    this.popupToggled.emit(this.isPopupOpen);
  }
}
