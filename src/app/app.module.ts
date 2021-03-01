import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AppRoutingModule } from './module/app-routing.module';
import { AppMaterialModule } from './module/app-material.module';
import { BookComponentComponent } from './book-component/book-component.component';
import { BookServiceService } from './book-component/book-service.service';

@NgModule({
  declarations: [AppComponent, MyNavComponent, MyDashboardComponent, BookComponentComponent],
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
