import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterPetsComponent } from './register-pets/register-pets.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterCareRequestComponent } from './register-care-request/register-care-request.component';
import { CareRequestListComponent } from './care-request-list/care-request-list.component';
import { UserAdministratorComponent } from './user-administrator/user-administrator.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsContactsComponent,
    ServicesComponent,
    DashboardComponent,
    RegisterPetsComponent,
    RegisterAddressComponent,
    ProfileComponent,
    RegisterCareRequestComponent,
    CareRequestListComponent,
    UserAdministratorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
