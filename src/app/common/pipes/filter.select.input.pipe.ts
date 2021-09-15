import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterSelectInput' })
export class FilterSelectInputPipe implements PipeTransform {
  transform(arr: any[], searchString?: string): any {
    if (!searchString) {
      return arr;
    }
    return arr.filter((item) => item.viewValue.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
  }
}
