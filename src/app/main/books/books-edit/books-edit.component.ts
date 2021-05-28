import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormControl} from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Pattern ISBN, checks if the provided number is exactly 13 characters
  validISBN(control: FormControl): ValidationErrors {

    let regexp = new RegExp("^[\\d]{13}$");
    let result = {};

    if (!regexp.test(control.value)) {
      result = {'ISBNFormat': true};
    }
    return result;

  }//validISBN()

  //Pattern BookPublicationYear, checks if the provided number is exactly 4 characters and is smaller or equal than the current year
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

  //Pattern PageNumber, checks that the provided number is positive
  validBookPageNumber(control: FormControl): ValidationErrors {

    let result = {};

    if (control.value <= 0 && control.value) {
      result = {'bookPageNumberFormat': true};
    }
    return result;

  }//validBookPageNumber()
}
