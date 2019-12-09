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

  count$: Observable<any>;

  constructor(
    private store: Store<fromBooks.State>
  ) {
    this.count$ = this.store.pipe(
      tap(data => console.log('_', data)),
      map((data: any) => data.movies),
      // tap(data => console.log('_', data.counter)),
      select('books')
    );
  }

  ngOnInit() {

  }
}
