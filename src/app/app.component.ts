import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-shop';

  tiles: Tile[] = [
    { text: 'Header', cols: 6, rows: 1, color: 'lightred' },
    { text: 'menu', cols: 1, rows: 5, color: 'lightgreen' },
    { text: 'main', cols: 5, rows: 4, color: 'lightblue' },
    { text: 'footer', cols: 5, rows: 1, color: 'lightyellow' },
  ];
}
