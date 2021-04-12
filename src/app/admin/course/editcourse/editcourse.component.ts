import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  editcourseForm = new FormGroup({
    coursename: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  get coursename(){
    return this.editcourseForm.get('coursename')
  }

  submit(){
    // alert('updated Successfully')
    this.toastr.success('success','Updated Succesfully')
  }
}
