import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, pluck, switchMap, take, toArray, tap } from 'rxjs/operators';
import { IData } from '../interfaces/IData';
import { CONFIG } from './../config/config';

@Injectable({
  providedIn: 'root'
})
export class TextEditorTextareaService {
  constructor(
    private http: HttpClient,
  ) {

  }

  public fetchItems(value: string): Observable<string[]> {
    const url = `${CONFIG.PORTAL.API_URL}/words?ml=${value}`;
    return this.http.get(url)
      .pipe(
        map((data: IData[]) => data.filter(item => item.tags && item.tags.includes('syn'))),
        switchMap((data: IData[]) => data),
        tap(data => console.log('_', data)),
        pluck('word'),
        take(10),
        toArray(),
        map((data: string[]) => { data.push(value); return data; }),
        catchError((err, caught) => caught),
      );
  }

}
