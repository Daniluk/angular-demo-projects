import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadJokess, AllJokesRequested } from './state/jokes.actions';
import * as fromJokes from './state/jokes.reducer';
import { IJoke } from './interfaces/IJoke';
import { Observable } from 'rxjs';
import { allJokesLoaded, selectJokeList } from './state/jokes.selectors';
import { tap, catchError, pluck, map } from 'rxjs/operators';
import { UiActions } from './state';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  items$: Observable<IJoke[]>;

  constructor(
    private store: Store<fromJokes.JokesState>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new AllJokesRequested());
    this.items$ = this.store.pipe(
      tap(data => console.log('_', data)),
      // catchError(err => console.log(err))
      select(selectJokeList),
      map(data => Object.keys(data).map(k => data[k])),
      // pluck('id'),
      //  // select(selectJokeList),
      tap(data => console.log('_', data)),
    );
  }

  loadCategoryRequested(event): void {
    console.log('_', event);
  }

  loadAllRequested(event): void {
    console.log('_', event);
  }

}
