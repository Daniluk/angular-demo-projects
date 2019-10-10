import { OverlayContainer } from '@angular/cdk/overlay';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuTopService } from '../../layout/menu-top/menu-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[];
  @HostBinding('class') componentCssClass;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public overlayContainer: OverlayContainer,
    private menuTopService: MenuTopService,
    // public translate: TranslateService
  ) {
    // this.menuTopService.menu.subscribe(data =>  this.items);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('light-custom-theme', 'mat-app-background');
      this.overlayContainer.getContainerElement().classList.add('light-custom-theme');
    }
  }

  onSetTheme(theme) {
    console.log('onSetTheme', theme);
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  toggleTheme(theme: string): void {
    console.log('toggleTheme');
  }
}
