import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  editteacherForm = new FormGroup({
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
    return this.editteacherForm.get('name')
  }

  get contact(){
    return this.editteacherForm.get('contact')
  }

  get email(){
    return this.editteacherForm.get('email')
  }

  get password(){
    return this.editteacherForm.get('password')
  }
  
  get address(){
    return this.editteacherForm.get('address')
  }

  get qualification(){
    return this.editteacherForm.get('qualification')
  }

  get designation(){
    return this.editteacherForm.get('designation')
  }

  register(){
    this.toastr.success('Success','Updated Succesfully')
    // alert('Updated Succesfully')
  }

}
