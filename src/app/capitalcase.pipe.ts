import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.substring(0,1).toUpperCase()+value.substring(1).toLowerCase();
  }

}
