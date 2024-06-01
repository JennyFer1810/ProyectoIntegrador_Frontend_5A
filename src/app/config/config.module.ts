import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListPetsComponent } from './list-pets/list-pets.component';



@NgModule({
  declarations: [
    ConfigComponent,
    PanelComponent,
    EditProfileComponent,
    ListPetsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ConfigRoutingModule,
    SharedModule
  ]
})
export class ConfigModule { }
