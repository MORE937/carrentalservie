import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static loginId: any;

  constructor() { }

  loginId:any;

  carId:any;
  carPrice:any;

}
