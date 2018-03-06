import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'pm-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  modalRef: BsModalRef;
  minDate = new Date(2018, 5, 1);
  maxDate = new Date(2018, 5, 31);
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template)
  }

  onClickClose() {
    console.log(this.modalRef) 
    this.modalRef.hide();
  }

  save(form1: NgForm): void {
    console.log(form1.form)
    console.log(form1.value)
  }

}
