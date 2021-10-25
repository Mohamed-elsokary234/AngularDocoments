import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studenttemp',
  templateUrl: './studenttemp.component.html',
  styleUrls: ['./studenttemp.component.css']
})
export class StudenttempComponent implements OnInit {
students:string[]=["aly","sami","ibrahem"];


txtname3:string="ahmed";
name:string="ahmed";

  constructor() { }
std1:Student=new Student(1,'ali',34);
salary:number=4000.8547;
bdate:Date=new Date(2004,5,20);

fdate:string="fullDate";
  ngOnInit() {
  }

}
