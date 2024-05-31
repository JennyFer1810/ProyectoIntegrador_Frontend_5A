import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { ServicesComponent } from './services/services.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterPetsComponent } from '../config/register-pets/register-pets.component';
import { RegisterAddressComponent } from '../config/register-address/register-address.component';
import { ProfileComponent } from '../config/profile/profile.component';
import { RegisterCareRequestComponent } from '../config/register-care-request/register-care-request.component';
import { CareRequestListComponent } from '../config/care-request-list/care-request-list.component';
import { UserAdministratorComponent } from '../config/user-administrator/user-administrator.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsContactsComponent,
    ServicesComponent,
    RegisterPetsComponent,
    RegisterAddressComponent,
    ProfileComponent,
    RegisterCareRequestComponent,
    CareRequestListComponent,
    UserAdministratorComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
