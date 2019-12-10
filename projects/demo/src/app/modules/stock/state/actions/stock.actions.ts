import { Action } from '@ngrx/store';
import { IItem } from '../../interfaces/IItem';

export enum StockActionTypes {
  LoadStocks = '[Stock] Load Stocks',
  LoadMenu = '[Stock] Load Menu',
  SELECT = '[Stock] Select',
  ADD_ONE = '[Stock] Add One',
  AllItemsLoaded = '[Stock] All Items Loaded',
}

export class LoadStocks implements Action {
  readonly type = StockActionTypes.LoadStocks;
}

export class LoadMenu implements Action {
  readonly type = StockActionTypes.LoadMenu;
}

export class AddAll implements Action {
  readonly type = StockActionTypes.ADD_ONE;

  constructor(public payload: IItem[]) { }
}

export class AllItemsLoaded implements Action {
  readonly type = StockActionTypes.AllItemsLoaded;
  constructor(public payload: { items: any[] }) { }
}

export type StockActions =
  LoadStocks
  | LoadMenu;
