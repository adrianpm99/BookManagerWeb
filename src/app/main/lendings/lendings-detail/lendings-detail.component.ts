import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lendings-detail',
  templateUrl: './lendings-detail.component.html',
  styleUrls: ['./lendings-detail.component.css']
})
export class LendingsDetailComponent implements OnInit {

  constructor(private router: Router,
    private actRoute: ActivatedRoute) {
   }

  ngOnInit() {


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
