import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

  getTableData(): Array<any> {
    let accounts =  [{"COPYID":"DFGSDFS","COPYNOTES":"SDFBFXHFHD"}];
    return accounts;
  }//getTableData()


  constructor() { }

  ngOnInit() {
  }
  editionStarted(arg: any) {
    console.log('editionStarted');
    console.log(arg);
  }//editionStarted()

  editionCancelled(arg: any) {
    console.log('editionCancelled');
    console.log(arg);
  }//editionCancelled

  editionCommitted(arg: any) {
    console.log('editionCommitted');
    console.log(arg);
  }//editionCommitted()
}
