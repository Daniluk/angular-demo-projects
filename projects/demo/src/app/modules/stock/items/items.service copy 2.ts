// import { Injectable } from '@angular/core';
// import { Observable, of, forkJoin, from } from 'rxjs';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError, map, tap, toArray, switchMap, filter, mergeMap, pluck, take } from 'rxjs/operators';
// import { IData } from '../../text-editor/interfaces/IData';

// @Injectable({
//   providedIn: 'root'
// })
// export class ItemsService {

//   constructor(
//     private http: HttpClient,
//   ) {

//   }

//   fetchItemsWidthMedia(currentLang: string, key: number): Observable<any> {
//     const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
//     const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

//     return obsFetchItemsByKey
//       .pipe(
//         map(data => data[0].products),
//         tap(data => console.log('_', data)),
//         mergeMap((result: any) => {
//           const allIds = result.map(obj => of(obj));
//           // console.log('_', allIds);
//           return forkJoin([...allIds, obsFetchItemsProductsMedia]).pipe(
//             // tap(data => console.log('_', data, data[data.length - 1])),
//             map(data => {
//               const array = [];
//               data.forEach(element => {
//                 // console.log('_', element);
//                 if (element.chainproductid) {

//                   // console.log('_49', data[data.length - 1].filter((obj: any) => {
//                   //   return obj.oloIds.indexOf(`${element.chainproductid}`) >= 0;
//                   // }));

//                   const media = data[data.length - 1].filter((obj: any) => {
//                     return obj.oloIds.indexOf(`${element.chainproductid}`) >= 0;
//                   });

//                   const item = {
//                     id: element.chainproductid,
//                     name: element.name,
//                     cost: element.cost,
//                     media: media[0].media
//                   };
//                   // item.media = item.media.flat();
//                   array.push(item);
//                 }
//               });

//               return array;
//             })
//           );
//         })
//       );
//   }
//   fetchItemsWidthMedia05(currentLang: string, key: number): Observable<any> {
//     const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
//     const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

//     return obsFetchItemsByKey
//       .pipe(
//         map(data => data[0].products),
//         tap(data => console.log('_', data)),
//         mergeMap((result: any) => {
//           const allIds = result.map(obj => of(obj.chainproductid));
//           // console.log('_', allIds);
//           return forkJoin([...allIds, obsFetchItemsProductsMedia]).pipe(
//             // tap(data => console.log('_', data, data[data.length - 1])),
//             map(data => {
//               const array = [];
//               data.forEach(element => {
//                 if (typeof element === 'number') {
//                   // console.log('_', element);
//                   console.log('_49', data[data.length - 1].filter((obj: any) => {
//                     return obj.oloIds.indexOf(`${element}`) >= 0;
//                   }));

//                   const media = data[data.length - 1].filter((obj: any) => {
//                     return obj.oloIds.indexOf(`${element}`) >= 0;
//                   });
//                   // const arr = media.flat();
//                   const item = {
//                     id: element,
//                     media: media[0].media
//                   };
//                   // item.media = item.media.flat();
//                   array.push(item);
//                 }
//               });

//               return array;
//             })
//           );
//         })
//       );
//   }

//   //  {data: [Array(6)], media: [Array(220)]}
//   fetchItemsWidthMedia03(currentLang: string, key: number): Observable<any> {
//     const obsFetchItemsByKey = this.fetchItemsByKey('en', key);
//     const obsFetchItemsProductsMedia = this.fetchItemsProductsMedia('en');

//     const obsItems: Observable<any> = obsFetchItemsByKey.pipe(
//       map(data => data[0].products),
//       mergeMap(data => {
//         return forkJoin(obsFetchItemsProductsMedia).pipe(
//           map(media => {
//             console.log('_28', `${data[1].chainproductid}`, media[0].filter((obj: any) => {
//               return obj.oloIds.indexOf(`${data[1].chainproductid}`) >= 0;
//             }
//             ));

//             const item = {
//               data,
//               media: media[0]
//             };
//             return item;
//           })
//         );
//       }),
//     );
//     return obsItems;
//   }

//   private sort(a: any, b: any): any {
//     if (a.sortOrder < b.sortOrder) {
//       return -1;
//     }
//     if (a.sortOrder > b.sortOrder) {
//       return 1;
//     }
//     return 0;
//   }

//   fetchItemsByKey(currentLang: string, id: number): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
//     const url = '../../../../../assets/data/stock/menu.json';
//     return this.http.get(url)
//       .pipe(
//         map((data: any) => data.categories),
//         // tap(data => console.log('_', data)),
//         map((data: any[]) => data.filter(item => item.id === Number(id))),
//       );
//   }

//   fetchItemsProductsMedia(currentLang: string): Observable<any> { // , typeMaterial: string, page = 1, limit = 10
//     const url = './assets/data/stock/en/menu.json';
//     // const url = 'https://order.dennys.com/api/v1/en/menu';
//     return this.http.get(url)
//       .pipe(
//         map((data: any) => data.products),
//         map(data => Object.keys(data).map(k => data[k])),
//         map((data: any) => data.sort(this.sort)),
//       );
//   }

//   fetchItemsWidthMedia04(currentLang: string, key: number): Observable<any> {
//     const url = 'https://api.datamuse.com/words?ml=find';
//     return this.http.get(url)
//       .pipe(
//         map((data: IData[]) => data.filter(item => item.tags && item.tags.includes('syn'))),
//         switchMap((data: IData[]) => data),
//         tap(data => console.log('_', data)),
//         pluck('word'),
//         take(10),
//         toArray(),
//         catchError((err, caught) => caught),
//       );
//   }
// }
