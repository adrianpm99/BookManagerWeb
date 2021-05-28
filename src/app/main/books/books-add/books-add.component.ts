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

  //Pattern ISBN, checks if the provided number has exactly 13 numeric characters
  validISBN(control: FormControl): ValidationErrors {

    let regexp = new RegExp("^[\\d]{13}$");
    let result = {};

    if (!regexp.test(control.value)) {
      result = {'ISBNFormat': true};
    }
    return result;

  }//validISBN()

  //Pattern BookPublicationYear, checks if the provided number is exactly 4 characters AND is smaller than the current year.
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

  //Pattern PageNumber, checks if the number is a positive number.
  validBookPageNumber(control: FormControl): ValidationErrors {

    let result = {};

    if (control.value <= 0 && control.value) {
      result = {'bookPageNumberFormat': true};
    }
    return result;

  }//validBookPageNumber()
}
