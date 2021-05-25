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

  getLendingDate(){
    let date = Date.now();
    console.log(date);
    return date;
  }
  getDate(){
    let date = Date.now() + 1296000000;

    console.log(date);
    return date;
  }
}

