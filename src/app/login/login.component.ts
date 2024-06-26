import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserdataService } from '../shared/userdata.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata:UserdataService, private router:Router, private spinner:NgxSpinnerService)
   { }
  loginForm= new FormGroup({
    'username' : new FormControl(''),
    'password' : new FormControl('')
  })
  ngOnInit(): void {
    if(this.userdata.getData()!=null)
    {
      this.router.navigateByUrl('layout/dashboard')
    }
  }

  onclick(){
    this.spinner.show()
      // this.userauth.login(this.loginForm.value).subscribe(
      //   (res:any)=>{
      //     console.log(res)
      //   },
      //   err=>{
      //     console.log(err)
      //   }
      // )

  
    if (this.loginForm.get('username').value == "parivadhir@gmail.com" && this.loginForm.get('password').value == "pariva" )
    {
      this.spinner.hide()
      this.userdata.setData(this.loginForm.value)
      this.router.navigateByUrl('layout/dashboard')
    }
    else{
      this.spinner.hide()
      alert('incorrect or invalid username and password')
    }
  }


  
}