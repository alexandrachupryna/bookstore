import { Book, BookFormat } from './books/books.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: Book[], isBestseller:boolean, isNew: boolean, genre: string, format: string, amount: number): Book[] {

    if (isBestseller) {
      books = books.filter(book => book.isBestseller);
    }

    if (isNew) {
      books = books.filter(book => book.isNew);
    }

    if (genre !== 'All categories') {
      books = books.filter(book => book.category.includes(genre))
    }

    switch (format) {
      case 'Printed':
        books = books.filter(book => book.format.includes(BookFormat.Hardcover) || book.format.includes(BookFormat.Paperback))
        break;
      case 'Ebook':
        books = books.filter(book => book.format.includes(BookFormat.Ebook));
        break;
      case 'Audiobook':
        books = books.filter(book => book.format.includes(BookFormat.Audiobook));
    }

    books = books.slice(0, amount)

    return books;
  }

}
