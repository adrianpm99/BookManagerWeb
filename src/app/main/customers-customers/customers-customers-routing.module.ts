import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersCustomersHomeComponent } from './customers-customers-home/customers-customers-home.component';
import { CustomersCustomersDetailComponent } from './customers-customers-detail/customers-customers-detail.component';
import { CustomersCustomersEditComponent } from './customers-customers-edit/customers-customers-edit.component';


const routes: Routes = [
  {path : '', component: CustomersCustomersHomeComponent},
  {path: ':CUSTOMERID', component: CustomersCustomersDetailComponent },
  {path: ':CUSTOMERID/edit', component: CustomersCustomersEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersCustomersRoutingModule { }
