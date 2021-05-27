import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopiesRoutingModule } from './copies-routing.module';
import { CopiesAddComponent } from './copies-add/copies-add.component';
import { CopiesEditComponent } from './copies-edit/copies-edit.component';


@NgModule({
  declarations: [CopiesAddComponent, CopiesEditComponent],
  imports: [
    CommonModule,
    CopiesRoutingModule
  ]
})
export class CopiesModule { }
