import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersHomeHomeComponent } from './customers-home-home/customers-home-home.component';


const routes: Routes = [{
  path : '',
  component: CustomersHomeHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersHomeRoutingModule { }
