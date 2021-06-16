import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService, LoginService, ODialogConfig } from 'ontimize-web-ngx';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {

  constructor(
    public http: HttpClient,
    private loginService: LoginService,
    private actRoute: ActivatedRoute,
    protected dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  resetPassword(){
    let id = +this.actRoute.snapshot.paramMap.get('CUSTOMERID');
    let sessionInfo = this.loginService.getSessionInfo();
    let password = Math.round(Math.random() * 100000000) ;
    const headers = {'Authorization': 'Bearer ' + sessionInfo.id};
    const bodyUserData = {
      "filter": {
       "CUSTOMERID" : id
      },
      "columns": [
        "USER_"
      ]
    };
    this.http.post('http://localhost:33333/users/userData/search', bodyUserData, { headers }).subscribe(data => {
      let user = data["data"][0]["USER_"];
      const bodyUser = {
        "filter": {
        "USER_" : user
        },
        "data": {
          "PASSWORD": password
        }
      };
      this.http.put('http://localhost:33333/users/user', bodyUser, { headers }).subscribe();
      if (this.dialogService) {
        this.dialogService.info('Contraseña Reseteada', "Su nueva contraseña es "+password);
      }//if
    });

  }//resetPassword()

}
