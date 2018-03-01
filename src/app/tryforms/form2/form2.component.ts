import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Form2 } from './form2';


function ratingRange(c: AbstractControl): {[key: string]: boolean} | null {
  if(c.value!= undefined && (isNaN(c.value) ||c.value < 1|| c.value > 5)){
    return{ 'range' : true};
  };
  return null;
};

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
        firstName:['xxx', 
                  [Validators.required, Validators.minLength(3)]
                ],
        lastName:'',
        phone: '',
        notification: 'email',
        rating: ['', ratingRange],
        sendCatalog: {value: true, disabled: true}
      })
    }

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

  setNotification(notifyVia: string): void {
    const phoneControl=this.form2Group.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
