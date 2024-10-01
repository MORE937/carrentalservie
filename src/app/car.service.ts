import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl="http://localhost:8080";

  constructor(private http:HttpClient) { }

      saveCar(data:any){
       return this.http.post(this.baseUrl,data)
      }

      // updateCar(carId: number, updatedCarData: any, file: File): Observable<any> {
      //   const formData: FormData = new FormData();
      //   formData.append('carData', JSON.stringify(updatedCarData));
      //   if (file) {
      //     formData.append('file', file);
      //   }
      //   return this.http.put<any>(`${this.baseUrl}/cars/update/${carId}`, formData);
      // }

      private baseUrl2 = 'http://localhost:8080/cars'; // Update the URL with your backend URL

  

  updateCar(carId: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.baseUrl2}/update/${carId}`, formData);
  }

      
}
