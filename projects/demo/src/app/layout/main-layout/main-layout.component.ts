import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { isPlatformBrowser, Location } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../../config/config';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings';
import { Settings } from '../../../../../shared-modules/settings/Settings';
import LOCALIZATION from '../../../assets/localization.json';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  settings: ISettings;
  userLanguage: string;
  lang = 'fr';
  isSmallScreen: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
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
      this.addTranslateLangChange();
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
    console.log(n, this.location.path());
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
    this.userLanguage = 'fr';
    this.settings = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.SETTINGS)) as ISettings;

    if (this.settings && this.settings.userLanguage) {
      this.lang = this.settings.userLanguage;
      this.userLanguage = this.settings.userLanguage;
    } else {
      this.settings = new Settings();
      this.settings.userLanguage = this.translate.getBrowserLang();
      this.userLanguage = this.settings.userLanguage;
    }
    this.userLanguage = this.settings.userLanguage;

    this.lang = this.settings.userLanguage;
    const array = LOCALIZATION.items.map(item => item.code);
    console.log(array);

    this.translate.addLangs([...array]);
    this.translate.currentLang = this.lang;

    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.settings.userLanguage = event.lang;
        localStorage.setItem(CONFIG.LOCAL_STORAGE.SETTINGS, JSON.stringify(this.settings));
        this.lang = event.lang;
        this.translate.currentLang = this.lang;
        console.log(event.lang);
        this.router.navigate([`../demo/${this.lang}/${this.getNexttUrlSegment()}`]
          , { relativeTo: this.activatedRoute.parent });
      });

    this.router.navigate([`../demo/${this.lang}/${this.getNexttUrlSegment()}`]
      , { relativeTo: this.activatedRoute.parent });
  }

}
