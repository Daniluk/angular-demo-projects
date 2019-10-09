import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import IRootItem from '../../interfaces/IRootItem';
import ITitleMeta from './interfaces/ITitleMeta';

@Injectable({
  providedIn: 'root'
})
export class SetTitleAndMetaService {
  item: ITitleMeta;
  setTitle$: Observable<any> = new Observable<any>();
  private setMenuSubject = new Subject<any>();

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  setTitleAndMeta(data?: ITitleMeta): void {
    if (data === null) {
      return;
    }
    this.item = data;
    this.addTitleAndMeta(this.title, this.meta, this.item);
  }

  private addTitleAndMeta(title: Title, meta: Meta, item: ITitleMeta): void {
    item.title = `${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`;
    title.setTitle(item.title);

    meta.addTag({ name: 'description', content: item.description });
    meta.addTag({ name: 'twitter:card', content: 'summary' });
    meta.addTag({ name: 'twitter:site', content: '@AngularUniv' });
    meta.addTag({ name: 'twitter:title', content: item.description });
    meta.addTag({ name: 'twitter:description', content: item.description });
    meta.addTag({ name: 'twitter:text:description', content: item.description });
    meta.addTag({ name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200' });
  }

  updateTitleAndMetaService(query: string): void {
    const item: IRootItem = {
      id: 1,
      name: 'string',
      url: 'string',
      path: 'string',
      title: query
    };

    const itemTitleMeta: ITitleMeta = {
      title: item.title,
      description: item.description || 'description'
    };
    this.setTitleAndMeta(itemTitleMeta);
  }
}
