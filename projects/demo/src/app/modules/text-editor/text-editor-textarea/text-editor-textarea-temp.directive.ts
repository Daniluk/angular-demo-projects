import { Directive, HostListener, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { switchMap, tap, map, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appTextEditorTextareaTemp]'
})
export class TextEditorTextareaTempDirective implements OnInit, AfterViewInit {

  constructor(
    private el: ElementRef,
  ) {

  }

  // @HostListener('click', ['$event.target'])
  // onClick(target) {
  //   console.log('click');

  // }

  ngOnInit() {
    console.log(this.el);
    fromEvent(this.el.nativeElement, 'dblclick')
      .pipe(
        debounceTime(400),
        switchMap((req: any) => {
          const range = document.getSelection().getRangeAt(0);
          const word: string = range.startContainer.textContent
            .slice(range.startOffset, range.endOffset);

          console.log(word, range);
          return of({});
        }),
        // map(data => data),
        // tap(data => console.log(data))
      )
      .subscribe(e => console.log('double click'));
    // const observable = fromEvent(this.el.nativeElement, 'dblclick')
    //   .pipe(
    //     tap(data => console.log('data'))
    //     // debounceTime(1400),
    //     // switchMap((req) => {
    //     //   const range = window.getSelection().getRangeAt(0);
    //     //   const word: string = range.startContainer.textContent
    //     //     .slice(range.startOffset, range.endOffset);
    //     //   if (word.length < 2) {
    //     //     return of({});
    //     //   }
    //     //   console.log(word);
    //     // })
    //   );
  }

  ngAfterViewInit() {
    const observable = fromEvent(this.el.nativeElement, 'dblclick')
      .pipe(
        map(data => data),
        tap(data => console.log(data))
        // debounceTime(1400),
        // switchMap((req) => {
        //   const range = window.getSelection().getRangeAt(0);
        //   const word: string = range.startContainer.textContent
        //     .slice(range.startOffset, range.endOffset);
        //   if (word.length < 2) {
        //     return of({});
        //   }
        //   console.log(word);
        // })
      );
  }

  // @HostListener('dblclick', ['$event.target'])
  // onDblClick(target) {
  //   // target.setSelectionRange(2, 50);
  //   const range = document.getSelection().getRangeAt(0);
  //   const word: string = range.startContainer.textContent
  //     .slice(range.startOffset, range.endOffset);
  //   console.log('dblclick', range.startOffset, range.endOffset);
  // }
}
