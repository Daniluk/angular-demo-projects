import { Action } from '@ngrx/store';

export enum BasketActionTypes {
  LoadBaskets = '[Basket] Load Baskets',
  Increment = '[Basket] Increment',
  Decrement = '[Basket] Decrement',
  Reset = '[Basket] Reset',
}

export class LoadBaskets implements Action {
  readonly type = BasketActionTypes.LoadBaskets;
}

export class Increment implements Action {
  readonly type = BasketActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = BasketActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = BasketActionTypes.Reset;
}

export type BasketActions = LoadBaskets | Increment | Decrement | Reset;;
