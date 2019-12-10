import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, map, tap, toArray, switchMap, filter, pluck, mergeMap, groupBy, } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStock from '../state/';
import { IItem } from '../interfaces/IItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any[];
  items$: Observable<any[]>;

  constructor(
    private service: MenuService,
    private stockService: StockService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStock.State>,
  ) {
    const sub = this.store.pipe(
      tap(data => console.log('___', data)),

    ).subscribe(items => console.log);
  }

  private sort(a: any, b: any): any {
    if (a.values.sortOrder < b.values.sortOrder) {
      return -1;
    }
    if (a.values.sortOrder > b.values.sortOrder) {
      return 1;
    }
    return 0;
  }

  ngOnInit_() {
    // this.store.dispatch(new AllBasketItemsRequested());
    this.items$ = this.store.select('selectJokeList');

    const ids: Observable<any> = this.service.fetchItems('en');

    const category: Observable<any> = this.service.fetchCategory('en');
    // tslint:disable-next-line: max-line-length
    // let array = [31782, 20802, 20798, 20801, 20800, 20805, 27587, 20806, 20808, 27588, 20811, 27663, 20809, 20807, 20812, 27218, 27219, 27221];
    let array = [];
    const items$ = ids.pipe(
      // tap(data => console.log(data)),
      map(data => array = data),
      mergeMap(id => {
        return category.pipe(
          tap(data => console.log(data)),
          map(data => Object.keys(data).map(key => ({ key, values: data[key] }))),
          // tap(data => console.log(data[0].key)),
          // tap(data => console.log(array)),
          switchMap((data: any) => {
            return data.filter((item) => {
              console.log(data);
              return array.indexOf(Number(item.key)) >= 0;
            });
          }),
          toArray(),
          map((data: any) => data.sort(this.sort)),
        );
      })
    );

    items$.subscribe(data => {
      this.items = data;
      console.log(data);

    });
  }

  ngOnInit() {
    const ids: Observable<any> = this.service.fetchItems('en');
    const category: Observable<any> = this.service.fetchCategory('en');
    let array = [];
    this.items$ = ids.pipe(
      tap(data => console.log(data)),
      map(data => array = data),
      mergeMap(id => {
        // console.log(id);
        return category.pipe(
          tap(data => console.log(data)),
          map(data => Object.keys(data).map(key => ({ key, values: data[key] }))),
          switchMap((data: any) => {
            return data.filter((item) => {
              // console.log(item.key);
              return array.indexOf(Number(item.key)) >= 0;
            });
          }),
          toArray(),
          map((data: any) => data.sort(this.sort)),
          tap(data => console.log(data)),
        );
      }),
      tap(data => console.log(data)),
    );
  }

  onClick(category): void {
    console.log(category);
    const path = `category/${category.values.id}`;
    this.stockService.category = category;
    this.router.navigate([path], { relativeTo: this.activatedRoute.parent });
  }
}
