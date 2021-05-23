import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { LendingsRoutingModule } from './lendings-routing.module';
import { LendingsHomeComponent } from './lendings-home/lendings-home.component';
import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';
import { LendingsCloseComponent } from './lendings-close/lendings-close.component';


@NgModule({
  declarations: [
    LendingsHomeComponent,
    LendingsDetailComponent,
    LendingsCloseComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    LendingsRoutingModule
  ]
})
export class LendingsModule { }
