import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
     
  title = 'Resistration Here';

  constructor(private http: HttpClient) { }

  url='http://localhost:8080/Register/';

  Rusername: string = ''; 
  Rpassword: string = '';
  Rgamil: string = '';

  Robj: any;
  RegisterHere() {
    this.Robj = {
      'userName':this.Rusername,
      'userPassword':this.Rpassword,
      'userEmail':this.Rgamil
    }
    //console.warn(this.Robj);
    
    let url2=this.url+'RegisterHere';
    this.http.post(url2,this.Robj).subscribe((data:any)=>{  
      console.log(data);
      if(data)
      {
        alert("done");
        this.Rusername='';
        this.Rpassword='';
        this.Rgamil='';
      }
   
     });
  }

  
}
