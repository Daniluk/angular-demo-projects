import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IBook } from '../../interfaces/IBook';
import { BooksActionTypes, BooksActions } from '../actions/books.actions';

export const booksFeatureKey = 'books';

export interface State extends EntityState<IBook> {
  selectedBookId: string | null;
  allBooksLoaded: boolean;
  query: string | null;
  loading: boolean;
  searching: boolean;
  books: any ;
}

export const adapter: EntityAdapter<IBook> = createEntityAdapter<IBook>({
  selectId: (book: IBook) => book.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedBookId: null,
  allBooksLoaded: false,
  query: null,
  loading: false,
  searching: false,
  books: null,
});

export function reducer(
  state = initialState,
  action: BooksActions
): State {
  // console.log('_', action.type);
  switch (action.type) {

    case BooksActionTypes.SearchBooks:
      console.log('_', action.type, action.payload);
      return Object.assign({}, state, { query: action.payload });
    // return adapter.addOne(action.payload, { ...state, query: action.payload.query });

    case BooksActionTypes.SearchDone:
      console.log('_', action.type, action.payload.books);
      return adapter.addAll(action.payload.books, { ...state, books: action.payload.books});

    default:
      return state;
  }
}

export const {
  // addAll,
  selectAll,
  // selectEntities,
  // selectIds,
  // selectTotal

} = adapter.getSelectors();


export const getQuery = (state: State) => state.query;
