import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharCase',
  standalone: true
})
export class FirstCharCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
