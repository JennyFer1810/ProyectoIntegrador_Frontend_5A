import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    NavbarComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CarruselComponent
  ]
})
export class SharedModule { }
