import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { CONFIG } from '../../../demo/src/config/config';
import IUser from './interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getItemFromPortblog(item: IUser): Observable<any> {
    const url = ``;
    // const url = `${CONFIG.PORTAL.API_URL}${CONFIG.PORTAL.TYPE.USER_AUTH}username=${item.email}&password=${item.password}`;
    return this.http.get(url)
      .pipe(
        map(response => response),
        catchError(this.handleError),
      );
  }

  private handleError(rawError) {
    let error: any;

    if (rawError instanceof HttpErrorResponse) {
      error = rawError.error || {};
    } else {
      error = rawError.message ? rawError.message : JSON.stringify(rawError);
    }

    return throwError(error);
  }
}
