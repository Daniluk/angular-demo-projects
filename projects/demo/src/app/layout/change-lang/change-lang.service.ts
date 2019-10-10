import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';

@Injectable({
  providedIn: 'root'
})
export class ChangeLangService {

  setLang$: Observable<any>;
  private setLangSubject = new Subject<any>();

  constructor() {
    this.setLang$ = this.setLangSubject.asObservable();
  }

  setLang(data?: ISettings): void {
    if (data === null) {
      return;
    }
    this.setLangSubject.next(data);
  }
}
