import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { FooterService } from './footer.service';
import { FooterItem } from './Implementation/FooterItem';

@Component({
  selector: 'app-footer',
  providers: [FooterService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  items: FooterItem[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private service: FooterService,
    private translate: TranslateService
  ) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        console.log('FooterComponent', event.lang);
        const currentLang = event.lang;
        this.getItems(currentLang);
      });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const currentLang = this.translate.currentLang || this.translate.getBrowserLang();
      this.getItems(currentLang);
    }
  }

  getItems(currentLang: string) {
    this.service.getItems(currentLang)
      .subscribe(
        data => this.items = data,
        error => console.log('FooterComponent error', error)
      );
  }

  onClick(event): void {

  }
}
