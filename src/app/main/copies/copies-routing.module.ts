import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopiesAddComponent } from './copies-add/copies-add.component';
import { CopiesEditComponent } from './copies-edit/copies-edit.component';


const routes: Routes = [
  { path: "new", component: CopiesAddComponent },
  { path: ":COPYID/edit", component: CopiesEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopiesRoutingModule { }
