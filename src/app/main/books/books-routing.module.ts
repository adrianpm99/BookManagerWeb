import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from "./books-home/books-home.component";
import { BooksDetailsComponent } from './books-details/books-details.component';

const routes: Routes = [{
  path : '',
  component: BooksHomeComponent
},
{
  path: ":BOOKID",
  component: BooksDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
