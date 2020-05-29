import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {

    let values = value.split(' ');
    let result = '';

    values.forEach(element => {
      result += this.capitalize(element) + ' ';
    });




    return result;
  }

  capitalize(value: string): string {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }
}
