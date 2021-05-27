import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';


@NgModule({
    imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersHomeComponent, CustomersDetailComponent, CustomersAddComponent, CustomersEditComponent]
})
export class CustomersModule { }
