import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css']
})
export class EditsubjectComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  editsubjectForm = new FormGroup({
    subjectname: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  get subjectname(){
    return this.editsubjectForm.get('subjectname')
  }

  submit(){
    // alert('updated succesfully')
    this.toastr.success('Success','Updated Succesfully')
  }

}
