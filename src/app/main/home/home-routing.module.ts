import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LendingsDetailComponent } from '../lendings/lendings-detail/lendings-detail.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':LENDINGID', component: LendingsDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
