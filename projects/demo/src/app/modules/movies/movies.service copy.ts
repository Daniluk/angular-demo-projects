import { Injectable } from '@angular/core';
import { IMovie } from './interfaces/IMovie';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { bindNodeCallback } from 'rxjs/observable/bindNodeCallback';
import { switchMap } from 'rxjs/operators';
import { NgxXml2jsonService } from 'ngx-xml2json';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<foo:BLA xmlns:foo="about:blank" Version="1.2.3.4">
  <foo:EntryItem>
    <foo:Id>1</foo:Id>
    <foo:Name>One</foo:Name>
  </foo:EntryItem>
</foo:BLA>
`;
  constructor(
    private http: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService
  ) {

    // const parser = new xml2js.Parser({ strict: false, trim: true });
    // parser.parseString(this.xmlString, (err, result) => {
    //   // this.xml = result;
    //   // console.log(result);
    // });

    const parser = new DOMParser();
    const xml = parser.parseFromString(this.xmlString, 'text/xml');
    const obj = this.ngxXml2jsonService.xmlToJson(xml);
    console.log('_', obj);

    const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
    // this.searchMovies().subscribe(console.log);
    const url = 'http://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/menu.xml';
    // const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`;
    this.http.get(url, { responseType: 'text' }).subscribe(response => {
      // const parser = new xml2js.Parser({ strict: false, trim: true });
      // parser.parseString(response, (err, result) => {
      //   // this.xml = result;
      //   console.log(result);
      // });

      // const parser = new DOMParser();
      // const xml = parser.parseFromString(response, 'text/xml');
      // const obj = this.ngxXml2jsonService.xmlToJson(xml);
      // console.log(obj);
      // console.log(this.ngxXml2jsonService.xmlToJson(response));
    });
  }

  searchMovies(): Observable<any> {
    // const url = `https://order.dennys.com/olo/v1.1/restaurants/35213/menu`; // 
    // const url = 'https://angular2.apispark.net/v1/companies/';
    const url = 'http://html5-dev.net/angular/tutorial/angular-demo-projects/projects/demo/src/assets/data/stock/menu.xml';
    return this.http.get(url

    )
      .pipe(
        // tap(data => console.log(data)),
        // map((res: any) => this.ngxXml2jsonService.xmlToJson(response)),

      );

    // return this.http
    //   // .get<{ items: IMovie[] }>(`${this.API_PATH}?orderBy=newest&maxResults=40&q=${queryTitle}`, this.requestOptions)
    //   .get<{ items: IMovie[] }>(`${url}`)
    //   .pipe(switchMap(res => bindNodeCallback(xml2js.parseString)(res)))
    //   .subscribe(console.log);
  }
}
