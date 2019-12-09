import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { SearchDirective } from './search/search.directive';
import { BasketComponent } from './basket/basket.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './basket/reducers/basket.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './basket/effects/basket.effects';
import * as fromBooks from './state';
import { BooksEffects } from './state/effects/books.effects';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    SearchComponent,
    ListBooksComponent,
    BasketComponent,
    SearchDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    BooksRoutingModule,
    StoreModule.forFeature('basket', reducer),
    EffectsModule.forFeature([BasketEffects]),
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects])

  ]
})
export class BooksModule { }
