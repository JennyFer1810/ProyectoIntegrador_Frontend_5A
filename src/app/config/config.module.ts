import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    ConfigComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
