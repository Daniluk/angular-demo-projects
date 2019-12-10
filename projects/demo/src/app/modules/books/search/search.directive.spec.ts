import { SearchDirective } from './search.directive';
import { ElementRef } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import * as fromBooks from './../state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('SearchDirective', () => {

  it('should create an instance', () => {
    inject([ElementRef, Store],
      (elementRef: ElementRef, store: Store<fromBooks.State>) => {
        const directive = new SearchDirective(elementRef, store);

        expect(directive).toBeTruthy();
      });
  });
});
