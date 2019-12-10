import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any[];
  constructor(
    private service: ItemsService,
    private stockService: StockService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const currentLang = this.router.url.split('/').splice(2, 1)[0];
    console.log(currentLang);
    const array = this.router.url.split('/');
    const uri = encodeURI(array[array.length - 1].toString());
    console.log(uri, this.router.url.split('/').length);
    // this.translate.currentLang = currentLang;
    // const observable = this.service.getKey(uri);
    // observable
    this.service.fetchItemWidthMedia(uri)
      .subscribe(data => console.log(data));

    // this.test();
  }

  test() {
    // of(1, 2, 3).pipe(map(x => 2 * x));

    const obs = of({
      0: { data: 'lorem' },
      1: { data: 'lorem' },
      2: { data: 'lorem' }
    });
    obs.pipe(
      map(data => Object.keys(data).map(k => data[k]))
    )
      .subscribe(data => console.log(data));

    const object1 = { 14875: 'value-menu', 14876: 'appetizers-and-soups', 14877: 'beverages' };
    const array = [];
    for (const [key, value] of Object.entries(object1)) {
      array.push({ id: key, test: value });
      console.log(`${key}: ${value}`);
    }
    console.log(array);

    // const obs01 = of({ 14875: 'value-menu', 14876: 'appetizers-and-soups', 14877: 'beverages' });
    // obs01.pipe(map(items => {
    //   return items.map(a => {
    //     const data = a.payload.val();
    //     const key = a.payload.key;
    //     return { key, data };           // or {key, ...data} in case data is Obj
    //   });
    // })).subscribe(data => console.log(data));


    // from([1, 2, 3])
    //   .subscribe(
    //     next => console.log('next:', next),
    //     err => console.log('error:', err),
    //     () => console.log('the end'),
    //   );

  }
  ngOnInit() {
    const key = this.stockService.category.key;
    console.log(key);
    const observable = this.service.fetchItemsWidthMedia('en', key);
    const subscribe = observable.subscribe((res: any[]) => {
      console.log(res);
      this.items = res;
      //  this.cdr.detectChanges();
      subscribe.unsubscribe();
    },
      (err) => console.log(err),
    );
  }

  onClick(item): void {
    const path = `${item.id}`;
    this.stockService.item = item;
    this.router.navigate([path], { relativeTo: this.activatedRoute.parent });
  }
}
