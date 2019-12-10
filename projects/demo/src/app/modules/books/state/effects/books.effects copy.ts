// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { BooksService } from '../../books.service';
// import { withLatestFrom, filter, mergeMap, map, tap, switchMap, catchError } from 'rxjs/operators';
// import { select, Store } from '@ngrx/store';
// import { AllBooksRequested, BooksActionTypes } from '../actions/books.actions';
// import * as fromBooks from './../../state';
// import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
// import { IBook } from '../../interfaces/IBook';

// @Injectable()
// export class BooksEffects {

//   // @Effect()
//   // loadAllBooks$ = this.actions$
//   //   .pipe(
//   //     tap(data => console.log('_', data)),
//   //     ofType(BooksActionTypes.AllBooksRequested),
//   //     mergeMap((data) => this.service.searchBooks(data)),
//   //     // switchMap(({ query }) => {
//   //     //   if (query === '') {
//   //     //     return empty;
//   //     //   }

//   //     //   // const nextSearch$ = this.actions$.pipe(
//   //     //   //   ofType(FindBookPageActions.searchBooks),
//   //     //   //   skip(1)
//   //     //   // );

//   //     //   // return this.service.searchBooks(query).pipe(
//   //     //   //   // takeUntil(nextSearch$),
//   //     //   //   map((books: IBook[]) => {
//   //     //   //     console.log('_', books);
//   //     //   //     // BooksActions.AllBooksLoaded({ books })
//   //     //   //   }
//   //     //   //   ),
//   //     //   //   // catchError(err =>
//   //     //   //   //   of(new SearchFailure({ errorMsg: err.message }))
//   //     //   //   // )
//   //     //   // );
//   //     // })

//   //     // ofType<AllBooksRequested>(BooksActionTypes.AllBooksRequested),
//   //     // withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
//   //     // filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
//   //     // mergeMap(() => this.coursesService.findAllCourses()),
//   //     // map(courses => new BooksLoaded({ courses }))
//   //   );

//     @Effect()
//     loadAllJokes$ = this.actions$
//       .pipe(
//         tap(data => console.log(data)),
//         ofType<AllJokesRequested>(JokesActionTypes.AllJokesRequested),
//         withLatestFrom(this.store.pipe(select(allJokesLoaded))),
//         // filter(([action, allJokesLoaded]) => !allJokesLoaded),
//         mergeMap(() => this.service.getJokes()),
//         tap(data => console.log(data)),
//         map(jokes => new AllJokesLoaded({ jokes })),
//         tap(data => console.log(data)),
//       );

//   constructor(
//     private actions$: Actions,
//     service: BooksService,
//     private store: Store<fromBooks.State>
//   ) {

//   }

// }
