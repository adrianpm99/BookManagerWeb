import { Component, OnInit, ViewChild } from '@angular/core';
import { ODateInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lendings-close',
  templateUrl: './lendings-close.component.html',
  styleUrls: ['./lendings-close.component.css']
})
export class LendingsCloseComponent implements OnInit {

  //Inputs import
  @ViewChild('lendingReturnDate', { read: ODateInputComponent, static: false }) lendingReturnDate: ODateInputComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    //Set inputs value
    let date = new Date().getTime();
    setTimeout(() => {
      this.lendingReturnDate.setData(date);
    }, 100);

  }

  closeLending(){


     console.log("guardar pulsado")


   }


}
