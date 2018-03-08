import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  
  title = 'Angular von BV: Getting Started';


  menuItems = [
    {form: 'form1', formDesc: 'Template Form'},
    {form: 'form2', formDesc: 'Reactive Form'},
    {form: 'form3', formDesc: 'ngx bootstrap'},  
  ]


  // menuItems: string[] = [
  //   'The first choice!',
  //   'And another choice for you.',
  //   'but wait! A third!'
  // ];
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  
  showIt(): void {
    console.log('Dropdown is shown');
  }
  
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
