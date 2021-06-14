import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';


@NgModule({
    imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersHomeComponent, CustomersDetailComponent, CustomersEditComponent]
})
export class CustomersModule { }
