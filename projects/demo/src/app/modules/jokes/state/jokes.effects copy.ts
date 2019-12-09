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
      // tap(data => console.log(data)),
      ofType<AllJokesRequested>(JokesActionTypes.AllJokesRequested),
      withLatestFrom(this.store.pipe(select(allJokesLoaded))),
      // filter(([action, allJokesLoaded]) => !allJokesLoaded),
      mergeMap(() => this.service.getJokes()),
      // tap(data => console.log(data)),
      map(jokes => new AllJokesLoaded({ jokes })),
      // tap(data => console.log(data)),
    );

  constructor(
    private actions$: Actions,
    private service: JokesService,
    private store: Store<fromJokes.JokesState>
  ) {

  }
}
