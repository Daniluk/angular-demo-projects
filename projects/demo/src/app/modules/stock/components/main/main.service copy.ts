import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, toArray, switchMap, filter, distinct, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

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

  fetchItems_(currentLang: string): any {
    const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`;
    return ajax({ url }).pipe(
      tap(data => console.log('_', data))
      // map((data) => data),
      // map((data: any[]) => data),
      // catchError(handleError),
      // tap((items: any) => console.log(items)) of({})
    );
  }

  fetchItems(currentLang: string): Observable<any> {
    // const url = '../../../../../assets/data/stock/menu.json';
    // const url = '../../../../../assets/data/stock/menu.json';
    // const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`;
    // const url = `https://order.dennys.com/api/v1/${currentLang}/menu/category`;
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=185900';
    // const url = `${CONFIG.PORTAL.API_URL}/${typeMaterial}/search?language=${currentLang}&page=${page}&limit=${limit}&sort=id-DESC`;
    const url = '../../../../../assets/data/stock/category/category.json';
    const list = ['featured', 'slams', 'pancakes', 'omelettes', 'breakfast-faves'];
    return this.http.get(url)
      .pipe(
        map(data => Object.keys(data).map(k => data[k])),
        // map(data => data),
        // map((data: any) => data.categories),
        // map(data => Object.keys(data).map(k => data[k])),
        // map((data: any) => data.sort(this.sort)),
        map((data: any[]) => data.filter(item => list.indexOf(item.id) >= 0)),
        // map((data: any[]) => data.filter((item, index) => data.indexOf(item.id) === index)),
        map((data: any[]) => data.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)),
        map((data: any) => data.sort(this.sort)),
        // map((data: any[]) => { return [...new Set(data)]; }),
        // distinct((data: any) => data.id),
        tap(data => console.log('_', data)),
        catchError(_ => of({})) // catchError(_ => of('no more requests!!!'))
        // ? take(2)
        // map(data => data),
        // switchMap((data: any) => data),
        // toArray(),
        // tap(data => console.log('_', data))
        // map((response: any) => {
        //   response = response;
        //   response.items.map(item => {
        //     item.type = response.type;
        //     item.date_created = item.date_created.split(' ')[0];
        //     item.titleLatinized = this.appLatinizePipe.transform(this.titlePipe.transform(item.title));
        //   });

        //   return response;
        // }),
        // catchError()
      );
  }
}
