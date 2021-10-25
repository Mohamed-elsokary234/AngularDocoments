import { Component, OnInit } from '@angular/core';
import { MyloggerService } from '../mylogger.service';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css'],
  
})
export class CompbComponent implements OnInit {
stri:string="mohamed";
  constructor(private b:MyloggerService) { }
addb(){
  this.b.addinfo(this.stri);
}
  ngOnInit() {
  }

}
