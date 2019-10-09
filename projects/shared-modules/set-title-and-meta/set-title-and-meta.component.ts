import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import ITitleMeta from './interfaces/ITitleMeta';
import { SetTitleAndMetaService } from './set-title-and-meta.service';

@Component({
  selector: 'app-set-title-and-meta',
  templateUrl: './set-title-and-meta.component.html',
  styleUrls: ['./set-title-and-meta.component.scss']
})
export class SetTitleAndMetaComponent implements OnInit {

  item: ITitleMeta;

  constructor(
    private title: Title,
    private meta: Meta,
    private service: SetTitleAndMetaService
  ) {

    // this.service.setTitle$.subscribe((data) => {
    //   this.item = data; // And he have data here too!
    //   // console.log(this.item, data);
    //   this.item.description = 'SetTitleAndMeta';
    //   this.item.longDescription = 'SetTitleAndMeta';
    //   this.addTitleAndMeta(this.title, this.meta, this.item);
    // });
    // console.log('SetTitleAndMetaComponent');
  }

  ngOnInit() {
    this.service.setTitle$.subscribe((data) => {
      this.item = data; // And he have data here too!
      // console.log(this.item, data);
      this.item.description = 'SetTitleAndMeta';
      this.item.longDescription = 'SetTitleAndMeta';
      this.addTitleAndMeta(this.title, this.meta, this.item);
    });
  }

  private addTitleAndMeta(title: Title, meta: Meta, item: ITitleMeta): void {
    title.setTitle(item.description);

    meta.addTag({ name: 'description', content: item.longDescription });
    meta.addTag({ name: 'twitter:card', content: 'summary' });
    meta.addTag({ name: 'twitter:site', content: '@AngularUniv' });
    meta.addTag({ name: 'twitter:title', content: item.description });
    meta.addTag({ name: 'twitter:description', content: item.description });
    meta.addTag({ name: 'twitter:text:description', content: item.description });
    meta.addTag({ name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200' });
  }
}
