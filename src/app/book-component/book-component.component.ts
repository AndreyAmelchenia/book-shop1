import { Component } from '@angular/core';
import { BookModel, BookServiceService } from './book-service.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent {
  public myBook: BookModel;

  constructor(BookService: BookServiceService) {
    this.myBook = BookService.getAll();
  }

  onBuy(name) {
    console.log(this.myBook.name);
    console.log(name);
  }
}
