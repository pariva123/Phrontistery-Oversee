import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewanswersheetsComponent } from './admin/answersheets/viewanswersheets/viewanswersheets.component';
import { ViewassignmentComponent } from './admin/assignmnet/viewassignment/viewassignment.component';
import { ViewattendanceComponent } from './admin/attendance/viewattendance/viewattendance.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { EditcourseComponent } from './admin/course/editcourse/editcourse.component';
import { ManagecourseComponent } from './admin/course/managecourse/managecourse.component';
import { ViewnotesComponent } from './admin/notes/viewnotes/viewnotes.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { EditstudentComponent } from './admin/student/editstudent/editstudent.component';
import { ManagestudentComponent } from './admin/student/managestudent/managestudent.component';
import { AddsubjectComponent } from './admin/subject/addsubject/addsubject.component';
import { EditsubjectComponent } from './admin/subject/editsubject/editsubject.component';
import { ManagesubjectComponent } from './admin/subject/managesubject/managesubject.component';
import { AddteacherComponent } from './admin/teacher/addteacher/addteacher.component';
import { EditteacherComponent } from './admin/teacher/editteacher/editteacher.component';
import { ManageteacherComponent } from './admin/teacher/manageteacher/manageteacher.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =  [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  {
    path:'layout', component:LayoutComponent,
    children:[
      {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard],},
      {path:'addteacher', component:AddteacherComponent, canActivate:[AuthGuard]},
      {path:'manageteacher', component:ManageteacherComponent, canActivate:[AuthGuard]},
      {path:'editteacher', component:EditteacherComponent, canActivate:[AuthGuard]},
      {path:'addstudent', component:AddstudentComponent, canActivate:[AuthGuard]},
      {path:'managestudent', component:ManagestudentComponent, canActivate:[AuthGuard]},
      {path:'editstudent', component:EditstudentComponent, canActivate:[AuthGuard]},
      {path:'addcourse', component:AddcourseComponent, canActivate:[AuthGuard]},
      {path:'managecourse', component:ManagecourseComponent, canActivate:[AuthGuard]},
      {path:'editcourse', component:EditcourseComponent, canActivate:[AuthGuard]},
      {path:'addsubject', component:AddsubjectComponent, canActivate:[AuthGuard]},
      {path:'managesubject', component:ManagesubjectComponent, canActivate:[AuthGuard]},
      {path:'editsubject', component:EditsubjectComponent, canActivate:[AuthGuard]},
      {path:'viewattendance', component:ViewattendanceComponent, canActivate:[AuthGuard]},
      {path:'viewassignment', component:ViewassignmentComponent, canActivate:[AuthGuard]},
      {path:'viewnotes', component:ViewnotesComponent, canActivate:[AuthGuard]},
      {path:'viewanswersheets', component:ViewanswersheetsComponent, canActivate:[AuthGuard]}
    ]
  },
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
