import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTopService {

  setMenu$: Observable<any>;
  private setMenuSubject = new Subject<any>();
  items: any[];

  constructor(

  ) {
    this.setMenu$ = this.setMenuSubject.asObservable();
  }

  setMenu(data?: any[]): void {
    if (data === null) {
      return;
    }
    this.setMenuSubject.next(data);
  }
}
