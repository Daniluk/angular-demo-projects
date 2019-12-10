import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBooks from './state';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/IBook';
import { tap, map, catchError } from 'rxjs/operators';
import { allBooksLoaded } from './state/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<IBook[]>;
  items$: Observable<any>;
  // items$: Observable<IBook[]>;

  constructor(
    private store: Store<fromBooks.State>
  ) { }

  ngOnInit() {
    this.items$ = this.store.pipe(
      tap(data => console.log('_', data)),
      // catchError(err => console.log(err))
      select(allBooksLoaded),
      // map(data => Object.keys(data).map(k => data[k])),
      tap(data => console.log('_', data)),
      // catchError(err => console.log(err))
    );
    // this.books$ = this.store.select(fromBooks.selectAll);

    // this.items$ = this.store.pipe(
    //   // catchError(err => console.log(err))
    //   select(allBooksLoaded),
    //   // map(data => Object.keys(data).map(k => data[k])),
    //   tap(data => console.log('_', data)),
    //   // catchError(err => console.log(err))
    // );
    // this.books$.subscribe((res: IBook[]) => {
    //   console.log(res);
    // });

    // this.books$.subscribe((val: IBook[]) => {
    //   this.total = val.length
    //   this.large = val.filter(pizza => {
    //     return pizza.size == 'large'
    //   }).length
    //   this.small = val.filter(pizza => {
    //     return pizza.size == 'small'
    //   }).length
    // })
  }

}
