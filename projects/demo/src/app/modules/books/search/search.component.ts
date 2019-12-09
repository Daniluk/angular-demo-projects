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

  constructor(
    private store: Store<fromBooks.State>
  ) {

  }

  ngOnInit() {

  }
}
