// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IBook } from '../interfaces/IBook';
// import { Store, select } from '@ngrx/store';
// import * as fromBooks from './../state';
// import { tap, map, filter } from 'rxjs/operators';
// import { allBooksLoaded, searchDone } from '../state/books.selectors';
// import { SearchBooks } from '../state/actions/books.actions';

// @Component({
//   selector: 'app-list-books',
//   templateUrl: './list-books.component.html',
//   styleUrls: ['./list-books.component.scss']
// })
// export class ListBooksComponent implements OnInit {

//   items$: Observable<any>;
//   // items$: Observable<IBook[]>;
//   // results$: Observable<any[]>;
//   // loading$: Observable<any>;

//   constructor(
//     private store: Store<fromBooks.State>
//   ) {
//     // this.results$ = this.store.select(state => state.results);
//     // this.loading$ = this.store.select(state => state.loading);

//     this.items$ = this.store.select(state => state.books.books); // ?

//     // this.items$ = this.store.pipe(
//     //   tap(data => console.log('_', data.books.books)),
//     //   select(searchDone),
//     //   // tap(data => console.log('_', data)),
//     //   map(data => Object.keys(data).map(k => data[k])),
//     //   // tap(data => console.log('_', data)),
//     // );
//   }

//   ngOnInit() {
//     // this.store.dispatch(new SearchBooks('test'));
//     // this.items$ = this.store.pipe(
//     //   tap(data => console.log('_', data)),
//     //   select(searchDone),
//     //   // tap(data => console.log('_', data)),
//     //   map(data => Object.keys(data).map(k => data[k])),
//     //   // tap(data => console.log('_', data)),
//     // );
//   }
//   isNumber(val) {
//     console.log('_', typeof val);
//     return typeof val !== 'object';
//   }

//   isArray(obj: any) {
//     return Array.isArray(obj);
//   }
// }
