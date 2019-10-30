import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, toArray, switchMap, filter, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchItems(currentLang: string): Observable<any> {
    // does not have  image
    const url = 'assets/data/stock/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        switchMap((data: any) => data),
        pluck('id'),
        toArray(),
        tap(data => console.log('_', data)),

      );
  }

  fetchCategory(currentLang: string): Observable<any> {
    const url = 'assets/data/stock/category/category.json';
    return this.http.get(url)
      .pipe(
        // map((data: any) => data.categories),
        // switchMap((data: any) => data),
        // pluck('id'),
        // toArray(),
        // tap(data => console.log('_', data)),

      );
  }
}
