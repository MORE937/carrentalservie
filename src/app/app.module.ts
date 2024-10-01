import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';

import { UserDasbordComponent } from './user-dasbord/user-dasbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPortComponent } from './view-port/view-port.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarAdminComponent } from './car-admin/car-admin.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { UpdateCarAdminComponent } from './update-car-admin/update-car-admin.component';
import { BookCarComponent } from './book-car/book-car.component';
import { CarfilterPipe } from './carfilter.pipe';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    AboutComponent,
    
    LoginComponent,
         UserDasbordComponent,
         PageNotFoundComponent,
         ViewPortComponent,
         AdminDashboardComponent,
         CarAdminComponent,
         AdminBookingComponent,
         ViewAdminComponent,
         ViewUserComponent,
         UserBookingComponent,
         UpdateCarAdminComponent,
         BookCarComponent,
         CarfilterPipe,
         
        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
