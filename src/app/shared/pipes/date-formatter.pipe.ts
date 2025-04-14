import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: Date | null, format: string = 'MMM d, y'): string {
    if (!value) return '';

    return this.datePipe.transform(value, format) || '';
  }

}
