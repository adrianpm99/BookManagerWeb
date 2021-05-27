import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrls: ['./customers-add.component.css']
})
export class CustomersAddComponent implements OnInit {

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
