import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

//import { HomeModule } from './home/home.module';
import { MainComponent } from './main.component';
import { BooksModule } from './books/books.module';
import { CustomersModule } from './customers/customers.module';
import { ReservationsModule } from './reservations/reservations.module';
import { LendingsModule } from './lendings/lendings.module';
import { CopiesModule } from './copies/copies.module';

export function loadBooksModule() { return BooksModule; }
export function loadCustomersModule() { return CustomersModule; }
export function loadReservationsModule() { return ReservationsModule; }
export function loadLendingsModule() { return LendingsModule; }
export function loadCopiesModule() { return CopiesModule}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'books', loadChildren: loadBooksModule },
      { path: 'customers', loadChildren: loadCustomersModule },
      { path: 'reservations', loadChildren: loadReservationsModule },
      { path: 'lendings', loadChildren: loadLendingsModule },
      { path: 'copys', loadChildren: loadCopiesModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
