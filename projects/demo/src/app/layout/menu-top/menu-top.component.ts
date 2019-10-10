import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuTopService } from './menu-top.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  items: any[];

  constructor(
    private service: MenuTopService,
    public translate: TranslateService,
  ) {
    this.service.setMenu$.subscribe((data) => {
      this.items = data;
      // console.log(data);
    });
  }

  ngOnInit() {
  }

  onClick(item?: any): void {
    console.log(item.id);
    // this.service.item = item;
    // this.router.navigate([`../phonecat/model/${item.id}`], { relativeTo: this.activatedRoute.parent });
  }
}
