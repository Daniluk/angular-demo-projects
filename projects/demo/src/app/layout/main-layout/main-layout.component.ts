import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { isPlatformBrowser, Location } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';
import { Settings } from '../../../../../shared-modules/settings/Settings';
import LOCALIZATION from '../../../assets/localization.json';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  settings: ISettings;
  isSmallScreen: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private location: Location,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addBreakpointObserver();

      this.activatedRoute.data
        .subscribe((data) => {
          this.handleActivatedRoute();
        });

      if (this.router.url.split('/').length > 2) {
        const array = LOCALIZATION.items.map(item => item.code);
        this.translate.addLangs([...array]);
      } else {
        this.addTranslateLangChange();
      }

      this.translate.onLangChange
        .subscribe((event: LangChangeEvent) => {
          this.settings.userLanguage = event.lang;
          localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
          const userLanguage = event.lang;
          this.translate.currentLang = userLanguage;

          this.router.navigate([`../demo/${userLanguage}/${this.getNexttUrlSegment()}`]
            , { relativeTo: this.activatedRoute.parent });
        });
    }
  }

  private getNexttUrlSegment(): string {
    const array = this.location.path()
      .split('/')
      .filter((el) => {
        return (el != null && el !== '');
      });
    const next: string[] = [...array.slice(2)];
    const n = array.slice(2).toString().replace(/,/g, '/');

    return n;
  }

  private addBreakpointObserver(): void {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallScreen = false;
        } else {
          this.isSmallScreen = true;
        }
      });
  }

  private addTranslateLangChange(): void {
    let userLanguage;
    this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
    console.log(this.settings);
    if (this.settings && this.settings.userLanguage) {
      userLanguage = this.settings.userLanguage;
    } else {
      this.settings = new Settings();
      this.settings.userLanguage = this.translate.getBrowserLang().split('-')[0];
      userLanguage = this.settings.userLanguage;
    }
    userLanguage = this.settings.userLanguage;

    const array = LOCALIZATION.items.map(item => item.code);
    this.translate.addLangs([...array]);
    this.translate.currentLang = userLanguage;

    this.router.navigate([`../demo/${userLanguage}/${this.getNexttUrlSegment()}`]
      , { relativeTo: this.activatedRoute.parent });
  }

  private handleActivatedRoute(): void {
    let currentLang;

    this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;
    if (!this.settings) {
      this.settings = new Settings();
      this.settings.userLanguage = this.translate.getBrowserLang().split('-')[0];
    }
    if (this.router.url.split('/').length > 2) {
      currentLang = this.router.url.split('/').splice(2, 1)[0];
      this.settings.userLanguage = currentLang;
      localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
    }
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
  }
}
