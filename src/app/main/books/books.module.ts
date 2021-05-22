import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BooksRoutingModule } from './books-routing.module';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { CopiesAddComponent} from '../copies/copies-add/copies-add.component';

@NgModule({

  imports: [
    CommonModule,
    OntimizeWebModule,
    BooksRoutingModule
  ],
  declarations: [BooksHomeComponent, BooksDetailsComponent, BooksAddComponent, CopiesAddComponent]
})
export class BooksModule { }
