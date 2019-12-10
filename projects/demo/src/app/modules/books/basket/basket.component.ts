import { Component, OnInit } from '@angular/core';
import * as fromBooks from './reducers/basket.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Increment, Decrement, Reset } from './actions/basket.actions';
import * as fromBasket from './reducers/basket.reducer';
import { IBook } from '../interfaces/IBook';
import { allBooksLoaded, searchBooks } from '../state/books.selectors';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  count$: Observable<number>;
  // items$: Observable<IBook[]>;
  items$: Observable<any>;

  constructor(
    private store: Store<fromBasket.State>
  ) {
    this.count$ = store.pipe(
      // tap(data => console.log('_', data)),
      map((data: any) => data.basket),
      // tap(data => console.log('_', data)),
      select('counter')
    );


    this.items$ = this.store.pipe(
      tap(data => console.log('_', data)),
      // catchError(err => console.log(err))
      select(allBooksLoaded),
      // map(data => Object.keys(data).map(k => data[k])),
      tap(data => console.log('_', data)),
      // catchError(err => console.log(err))
    );
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}
