import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRentalService';

  constructor(private http: HttpClient) { }

  url='http://localhost:8080/';

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
