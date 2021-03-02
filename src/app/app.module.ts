import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { BookListComponent } from './book-list/book-list.component';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AppRoutingModule } from './module/app-routing.module';
import { AppMaterialModule } from './module/app-material.module';
import { BookComponentComponent } from './book-list/book/book.component';
import { BookServiceService } from './book-list/book/book.service';

@NgModule({
  declarations: [AppComponent, MyNavComponent, BookListComponent, BookComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
