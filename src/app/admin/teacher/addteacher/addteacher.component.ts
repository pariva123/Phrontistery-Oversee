import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  teacherForm = new FormGroup({
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
    qualification: new FormControl('',[Validators.required]),
    designation: new FormControl('', Validators.required)

  })

  ngOnInit(): void {
  }

  get name(){
    return this.teacherForm.get('name')
  }

  get contact(){
    return this.teacherForm.get('contact')
  }

  get email(){
    return this.teacherForm.get('email')
  }

  get password(){
    return this.teacherForm.get('password')
  }

  get address(){
    return this.teacherForm.get('address')
  }

  get qualification(){
    return this.teacherForm.get('qualification')
  }

  get designation(){
    return this.teacherForm.get('designation')
  }

  register(){
    this.toastr.success('Success','Registered Succesfully')
    // console.log('hello')
    // alert("Registered Succesfully")
  }

}
