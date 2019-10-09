import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  ITEMS = CONFIG.TYPE.CUSTOMERS;

  constructor(

  ) {

  }

  ngOnInit() {

  }

}
