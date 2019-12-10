import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { CONFIG } from '../../../../../../src/app/config/config';
import ISettings from '../../../../../../../shared-modules/settings/interfaces/ISettings';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../stock.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: any[];

  constructor(
    private service: MainService,
    private translate: TranslateService,
    private stockService: StockService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // this.addTranslateOnLangChange();
    // const settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
    const currentLang = 'en'; // settings.userLanguage.split('-')[0];
    this.fetchItems(currentLang);
    // const observable = this.service.fetchItems()
  }

  private addTranslateOnLangChange(): void {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        const currentLang = event.lang;
        this.fetchItems(currentLang);

      });
  }

  private fetchItems(currentLang: string): void {
    const observable = this.service.fetchItems(currentLang);
    const subscribe = observable.subscribe((res: any) => {
      if (res) {
        this.items = res;
        // if (!this.news) {
        //   this.news = res as IMaterials;
        // } else {
        //   this.news.items = [...res.items];
        // }

        // this.itemsNews = [...this.news.items];
      }
      subscribe.unsubscribe();
    },
    );
  }

  onClick(item): void {
    console.log(item.id, item.key);
    const path = `food/${item.values.id}`;
    this.stockService.item = item;
    this.router.navigate([path], { relativeTo: this.activatedRoute.parent });
  }
}
