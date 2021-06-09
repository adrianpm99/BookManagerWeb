import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OButtonComponent, ODateInputComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'app-lendings-detail',
  templateUrl: './lendings-detail.component.html',
  styleUrls: ['./lendings-detail.component.css']
})
export class LendingsDetailComponent implements OnInit {

  @ViewChild('lendingReturnDate', { read: ODateInputComponent, static: false }) lendingReturnDate: ODateInputComponent;
  @ViewChild('closeLending', {read: OButtonComponent, static: false}) closeLendingBtn: OButtonComponent;
  isButtonVisible = true;

  constructor(private router: Router,
    private actRoute: ActivatedRoute) {
   }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      if(this.lendingReturnDate.isEmpty() == false){
        this.isButtonVisible = false;
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
