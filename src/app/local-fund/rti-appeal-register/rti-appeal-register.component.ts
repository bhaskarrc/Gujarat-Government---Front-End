import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RtiAppealRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-rti-appeal-register',
  templateUrl: './rti-appeal-register.component.html',
  styleUrls: ['./rti-appeal-register.component.css']
})
export class RtiAppealRegisterComponent implements OnInit {
  maxDate = new Date();
  rtiAppealRegisterForm: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;

  elementData: RtiAppealRegister[] = [
    {
      appealNo: '12044',
      appealDate: new Date('11/16/2019'),
      nameOfAppellantAddress: 'K P Shah - Sector 16, Plot No, 121/2 Gandhinagar',
      dateOfReceipt: new Date('11/25/2019'),
      nameDesignationOfPio: 'S N Shukla -APIO- 12044/2-26/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '134',
      appealDate: new Date('11/20/2019'),
      nameOfAppellantAddress: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      dateOfReceipt: new Date('11/28/2019'),
      nameDesignationOfPio: 'P M Munjani-PIO-134/1-29/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '256',
      appealDate: new Date('11/23/2019'),
      nameOfAppellantAddress: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      dateOfReceipt: new Date('11/30/2019'),
      nameDesignationOfPio: 'S N Shukla -APIO- 256/2/2-01/12/2019',
      decisionByFirst: 'Rejected',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
    {
      appealNo: '1101',
      appealDate: new Date('11/30/2019'),
      nameOfAppellantAddress: 'K P Kabra - Sukan Tenament, Naranpura, Ahmedabad',
      dateOfReceipt: new Date('11/15/2019'),
      nameDesignationOfPio: 'S P Patel - APIO- 1101/2-17/11/2019',
      decisionByFirst: 'Approved',
      whetherSecond: 'No',
      anyOtherInformation: 'NA',
      edit: true
    },
  ];
  displayedColumns: any[] = [
    'serialNo',
    'appealNo',
    'appealDate',
    'nameOfAppellantAddress',
    'dateOfReceipt',
    'nameDesignationOfPio',
    'decisionByFirst',
    'whetherSecond',
    'anyOtherInformation',
    'action',
  ];

  dataSource = new MatTableDataSource<any>(this.elementData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rtiAppealRegisterForm = this.fb.group({
      appealNo: [''],
      appealDate: [''],
      nameOfAppellantAddress: [''],
      dateOfReceipt: [''],
      nameDesignationOfPio: [''],
      decisionByFirst: [''],
      whetherSecond: [''],
      anyOtherInformation: [''],
    });
  }

  // on click on submit button
  add() {

    if (this.rtiAppealRegisterForm.valid) {
      this.isSubmitted = false;
      this.elementData.push({
        appealNo: this.rtiAppealRegisterForm.value.appealNo,
        appealDate: this.rtiAppealRegisterForm.value.appealDate,
        nameOfAppellantAddress: this.rtiAppealRegisterForm.value.nameOfAppellantAddress,
        dateOfReceipt: this.rtiAppealRegisterForm.value.dateOfReceipt,
        nameDesignationOfPio: this.rtiAppealRegisterForm.value.nameDesignationOfPio,
        decisionByFirst: this.rtiAppealRegisterForm.value.decisionByFirst,
        whetherSecond: this.rtiAppealRegisterForm.value.whetherSecond,
        anyOtherInformation: this.rtiAppealRegisterForm.value.anyOtherInformation,
        edit: true
      });

      this.dataSource.data = this.dataSource.data;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  reset() {
    this.rtiAppealRegisterForm.reset();
  }

  // on click on edit icon in table enable row for editing
  onEdit(element) {
    element.edit = !element.edit;
  }

}
