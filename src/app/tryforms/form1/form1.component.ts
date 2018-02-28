import { Component, OnInit, VERSION, Version } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  _firstName: string;

  constructor() {
  }

  get firstName() :string {
    return this._firstName
  }

  set firstName(value: string ) {
    this._firstName = value; 
  }   

  ngOnInit() {
    console.log('ngOnInit Form1 Component');
  }

  save(form1: NgForm): void {
    console.log(form1.form)
    
  }

}
