import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from "./books-home/books-home.component";
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { CopiesAddComponent} from '../copies/copies-add/copies-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';


const routes: Routes = [
{ path: '', component: BooksHomeComponent },   // ... /books
{ path: 'new', component: BooksAddComponent }, // ... /books/new
{ path: ':BOOKID', component: BooksDetailsComponent }, // ... /books/3
{ path: ':BOOKID/copies/new', component: CopiesAddComponent }, // ... /books/3/copies/new
{ path: ':BOOKID/edit', component:BooksEditComponent}  //.../books/edit
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
