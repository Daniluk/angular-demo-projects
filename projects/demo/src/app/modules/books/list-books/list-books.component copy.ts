// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IBook } from '../interfaces/IBook';
// import { Store, select } from '@ngrx/store';
// import * as fromBooks from './../state';
// import { tap, map, filter } from 'rxjs/operators';
// import { allBooksLoaded, searchDone } from '../state/books.selectors';

// @Component({
//   selector: 'app-list-books',
//   templateUrl: './list-books.component.html',
//   styleUrls: ['./list-books.component.scss']
// })
// export class ListBooksComponent implements OnInit {

//   items$: Observable<any>;
//   // items$: Observable<IBook[]>;
//   results$: Observable<any[]>;
//   loading$: Observable<any>;

//   constructor(
//     private store: Store<fromBooks.State>
//   ) {
//     this.results$ = this.store.select(state => state.results);
//     this.loading$ = this.store.select(state => state.loading);
//   }

//   ngOnInit() {
//     // this.items$ = this.store.pipe(
//     //   tap(data => console.log('_', data)),
//     //   // catchError(err => console.log(err)) select(selectBooksList),
//     //   select(allBooksLoaded),
//     //   map(data => Object.keys(data).map(k => data[k])),
//     //   // map((data: any[]) => data.filter(item => item.volumeInfo)),
//     //   // map((data: any) => data.volumeInfo),
//     //   // filter volumeInfo
//     //   tap(data => console.log('_', data)),
//     //   // catchError(err => console.log(err))
//     // );

//     this.items$ = this.store.pipe(
//      //  tap(data => console.log('_', data)),
//       // catchError(err => console.log(err)) select(selectBooksList),
//       select(searchDone),
//       tap(data => console.log('_', data)),
//       map(data => Object.keys(data).map(k => data[k])),
//       // map((data: any[]) => data.filter(item => item.volumeInfo)),
//       // map((data: any) => data.volumeInfo),
//       // filter volumeInfo
//       tap(data => console.log('_', data)),
//       // catchError(err => console.log(err))
//     );
//   }

// }
