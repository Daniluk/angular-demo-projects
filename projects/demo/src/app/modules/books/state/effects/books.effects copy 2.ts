// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { tap, withLatestFrom, mergeMap, map, catchError, switchMap, filter } from 'rxjs/operators';
// import { select, Store } from '@ngrx/store';
// import { allBooksLoaded, searchBooks } from '../books.selectors';
// import { BooksService } from '../../books.service';
// import { AllBooksLoaded, BooksActionTypes, AllBooksRequested, SearchBooks, BooksSearchRequestedAction } from '../actions/books.actions';
// import * as fromBooks from './../../state';

// @Injectable()
// export class BooksEffects {

//   @Effect()
//   searchBooks$ = this.actions$
//     .pipe(
//       ofType(BooksActionTypes.Search),
//       // withLatestFrom(this.store.pipe(select(allBooksLoaded))),
//       // tap(data => console.log(data)),
//       map((data: any) => data.payload),
//       // tap(data => console.log(data)),
//       switchMap(query => {
//         // console.log(query);
//         return this.service.searchBooks(query).pipe(
//           // tap(data => console.log(data)),
//           // withLatestFrom(this.store.pipe(select(allBooksLoaded))),
//           //  map((results: any) => new AllBooksLoaded(results)),
//         );
//       }),
//       tap(data => console.log(data)),
//       map((results: any) => new AllBooksLoaded(results))
//     );

//   @Effect()
//   loadAllBooks$ = this.actions$
//     .pipe(
//       ofType<AllBooksRequested>(BooksActionTypes.AllBooksRequested),
//       withLatestFrom(this.store.pipe(select(allBooksLoaded))),
//       // filter(([action, allJokesLoaded]) => !allJokesLoaded),
//       mergeMap(() => this.service.searchBooks('test')),
//       tap(data => console.log(data)),
//       map(books => new AllBooksLoaded({ books })),
//     );

//   constructor(
//     private actions$: Actions,
//     private service: BooksService,
//     private store: Store<fromBooks.State>
//   ) {

//   }
// }
