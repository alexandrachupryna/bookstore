import { AuthService } from './../../../popup-reg-auth/auth.service';
import { BookService } from './../../book.service';
import { Router } from '@angular/router';
import { BookFormat } from './../../books.model';
import { CartService } from './../../../cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../books.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;
  selectedFormat!: BookFormat;
  selectedPrice!: number;
  private userSub!: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private cartService: CartService,
    private bookService: BookService,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
    this.selectedFormat = this.book.format[0];
    this.selectedPrice = this.bookService.getPrice(this.book, this.selectedFormat);

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

  onAdded() {
    this.cartService.addCartItem(this.book, this.selectedFormat, this.selectedPrice, 1);
  }

  onBought() {
    this.onAdded();
    this.isAuthenticated ? this.router.navigate(["/carts"]) : this.cartService.togglePopup(true)
  }

  selectBookFormat(type: BookFormat) {
    this.selectedFormat = type;
    this.selectedPrice = this.bookService.getPrice(this.book, type);
  }
}
