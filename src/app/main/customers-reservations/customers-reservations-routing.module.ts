import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersReservationsHomeComponent } from './customers-reservations-home/customers-reservations-home.component';


const routes: Routes = [{
  path : '', component: CustomersReservationsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersReservationsRoutingModule { }
