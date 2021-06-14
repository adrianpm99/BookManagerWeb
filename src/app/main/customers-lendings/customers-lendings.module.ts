import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CustomersLendingsRoutingModule } from './customers-lendings-routing.module';
import { CustomersLendingsLendingsComponent } from './customers-lendings-lendings/customers-lendings-lendings.component';


@NgModule({
  declarations: [CustomersLendingsLendingsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersLendingsRoutingModule
  ]
})
export class CustomersLendingsModule { }
