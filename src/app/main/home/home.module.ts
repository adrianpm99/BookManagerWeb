import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LendingsModule } from '../lendings/lendings.module';
import { ReservationsModule } from '../reservations/reservations.module';



@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    LendingsModule,
    ReservationsModule

  ],
  declarations: [
    HomeComponent

  ]
})
export class HomeModule { }
