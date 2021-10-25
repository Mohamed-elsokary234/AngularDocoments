import { Component, OnInit } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { DataStudentService } from '../data-student.service';
import { Students } from '../students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[DataStudentService]
})
export class StudentsComponent implements OnInit {

  constructor(private s:DataStudentService) { }
std:Students[]=[];
  ngOnInit() {
  this.std=this.s.getall();
  }

}
