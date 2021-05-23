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

    //poner el boton guardar en activo
    //focusMethod = function getFocus() {
     // document.getElementById("myButton").focus();
   // document.getElementById("LENDINGRETURNDATE").nodeValue = "20-12-2021";
  }

  clickCloseLending(){
    let date = new Date().getTime();
   // let hoy = date.getFullYear()+ "-" + date.getMonth()+ "-" + date.getDay()
    //document.getElementById("LENDINGRETURNDATE").firstChild.nodeValue = "20-12-2021";

    this.router.navigate(['main/lendings/LENDINGID/close']);
  }


  clickAddReservation(){
    this.router.navigate(['main/reservations/new']);
  }


/*
  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data)
    }
  }

  public closeDialog(event: any) {
    this.dialogRef.close();
  }
*/

}
