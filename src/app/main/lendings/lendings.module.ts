import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { LendingsRoutingModule } from './lendings-routing.module';
import { LendingsHomeComponent } from './lendings-home/lendings-home.component';
import { LendingsAddComponent } from './lendings-add/lendings-add.component';
import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';

@NgModule({

  declarations: [LendingsDetailComponent,
    LendingsHomeComponent, LendingsAddComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    LendingsRoutingModule
  ]
})
export class LendingsModule { }
