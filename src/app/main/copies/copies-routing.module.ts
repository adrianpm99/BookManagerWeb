import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopiesAddComponent } from './copies-add/copies-add.component';


const routes: Routes = [{ path: "new", component: CopiesAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopiesRoutingModule { }
