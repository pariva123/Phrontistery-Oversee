import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  public setData(userdata:any){
    sessionStorage.setItem('username','userdata')
  }

  public getData(){
    return sessionStorage.getItem('username')
  }

  public removeData(){
    sessionStorage.removeItem('username')
  }
}
