import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
//import { CustomersEditComponent } from './customers-edit/customers-edit.component';

const routes: Routes = [
{ path : '', component: CustomersHomeComponent },
{ path: ':CUSTOMERID', component: CustomersDetailComponent },
{ path: 'new', component: CustomersAddComponent }

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
