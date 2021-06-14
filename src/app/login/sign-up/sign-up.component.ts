import { Component, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  getValue() {
    return 'password';
  }
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
