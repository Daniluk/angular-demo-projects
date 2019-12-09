import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksDirective } from './modules/books/books.directive';
import { SearchDirective } from './modules/books/search/search.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksDirective,
    SearchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
