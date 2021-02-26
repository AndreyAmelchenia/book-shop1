import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [AppComponent, MyNavComponent, MyDashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
