import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { isPlatformBrowser, Location } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isSmallScreen: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: {},
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addBreakpointObserver();

      this.activatedRoute.data
        .subscribe((data) => {

        });
    }
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

}
