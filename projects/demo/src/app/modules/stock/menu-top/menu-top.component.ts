import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuTopService } from './menu-top.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit, OnChanges {

  items: any[];

  constructor(
    private service: MenuTopService
  ) {
    this.service.setMenu$.subscribe((data) => {
      this.items = data; // And he have data here too!
    });
  }

  ngOnInit() {
    // console.log('MenuTopComponent', this.service.routes);
    this.items = this.service.routes;
    // console.log('g', this.service.routes);
  }

  ngOnChanges(): void {
    // this.items = this.service.routes;
    // console.log('ngOnChanges', this.service.routes);
  }
}
