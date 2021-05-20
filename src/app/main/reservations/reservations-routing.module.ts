import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsHomeComponent } from "./reservations-home/reservations-home.component";
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';



const routes: Routes = [{
  path : '',
  component: ReservationsHomeComponent},
  {
  path : ":RESERVATIONID",
  component: ReservationsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
