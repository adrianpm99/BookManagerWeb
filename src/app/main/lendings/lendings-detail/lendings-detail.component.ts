import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OButtonComponent, ODateInputComponent } from 'ontimize-web-ngx';
import { LoginService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-lendings-detail',
  templateUrl: './lendings-detail.component.html',
  styleUrls: ['./lendings-detail.component.css']
})
export class LendingsDetailComponent implements OnInit {

  @ViewChild('lendingReturnDate', { read: ODateInputComponent, static: false }) lendingReturnDate: ODateInputComponent;
  @ViewChild('closeLending', {read: OButtonComponent, static: false}) closeLendingBtn: OButtonComponent;
  @ViewChild('newReservation', {read: OButtonComponent, static: false}) newReservationBtn: OButtonComponent;
  isButtonCloseLendingVisible = true;
  isButtonNewReservationVisible = true;

  constructor(private router: Router,
    private actRoute: ActivatedRoute, private loginService:LoginService) {

   }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      if(this.lendingReturnDate.isEmpty() == false ){
        this.isButtonCloseLendingVisible = false;
      }else if (this.loginService.user != "demo"){
        this.isButtonCloseLendingVisible = false
        this.isButtonNewReservationVisible = false
      }
    }, 80);
  }

  //Navigation to the lending close tab with a certain lending id
  clickCloseLending(){
    let id = +this.actRoute.snapshot.paramMap.get('LENDINGID');
    this.router.navigate(['main/lendings/'+id+'/close']);
  }//clickCloseLending()

  //Navigation to the lending add tab
  clickAddReservation(){
    this.router.navigate(['main/reservations/new']);
  }//clickAddReservation()

}
