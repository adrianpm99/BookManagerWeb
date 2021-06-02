import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LendingsDetailComponent } from '../lendings/lendings-detail/lendings-detail.component';
import { ReservationsDetailComponent} from '../reservations/reservations-detail/reservations-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':LENDINGID', component: LendingsDetailComponent},
  { path: ':RESERVATIONID', component: ReservationsDetailComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
