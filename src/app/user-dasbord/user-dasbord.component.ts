import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-dasbord',
  templateUrl: './user-dasbord.component.html',
  styleUrls: ['./user-dasbord.component.css']
})
export class UserDasbordComponent {

      constructor(private http:HttpClient,private sharedService:SharedService){}
       userObject:any;
      ngOnInit():void
      {
         this.userObject=this.sharedService.loginId;
      }
}
