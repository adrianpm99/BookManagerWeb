import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersLendingsLendingsComponent } from './customers-lendings-lendings/customers-lendings-lendings.component';



const routes: Routes = [{
  path : '',
  component: CustomersLendingsLendingsComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersLendingsRoutingModule { }
