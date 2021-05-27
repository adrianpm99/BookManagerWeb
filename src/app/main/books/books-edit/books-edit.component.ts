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
