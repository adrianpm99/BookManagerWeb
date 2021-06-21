import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-customers-customers-detail',
  templateUrl: './customers-customers-detail.component.html',
  styleUrls: ['./customers-customers-detail.component.css']
})
export class CustomersCustomersDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   //Pattern Phone, checks if the provided number is exactly 9 characters
   validCustomerPhone(control: FormControl): ValidationErrors {

    let regexp = new RegExp("^[\\d]{9}$");
    let result = {};

    if (!regexp.test(control.value)) {
      result = {'CustomerPhoneFormat': true};
    }
    return result;

  }//validCustomerFormat()


}
