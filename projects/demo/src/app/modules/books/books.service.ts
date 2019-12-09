import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from './interfaces/IBook';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  private readonly requestOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      //  "Set-Cookie": "HttpOnly;Secure;SameSite=Strict",
      // 'Authorization': JSON.parse(localStorage.getItem('currentUser')).token
    }),
    withCredentials: true
  };

  constructor(
    private http: HttpClient
  ) {

  }

  searchBooks(queryTitle: string): Observable<IBook[]> {
    return this.http
      .get<{ items: IBook[] }>(`${this.API_PATH}?orderBy=newest&maxResults=40&q=${queryTitle}`, this.requestOptions)
      .pipe(
        map(books => books.items || []),
        );
  }

  retrieveBook(volumeId: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_PATH}/${volumeId}`);
  }
}
