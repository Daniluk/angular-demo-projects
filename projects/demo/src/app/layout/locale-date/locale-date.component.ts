import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale-date',
  templateUrl: './locale-date.component.html',
  styleUrls: ['./locale-date.component.scss']
})
export class LocaleDateComponent implements OnInit {

  localeDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
