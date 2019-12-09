import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as fromBooks from './../state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query = '';
  searching = false;

  constructor(
    private store: Store<fromBooks.State>
  ) {

    this.store.select(state => state.books.books);
      // .subscribe(data => {
      //   console.log(data);
      //   if (data) {
      //     this.searching = false;
      //   }
      //   // else {
      //   //   this.searching = true;
      //   // }
      // });

    this.store.select(state => state.books.query);
      // .subscribe(data => {
      //   console.log(' query', data);
      //   // if (data !== null) {
      //   //   this.searching = false;
      //   // }
      //   this.searching = true;
      // });
  }

  ngOnInit() {
    // this.searching = false;
  }
}
