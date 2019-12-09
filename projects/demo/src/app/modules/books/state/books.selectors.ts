import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './reducer/books.reducer';

export const selectBooksState = createFeatureSelector<fromBooks.State>(fromBooks.booksFeatureKey);

const getBooksState = createFeatureSelector<fromBooks.State>(
  fromBooks.booksFeatureKey
);

export const searchBooks = createSelector(
  selectBooksState,
  booksState => booksState.query
);

export const allBooksLoaded = createSelector(
  selectBooksState,
  // booksState => booksState.books
  booksState => booksState.allBooksLoaded
);

/* export const booksLoaded = createSelector(
  selectBooksState,
  booksState => booksState.entities
);

export const searchDone = createSelector(
  selectBooksState,
  booksState => booksState.entities
); */

