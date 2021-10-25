import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(x: number, n:number=1,b:number=1): any {
    return Math.pow(x,n)*b;
  }

}
