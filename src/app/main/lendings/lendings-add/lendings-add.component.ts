import { Component, OnInit, ViewChild } from '@angular/core';
import { ODateInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lendings-add',
  templateUrl: './lendings-add.component.html',
  styleUrls: ['./lendings-add.component.css']
})
export class LendingsAddComponent implements OnInit {

  //Inputs import
  @ViewChild('lendingDate', { read: ODateInputComponent, static: false }) lendingDate: ODateInputComponent;
  @ViewChild('lendingDeadLine', { read: ODateInputComponent, static: false }) lendingDeadLine: ODateInputComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    //Set inputs value
    let date = new Date().getTime();
    setTimeout(() => {
      this.lendingDate.setValue(date);
      this.lendingDeadLine.setValue(date+1296000000);
    }, 10);

  }

}

