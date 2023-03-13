import { CartService } from './../../cart/cart.service';
import { Book, BookFormat } from './../books.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;
  id!: number;
  selectedFormat!: BookFormat | undefined;
  selectedPrice!: number;
  bookAmount: number = 1;

  constructor(private bookService: BookService, private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.book = this.bookService.getBook(this.id);
    });

    this.selectedFormat = this.book?.format[0];

    if (this.book && this.selectedFormat) {
      this.selectedPrice = this.bookService.getPrice(this.book, this.selectedFormat)
    }
  }

  selectBookFormat(type: BookFormat) {
    this.selectedFormat = type;

    if (this.book) {
      this.selectedPrice = this.bookService.getPrice(this.book, type);
    }
  }

  onAdded() {
    if (this.book && this.selectedFormat) {
      this.cartService.addCartItem(this.book, this.selectedFormat, this.selectedPrice, this.bookAmount)
    }
  }
}
