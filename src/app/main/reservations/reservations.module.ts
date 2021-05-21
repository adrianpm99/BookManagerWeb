import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { ReservationsRoutingModule } from './reservations-routing.module';

import { ReservationsHomeComponent } from "./reservations-home/reservations-home.component";
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';
import { ReservationsAddComponent } from './reservations-add/reservations-add.component';


@NgModule({

  imports: [
    CommonModule,
    OntimizeWebModule,
    ReservationsRoutingModule
  ],
  declarations: [
    ReservationsHomeComponent,
    ReservationsDetailComponent,
    ReservationsAddComponent,
  ]
})
export class ReservationsModule { }
