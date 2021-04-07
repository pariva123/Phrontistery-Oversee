import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userdata:UserdataService, private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userdata.removeData()
    this.router.navigateByUrl('login')
  }

}
