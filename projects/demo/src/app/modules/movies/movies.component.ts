import { Component, OnInit } from '@angular/core';
import * as fromMovies from './state/reducers/movies.reducer';
import { Store, select } from '@ngrx/store';
import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Increment, Decrement, Reset, AllMoviesRequested } from './state/actions/movies.actions';
import { IMovie } from './interfaces/IMovie';
import { selectAllMovies } from './state/selectors/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  items$: Observable<any>;
  count$: Observable<number>;

  constructor(
    private store: Store<fromMovies.State>
  ) {
    this.count$ = store.pipe(
      tap(data => console.log('_', data)),
      map((data: any) => data.movies),
      // tap(data => console.log('_', data.counter)),
      select('counter')
    );

    // this.items$ = this.store.select(state => state.entities);
  }

  ngOnInit() {

    this.store.dispatch(new AllMoviesRequested());
    this.items$ = this.store.pipe(select(selectAllMovies));

    const array = [20, 70, 90, 30, 60];
    console.log(array);
    let res = array.reduce((a, b) => Math.min(a, b));
    console.log(res);

    const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
    const maxReading = readings.reduce((x, y) => Math.max(x, y), Number.MIN_VALUE);
    const minReading = readings.reduce((x, y) => Math.min(x, y), Number.MAX_VALUE);
    console.log({ minReading, maxReading });

    res = array.reduce((x, y, index) => {
      console.log(x, y);
      return x + y;
    });

    from(array).pipe(
      map((item, index) => {
        const b = index < array.length - 1 ? array[index + 1] : 0;
        console.log(item, b);
        return item + 1;
      }),
      tap(data => console.log(data))
    ).subscribe((data: any) => {
      console.log('data', data);
    });

    this.test();
    this.test03();
  }

  test() {
    const array = [20, 70, 90, 30, 58, 65];
    // const array = [120, 170, 190, 130, 158, 165];
    const max = 110;
    const reserve = 30;
    this.whichPackagesToLoad(array, max, reserve);
  }

  whichPackagesToLoad(array, max, reserve) {
    const freeSpace = max - reserve;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] <= freeSpace) {
          result.push({ items: `(${array[i]}, ${array[j]})`, sum: array[i] + array[j] });
        }
      }
    }

    console.log(result.length ? result.sort((a, b) => b.sum - a.sum)[0] : 'no results found');
    console.log(result.filter(x => x.sum).map(x => x)[0] || 'no results found');
  }

  whichPackagesToLoad01(array, max, reserve) {
    const freeSpace = max - reserve;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] <= freeSpace) {
          result.push({ items: `(${array[i]}, ${array[j]})`, sum: array[i] + array[j] });
        }
      }
    }

    console.log(result.length ? result.sort((a, b) => b.sum - a.sum)[0] : 'no results found');
    console.log(result.filter(x => x.sum).map(x => x)[0] || 'no results found');
  }
  test02() {
    const isKitten = cat => cat.months < 7;
    const getName = cat => cat.name;
    const getKittenNames = cats =>
      cats
        .filter(isKitten)
        .map(getName);
    const catsArray = [
      { name: 'Mojo', months: 84 },
      { name: 'Mao-Mao', months: 34 },
      { name: 'Waffles', months: 4 },
      { name: 'Pickles', months: 6 }
    ];
    const kittens = getKittenNames(catsArray);
    console.log(kittens);
  }

  test03() {
    const array = [20, 70, 90, 30, 58, 65];
    // const array = [120, 170, 190, 130, 158, 165];
    const max = 110;
    const reserve = 30;
    const cats = [
      { name: 'Mojo', weight: 84 },
      { name: 'Mao-Mao', weight: 34 },
      { name: 'Waffles', weight: 4 },
      { name: 'Pickles', weight: 6 }
    ];
    const isKitten = cat => cat.weight < 30;
    const getName = cat => cat.name;
    const getKittenNames = items =>
      items.filter(isKitten)
        .map(getName);

    const kittens = getKittenNames(cats);
    console.log(kittens);
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
