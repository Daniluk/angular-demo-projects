import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: any;
  items: any;

  constructor(
    private service: ItemService,
    private stockService: StockService,
  ) {

  }

  ngOnInit() {
    this.item = this.stockService.item;
    if (this.item) {
      // this.service.fetchItems(this.item.id);
      console.log(this.item);
      const observable = this.service.fetchItems(Number(this.item.key)); // 'menu'
      const subscribe = observable.subscribe((res: any[]) => {
        console.log(res.length);
        this.items = res;
        //  this.cdr.detectChanges();
        subscribe.unsubscribe();
      },
        (err) => console.log(err),
      );
    }
  }
}
