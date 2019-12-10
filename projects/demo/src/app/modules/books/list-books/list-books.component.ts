import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/IBook';
import { Store, select } from '@ngrx/store';
import * as fromBooks from './../state';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  items$: Observable<IBook[]>;

  constructor(
    private store: Store<fromBooks.State>
  ) {
    this.items$ = this.store.select(state => state.books.books);
  }

  ngOnInit() {
    const store$ = this.store.pipe(
      tap(data => console.log('_', data)),
      // select(selectBeginnerCourses)
    ).subscribe(data => console.log);

  }
}
