import { Action } from '@ngrx/store';
import { IBook } from '../../interfaces/IBook';

export enum BooksActionTypes {
  LoadBookss = '[Books] Load Bookss',
  AllBooksRequested = '[Books] All Books Requested',
  AllBooksLoaded = '[Books] All Books Loaded',
  SearchBooks = '[Books] Search Books',
  SearchFailure = '[Books] Search Failure',
  BooksSearchRequested = '[Books] Search Requested',
  Search = '[Books] Search Books',
  SearchDone = '[Books] Search Done',
}

export class LoadBookss implements Action {
  readonly type = BooksActionTypes.LoadBookss;
}

// export class Search implements Action {
//   readonly type = BooksActionTypes.SEARCH;
//   constructor(public payload: any) { }
// }

export class AllBooksRequested implements Action {
  readonly type = BooksActionTypes.AllBooksRequested;
}

export class AllBooksLoaded implements Action {
  readonly type = BooksActionTypes.AllBooksLoaded;
  constructor(public payload: { books: any[] }) { }
}

export class SearchFailure implements Action {
  readonly type = BooksActionTypes.SearchFailure;
  constructor(public payload: { err: 'error' }) { }
}

export class SearchBooks implements Action {
  readonly type = BooksActionTypes.SearchBooks;
  constructor(public payload: { query: string }) { }
}

export class BooksSearchRequestedAction implements Action {
  readonly type = BooksActionTypes.BooksSearchRequested;
  constructor(public payload: { search: string }) { }
}

export class SearchDone implements Action {
  readonly type = BooksActionTypes.SearchDone;
  constructor(public payload: { books: IBook[] }) {
    console.log(this.payload);
   }
}

export type BooksActions =
  LoadBookss
  | AllBooksRequested
  | AllBooksLoaded
  | SearchBooks
  | SearchDone
  | BooksSearchRequestedAction
  ;
