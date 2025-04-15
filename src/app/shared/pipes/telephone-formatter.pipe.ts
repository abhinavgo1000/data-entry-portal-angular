import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneFormatter'
})
export class TelephoneFormatterPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';

    // Convert the value to a string and remove non-numeric characters
    const cleaned = value.toString().replace(/\D/g, '');

    // Check if the cleaned number has 10 digits
    if (cleaned.length !== 10) {
      return value.toString(); // Return the original value if it's not a valid 10-digit number
    }

    // Format the number as (123) 456-7890
    const areaCode = cleaned.slice(0, 3);
    const centralOfficeCode = cleaned.slice(3, 6);
    const lineNumber = cleaned.slice(6);

    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
  }

}
