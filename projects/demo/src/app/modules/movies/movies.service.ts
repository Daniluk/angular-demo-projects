import { Injectable } from '@angular/core';
import { IMovie } from './interfaces/IMovie';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient,

  ) {
    // const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
    this.searchMovies().subscribe(console.log);
    // const url = 'http://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/menu.xml';
    // const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`;

  }

  searchMovies(queryTitle: string = 'text'): Observable<IMovie[]> {
    return this.http
      .get<{ items: IMovie[] }>(`${this.API_PATH}?orderBy=newest&maxResults=40&q=${queryTitle}`)
      .pipe(
        map(books => books.items || []));
  }
}
