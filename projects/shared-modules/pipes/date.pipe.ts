import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined) {
      return;
    }
    return value.split(' ')[0].toString();
  }

}
