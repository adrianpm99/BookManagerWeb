import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Pattern ISBN
  validISBN(control: FormControl): ValidationErrors {

    let regexp = new RegExp("^[\\d]{13}$");
    let result = {};

    if (!regexp.test(control.value)) {
      result = {'ISBNFormat': true};
    }
    return result;

  }//validISBN()

  //Pattern BookPublicationYear
  validBookPublicationYear(control: FormControl): ValidationErrors {

    var fecha = new Date();
    let regexp = new RegExp("^[\\d]{4}$");
    let result = {};

    if (control.value){
      if (!regexp.test(control.value.toString())) {
        result = {'bookPublicationYearFormat': true};
      }else if(control.value > fecha.getFullYear()){
        result = {'bookPublicationYearFormatToday': true};
      }
    }
    return result;

  }//validBookPublicationYear()

  //Pattern PageNumber
  validBookPageNumber(control: FormControl): ValidationErrors {

    let result = {};

    if (control.value <= 0 && control.value) {
      result = {'bookPageNumberFormat': true};
    }
    return result;

  }//validBookPageNumber()
}
