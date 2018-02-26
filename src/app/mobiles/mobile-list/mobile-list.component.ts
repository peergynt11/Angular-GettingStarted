import { Component, OnInit } from '@angular/core';
import { IMobile } from './../mobile'
import { MobileService } from './../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  toNested: string = 'Das ist einer Variable vom Container';
  fromNested: string; 
  mobiles: string;
  errorMessage: string;
  _mobileId: string;  

  constructor( private _mobileService: MobileService, private _router: Router ) {  }

  get mobileId() :string {
    return this._mobileId
  }

  set mobileId(value: string ) {
    this._mobileId = value; 
  }   

  showMobile() {
    let route = 'mobiles/'+this.mobileId
    this._router.navigate([route]);
  }   

  ngOnInit() {
    this._mobileService.getMobiles()
    .subscribe (
          telefone => this.mobiles=JSON.stringify(telefone),
          error    => this.errorMessage=<any>error
    );
  }

  onToContainer(message: string): void   {
    console.log('Received event from mobile-detail.component: '+message )
    this.fromNested = message;
  }

}
