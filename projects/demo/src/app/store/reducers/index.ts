import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromBooks from '../../modules/books/state/reducer/books.reducer';
// import * as fromFilms from '../../modules/stock/state/films';
import * as fromStock from '../../modules/stock/state';
import * as fromCourses from '../../modules/courses/store/courses.reducer';
import * as fromJokes from '../../modules/jokes/state/jokes.reducer';

export interface State {
  books: fromBooks.State;
  // films: fromFilms.State;
  stock: fromStock.State;
  courses: fromCourses.CoursesState;
  jokes: fromJokes.JokesState;
}

const initialState: State = {
  books: fromBooks.initialState,
  // films: fromFilms.initialState,
  courses: fromCourses.initialCoursesState,
  jokes: fromJokes.initialJokesState,
  stock: fromStock.initialState
};
export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer,
  // films: fromFilms.reducer,
  stock: fromStock.reducer,
  courses: fromCourses.coursesReducer,
  jokes: fromJokes.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
