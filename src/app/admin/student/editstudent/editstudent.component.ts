import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  editstudentForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z\space]+$/),
    ]),
    contact: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    email: new FormControl('',[Validators.required,
      Validators.email]),
    password: new FormControl('',[Validators.required,
      Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@])\S{6,18}$/)
    ]),
    address: new FormControl('',[Validators.required]),
    course: new FormControl('',[Validators.required]),
    roll_no: new FormControl('', Validators.required)

  })

  ngOnInit(): void {
  }

  get name(){
    return this.editstudentForm.get('name')
  }

  get contact(){
    return this.editstudentForm.get('contact')
  }

  get email(){
    return this.editstudentForm.get('email')
  }

  get password(){
    return this.editstudentForm.get('password')
  }

  get address(){
    return this.editstudentForm.get('address')
  }

  get course(){
    return this.editstudentForm.get('course')
  }

  get roll_no(){
    return this.editstudentForm.get('roll_no')
  }

  register(){
    // alert('Updated Successfully')
    this.toastr.success('Success','Updated Succesfully')
  }
}
