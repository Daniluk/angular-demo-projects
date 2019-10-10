import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CONFIG } from '../../config/config';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  ITEMS = CONFIG.TYPE.TEXT_EDITOR;
  lang = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    private translate: TranslateService,
  ) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.lang = event.lang;
      });
  }

  ngOnInit() {

  }

}
