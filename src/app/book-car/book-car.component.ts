import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
})
export class BookCarComponent {

   constructor(private route:Router,private sharService:SharedService,private http:HttpClient){}
   
  bookcar(){
    this.route.navigate(['userD/user-booking']);
  }

  userID:number=0;
  carId:number=0;
  carPrice:number=0;
  carStartDate:any;
  carEndDate:any;
  cost:any;
    ngOnInit()
    {
      this.carId=this.sharService.carId;
      this.carPrice=this.sharService.carPrice;
      this.userID=this.sharService.loginId;
    }

    findTheCost:boolean=false;
    checkButton:boolean=true;
    bookButton:boolean=false;
    checkNumberOfDays()
    {
      
      const start = new Date(this.carStartDate);
      const end = new Date(this.carEndDate);
      const timeDifference = end.getTime() - start.getTime();
      const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    
      let days=Math.floor(dayDifference);
      let totalCost=days*this.carPrice;
       this.cost=totalCost;
      
      this.findTheCost=true;
      this.checkButton=false;
      this.bookButton=true;
    }

    bookingData:any;
    bookingDiv:boolean=false;
    
   bookCar() {
      let url='http://localhost:8080/booking/bookingCar';

      let obj={
        'userId':this.userID,
        'carId':this.carId,
        'startDate':this.carStartDate,
        'endDate':this.carEndDate,
        'cost':this.cost,
        'status':'pending'
      }

      this.http.post(url,obj).subscribe((data:any)=>{

        if(data!=null)
        {
          window.alert('Your request send to admin wait for approval !');
           this.bookingData=data;
           this.bookingDiv=true;
        }
        else
        {
          window.alert("Something went wrong");
        }

      });
      
    }

}
