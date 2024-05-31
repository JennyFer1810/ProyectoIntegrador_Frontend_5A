import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config.component';
import { CareRequestListComponent } from './care-request-list/care-request-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RegisterPetsComponent } from './register-pets/register-pets.component';
import { UserAdministratorComponent } from './user-administrator/user-administrator.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {
    path: 'config', component: ConfigComponent,
    children: [
      {
        path: 'panel',
        component: PanelComponent,
      },
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
export class ConfigRoutingModule { }
