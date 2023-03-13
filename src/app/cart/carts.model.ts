import { Book, BookFormat } from './../books/books.model';

export class Cart {
  constructor(
    public book: Book,
    public format: BookFormat,
    public price: number,
    public amount: number
  ) {}
}
