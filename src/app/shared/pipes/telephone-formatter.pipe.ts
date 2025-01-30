import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneFormatter'
})
export class TelephoneFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
