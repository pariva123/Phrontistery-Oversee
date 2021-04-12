import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  studentForm = new FormGroup({
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
    return this.studentForm.get('name')
  }

  get contact(){
    return this.studentForm.get('contact')
  }

  get email(){
    return this.studentForm.get('email')
  }

  get password(){
    return this.studentForm.get('password')
  }

  get address(){
    return this.studentForm.get('address')
  }

  get course(){
    return this.studentForm.get('course')
  }

  get roll_no(){
    return this.studentForm.get('roll_no')
  }

  register(){
    // alert('Registered Successfully')
    this.toastr.success('Success','Registered Succesfully')
  }


}
