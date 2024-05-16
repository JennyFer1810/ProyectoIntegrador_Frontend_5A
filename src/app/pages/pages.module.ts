import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsContactsComponent,
    ServicesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
