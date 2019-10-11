import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceloginComponent } from './servicelogin/servicelogin.component';
import { RouterModule } from '@angular/router';
import { VerifycontactComponent } from './verifycontact/verifycontact.component';
import { ServicesigninComponent } from './servicesignin/servicesignin.component';
import { ServicedashComponent } from './servicedash/servicedash.component';
import { ViewallbookingComponent } from './viewallbooking/viewallbooking.component';
import { CustomerhistoryComponent } from './customerhistory/customerhistory.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ConfirmedordersComponent } from './confirmedorders/confirmedorders.component';
import { WalletstatusComponent } from './walletstatus/walletstatus.component';
import { TotalpendingamountComponent } from './totalpendingamount/totalpendingamount.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServiceloginComponent, VerifycontactComponent, ServicesigninComponent,CustomerhistoryComponent, ServicedashComponent, ViewallbookingComponent,EditprofileComponent,ChangepasswordComponent,ConfirmedordersComponent,WalletstatusComponent,TotalpendingamountComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {
          path:'servicecenter',
          component:ServiceloginComponent
      },
      {
        path:'sup',
        component:VerifycontactComponent
      },
      {
        path:'sin',
        component:ServicesigninComponent
      },
      {
        path:'lin',
        component:ServicedashComponent
      },
      {
        path:'vab',
        component:ViewallbookingComponent
      },
      {
        path:'ch',
        component:CustomerhistoryComponent
      },
      {
        path:'ed',
        component:EditprofileComponent
      },
      {
        path:'cp',
        component:ChangepasswordComponent
      },
      {
        path:'co',
        component:ConfirmedordersComponent
      },
      {
        path:'ws',
        component:WalletstatusComponent
      },
      {
        path:'tpa',
        component:TotalpendingamountComponent
      },
      {
        path:'lg',
        component:ServicesigninComponent
      },
    ])
  ]
})
export class ServicecenterModule { }
