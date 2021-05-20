import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { LendingsRoutingModule } from './lendings-routing.module';
import { LendingsHomeComponent } from './lendings-home/lendings-home.component';
import { LendingsAddComponent } from './lendings-add/lendings-add.component';
import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';
import { CopylendingsAddComponent } from './copylendings-add/copylendings-add.component';

@NgModule({

  declarations: [
    LendingsHomeComponent, LendingsAddComponent, CopylendingsAddComponent, LendingsDetailComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    LendingsRoutingModule
  ]
})
export class LendingsModule { }
