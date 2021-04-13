import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators,ValidationErrors} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-alotteacher',
  templateUrl: './alotteacher.component.html',
  styleUrls: ['./alotteacher.component.css']
})
export class AlotteacherComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  alotteacherForm = new FormGroup({
    name: new FormControl ('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z\space]+$/),
    ]),
    course: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z\space]+$/),
    ]),
    subject: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z\space]+$/),
    ])
  })

  ngOnInit(): void {
  }

  get name(){
    return this.alotteacherForm.get('name')
  }

  get course(){
    return this.alotteacherForm.get('course')
  }

  get subject(){
    return this.alotteacherForm.get('subject')
  }

  submit(){
    this.toastr.success('Success','Submitted')
    // alert('submitted')
  }

}
