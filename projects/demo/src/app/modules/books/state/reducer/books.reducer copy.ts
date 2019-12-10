// import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
// import { IBook } from '../../interfaces/IBook';
// import { BooksActionTypes, BooksActions } from '../actions/books.actions';

// export const booksFeatureKey = 'books';

// export interface State extends EntityState<IBook> {
//   selectedBookId: string | null;
//   allBooksLoaded: boolean;
//   query: string | null;
//   results: any;
//   loading: boolean;
// }

// export const adapter: EntityAdapter<IBook> = createEntityAdapter<IBook>({
//   selectId: (book: IBook) => book.id,
//   sortComparer: false,
// });

// export const initialState: State = adapter.getInitialState({
//   selectedBookId: null,
//   allBooksLoaded: false,
//   query: null,
//   results: null,
//   loading: false
// });

// export function reducer(
//   state = initialState,
//   action: BooksActions
// ): State {
//   // console.log('_', action.type);
//   switch (action.type) {

//     // case BooksActionTypes.AllBooksLoaded:

//     //   return adapter.addAll(action.payload.books, { ...state, allBooksLoaded: true });

//     // case BooksActionTypes.SearchBooks:

//     //   return adapter.addAll(action.payload.query, { ...state });

//     case BooksActionTypes.SearchDone:
//       console.log('_', action.type, action.payload.books);
//       return adapter.addAll(action.payload.books, { ...state, allBooksLoaded: true });


//     default:
//       return state;
//   }
// }

// export const {
//   // addAll,
//   selectAll,
//   // selectEntities,
//   // selectIds,
//   // selectTotal

// } = adapter.getSelectors();


// export const getQuery = (state: State) => state.query;
