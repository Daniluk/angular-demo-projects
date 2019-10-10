import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getItems(currentLang: string): Observable<any> {
    // console.log(currentLang);
    const url = `assets/data/sidebar/${currentLang}.json`;
    return this.http.get(url)
      .pipe(map(data => data
      ));
  }
}
