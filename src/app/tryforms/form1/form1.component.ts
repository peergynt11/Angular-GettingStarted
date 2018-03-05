import { Component, OnInit, VERSION, Version } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  departments = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  _firstName: string;
  _dept: string;
  constructor() {
  }

  get firstName() :string {
    return this._firstName
  }

  set firstName(value: string ) {
    this._firstName = value; 
  }   


  set dept(value) {
    this._dept=value;
  }

  get dept(): string {
    return this._dept
  }

  ngOnInit() {
    console.log('ngOnInit Form1 Component');
  }


  onChangeDept(): void {
    console.log(this.dept);
  }

  save(form1: NgForm): void {
    console.log(form1.form)
    console.log(form1.value)
  }









}
