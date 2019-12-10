import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StockService } from '../../stock.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { MenuService } from '../../menu/menu.service';
import { StockActionTypes, LoadMenu } from '../actions/stock.actions';
import { allItemsLoaded, searchItems } from '../selectors/stock.selectors';

@Injectable()
export class StockEffects {

  @Effect()
  loadMenu$ = this.actions$
    .pipe(
      ofType<LoadMenu>(StockActionTypes.LoadMenu),
      map((data: any) => data.payload),
      switchMap(query => {
        return this.service.fetchItems(query).pipe(
          tap(data => console.log(data)),
          // map(items => new StockActions.LoadDone({ items }))
        );
      }),
    );

  constructor(
    private actions$: Actions,
    private service: MenuService,
  ) {

  }

}
