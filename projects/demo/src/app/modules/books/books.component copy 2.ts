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
    // this.items$ = this.store.pipe(
    //   tap(data => console.log('_', data)),
    //   select(allBooksLoaded),
    //   // tap(data => console.log('_', data)),
    //   // catchError(err => console.log(err))
    // );
    this.items$ = this.store.select(allBooksLoaded);

  }

}
