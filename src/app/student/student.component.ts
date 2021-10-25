import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
fname:string="ahmed";
lname:string="ali";
age:number=50;
isactive:boolean=false;
imgsrc:string="../../assets/smart.jpg";
imgalt:string="smart image";
txtname:string=" ";
txtname2:string=" ";

btnclick(ev){
  alert("akjdj");
  console.log(ev);
}

txtclick(ev){
  this.txtname=(<HTMLInputElement>ev.target).value;
}
txtclick2(txtname2:string){
  this.txtname2=txtname2;
}
  constructor() { }

  ngOnInit() {
  }

}
