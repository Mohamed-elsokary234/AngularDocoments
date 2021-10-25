import { Component, OnInit } from '@angular/core';

  import { from } from 'rxjs';
import { MyloggerService } from '../mylogger.service';
@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {
  counta:number=this.m.count;
nm:string="asdfgh";
  constructor(private m:MyloggerService) { }
  add(){
   this.m.addinfo(this.nm);
  }
  ngOnInit() {
  }

}
