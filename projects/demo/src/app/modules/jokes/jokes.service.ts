import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJoke } from './interfaces/IJoke';
import { IJokes } from './interfaces/IJokes';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private API_BASE_URL = 'https://api.icndb.com';
  constructor(
    private http: HttpClient
  ) {

  }

  getJokes(): Observable<IJoke[]> {
    return this.http
      .get<IJokes>(`${this.API_BASE_URL}/jokes/random/40?escape=javascript`)
      .pipe(
        // tap(data => console.log(data)),
        map(result => result.value)
      );
  }

  getJokesByCategory(category: string): Observable<IJoke[]> {
    return this.http
      .get<IJokes>(
        `${this.API_BASE_URL}/jokes/random/40?escape=javascript&limitTo=[${category}]`
      )
      .pipe(map(result => result.value));
  }
}
