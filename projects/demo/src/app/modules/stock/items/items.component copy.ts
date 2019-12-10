import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';

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
    // console.log(this.stockService.category);
    // this.items = this.stockService.item;
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

  ngOnInit_() {
    const key = this.stockService.category.key;
    console.log(key);
    const observable = this.service.fetchItemsByKey('en', key);
    const subscribe = observable.subscribe((res: any[]) => {
      console.log(res);
      this.items = res[0];
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
