import { Action } from '@ngrx/store';
import { IJoke } from '../interfaces/IJoke';

export enum JokesActionTypes {
  LoadJokess = '[Jokes] Load Jokess',
  AllJokesRequested = '[Jokes] All Jokes Requested',
  AllJokesLoaded = '[Jokes] All Jokes Loaded',
  JokesLoaded = '[Jokes API] Jokes Loaded',
}

export class LoadJokess implements Action {
  readonly type = JokesActionTypes.LoadJokess;
}

export class AllJokesRequested implements Action {

  readonly type = JokesActionTypes.AllJokesRequested;

}

export class AllJokesLoaded implements Action {

  readonly type = JokesActionTypes.AllJokesLoaded;

  constructor(public payload: { jokes: IJoke[] }) {

  }
}

export type JokesActions =
  LoadJokess
  | AllJokesRequested
  | AllJokesLoaded;
