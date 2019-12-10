import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, reduce, toArray, switchMap, pluck, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private cache$: Observable<any>;

  constructor(
    private http: HttpClient,
  ) {
    this.cache$ = this.fetchMenu();
  }

  fetchItemsWidthMediaTemp(category: string, currentLang: string = 'en'): Observable<any> {
    const items$ = this.fetchItemsTemp('en');
    const categories$ = this.fetchCategoryTemp(currentLang);
    const itemsProductsMedia$ = this.fetchItemsProductsMedia('en');
    // const item = categories$.pipe(
    //   tap(value => console.log('_ categories', value)),
    // ).subscribe(data => console.log('categories'));
    return forkJoin({ items$, categories$ }).pipe(
      map((data) =>
        data.items$.find(obj => {
          console.log('_', category, obj.name.toLowerCase());
          return obj.name.toLowerCase() === category;

        }
        )
        // tap(data => console.log('_', data)),
        // map((data: any) => data),
        // tap(data => console.log('_', data)),
      )
    );
  }

  fetchItems(currentLang: string): Observable<any> {
    // does not have  image
    const url = 'assets/data/stock/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        tap(data => console.log('_', data)),
        switchMap((data: any) => data),
        pluck('id'),
        toArray(),
        tap(data => console.log('_', data)),
      );
  }

  fetchItemsTemp(currentLang: string): Observable<any> {
    // does not have  image
    const url = 'assets/data/stock/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        tap(data => console.log('_', data)),
        switchMap((data: any) => data),
        // pluck('id'),
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
        tap(data => console.log('_', data)),

      );
  }

  fetchCategoryTemp(currentLang: string): Observable<any> {
    const url = 'assets/data/stock/category/category.json';
    return this.http.get(url)
      .pipe(
        // map(data => Object.keys(data).map(k => data[k])),
        map(data => Object.keys(data).map(key => ({ key, values: data[key] }))),
        tap(data => console.log('_', data)),

      );
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
              cost: elem.cost === 0 ? 'Price Varies' : `$${elem.cost}`,
              media: media.media
            };
          })
        ),
        map(data => data.filter(item => item.media !== undefined)),
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

  fetchItemsByKey(currentLang: string, id: number): Observable<any> {
    // const url = './assets/data/stock/menu.json';
    const url = 'https://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/menu.json';
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        // tap(data => console.log('_', data)),
        map((data: any[]) => data.find(item => item.id === Number(id))),
      );
  }

  fetchItemsProductsMedia(currentLang: string): Observable<any> {
    return this.cache$
      .pipe(
        map((data: any) => data.products),
        // tap(data => console.log('_', data)),
        map(data => Object.keys(data).map(k => data[k])),
        map((data: any) => data.sort(this.sort)),
      );
  }

  getKey(category: string): Observable<any> {
    return this.cache$
      .pipe(
        map((data: any) => data.lookups.categories),
        tap(data => console.log('_', data)),
        map(data => Object.entries(data).map(([key, value]) => Object.assign({}, { key, value }))),
        map((data: any[]) => data.find(item => item.value === category)),
        // tap(data => console.log(data)),
      )
      ;
  }

  fetchItemWidthMedia(category: string): Observable<any> {
    const url = 'https://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/api/v1/en/menu.json';
    return this.cache$ // this.http.get(url)
      // return ajax({ createXHR, url })
      .pipe(
        map((data: any) => data.categories),
        tap(data => console.log('_', data)),
        pluck(category),
      );
  }

  private fetchMenu(): Observable<any> {
    const url = 'https://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/api/v1/en/menu.json';
    return this.http.get(url); // this.cache$ = this.cache$ ||
    // .pipe(
    //   share()
    // );
  }
}
