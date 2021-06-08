import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersHomeRoutingModule } from './customers-home-routing.module';
import { CustomersHomeHomeComponent } from './customers-home-home/customers-home-home.component';


@NgModule({
  declarations: [CustomersHomeHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersHomeRoutingModule
  ]
})
export class CustomersHomeModule { }
