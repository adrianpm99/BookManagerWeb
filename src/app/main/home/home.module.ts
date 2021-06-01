import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { LendingsModule } from '../lendings/lendings.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';




@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    LendingsModule
  ],
  declarations: [
    HomeComponent

  ]
})
export class HomeModule { }
