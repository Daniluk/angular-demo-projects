import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, toArray, switchMap, filter, mergeMap, pluck, take } from 'rxjs/operators';
import { IData } from '../../text-editor/interfaces/IData';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient,
  ) {

  }

  fetchItemsWidthMedia02(currentLang: string, key: number): Observable<any> {
    const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
    const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

    const obsItems: Observable<any> = obsFetchItemsByKey.pipe(
      map(data => data[0].products),
      // switchMap((data: any[]) => data),
      // pluck('chainproductid'),
      // toArray(),
      // tap(data => data),

    );

    // const obsItems: Observable<any> = obsFetchItemsByKey.pipe(
    //   map(data => data[0].products),
    //   tap(data => data),
    //   switchMap(data => {
    //     console.log(data);
    //     // map(data => data.filter(item => item.chainproductid)),
    //     return obsFetchItemsProductsMedia.pipe(          // tap(item => console.log(item)),
    //       // tap(data => data),
    //       map(media => {
    //         console.log('_33', media.filter((obj: any) => {
    //           return obj.oloIds.indexOf('24710') >= 0;
    //         }
    //         ));
    //         const images = media.filter((obj: any) => {              // console.log('_28', data))
    //           return obj.oloIds.indexOf('24710') >= 0;
    //         }
    //         );
    //         const item = {
    //           data,
    //           media
    //         };
    //         return item;
    //       })
    //     );
    //   }),
    // );
    return obsItems;
  }

  fetchItemsWidthMedia(currentLang: string, key: number): Observable<any> {
    const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
    const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

    const obsItems: Observable<any> = obsFetchItemsByKey.pipe(
      map(data => data[0].products),
      mergeMap(data => {
        console.log('_24', data);        // map(data => data.filter(item => item.chainproductid)),
        return obsFetchItemsProductsMedia.pipe(          // tap(item => console.log(item)),
          map(media => {
            console.log('_29', media.filter((obj: any) => {
              return obj.oloIds.indexOf('24710') >= 0;
            }
            ));
            const images = media.filter((obj: any) => {              // console.log('_28', data))
              return obj.oloIds.indexOf('24710') >= 0;
            }
            );
            const item = {
              data,
              media
            };
            return item;
          })
        );
      }),
    );
    return obsItems;
  }

  fetchItemsWidthMedia_(currentLang: string, key: number): Observable<any> {
    const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
    const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

    const obsItems: Observable<any> = obsFetchItemsByKey.pipe(
      tap(data => console.log('_22', data[0].products)),
      mergeMap((itemsByKey) => {
        console.log('_24', itemsByKey[0].products);
        return obsFetchItemsProductsMedia.pipe(
          map(product => {
            const item = {
              items: itemsByKey[0].products,
              media: product.filter((obj: any) => {
                console.log('_', obj.oloIds.indexOf('24710') >= 0, itemsByKey[0].products);
                return obj.oloIds.indexOf('24710') >= 0;
              }
              )
              // media: product.filter(obj => obj.oloIds[0] === '24710')
            };
            return item;
          }),
          tap(data => console.log('_', data))
        );
      }),
    );
    return obsItems;
  }
  // https://order.dennys.com/api/v1/en/menu/category?ts=183700

  fetchItems_(currentLang: string): Observable<any> {
    console.log('_', 'data');
    const url = '../../../../../assets/data/stock/en/menu.json';
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=183700';
    // const url = `${CONFIG.PORTAL.API_URL}/${typeMaterial}/search?language=${currentLang}&page=${page}&limit=${limit}&sort=id-DESC`;

    return this.http.get(url)
      .pipe(
        // of(data => data),
        // map(data => Object.keys(data).map(k => data[k])),
        map((data: any) => data.categories),
        // switchMap((data: any) => data),
        // toArray(),
        tap(data => console.log('_', data))
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
    // console.log('_', typeof id);
    // const url = 'https://order.dennys.com/api/v1/en/menu?ts=145500';
    const url = '../../../../../assets/data/stock/menu.json';
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=183700';
    // const url = `${CONFIG.PORTAL.API_URL}/${typeMaterial}/search?language=${currentLang}&page=${page}&limit=${limit}&sort=id-DESC`;
    return this.http.get(url)
      .pipe(
        // tap(data => console.log('_', data)),
        map((data: any) => data.categories),
        tap(data => console.log('_', data)),
        // map(data => Object.keys(data).map(k => data[k])),
        // map((data: any) => data.sort(this.sort)),
        map((data: any[]) => data.filter(item => item.id === Number(id))),
        // tap(data => console.log('_', data)),
      );
  }

  fetchItemsProductsMedia(currentLang: string): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
    // const url = 'https://order.dennys.com/api/v1/en/menu?ts=145500';
    const url = '../../../../../assets/data/stock/en/menu.json';
    // const listToDelete = [id];
    // const url = 'https://order.dennys.com/api/v1/en/menu/category?ts=183700';
    // const url = `${CONFIG.PORTAL.API_URL}/${typeMaterial}/search?language=${currentLang}&page=${page}&limit=${limit}&sort=id-DESC`;
    // console.log('_', 'data');
    return this.http.get(url)
      .pipe(
        map((data: any) => data.categories),
        // tap(data => console.log('_', data)),
        map(data => Object.keys(data).map(k => data[k])),
        map((data: any) => data.sort(this.sort)),
        // map((data: any[]) => data.filter(item => listToDelete.indexOf(item.id) > 0)),
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
