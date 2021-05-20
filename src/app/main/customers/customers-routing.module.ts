import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
//import { CustomersEditComponent } from './customers-edit/customers-edit.component';
//import { CustomersDetailsComponent } from './customers-details/customers-details.component';

const routes: Routes = [
{ path : '', component: CustomersHomeComponent },
{ path: 'new', component: CustomersAddComponent },
{ path: ':CUSTOMERID', component: CustomersDetailComponent }
/*
{ 
  path: ':customerid/edit', 
  component: CustomersEditComponent 
}*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
