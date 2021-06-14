import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { SignUpComponent } from 'src/app/login/sign-up/sign-up.component';

const routes: Routes = [
{ path : '', component: CustomersHomeComponent },
{ path: 'new', component: SignUpComponent },
{ path: ':CUSTOMERID', component: CustomersDetailComponent },
{ path: ':CUSTOMERID/edit', component: CustomersEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
