import { Component, OnInit } from '@angular/core';
import { BookModel, BookServiceService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponentComponent implements OnInit {
  public myBook: BookModel;

  constructor(public myBookService: BookServiceService) {}

  ngOnInit() {
    this.myBook = this.myBookService.getAll();
  }

  onBuy(name: string) {
    console.log(this.myBook.name);
    console.log(name);
  }
}
