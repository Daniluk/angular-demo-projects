import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {
  private setCommandSubject = new Subject<any>();
  private setSynonymsSubject = new Subject<any>();
  private setSynonymSubject = new Subject<any>();
  private setFontSubject = new Subject<any>();
  private setFontSizeSubject = new Subject<number>();
  private setFontColorSubject = new Subject<any>();
  private setToolBarDefaultSubject = new Subject<any>();
  private setToolBarButtonClickedSubject = new Subject<any>();

  setCommand$: Observable<any>;
  setSynonyms$: Observable<any>;
  setSynonym$: Observable<any>;
  setFont$: Observable<any>;
  setFontSize$: Observable<number>;
  setFontColor$: Observable<string>;
  setToolBarDefault$: Observable<any>;
  setToolBarButtonClicked$: Observable<any>;

  constructor() {
    this.setCommand$ = this.setCommandSubject.asObservable();
    this.setSynonyms$ = this.setSynonymsSubject.asObservable();
    this.setSynonym$ = this.setSynonymSubject.asObservable();
    this.setFont$ = this.setFontSubject.asObservable();
    this.setFontSize$ = this.setFontSizeSubject.asObservable();
    this.setFontColor$ = this.setFontColorSubject.asObservable();
    this.setToolBarDefault$ = this.setToolBarDefaultSubject.asObservable();
    this.setToolBarButtonClicked$ = this.setToolBarButtonClickedSubject.asObservable();
  }

  setCommand(data?: any): void {
    if (data === null) {
      return;
    }

    this.setCommandSubject.next(data);
  }

  setSynonyms(data?: any): void {
    if (data === null) {
      return;
    }

    this.setSynonymsSubject.next(data);
  }

  setSynonym(data?: any): void {
    if (data === null) {
      return;
    }

    this.setSynonymSubject.next(data);
  }

  setFont(data: string): void {
    if (data === null) {
      return;
    }

    this.setFontSubject.next(data);
  }

  setFontSize(data?: number): void {
    if (data === null) {
      return;
    }

    this.setFontSizeSubject.next(data);
  }

  setFontColor(data?: number): void {
    if (data === null) {
      return;
    }

    this.setFontColorSubject.next(data);
  }

  setToolBarDefault(): void {
    this.setToolBarDefaultSubject.next('default');
  }

  setToolBarButtonClicked(tag): void {
    this.setToolBarButtonClickedSubject.next(tag);
  }
}
