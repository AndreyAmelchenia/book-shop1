import { Component, OnInit } from '@angular/core';
import { BookModel, BookServiceService } from './book-service.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
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
