import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = CONFIG.NAME_PROJECT;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  click() {
    const path = this.router.url.split('/').splice(1, 2).toString().replace(/[,]/g, '/');
    this.router.navigate([path]);
  }
}
