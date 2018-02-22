import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'pm-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {

  mobileName: String;

  constructor(private _route: ActivatedRoute, private _mobileService: MobileService, private _router: Router) { }


  goToMobiles() {
    this._router.navigate(['mobiles']);
  }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this._mobileService.getSingleMobile(id)
      .subscribe(
                telefon => this.mobileName=JSON.stringify(telefon)
      );
      console.log('MOBILNAME: ' + this.mobileName);
    }
  }
