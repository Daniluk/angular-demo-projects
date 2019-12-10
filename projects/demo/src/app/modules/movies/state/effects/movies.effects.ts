import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesActionTypes, AllMoviesRequested, AllMoviesLoaded } from '../actions/movies.actions';
import { map, switchMap, tap, withLatestFrom, filter, mergeMap } from 'rxjs/operators';
// import { MoviesActions } from './../index';
import { MoviesService } from '../../movies.service';
import * as fromMovies from '../reducers/movies.reducer';
import { Store, select } from '@ngrx/store';
// import { JokesActionTypes, AllJokesRequested, AllJokesLoaded } from './jokes.actions';
import { allMoviesLoaded } from '../selectors/movies.selectors';

@Injectable()
export class MoviesEffects {

  @Effect()
  loadAllMovies$ = this.actions$
    .pipe(
      // tap(data => console.log(data)),
      ofType<AllMoviesRequested>(MoviesActionTypes.AllMoviesRequested),
      withLatestFrom(this.store.pipe(select(allMoviesLoaded))),
      // filter(([action, allMoviesLoaded]) => !allMoviesLoaded),
      mergeMap(() => this.service.searchMovies()),
      map(movies => new AllMoviesLoaded({ movies }))
    );

  constructor(
    private actions$: Actions,
    private service: MoviesService,
    private store: Store<fromMovies.State>
  ) { }

}
