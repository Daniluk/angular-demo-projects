import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID } from '@angular/core';
import { CONFIG } from '../../config/config';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';
import { Settings } from '../../../../../shared-modules/settings/Settings';
import { locales } from './../locales.values';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  locales = [];
  settings: ISettings;

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    @Inject(LOCALE_ID) public locale: string,
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {      // Client only code.
      this.setSeetings();
    }
    if (isPlatformServer(this.platformId)) {      // Server only code.
    }
  }

  private setSeetings(): void {
    this.settings = new Settings();
    this.settings.currentLocale = this.locale;
    this.settings.userLanguage = navigator.language;
    // localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
    // localStorage.removeItem(CONFIG.LOCAL_STORAGE.SETTINGS);
    // localStorage.clear();
    this.locales = locales;
    if (localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS) as ISettings) {

    } else {
      this.settings = new Settings();
      this.settings.currentLocale = this.locale;
      this.settings.userLanguage = navigator.language;
      localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
    }

    console.log(localStorage);
    // console.log(localStorage, this.currentUser, this.locale);
    // this.locale = this.selected;
  }

  setLocale(locale) {
    this.locale = locale;
    // localStorage.setItem('currentLocale', (this.locale));
    // this.locale = localStorage.getItem('currentLocale') ;
    // console.log('locale', locale, this.locale);
  }

  changeClient(data) {
    // console.log('selected ' + data);
  }

  click(data) {
    // console.log('selected ' + data);
  }

  onAppClickToStartProcess(data) {
    // console.log('onAppClickToStartProcess ' + data);
  }
}
