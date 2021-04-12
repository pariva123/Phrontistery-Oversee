import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  courseForm = new FormGroup({
    coursename: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  get coursename(){
    return this.courseForm.get('coursename')
  }

  submit(){
    // alert('registered succesfully')
    this.toastr.success('Success','Registerd Succesfully')
  }

}
