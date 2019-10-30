import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) {

  }

  fetchItems(id: any): Observable<any> {
    console.log(id);
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
        catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
      );
    /* .pipe(
      map((data: any) => data.categories),
      map((data: any[]) => data.filter(item => item.name.toLowerCase().includes(id))),
      tap(data => console.log('_', data)),
      catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
    ); */
  }
}
