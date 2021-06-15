import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersCustomersHomeComponent } from './customers-customers-home/customers-customers-home.component';
import { CustomersDetailComponent } from '../customers/customers-detail/customers-detail.component';


const routes: Routes = [
  {path : '', component: CustomersCustomersHomeComponent},
  {path: ':CUSTOMERID', component: CustomersDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersCustomersRoutingModule { }
