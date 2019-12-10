import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom, mergeMap, map, catchError, switchMap, filter } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { allBooksLoaded, searchBooks } from '../books.selectors';
import { BooksService } from '../../books.service';
import { AllBooksLoaded, BooksActionTypes, AllBooksRequested, SearchBooks, BooksSearchRequestedAction } from '../actions/books.actions';
import * as fromBooks from './../../state';
import * as BooksActions from '../actions/books.actions';

@Injectable()
export class BooksEffects {

  @Effect()
  searchBooks$ = this.actions$
    .pipe(
      ofType<SearchBooks>(BooksActionTypes.Search),
      // tap(data => console.log(data)),
      map((data: any) => data.payload),
      switchMap(query => {
        return this.service.searchBooks(query).pipe(
          // tap(data => console.log(data)),
          map(books => new BooksActions.SearchDone({ books }))
        );
      }),
    );

  constructor(
    private actions$: Actions,
    private service: BooksService,
  ) {

  }
}
