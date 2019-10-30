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

  fetchItems(id: string): Observable<any> {
    console.log(id);
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=145500';
    // const url = '../../../../../assets/data/stock/category/category.json';
    // const url = `https://order.dennys.com/api/v1/en/menu`;
    // const url = `https://order.dennys.com/api/v1/en/menu`;
    const url = '../assets/data/stock/menu.json'; // name; products
    const list = [id];
    return this.http.get(url)
      .pipe(
        // tap(data => console.log('_', data)),
        map((data: any) => data.categories),
        /*
         map(data => Object.keys(data).map(k => data[k])),
         map((data: any[]) => data.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)), */
        // map((data: any[]) => data.filter((item) => data.findIndex(t => (t.id === id)) >= 0)),
        map((data: any[]) => data.filter(item => item.name.toLowerCase().includes(id))),
        // map((data: any) => data[0].products),
        // map((data: any) => data.sort(this.sort)),
        // map((data: any[]) => { return [...new Set(data)]; }),
        // distinct((data: any) => data.id),
        tap(data => console.log('_', data)),
        catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
      );
  }
}
