import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersReservationsRoutingModule } from './customers-reservations-routing.module';
import { CustomersReservationsHomeComponent } from './customers-reservations-home/customers-reservations-home.component';


@NgModule({
  declarations: [CustomersReservationsHomeComponent],
  imports: [
    CommonModule,
    CustomersReservationsRoutingModule
  ]
})
export class CustomersReservationsModule { }
