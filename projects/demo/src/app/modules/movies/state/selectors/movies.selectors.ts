import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovies from '../reducers/movies.reducer';

export const selectBooksState = createFeatureSelector<fromMovies.State>(fromMovies.moviesFeatureKey);

const getMoviesState = createFeatureSelector<fromMovies.State>(
  fromMovies.moviesFeatureKey
);

export const selectAllMovies = createSelector(
  getMoviesState,
  fromMovies.selectAll
);

export const allMoviesLoaded = createSelector(
  getMoviesState,
  moviesState => moviesState.allMoviesLoaded
);

