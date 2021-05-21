import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendingsHomeComponent } from "./lendings-home/lendings-home.component";
import { LendingsDetailComponent } from "./lendings-detail/lendings-detail.component";
import { LendingsAddComponent } from './lendings-add/lendings-add.component';
import { CopylendingsAddComponent } from './copylendings-add/copylendings-add.component';



const routes: Routes = [
  {path : '',component: LendingsHomeComponent},
  {path: 'new', component: LendingsAddComponent },
  {path: ":LENDINGID",component: LendingsDetailComponent},
  {path: ":LENDINGID/new", component: CopylendingsAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendingsRoutingModule { }
