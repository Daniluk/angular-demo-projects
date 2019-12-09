import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { MoviesActions, MoviesActionTypes } from '../../state/actions/movies.actions';

export const moviesFeatureKey = 'movies';

export interface State extends EntityState<any> {
  counter: number;
  allMoviesLoaded: boolean;
}

export const adapter: EntityAdapter<any> =
  createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({
  counter: 0,
  allMoviesLoaded: false
});

export function reducer(state = initialState, action: MoviesActions): State {

  switch (action.type) {
    case MoviesActionTypes.AllMoviesLoaded:

      return adapter.addAll(action.payload.movies, { ...state, allMoviesLoaded: true });

    case MoviesActionTypes.Increment:

      return Object.assign({}, state, { counter: state.counter + 1 });

    case MoviesActionTypes.Decrement:

      return Object.assign({}, state, { counter: state.counter - 1 });

    case MoviesActionTypes.Reset:

      return Object.assign({}, state, { counter: 0 });

    default:

      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
