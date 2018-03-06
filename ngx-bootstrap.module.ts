import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [],
  exports: [BsDropdownModule, TooltipModule, ModalModule, BsDatepickerModule]
})
export class NgxBootstrapModule { }
