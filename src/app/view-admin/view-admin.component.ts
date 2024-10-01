import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit{  
    list:any;
    carlist: Car[]=[];
    url="http://localhost:8080";
    searchCar:any;

    constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getCar();
}

getCar()
{
  let url2 = this.url+"/cars/getAllCar";
  this.http.get<Car[]>(url2).subscribe(response=>{
    this.carlist=response;
  console.log(this.carlist); 
  });
  
}

deleteCar(id:any){
  let url2 = this.url+'/cars/deleteById/'+id;
 this.http.delete(url2, { responseType: 'text' }).subscribe(()=>{
  this.getCar();
 
});

}





}
