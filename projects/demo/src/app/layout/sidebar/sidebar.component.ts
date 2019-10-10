import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import ISettings from '../../../../../shared-modules/settings/interfaces/ISettings.js';
import IUser from '../../../../../shared-modules/users/user/interfaces/IUser';
import { UserService } from '../../../../../shared-modules/users/user/user.service';
import { ChangeLangService } from '../change-lang/change-lang.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  items: any[];
  // itemsTemp = any;
  sortedData: any[];
  animal: string;
  name: string;
  user: IUser;
  dataSource: any;
  sideNavState = true;
  currentUser: IUser;
  roots: any[];
  settings: ISettings;
  lang = 'fr';

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    public dialog: MatDialog,
    private userService: UserService,
    private changeLangService: ChangeLangService,
    private translate: TranslateService,
    private service: SidebarService
  ) {

    this.changeLangService.setLang$.subscribe((data) => {
      this.settings = data;
      console.log('SidebarComponent', data);
    });

    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        const currentLang = event.lang;
        // console.log('SidebarComponent', currentLang);
        this.lang = event.lang;
        this.getItems(currentLang);
      });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.items = [];
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as IUser;
      const currentLang = this.translate.currentLang || this.translate.getBrowserLang();
      this.lang = currentLang;
      this.getItems(currentLang);
    }
    if (isPlatformServer(this.platformId)) {      // Server only code.
    }
  }

  getItems(currentLang: string) {
    this.service.getItems(currentLang)
      .subscribe(
        data => this.items = data.items,
        error => console.log('SidebarComponent error', error)
      );
  }
}
