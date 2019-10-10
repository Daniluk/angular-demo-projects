import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = 'demo';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }

  click(data?: any) {
    // console.log('selected ' + data);
    this.router.navigate([`../demo`], { relativeTo: this.activatedRoute.parent });
  }

}
