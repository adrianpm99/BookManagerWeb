import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersReservationsRoutingModule } from './customers-reservations-routing.module';
import { CustomersReservationsHomeComponent } from './customers-reservations-home/customers-reservations-home.component';


@NgModule({
  declarations: [CustomersReservationsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersReservationsRoutingModule
  ]
})
export class CustomersReservationsModule { }
