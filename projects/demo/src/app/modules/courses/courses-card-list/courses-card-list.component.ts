import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { ICourse } from '../interfaces/ICourse';

@Component({
    selector: 'app-courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: ICourse[];

    constructor(
        private dialog: MatDialog
        ) {
    }

    ngOnInit() {

    }

    // editCourse(course:Course) {

    //     const dialogConfig = new MatDialogConfig();

    //     dialogConfig.disableClose = true;
    //     dialogConfig.autoFocus = true;
    //     dialogConfig.width = '400px';

    //     dialogConfig.data = course;

    //     const dialogRef = this.dialog.open(CourseDialogComponent,
    //         dialogConfig);


    // }

}









