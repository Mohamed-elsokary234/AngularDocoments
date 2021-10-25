import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startwith'
})
export class StartwithPipe implements PipeTransform {

  transform(value: string[],b:any='a'): any {
    
    return value.filter(a=>{
    if (a.startsWith(b))
    return a;
    }) 
   /* for(let i=0;i<value.length;i++){
      if (value[i].subString==a) {
        return value[i];
      }
    }*/
    
  }

}
