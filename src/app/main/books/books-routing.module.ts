import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from "./books-home/books-home.component";
import { BookDetailComponent } from './detail/books-detail.component';
import { BookEditComponent } from './edit/books-edit.component';
import { BookAddComponent } from './add/books-add.component';


const routes: Routes = [
{ path: '', component: BooksHomeComponent },
{ path: 'add', component: BooksAddComponent },
{ path: ':bookid', component: BooksDetailComponent },
{ path: ':bookid/edit', component: BooksEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
