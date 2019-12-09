import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, reduce, toArray } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient,
  ) {

  }

  fetchItemsWidthMedia(currentLang: string, key: number): Observable<any> {
    const itemsByKey$ = this.fetchItemsByKey('en', key);
    const itemsProductsMedia$ = this.fetchItemsProductsMedia('en');

    return forkJoin({ itemsByKey$, itemsProductsMedia$ })
      .pipe(
        map((data) =>
          data.itemsByKey$.products.map(elem => {
            const media = data.itemsProductsMedia$.find((obj: any) => obj.oloIds.indexOf(`${elem.chainproductid}`) >= 0) || {};

            return {
              id: elem.chainproductid,
              name: elem.name,
              cost: elem.cost === 0 ? 'Price Varies' : `$ ${elem.cost}`,
              media: media.media
            };
          })
        ),
        map(data => data.filter(item => item.media !== undefined)),
        // tap(data => console.log('_', data)), 'Price Varies'
      );
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

  fetchItemsByKey(currentLang: string, id: number): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
    const url = '../../../../../assets/data/stock/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        // tap(data => console.log('_', data)),
        map((data: any[]) => data.find(item => item.id === Number(id))),
      );
  }

  fetchItemsProductsMedia(currentLang: string): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
    const url = './assets/data/stock/en/menu.json';
    // const url = 'https://order.dennys.com/api/v1/en/menu';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.products),
        map(data => Object.keys(data).map(k => data[k])),
        map((data: any) => data.sort(this.sort)),
      );
  }

  getKey(category: string): Observable<any> {
    // const url = 'https://order.dennys.com/api/v1/en/menu';
    const url = './assets/data/stock/en/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.lookups.categories),
        // tap(data => console.log(data)),
        map(data => Object.entries(data).map(([key, value]) => Object.assign({}, { key, value }))),
        // map(data => Object.entries(data).map(([key, value]) => console.log(key, value))),
        // map(data => {
        //   console.log('_', data);
        // }),
        map((data: any[]) => data.find(item => item.value === category)),
        tap(data => console.log(data)),
      );
  }
  // https://order.dennys.com/api/v1/en/menu

}
