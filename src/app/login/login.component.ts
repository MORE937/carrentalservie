import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router,private sharedService:SharedService) { }

  

  url = "http://localhost:8080/Register/"

  form1 = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get username() {
    return this.form1.get('username');
  }
  get password() {
    return this.form1.get('password');
  }
  get f()
  {
    return this.form1.controls;
  }

   
  loginUser() {


    
    let url2 = this.url + 'user/' + this.username?.value + '/' + this.password?.value;
    this.http.get(url2).subscribe((data: any) => {
      if (data !=null) {
        this.sharedService.loginId=data.userId;
        console.log(this.sharedService.loginId);
        
        console.warn(data.userName,data.userPassword);
     
        if (this.username.value == data.userName && this.password.value==data.userPassword) {
          console.warn(this.username.value, this.password.value,"done");
          this.router.navigate(['userD']);
        }
     
     
      }
      else {
        alert("error")
      }
    })
  


  }


  //Admin logic Here

  enter: boolean = false
  OpenFormAdmin() {
    this.enter = !this.enter;
  }

  adminLoginForm = new FormGroup({
    'adminName': new FormControl('', [Validators.required]),
    'adminPass': new FormControl('', [Validators.required])
  });

  get adminName() {
    return this.adminLoginForm.get('adminName');
  }

  get adminPass() {
    return this.adminLoginForm.get('adminPass');
  }


  AdminLogin() {


    let url2 = this.url + 'AdminLog' + this.adminName?.value + '/' + this.adminPass?.value;
    this.http.get(url2).subscribe((val: any) => {

      if (val == 1) {
        this.router.navigate(['adminD'])
      }
      else {
        console.log('error');

      }

    });

  }


}
