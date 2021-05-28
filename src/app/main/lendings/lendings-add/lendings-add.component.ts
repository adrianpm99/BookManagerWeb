import { Component, OnInit, ViewChild } from '@angular/core';
import { ODateInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lendings-add',
  templateUrl: './lendings-add.component.html',
  styleUrls: ['./lendings-add.component.css']
})
export class LendingsAddComponent implements OnInit {
  @ViewChild ('lendingDate',{static : true}) lendingDate : ODateInputComponent;
  constructor() { }

  ngOnInit() {

  }

  //Method that gets the current date and returns it
  getLendingDate(){
    let date = Date.now();
    console.log(date);
    return date;
  }//getLendingDate()

  //Method that gets the return date of the lending (current date + 15 days) and returns it
  getDate(){
    let date = Date.now() + 1296000000;

    console.log(date);
    return date;
  }//getDate()
}

