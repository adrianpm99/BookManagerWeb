import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ODateInputComponent, LoginService, DialogService, ODialogConfig, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lendings-close',
  templateUrl: './lendings-close.component.html',
  styleUrls: ['./lendings-close.component.css']
})

@Injectable()
export class LendingsCloseComponent implements OnInit {

  //Inputs import
  @ViewChild('lendingReturnDate', { read: ODateInputComponent, static: false }) lendingReturnDate: ODateInputComponent;

  constructor(
    public http: HttpClient,
    private loginService: LoginService,
    private actRoute: ActivatedRoute,
    protected dialogService: DialogService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    //Set inputs value
    let date = new Date().getTime();
    setTimeout(() => {
      this.lendingReturnDate.setData(date);
    }, 500);
  }//ngAfterViewInit()

  //Funtion call when save the lending close to search and update reservation and copyshelving tables
  closeLending(){

    let id = +this.actRoute.snapshot.paramMap.get('LENDINGID');
    let date = new Date().getTime();
    let dateNow = new Date(date + 259200000);
    let reservationId;
    let copyId;
    let alert = "Mueva los libros: "
    let sessionInfo = this.loginService.getSessionInfo();
    const headers = {'Authorization': 'Bearer ' + sessionInfo.id};
    const bodyReservationCurrent = {
      "filter": {
       "LENDINGID" : id
      },
      "columns": [
       "copyid","reservationid"
      ]
    };

    //Search if is any copy reservated
    this.http.post('http://localhost:33333/reservations/reservationCurrent/search', bodyReservationCurrent, { headers }).subscribe(data => {

      let copies = data["data"];

      for (let key in copies) {

        reservationId= copies[key]["reservationid"];
        copyId = copies[key]["copyid"];
        const bodyReservation = {
          "filter": {
           "reservationid" : reservationId
          },
          "data": {
              "COPYID" : copyId,
              "RESERVATIONDEADLINE": dateNow.getTime()
          },
            "sqltypes": {
              "RESERVATIONDEADLINE": 91
            }
        };
        const bodyCopyShelving = {
          "filter": {
           "COPYSHELVINGID" : copyId
          },
          "data": {
           "SHELVINGID" : 2
          }
        };

        //Update the reservation data (copyid and reservationdeadline)
        this.http.put('http://localhost:33333/reservations/reservation', bodyReservation, { headers }).subscribe();
        //Change the location of the copy to 2
        this.http.put('http://localhost:33333/copyshelvings/copyShelving', bodyCopyShelving, { headers }).subscribe();
        alert +=  " '"+ copyId + "' ";

      }//for
      //Shows a dialog message with the copys that were reservated
      if (this.dialogService && reservationId!=null) {
        alert += "a la estanteria de reservas"
        const config: ODialogConfig = {
          icon: 'alarm'
        };
        this.dialogService.info('Tiene reservas asociadas a los ejemplares devueltos', alert ,config);
      }//if
    });

  }//CloseLening()
}
