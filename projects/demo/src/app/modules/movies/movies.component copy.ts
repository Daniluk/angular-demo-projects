import { Component, OnInit } from '@angular/core';
import * as fromMovies from './state/reducers/movies.reducer';
import { Store, select } from '@ngrx/store';
import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Increment, Decrement, Reset } from './state/actions/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

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
  }

  ngOnInit() {
    const array = [20, 70, 90, 30, 60];
    console.log(array);
    let res = array.reduce((a, b) => Math.min(a, b));
    console.log(res);

    const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
    const maxReading = readings.reduce((x, y) => Math.max(x, y), Number.MIN_VALUE);
    const minReading = readings.reduce((x, y) => Math.min(x, y), Number.MAX_VALUE);
    console.log({ minReading, maxReading });
    // res = array.reduce((a, b) => (a + b), 0);
    // console.log(res);

    res = array.reduce((x, y, index) => {
      console.log(x, y);
      return x + y;
    });
    // res = array.reduce((a, b, index) => {
    //   if (a + b < 80) {
    //     const key = a;
    //     const data = b;
    //     return { key, data };
    //   }
    // });

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
    const maxValueOfY = 0; //  = Math.max(...result.map((o, short) => { return o.sum }), 0);
    // const maxValueOfY = Math.max(...result.map(o => o.sum), 0);
    const res01 = result.reduce((item, shot) => item && item.sum > shot.sum ? item : shot, null);
    // const res = result.length ? result.sort((a, b) => b.sum - a.sum)[0] : 'no results found';
    // Math.max(...array1)
    const res02 = result.filter(x => x.sum).map(x => x.foo);

    console.log(result.length ? result.sort((a, b) => b.sum - a.sum)[0] : 'no results found');
    console.log(maxValueOfY);
    console.log(res01);

    function getYs() {
      return result.map(d => d.sum);
    }
    function getMinY() {
      return Math.min(...getYs());
    }

    function getMaxY() {
      return result.reduce((max, b) => Math.max(max, b.sum), result[0]);
    }

    const res03 = getMaxY();
    console.log(res03);

    const res04 = result.reduce((ids, thing) => {
      // Math.max(x, y)
      if (Math.max(ids.sum, thing.sum)) {
        ids.push(thing);
      }
      return ids;
    }, []);

    console.log(res04);

    //   const totalJediScore = result
    // .filter(person => person.sum)
    // .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    // .reduce((acc, score) => acc + score, 0);

    const res05 = result.filter(x => x.sum).map(x => x)[0] || 'no results found';
    console.log(res05);
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
