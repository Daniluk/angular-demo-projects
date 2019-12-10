import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStock from '../reducers/stock.reducer';

export const selectBooksState = createFeatureSelector<fromStock.State>(fromStock.stockFeatureKey);

const getStockState = createFeatureSelector<fromStock.State>(
  fromStock.stockFeatureKey
);

export const searchItems = createSelector(
  getStockState,
  stockState => stockState.query
);

export const allItemsLoaded = createSelector(
  getStockState,
  stockState => stockState.allItemsLoaded
);

