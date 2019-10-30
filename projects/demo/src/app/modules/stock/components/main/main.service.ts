import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, toArray, switchMap, filter, distinct, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// import * from '../../../../../assets/data/stock/'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient,
  ) {

  }

  private sort(a: any, b: any): any {
    if (a.sortOrder < b.sortOrder) {
      return -1;
    }
    if (a.sortOrder > b.sortOrder) {
      return 1;
    }
    return 0;
  }

  fetchItems(currentLang: string): Observable<any> {
    const url = '../../../../../assets/data/stock/category/category.json'; // images without id
    // const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`;
    const list = ['featured', 'slams', 'pancakes', 'omelettes', 'breakfast-faves', '55-plus'];
    return this.http.get(url)
      .pipe(
        tap(data => console.log('_', data)),
        // key => ({ key, value: data[key] })
        map(data => Object.keys(data).map(key => ({ key, values: data[key] }))),
        tap(data => console.log('_', data)),
        // map(data => Object.keys(data).map(k => data[k])),
        map((data: any[]) => data.filter(item => list.indexOf(item.values.id) >= 0)),
        map((data: any[]) => data.filter((v, i, a) => a.findIndex(t => (t.values.id === v.values.id)) === i)),
        map((data: any) => data.sort(this.sort)),
        // map((data: any[]) => { return [...new Set(data)]; }),
        // distinct((data: any) => data.id),
        tap(data => console.log('_', data)),
        catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
      );
  }
}
