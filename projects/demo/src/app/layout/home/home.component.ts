import { OverlayContainer } from '@angular/cdk/overlay';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[];
  @HostBinding('class') componentCssClass;
  constructor(
    public overlayContainer: OverlayContainer,
  ) {

  }

  ngOnInit() {

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
