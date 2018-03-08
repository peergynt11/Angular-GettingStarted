import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, AbstractControl, ValidatorFn, MinLengthValidator } from '@angular/forms';
import { Form2 } from './form2';
import 'rxjs/add/operator/debounceTime';


function ratingRange1(c: AbstractControl): {[key: string]: boolean} | null {
  if(c.value!= undefined && (isNaN(c.value) ||c.value < 1|| c.value > 5)){
    return{ 'range' : true};
  };
  return null;
};

function ratingRange (min: number, max: number): ValidatorFn {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if(c.value!= undefined && (isNaN(c.value) ||c.value < min|| c.value > max)){
      return{ 'range' : true};
    };
    return null;
  };
}


@Component({
  selector: 'pm-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form2Group: FormGroup;
  departments = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  
  firstNameErrorMessage: string;
  
  private validationMessages = {
    'required': 'Please enster your first Name.',
    'minlength': 'PLease min 3 chars'
  };    
   
  constructor( private fb: FormBuilder ) {
  }

    ngOnInit(): void {
      this.form2Group=this.fb.group({
        firstName:['xxx', 
                  [Validators.required, Validators.minLength(3)]
                ],
        lastName:'',
        phone: '',
        notification: 'email',
        rating: ['', ratingRange(1,5)],
        sendCatalog: {value: true, disabled: true},
        dept: [this.departments[0], Validators.required]
      })

      this.form2Group.get('notification').valueChanges.subscribe( value => this.setNotification(value) );

      const firstName = this.form2Group.get('firstName');
      firstName.valueChanges.debounceTime(1500).subscribe(value => this.setMessage(firstName));

    }

    setMessage(c: AbstractControl): void {
      this.firstNameErrorMessage = '';
      if ((c.touched || c.dirty) && c.errors) {
          this.firstNameErrorMessage = Object.keys(c.errors).map(key =>
              this.validationMessages[key]).join(' ');
      }
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

  onChangeDept(): void {
    console.log(this.form2Group.value);
    console.log(this.form2Group.get('dept').value);
  }


}
