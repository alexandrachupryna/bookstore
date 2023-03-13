import { Book} from './../books.model';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];
  isBestsellerFilter: boolean = false;
  isNewFilter: boolean = false;
  categoryFilter: string = 'All categories';
  formatFilter: string = 'All formats';
  bookCategoryList: string[] = ['All categories', 'Arts & Photography', 'Biographies & Memoirs', `Children's`, 'Computers & Technology', 'Contemporary', 'Cooking', 'Fiction', 'Health', 'Historical fiction', 'Law', 'Nonfiction', 'Personal development', 'Picture Books', 'Psychology', 'Romance', 'Self-help'];
  formatList: string[] = ['All formats', 'Printed', 'Ebook', 'Audiobook'];
  displayedBookAmount: number = 12;
  addedDisplayedBookAmount: number = 12;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  toggleBestsellerFilter() {
    this.isBestsellerFilter = !this.isBestsellerFilter;
  }

  toggleNewFilter() {
    this.isNewFilter = !this.isNewFilter;
  }

  filterBookCategories(selectedCategory: string) {
    this.categoryFilter = selectedCategory;
  }

  filterBookFormat(selectedFormant: string) {
    this.formatFilter = selectedFormant;
  }

  showMoreBooks() {
    this.displayedBookAmount = this.displayedBookAmount + this.addedDisplayedBookAmount;
  }
}
