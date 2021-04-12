import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  subjectForm = new FormGroup({
    subjectname: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  get subjectname(){
    return this.subjectForm.get('subjectname')
  }

  submit(){
    // alert('successfully registered')
    this.toastr.success('Success','Registered Succesfully')
  }

}
