import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTopService {

  routes: any[];
  setMenu$: Observable<any>;
  private setMenuSubject = new Subject<any>();

  constructor() {
    // this.routes = ROUTES.items;
    this.setMenu$ = this.setMenuSubject.asObservable();
  }

  setMenu(data?: any[]): void {
    // console.log('MenuTopService', data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    if (data === null) {
      // this.routes = ROUTES.items;
      return;
    }
    this.setMenuSubject.next(data);
  }
}
