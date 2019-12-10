import { Action } from '@ngrx/store';
import { IBook } from '../../interfaces/IBook';
import {Update} from '@ngrx/entity';

export enum BooksApiActionTypes {
  LoadBooksApis = '[BooksApi] Load BooksApis',
  Search = '[Books/API] Search',
  SearchSuccess = '[Books/API] Search Success',
  SearchFailure = '[Books/API] Search Failure',
  Select = '[Books/API] Select',
  AddOne = '[Books/API] Add One',
}

export const SEARCH = '[Books/API] Search';
export const SEARCH_SUCCESS = '[Books/API] Search Success';
export const SEARCH_FAILURE = '[Books/API] Search Failure';

export class LoadBooksApis implements Action {
  readonly type = BooksApiActionTypes.LoadBooksApis;
}

export class Search implements Action {
  readonly type = BooksApiActionTypes.Search;

  constructor(public payload: number) { }
}

export class SearchSuccess implements Action {
  readonly type = BooksApiActionTypes.SearchSuccess;

  constructor(public payload: number) { }
}

export class SearchFailure implements Action {
  readonly type = BooksApiActionTypes.SearchFailure;

  constructor(public payload: number) { }
}

export class Select implements Action {
  readonly type = BooksApiActionTypes.Select;

  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = BooksApiActionTypes.AddOne;

  constructor(public payload: { book: Update<IBook> }) {}
}

export type BooksApiActions = LoadBooksApis | Search | SearchSuccess | SearchFailure | Select | AddOne;
