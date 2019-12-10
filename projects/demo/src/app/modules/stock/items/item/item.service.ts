import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, scheduled, asapScheduler, range, empty, from } from 'rxjs';
import { map, tap, catchError, filter } from 'rxjs/operators';
import { asap } from 'rxjs/internal/scheduler/asap';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) {
    // this.test();
  }

  test() {
    range(1, 200).pipe(
      filter(x => x % 2 === 1),
      map(x => x + x)
    ).subscribe(x => console.log(x));

    // of(1, 2, 3, 4, 5).pipe(
    //   map(n => {
    //     if (n === 4) {
    //       n = -1;
    //     }
    //     return n;
    //   }),
    //   catchError((err, caught) => caught),
    //   // take(30),
    // )
    //   .subscribe(x => console.log(x));
  }

  fetchItems(id: any): Observable<any> {
    console.log(id);
    // const delay = empty().pipe(delay(1000));
    // id = 'BREAKFAST FAVES';
    // id = 20800;
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=145500';
    // const url = '../../../../../assets/data/stock/category/category.json';
    // const url = `https://order.dennys.com/api/v1/en/menu`;
    // const url = `https://order.dennys.com/api/v1/en/menu`;
    const url = '../assets/data/stock/menu.json'; // name; products
    return this.http.get(url)
      .pipe(
        tap(data => console.log('_', data)),
        map((data: any) => data.categories),
        map((data: any) => data.filter(item => item.id === id)),
        map((data: any) => data[0].products),
        // map((data: any[]) => data.filter(item => item.name.toLowerCase().includes(id))),
        // map((data: any) => data.categories.filter(item => item.id.includes(id))),
        // map((data: any[]) => data.filter(item => item.name.toLowerCase().includes(id))),
        tap(data => console.log('_', data)),
        catchError(err => from([])),
        // catchError(error => of({type: 'HANDLE_STATUS', payload: {status: error.status}}))
        // catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
      );
    /* .pipe(
      map((data: any) => data.categories),
      map((data: any[]) => data.filter(item => item.name.toLowerCase().includes(id))),
      tap(data => console.log('_', data)),
      catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
    ); */
  }
}
