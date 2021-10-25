import { Component, OnInit } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 dept1:Department=new Department(1,'ali',300);
 dept2:Department=new Department(2,'ahmed',500);
  constructor() { 
    
  }

  ngOnInit() {
   
  }

}
