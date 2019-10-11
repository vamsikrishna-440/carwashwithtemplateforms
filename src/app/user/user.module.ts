import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SetpwdComponent } from './setpwd/setpwd.component';
import { BookingComponent } from './booking/booking.component';
import { OlderhistoryComponent } from './olderhistory/olderhistory.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserloginComponent, DashboardComponent,SignupComponent,SetpwdComponent, BookingComponent, OlderhistoryComponent, EditprofileComponent, ChangepasswordComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule,RouterModule.forChild([
      {
          path:'user',
          component:SignupComponent
      },
     {
        path:'sig',
        component:SetpwdComponent
      },
      {
        path:'pwd',
        component:UserloginComponent
      },
      {
        path:'log',
        component:DashboardComponent
      },
      {
        path:'booking',
        component:BookingComponent
      },
      {
        path:'history',
        component:OlderhistoryComponent
      },
      {
        path:'edit',
        component:EditprofileComponent
      },{
        path:'cpwd',
        component:ChangepasswordComponent
      },
      {
        path:'lout',
        component:UserloginComponent
      },
      {
        path:'book',
        component:DashboardComponent
      }
    ])
  ]
})
export class UserModule { }
