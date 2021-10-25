import { Injectable } from '@angular/core';
import { Students } from './students';
import { MyloggerService } from './mylogger.service';

@Injectable({
  providedIn: 'root'
})
export class DataStudentService {
  private student:Students[]=[
  new Students(1,'mohamed',17),
  new Students(2,'ahmed',54),
  new Students(3,'ali',20)
];
getall(){
  this.m.addinfo("all students");
  return this.student;
}
addstudent(std:Students){
  this.m.addinfo("add student");
  this.student.push(std);
}
  constructor(private m:MyloggerService) { }
}
