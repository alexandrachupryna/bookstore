export class Book {

  constructor(
    public id: number,
    public name: string,
    public author: string,
    public decription: string,
    public imagePath: string,
    public price: {
      hardcover?: number,
      paperback?: number,
      ebook?: number,
      audiobook?: number
    },
    public category: string[],
    public publisher: string,
    public format: BookFormat[],
    public language: Language,
    public pagesAmount: number,
    public isBestseller: boolean,
    public isNew: boolean
  ) {}
}

export enum BookFormat {
  Hardcover = 'Hardcover',
  Paperback = 'Paperback',
  Ebook = 'Ebook',
  Audiobook = 'Audiobook'
}

export enum Language {
  English = 'English',
  German = 'German',
  French = 'French',
  Spanish = 'Spanish'
}
