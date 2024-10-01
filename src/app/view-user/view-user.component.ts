import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  searchCar:any;
  list: any;
  carlist: Car[] = [];
  url = "http://localhost:8080";

  constructor(private http: HttpClient, private rout:Router,private sharVariable:SharedService) { }
  ngOnInit(): void {
    this.seeAllCar();
  }

  seeAllCar() {
    let url2 = this.url + "/cars/getAllCar";
    this.http.get<Car[]>(url2).subscribe(response => {
      console.log(response);
      
      this.carlist = response;
      console.log(this.carlist);
    });

  }

  bookurcar(id:number,price:number){
    this.rout.navigate(['userD/book-car']);
    this.sharVariable.carId=id;
    this.sharVariable.carPrice=price;
  }
  
}
