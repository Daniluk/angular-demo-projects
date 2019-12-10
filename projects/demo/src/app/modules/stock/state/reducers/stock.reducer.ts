import { Action } from '@ngrx/store';
import { IItem } from '../../interfaces/IItem';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const stockFeatureKey = 'stock';

export const adapter: EntityAdapter<IItem> =
  createEntityAdapter<IItem>();

export interface State {
  allItemsLoaded: boolean;
  query: string | null;
}

export const initialState: State = {
  allItemsLoaded: false,
  query: null,

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
