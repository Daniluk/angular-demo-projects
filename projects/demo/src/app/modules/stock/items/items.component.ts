import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { of, from, pairs } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
    console.log(uri); // this.router.url.split('/').length
    // this.translate.currentLang = currentLang;

    /* this.service.getKey(uri)
      .subscribe(data => {
        console.log(data);
        this.stockService.category = {
          key: data.key
        };
        this.fetchItems();
      }
      ); */

    this.service.fetchItemsWidthMediaTemp(uri)
      .subscribe(data => {
        console.log(data);
        this.stockService.category = {
          key: data.id
        };
        this.fetchItems();
        // this.items = data;
      });
  }

  ngOnInit() {
    // from([1, 2, 3]).pipe(
    //   map(data => data * 2),
    //   catchError(error => from(error))
    // ).subscribe(console.log);
  }

  onClick(item): void {
    const path = `${item.id}`;
    this.stockService.item = item;
    this.router.navigate([path], { relativeTo: this.activatedRoute.parent });
  }

  private fetchItems(): void {
    if (this.stockService.category) {
      const key = this.stockService.category.key;
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
  }
}
