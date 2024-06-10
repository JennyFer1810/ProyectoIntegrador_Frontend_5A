import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterPetsComponent } from './register-pets/register-pets.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterCareRequestComponent } from './register-care-request/register-care-request.component';
import { UserAdministratorComponent } from './user-administrator/user-administrator.component';
import { CareRequestListComponent } from './care-request-list/care-request-list.component';

@NgModule({
  declarations: [
    ConfigComponent,
    CareRequestListComponent,
    EditProfileComponent,
    ListPetsComponent,
    PanelComponent,
    ProfileComponent,
    RegisterAddressComponent,
    RegisterCareRequestComponent,
    RegisterPetsComponent,
    UserAdministratorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ConfigRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class ConfigModule {}
