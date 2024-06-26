import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddteacherComponent } from './admin/teacher/addteacher/addteacher.component';
import { ManageteacherComponent } from './admin/teacher/manageteacher/manageteacher.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { ManagestudentComponent } from './admin/student/managestudent/managestudent.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { ManagecourseComponent } from './admin/course/managecourse/managecourse.component';
import { AddsubjectComponent } from './admin/subject/addsubject/addsubject.component';
import { ManagesubjectComponent } from './admin/subject/managesubject/managesubject.component';
import { EditteacherComponent } from './admin/teacher/editteacher/editteacher.component';
import { EditstudentComponent } from './admin/student/editstudent/editstudent.component';
import { EditcourseComponent } from './admin/course/editcourse/editcourse.component';
import { EditsubjectComponent } from './admin/subject/editsubject/editsubject.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewattendanceComponent } from './admin/attendance/viewattendance/viewattendance.component';
import { ViewassignmentComponent } from './admin/assignmnet/viewassignment/viewassignment.component';
import { ViewnotesComponent } from './admin/notes/viewnotes/viewnotes.component';
import { ViewanswersheetsComponent } from './admin/answersheets/viewanswersheets/viewanswersheets.component';
import { AlotteacherComponent } from './admin/teacher/alotteacher/alotteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    FooterComponent,
    LayoutComponent,
    AddteacherComponent,
    ManageteacherComponent,
    AddstudentComponent,
    ManagestudentComponent,
    AddcourseComponent,
    ManagecourseComponent,
    AddsubjectComponent,
    ManagesubjectComponent,
    EditteacherComponent,
    EditstudentComponent,
    EditcourseComponent,
    EditsubjectComponent,
    ViewattendanceComponent,
    ViewassignmentComponent,
    ViewnotesComponent,
    ViewanswersheetsComponent,
    AlotteacherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
