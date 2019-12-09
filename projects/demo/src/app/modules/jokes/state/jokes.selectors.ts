import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJokes from './jokes.reducer';

export const selectJokesState = createFeatureSelector<fromJokes.JokesState>(fromJokes.jokesFeatureKey);

const getJokeState = createFeatureSelector<fromJokes.JokesState>(
  fromJokes.jokesFeatureKey
);

export const selectJokeList = createSelector(
  getJokeState,
  jokesState => jokesState.entities
);

export const allJokesLoaded = createSelector(
  selectJokesState,
  jokesState => jokesState.allJokesLoaded
);
