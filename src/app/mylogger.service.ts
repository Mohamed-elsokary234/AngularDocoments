import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyloggerService {
count:number=0;
  addinfo(st:string){
    this.count++; 

console.log(st+" "+this.count);
  }
  constructor() {}
}
