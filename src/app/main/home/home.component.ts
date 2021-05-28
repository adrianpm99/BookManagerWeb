import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }
  ngOnInit() {
  }

  //Main screen of the application

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  //Button that allows a lending to be created
  clickAddLending(){
    this.router.navigate(['main/lendings/new']);
  }

  //Button that allows a lending to be closed
  clickCloseLending(){
    this.router.navigate(['main/lendings']);
  }


}
