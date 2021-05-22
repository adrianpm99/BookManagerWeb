import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopiesRoutingModule } from './copies-routing.module';
import { CopiesAddComponent } from './copies-add/copies-add.component';


@NgModule({
  declarations: [CopiesAddComponent],
  imports: [
    CommonModule,
    CopiesRoutingModule
  ]
})
export class CopiesModule { }
