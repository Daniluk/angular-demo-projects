import { Directive, ElementRef } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromBooks from '../state';
import { SearchBooks } from '../state/actions/books.actions';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  constructor(
    private el: ElementRef,
    private store: Store<fromBooks.State>
  ) {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      debounceTime(500),
      distinctUntilChanged(),
      // tap((data: any) => console.log('data', data.target.value)),
      switchMap((data: any) => {
        // console.log('data', data.target.value);
        const value = data.target.value || of([]);
        console.log('data', value);
        if (value.length > 0) {
          this.store.dispatch(new SearchBooks(value));
        }

        return value;
      }),
    ).subscribe(() => {

    });
  }

}
