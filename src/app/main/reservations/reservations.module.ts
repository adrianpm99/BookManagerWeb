import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { ReservationsRoutingModule } from './reservations-routing.module';

import { ReservationsHomeComponent } from "./reservations-home/reservations-home.component";
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';


@NgModule({

  imports: [
    CommonModule,
    OntimizeWebModule,
    ReservationsRoutingModule
  ],
  declarations: [
    ReservationsHomeComponent,
    ReservationsDetailComponent
  ]
})
export class ReservationsModule { }
