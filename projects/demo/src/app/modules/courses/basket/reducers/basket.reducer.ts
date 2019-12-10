import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasketActions, BasketActionTypes } from '../actions/basket.actions';

export const basketFeatureKey = 'basket';

export interface State extends EntityState<any> {
  counter: number;
}

export const adapter: EntityAdapter<any> =
  createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({
  counter: 0,
});

export function reducer(state = initialState, action: BasketActions): State {

  switch (action.type) {
    case BasketActionTypes.Increment:

      return Object.assign({}, state, { counter: state.counter + 1 });

    case BasketActionTypes.Decrement:

      return Object.assign({}, state, { counter: state.counter - 1 });

    case BasketActionTypes.Reset:

      return Object.assign({}, state, { counter: 0 });

    default:

      return state;
  }
}
