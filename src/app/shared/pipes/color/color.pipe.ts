import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure: true
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    let result;
    switch (true) {
      case value === '0':
        result = 'success';
        break;
      case value === '1':
        result = 'warning';
        break;
      case value === '2':
        result = 'orange';
        break;
      case value === '3':
        result = 'danger';
        break;
      default:
        result = 'danger';
        break;
    }
    return result;
  }

}
