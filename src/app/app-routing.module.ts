import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserDasbordComponent } from './user-dasbord/user-dasbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarAdminComponent } from './car-admin/car-admin.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { UpdateCarAdminComponent } from './update-car-admin/update-car-admin.component';
import { BookCarComponent } from './book-car/book-car.component';


const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
   {  
    path:'adminD',
    component:AdminDashboardComponent,
    children:[
      {path:'car-admin',component:CarAdminComponent},
      {path:'car-update/:id',component:UpdateCarAdminComponent},
      //{ path: 'adminD/car-update/:carId', component: UpdateCarAdminComponent },
      {path:'admin-booking',component:AdminBookingComponent},
      {path:'view-admin',component:ViewAdminComponent}
    ]
  },
  {
    path: 'userD',
    component: UserDasbordComponent,
    children: [
      { path: 'view-user', component: ViewUserComponent },
      { path: 'user-booking', component: UserBookingComponent },
      {path:'book-car',component:BookCarComponent}
    ]
  },

  // {path:'userD',component:UserDasbordComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
