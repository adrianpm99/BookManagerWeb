import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
<<<<<<< HEAD
=======
import { LendingsRoutingModule } from './lendings-routing.module';
import { LendingsHomeComponent } from './lendings-home/lendings-home.component';
import { LendingsAddComponent } from './lendings-add/lendings-add.component';
>>>>>>> dev/addlending

import { LendingsRoutingModule } from './lendings-routing.module';
import { LendingsHomeComponent } from "./lendings-home/lendings-home.component";
import { LendingsDetailComponent } from './lendings-detail/lendings-detail.component';

@NgModule({
<<<<<<< HEAD
  declarations: [LendingsDetailComponent,
    LendingsHomeComponent,
  ],
=======
  declarations: [LendingsHomeComponent, LendingsAddComponent ],
>>>>>>> dev/addlending
  imports: [
    CommonModule,
    OntimizeWebModule,
    LendingsRoutingModule
  ]
})
export class LendingsModule { }
