import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Pattern Phone
  validCustomerPhone(control: FormControl): ValidationErrors {

    let regexp = new RegExp("^[\\d]{9}$");
    let result = {};

    if (!regexp.test(control.value)) {
      result = {'CustomerPhoneFormat': true};
    }
    return result;

  }//validCustomerFormat()

}
