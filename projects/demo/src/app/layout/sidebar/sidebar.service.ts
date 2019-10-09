import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CONFIG } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getItems(currentLang: string): Observable<any> {
    const projectName = CONFIG.NAME_PROJECT;
    const url = `assets/json-${projectName}/data/sidebar/${currentLang}.json`;
    return this.http.get(url)
      .pipe(
        map(data => data),
        catchError(this.handleError),
      );
  }

  /**
   *
   * @param rawError
   * returns error object from HttpErrorResponse instance
   */
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
