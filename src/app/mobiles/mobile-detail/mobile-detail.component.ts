import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'pm-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {

  mobileName: string;
  @Input() fromContainer: String;
  @Output() toContainer: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private _route: ActivatedRoute, private _mobileService: MobileService, private _router: Router) { }


  goToMobiles() {
    this._router.navigate(['mobiles']);
  }

  ngOnInit() {
  }
 
  showSingleMobile() {
      let id = this.fromContainer
      //   let id = this._route.snapshot.paramMap.get('id');
        this._mobileService.getSingleMobile(this.fromContainer)
        .subscribe(
                  telefon => this.mobileName=JSON.stringify(telefon)
        );
        this.toContainer.emit('MOBILNAME: '+this.mobileName);    
  }

  // showSingleMobile() {
    //   let id = this.fromContainer
    //   console.log('ID from Container: ' + this.fromContainer);

    //   //   let id = this._route.snapshot.paramMap.get('id');
    //   this._mobileService.getSingleMobile(this.fromContainer)
    //     .subscribe(
    //               telefon => this.mobileName=JSON.stringify(telefon)
    //     );
    //     console.log('MOBILNAME: ' + this.mobileName);
    //     this.toContainer.emit('MOBILNAME: '+this.mobileName);
    //   }   
  }
