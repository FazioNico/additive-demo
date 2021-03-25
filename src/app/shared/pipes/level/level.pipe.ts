import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
  pure: true
})
export class LevelPipe implements PipeTransform {

  transform(value: string): string {
    let result;
    switch (true) {
      case value === '0':
        result = 'ok';
        break;
      case value === '1':
        result = 'à évité';
        break;
      case value === '2':
        result = 'controversé';
        break;
      case value === '3':
        result = 'Danger';
        break;
      default:
        result = 'Danger';
        break;
    }
    return result;
  }

}
