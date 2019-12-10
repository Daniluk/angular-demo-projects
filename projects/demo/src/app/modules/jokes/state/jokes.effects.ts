import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromJokes from './jokes.reducer';
import { tap, withLatestFrom, mergeMap, map, catchError, switchMap, filter } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { JokesService } from '../jokes.service';
import { JokesActionTypes, AllJokesRequested, AllJokesLoaded } from './jokes.actions';
import { allJokesLoaded } from './jokes.selectors';

@Injectable()
export class JokesEffects {

  @Effect()
  loadAllJokes$ = this.actions$
    .pipe(
      ofType<AllJokesRequested>(JokesActionTypes.AllJokesRequested),
      withLatestFrom(this.store.pipe(select(allJokesLoaded))),
      mergeMap(() => this.service.getJokes()),
      map(jokes => new AllJokesLoaded({ jokes })),
    );

  constructor(
    private actions$: Actions,
    private service: JokesService,
    private store: Store<fromJokes.JokesState>
  ) {

  }
}
