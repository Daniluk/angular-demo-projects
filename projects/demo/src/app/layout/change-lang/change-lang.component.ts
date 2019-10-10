import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../../config/config';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';
import { ChangeLangService } from './change-lang.service';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent implements OnInit {

  selected: string;
  settings: ISettings;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private service: ChangeLangService,
    public translate: TranslateService,
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.selected = this.translate.currentLang;
    }
  }

  setLocale(userLanguage: string) {
    this.translate.use(userLanguage);
  }

  setLocale_(userLanguage: string) {
    this.settings.userLanguage = userLanguage;
    localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
    this.translate.use(this.settings.userLanguage);

    this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
    this.service.setLang(this.settings);
  }
}
