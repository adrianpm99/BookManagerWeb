import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersCustomersRoutingModule } from './customers-customers-routing.module';
import { CustomersCustomersHomeComponent } from './customers-customers-home/customers-customers-home.component';
import { CustomersDetailComponent } from '../customers/customers-detail/customers-detail.component';


@NgModule({
  declarations: [CustomersCustomersHomeComponent,
    CustomersDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersCustomersRoutingModule
  ]
})
export class CustomersCustomersModule { }
