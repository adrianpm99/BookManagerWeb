import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lendings-detail',
  templateUrl: './lendings-detail.component.html',
  styleUrls: ['./lendings-detail.component.css']
})
export class LendingsDetailComponent implements OnInit {

  constructor(private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  clickAddReservation(){
    this.router.navigate(['main/reservations/new']);
  }

}
