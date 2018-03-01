import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Form2 } from './form2';

@Component({
  selector: 'pm-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2Group: FormGroup;
//  form2: Form2 = new Form2()

  constructor( private fb: FormBuilder ) {}

    ngOnInit(): void {
      this.form2Group=this.fb.group({
        firstName:{value: 'xxx', disabled: false},
        lastName:'',
        sendCatalog: {value: true, disabled: true}
      })
    }

  // ngOnInit(): void {
  //   console.log('ngOnInit Form2')
  //   this.form2Group = new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl()
  //   })
  // }

  populateTestData(): void {
    this.form2Group.patchValue({
      firstName: 'Bernd'
    });
  }

  populateTestData2(): void {
    this.form2Group.setValue({
      firstName: 'Bernd',
      lastName: 'Vierhuf',
    });
  }

  save(): void {
    console.log(this.form2Group);
    console.log('Saved: ' + JSON.stringify(this.form2Group.value))
  }

}
