import { IJoke } from '../interfaces/IJoke';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { JokesActionTypes, JokesActions } from './jokes.actions';

export const jokesFeatureKey = 'jokes';

export interface JokesState extends EntityState<IJoke> {
  allJokesLoaded: boolean;
}

export const adapter: EntityAdapter<IJoke> =
  createEntityAdapter<IJoke>();

export const initialJokesState: JokesState = adapter.getInitialState({
  allJokesLoaded: false,
});

export function reducer(state = initialJokesState, action: JokesActions): JokesState {

  switch (action.type) {

    case JokesActionTypes.AllJokesLoaded:

      return adapter.addAll(action.payload.jokes, { ...state, allJokesLoaded: true });

    default:
      return state;
  }
}

export const {
  selectAll,

} = adapter.getSelectors();
