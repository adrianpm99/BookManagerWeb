import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendingsHomeComponent } from "./lendings-home/lendings-home.component";
<<<<<<< HEAD
import { LendingsDetailComponent } from "./lendings-detail/lendings-detail.component"


const routes: Routes = [{
  path : '',
  component: LendingsHomeComponent
},
{
  path: ":LENDINGID",
  component: LendingsDetailComponent
}];
=======
//import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';
//import { LendingsEditComponent } from './lendings-edit/lendings-edit.component';
//import { LendingsAddComponent } from './lendings-add/lendings-add.component';

const routes: Routes = [{ path: '', component: LendingsHomeComponent }
//{ path: 'add', component: LendingsAddComponent },
//{ path: ':lendingid', component: LendingsDetailComponent },
//{ path: ':lendingid/edit', component: LendingsEditComponent }
];
>>>>>>> development

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendingsRoutingModule { }
