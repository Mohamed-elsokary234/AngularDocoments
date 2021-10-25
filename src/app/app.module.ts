import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Home} from './Home/Home.component';
import { StudentComponent } from './student/student.component';
import { StudenttempComponent } from './studenttemp/studenttemp.component'
import { from } from 'rxjs';
import { CapitalcasePipe } from './capitalcase.pipe';
import { ExpPipe } from './exp.pipe';
import { StartwithPipe } from './startwith.pipe';
import { AppHighLightDirective } from './app-high-light.directive';
import { DepartmentComponent } from './department/department.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DeptcreateComponent } from './deptcreate/deptcreate.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { MyloggerService } from './mylogger.service';
import { StudentsComponent } from './students/students.component';
import { Routes, RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { AngularFeaturesComponent } from './angular-features/angular-features.component';
import { AngularDoesComponent } from './angular-does/angular-does.component';
import { AngularReasouresComponent } from './angular-reasoures/angular-reasoures.component';
import { AngularEventsComponent } from './angular-events/angular-events.component';

const appRoutes:Routes=[
{path:'',component:AngularHomeComponent},
{path:'features',component:AngularFeaturesComponent},
{path:'does',component:AngularDoesComponent},
{path:'resources',component:AngularReasouresComponent},
{path:'events',component:AngularEventsComponent},

{path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,Home, StudentComponent, StudenttempComponent, CapitalcasePipe, ExpPipe, StartwithPipe, AppHighLightDirective, DepartmentComponent, DepartmentsComponent, ChildComponent, ParentComponent, DeptcreateComponent, CompaComponent, CompbComponent, StudentsComponent, ErrorComponent, AngularHomeComponent, AngularFeaturesComponent, AngularDoesComponent, AngularReasouresComponent, AngularEventsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [MyloggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
