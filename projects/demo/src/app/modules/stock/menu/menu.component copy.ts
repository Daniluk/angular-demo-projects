import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, map, tap, toArray, switchMap, filter, pluck, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any[];

  constructor(
    private service: MenuService,
    private stockService: StockService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const ids: Observable<any> = this.service.fetchItems('en');
    const category: Observable<any> = this.service.fetchCategory('en');
    const array = [31782, 20802, 20798, 20801, 20800, 20805, 27587, 20806, 20808, 27588,
      20811, 27663, 20809, 20807, 20812, 27218, 27219, 27221];
    const itemsObs = ids.pipe(
      mergeMap(id => {
        return category.pipe(
          // tap(data => console.log(ids)),
          map(data => Object.keys(data).map(key => ({ key, values: data[key] }))),
          tap(data => console.log(data[0].key)),
          switchMap((data: any) => {
            // console.log(data);
            return data.filter((item) => {
              // console.log(item.key, array.indexOf(Number(item.key)) >= 0);
              return array.indexOf(Number(item.key)) >= 0;
              // item.key = 20805;
            });
          }),
          toArray()
        );
      })
    );

    itemsObs.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit_() {
    const observable = this.service.fetchItems('en');
    const subscribe = observable.subscribe((res: any[]) => {
      console.log(res.length);
      // this.items = res;
      //  this.cdr.detectChanges();
      subscribe.unsubscribe();
    },
      (err) => console.log(err),
    );
  }

  onClick(item): void {
    const path = `menu/category/${item.name}`;
    this.stockService.item = item;
    this.router.navigate([path], { relativeTo: this.activatedRoute.parent });
  }

}
