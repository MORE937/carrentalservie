import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent {

  constructor(private http:HttpClient ,private sharService:SharedService){}

  booking:any;

  ngOnInit(){
    let url='http://localhost:8080/booking/getAllCar';
    this.http.get(url).subscribe((res)=>{
      this.booking=res;
      console.log(res);

      
      
    })
  }
  
  

}
