import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICourse, ILesson } from './interfaces/ICourse';
import { CONFIG } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) {

  }

  findCourseById(courseId: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${CONFIG.TYPE.COURSES.API}/courses${courseId}`);
    // return this.http.get<ICourse>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<ICourse[]> {
    return this.http.get(`${CONFIG.TYPE.COURSES.API}/courses.json`)
      .pipe(
        map((res: any) => {
          console.log(res.length);
          return res;
        })
      );
  }

  findAllCourseLessons(courseId: number): Observable<ILesson[]> {
    return this.http.get('/api/lessons', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('pageNumber', '0')
        .set('pageSize', '1000')
    }).pipe(
      map((res: any) => res.payload)
    );
  }
}
