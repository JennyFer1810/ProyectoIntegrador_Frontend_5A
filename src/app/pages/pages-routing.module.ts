import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { UserAdministratorComponent } from './user-administrator/user-administrator.component';
import { ProfileComponent } from './profile/profile.component';
import { CareRequestListComponent } from './care-request-list/care-request-list.component';
import { RegisterPetsComponent } from './register-pets/register-pets.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'adminReservation',
        component: DashboardComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'aboutContacts',
        component: AboutUsContactsComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },

      ////////////////////////////////////////////
      {
        path: 'registerAddress',
        component: RegisterAddressComponent,
      },
      {
        path: 'userAdministrator',
        component: UserAdministratorComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'careList',
        component: CareRequestListComponent,
      },
      {
        path: 'registerRequest',
        component: RegisterPetsComponent
      },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
