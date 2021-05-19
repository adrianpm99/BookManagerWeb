import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from "./books-home/books-home.component";
import { BooksDetailsComponent } from './books-details/books-details.component';
//import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksAddComponent } from './books-add/books-add.component';
const routes: Routes = [
{ path: '', component: BooksHomeComponent },
{ path: 'new', component: BooksAddComponent },
{ path: ':BOOKID', component: BooksDetailsComponent }//,
//{ path: ':bookid/edit', component: BooksEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
