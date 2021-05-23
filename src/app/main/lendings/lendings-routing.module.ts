import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendingsHomeComponent } from "./lendings-home/lendings-home.component";
import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';
import { LendingsCloseComponent } from './lendings-close/lendings-close.component'

//var date = new Date();
//var hoy = date.getTime();

const routes: Routes = [
{path : '',component: LendingsHomeComponent},
{path: ':LENDINGID',component: LendingsDetailComponent},
//{path: ":LENDINGID/"+hoy+"/edit",component: LendingsDetailComponent},
{path: ':LENDINGID/close',component: LendingsCloseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendingsRoutingModule { }
