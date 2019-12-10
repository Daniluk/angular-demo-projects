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

  fetchItems_(currentLang: string): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
    // const url = 'https://order.dennys.com/api/v1/en/menu?ts=145500';
    const url = '../../../../../assets/data/stock/en/menu.json';
    const listToDelete = ['appetizers'];
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=183700';
    // const url = `${CONFIG.PORTAL.API_URL}/${typeMaterial}/search?language=${currentLang}&page=${page}&limit=${limit}&sort=id-DESC`;
    console.log('_', 'data');
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        tap(data => console.log('_', data)),
        map(data => Object.keys(data).map(k => data[k])),
        // map((data: any) => data.sort(this.sort)),
        map((data: any[]) => data.filter(item => listToDelete.indexOf(item.id) > 0)),
        // map((data: any[]) => data.filter(item => item.id.includes('featured'))),
        // obj => listToDelete.indexOf(obj.id) === -1
        /// filter(obj => obj.id.includes('appetizers')),
        // map(data => this.removeById(fromItems, id)),
        // switchMap((data: any) => data),
        // toArray(),
        // tap(data => console.log('_', data)),
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
