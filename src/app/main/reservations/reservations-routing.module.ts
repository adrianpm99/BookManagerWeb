import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsHomeComponent } from "./reservations-home/reservations-home.component";
import { ReservationsDetailComponent } from './reservations-detail/reservations-detail.component';
import { ReservationsAddComponent } from './reservations-add/reservations-add.component';



const routes: Routes = [
  {path : '',component: ReservationsHomeComponent},
  {path : 'new', component: ReservationsAddComponent},
  {path : ":RESERVATIONID",component: ReservationsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
