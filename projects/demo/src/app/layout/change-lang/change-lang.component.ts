import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';
import { locales } from '../locales.values';
import { ChangeLangService } from './change-lang.service';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent implements OnInit {

  locales = [];
  selected: string;
  settings: ISettings;
  lang = 'ru';

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    private service: ChangeLangService,
    public translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.locales = locales;
      this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
      this.selected = this.settings.userLanguage.split('-')[0];

      this.translate.setDefaultLang(this.selected);
      this.translate.use(this.selected);

    }
  }

  setLocale(userLanguage: string) {
    this.settings.userLanguage = userLanguage;
    localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
    this.translate.use(this.settings.userLanguage);

    this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
    this.service.setLang(this.settings);
  }

}
