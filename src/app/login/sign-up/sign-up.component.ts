import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  user: FormControl;
  password: FormControl;
  router: Router;

  getValue() { return 'password'; }

  constructor(private actRoute: ActivatedRoute, router: Router, public http: HttpClient){ this.router= router }


  ngOnInit()
  {
    const userCtrl: FormControl = new FormControl('', Validators.required);
    const pwdCtrl: FormControl = new FormControl('', Validators.required);
    this.signUpForm = new FormGroup({});
    this.signUpForm.addControl('username', userCtrl);
    this.signUpForm.addControl('password', pwdCtrl);
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


  sign_up()
  {
    //Note: here, userName, actually is account name
    const userName = this.signUpForm.value['username'];
    const password = this.signUpForm.value['password'];

    //Use public auth (basic restricted permissions)
    const publicUserInfoId= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNjIzNzU1NzI0MDkyLCJ1c2VybmFtZSI6ImN1c3RvbWVyIn0.DGihroQoVbuZw-XwJmjdBl611QyW7cLZZ6I_p7gXy1U"

    //Data to send on the query
    const headers = {'Authorization': 'Bearer ' + publicUserInfoId};
    const newUserData = 
    {
      "data":
      {
        "USER_": userName,
        "PASSWORD": password
      }
    };

    //Send data to the users service on the backend (create new customer and permissions)
    this.http.post('http://localhost:33333/users/user', newUserData, { headers }).subscribe();

    //Go to the login page (new customer can use the new data to login)
    this.router.navigate(['../'],{ relativeTo: this.actRoute });

  }//sign_up()

}//class SignUpComponent