import { Directive, ElementRef, EventEmitter } from '@angular/core';
import { fromEvent, empty, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromBooks from '../state';
import { AllBooksRequested, SearchBooks } from '../state/actions/books.actions';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  search = new EventEmitter<string>();
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
        this.store.dispatch(new SearchBooks(value));
        return value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      // tap((data: any) => console.log('data', data)),
      // catchError(() => of([]))
      // catchError((error) => of({ error: true, message: error.message }))
    ).subscribe((res: string) => {
      // console.log('data', res);
    });
  }

  // private addListenerKeyUp(): void {
  //   const observable = fromEvent(this.el.nativeElement, 'keyup').pipe(

  //       debounceTime(400),
  //       switchMap((data: any) => {
  //         const value = data.target.value || of([]);
  //         this.store.dispatch(new SearchBooks(value));
  //         return false;
  //         // return this.service.fetchItems(word);
  //       })
  //     );
  //   observable.subscribe((res: any[]) => {
  //     // const items: ICustomer[] = res as ICustomer[];
  //     // this.customersService.setSearch(items);
  //   },
  //     (err) => console.log(err),
  //   );
  // }

  private addContextInfo() {
    return 'error found';
  }
  /*
  @HostListener('keyup', ['$event.target']) onKeyUp(target) {
    this.text = target.value;
    // const observable = fromEvent(target, 'input').pipe(
    // const observable = of(this.text).pipe(
    //
    //   tap((data: any) => console.log('data', data)),
    // );
    // const subscription = observable.
    //   subscribe((data) => {
    //     debounceTime(10400),
    //       console.log(data);
    //     // subscription.unsubscribe();
    //   });

    // if (text) {
    //   // this.fetchItems(text);
    // }
  }
  */
}
