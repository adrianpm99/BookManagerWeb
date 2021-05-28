import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lendings-close',
  templateUrl: './lendings-close.component.html',
  styleUrls: ['./lendings-close.component.css']
})
export class LendingsCloseComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {

  }

  //Method that gets the date 15 days from current time
  getValue() {
    let fecha=new Date();
    fecha.getTime();
    return fecha;
  }//getDate()


}
