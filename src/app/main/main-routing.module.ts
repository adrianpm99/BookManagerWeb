import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { BooksModule } from './books/books.module';
import { MainComponent } from './main.component';
import { CustomersModule } from './customers/customers.module';

export function loadBooksModule() {
  return BooksModule;
}

export function loadCustomersModule() {
  return CustomersModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {
        path: 'books',
        loadChildren: loadBooksModule
      },
      {
        path: 'customers',
        loadChildren: loadCustomersModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
