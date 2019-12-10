import { Component, OnInit } from '@angular/core';
import * as fromStock from '../state/';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../interfaces/IItem';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  items$: Observable<IItem[]>;

  constructor(
    private store: Store<fromStock.State>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new AllBasketItemsRequested());
    // this.items$ = this.store.select('selectJokeList')
  }

}
