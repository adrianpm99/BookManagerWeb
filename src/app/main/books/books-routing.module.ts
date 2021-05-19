import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from "./books-home/books-home.component";
//import { BooksDetailComponent } from './books-detail/books-detail.component';
//import { BooksEditComponent } from './books-edit/books-edit.component';
//import { BooksAddComponent } from './books-add/books-add.component';


const routes: Routes = [
{ path: '', component: BooksHomeComponent },
//{ path: 'add', component: BooksAddComponent },
//{ path: ':bookid', component: BooksDetailComponent },
//{ path: ':bookid/edit', component: BooksEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
