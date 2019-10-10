import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FooterService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getItems(currentLang: string): Observable<any> {
    const url = `assets/footer/${currentLang}.json`;
    return this.http.get(url)
      .pipe(map(data => data
      ));
  }
}
