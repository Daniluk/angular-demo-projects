import { Action } from '@ngrx/store';

export enum BasketActionTypes {
  LoadBaskets = '[Basket] Load Baskets',
  
  
}

export class LoadBaskets implements Action {
  readonly type = BasketActionTypes.LoadBaskets;
}


export type BasketActions = LoadBaskets;
