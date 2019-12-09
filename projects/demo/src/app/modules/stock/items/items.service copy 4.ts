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
    const url = 'https://order.dennys.com/api/v1/en/menu';
    const array: any[] = [];
    /*
    Rx.Observable.of([{id: 1, name: 'first grader'}, {id: 2, name: 'second grader'}])
      .map(res => res.map( student => Object.assign({}, student, {grade: student.name})))
      .subscribe(x => console.log(x));

        const object1 = { 14875: 'value-menu', 14876: 'appetizers-and-soups', 14877: 'beverages' }
    const array = [];
    for (let [key, value] of Object.entries(object1)) {
      array.push({ id: key, test: value });
      console.log(`${key}: ${value}`);
    }
    console.log(array);
     */
    return this.http.get(url)
      .pipe(
        map((data: any) => data.lookups.categories),
        tap(data => console.log(data)),
        map(data => Object.entries(data).map(([key, value]) => Object.assign({}, {  key, value }))),
        // map(data => Object.entries(data).map(([key, value]) => console.log(key, value))),
        map(data => {
          console.log('_', data);

          // return Object.keys({data});
          //
          // result = result.lookups.categories;
          // const data = [];
          // result.forEach(element => {
          //   data.push({ value: element.name, viewValue: element.name });
          // });
          // return data;
        }),
        // map((data: any) => data.lookups.categories),
        // map(data => Object.assign({}, data)),
        // map(items => {            // <== new way of chaining
        //   return items.map(a => {
        //     const data = a.payload.val();
        //     const key = a.payload.key;
        //     return { key, data };           // or {key, ...data} in case data is Obj
        //   });
        // }),
        // toArray(),
       //  tap(data => console.log(data))

      );
    // .pipe(
    //

    // map(data => Object.assign({}, data)),
    // ?
    // map(action => Object.keys(array).map(i => action)),
    // map(action => Object.assign({ key: action.key, ...array.map((item) => ({ item })) })),
    // map(data => Object.assign({}, ...array.map(({ id, name }) => ({ [id]: { name } })))), // ?

    // toArray(),
    // map(action => Object.assign( {key: action.key, ...action.payload.val()} ) ),
    // this.buttons = Object.assign(TEXT_EDITOR_TOOLBAR.TYPE, ...array.map(({ id, name, foo }) => ({ [id]: { name, foo } })));
    //  reduce((result, key) => Object.assign(result, { [key]: object[key] }), {})
    // map(data => Object.keys(data).map(k => data[k])),

    // const peopleArray = Object.keys(array).map(i => array[i])
    // map((data: any[]) => data.find(item => item.id === Number(category))),
    //
    // Object.keys(object)

    // reduce((result, key, val) => Object.assign(result, { key, val }), {}),
    // toArray(),
    //   tap(data => console.log(data))
    // );
  }
  // https://order.dennys.com/api/v1/en/menu

}
