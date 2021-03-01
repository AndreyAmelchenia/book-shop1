export enum Category {
  fantastic,
  novel,
  detective,
}

export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: keyof typeof Category;
  createDate: number;
  isAvailable: boolean;
}

export class BookServiceService {
  private myBook: BookModel = {
    name: 'Eragon',
    description: 'dragon',
    price: 2000,
    category: 'fantastic',
    createDate: 12125235,
    isAvailable: true,
  };

  getAll() {
    return this.myBook;
  }
}
