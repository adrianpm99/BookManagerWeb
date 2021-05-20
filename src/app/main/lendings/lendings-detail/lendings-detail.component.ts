import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { OFormComponent, OQueryDataArgs, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lendings-detail',
  templateUrl: './lendings-detail.component.html',
  styleUrls: ['./lendings-detail.component.css']
})
export class LendingsDetailComponent implements OnInit {

  @ViewChild("testForm", {static: true}) testForm: OFormComponent;

  constructor() { }

  //@ViewChild('lendinDetail',{ static: false }) lendingDetail : OTableComponent;

  ngOnInit() {
    //let selected = this.lendingDetail.getSelectedItems();
    //let accountId = selected[0][0];
    //console.log(accountId);
    console.log(this.testForm);
    document.addEventListener("ready", carga, false);
    function carga(){
      //var adios = self.FormData;
      //console.log(adios);
      console.log(0);

    }
  }

}
