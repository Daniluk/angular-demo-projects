import { Action } from '@ngrx/store';
import { IMovie } from '../../interfaces/IMovie';

export enum MoviesActionTypes {
  LoadMoviess = '[Movies] Load Moviess',
  AllMoviesRequested = '[Movies] All Movies Requested',
  AllMoviesLoaded = '[Movies] All Moviess Loaded',
  Increment = '[Movies] Increment',
  Decrement = '[Movies] Decrement',
  Reset = '[Movies] Reset',
}

export class LoadMoviess implements Action {
  readonly type = MoviesActionTypes.LoadMoviess;
}

export class AllMoviesRequested implements Action {

  readonly type = MoviesActionTypes.AllMoviesRequested;

}

export class AllMoviesLoaded implements Action {

  readonly type = MoviesActionTypes.AllMoviesLoaded;

  constructor(public payload: { movies: IMovie[] }) {

  }
}

export class Increment implements Action {
  readonly type = MoviesActionTypes.Increment;

  // constructor(public payload: number) { }
}

export class Decrement implements Action {
  readonly type = MoviesActionTypes.Decrement;

  // constructor(public payload: { counter: number }) { }
}

export class Reset implements Action {
  readonly type = MoviesActionTypes.Reset;
}

export type MoviesActions =
  LoadMoviess |
  AllMoviesLoaded |
  Increment |
  Decrement |
  Reset;
