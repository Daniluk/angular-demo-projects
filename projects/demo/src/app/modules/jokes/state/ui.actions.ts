import { Action } from '@ngrx/store';

export enum UiActionTypes {
  LoadUis = '[Ui] Load Uis',
  Initialized = '[Ui] Initialized',
  LoadAllRequested = '[Ui] Load All Requested',
  // '[App Component] Load Category Requested'
}

export class LoadUis implements Action {
  readonly type = UiActionTypes.LoadUis;
}

export class Initialized implements Action {
  readonly type = UiActionTypes.Initialized;
}

export class LoadAllRequested implements Action {
  readonly type = UiActionTypes.LoadAllRequested;
}

export type UiActions = LoadUis | Initialized | LoadAllRequested;


/*
export const loadCategoryRequested = createAction(
  '[App Component] Load Category Requested',
  props<{ category: string }>()
);
*/
