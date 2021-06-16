import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersCustomersRoutingModule } from './customers-customers-routing.module';
import { CustomersCustomersHomeComponent } from './customers-customers-home/customers-customers-home.component';
import { CustomersCustomersDetailComponent } from './customers-customers-detail/customers-customers-detail.component';
import { CustomersCustomersEditComponent } from './customers-customers-edit/customers-customers-edit.component';


@NgModule({
  declarations: [CustomersCustomersHomeComponent,
    CustomersCustomersDetailComponent,
    CustomersCustomersEditComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersCustomersRoutingModule
  ]
})
export class CustomersCustomersModule { }
