import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { GiResolutionMaster } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-resolution-master',
  templateUrl: './gi-resolution-master.component.html',
  styleUrls: ['./gi-resolution-master.component.css']
})
export class GiResolutionMasterComponent implements OnInit {

  // variable
  showTable = false;
  errorMessages = GroupInsuranceMessage;

  // date
  todayDate = new Date();
  // form group
  resolutionMasterForm: FormGroup;

  // Table Data for Resolution Master Table
  resolutionMasterData: GiResolutionMaster[] = [
    { resolutionDate: '10-NOV-1981', applicableDate: '1-APR-1982', groupA: '80', groupB: '40', groupC: '20', groupD: '10' },
    { resolutionDate: '1-SEP-1989', applicableDate: '1-APR-1990', groupA: '120', groupB: '60', groupC: '30', groupD: '15' },
    { resolutionDate: '26-MAR-1993', applicableDate: '1-APR-1993', groupA: '200', groupB: '100', groupC: '50', groupD: '25' },
    { resolutionDate: '31-DEC-2002', applicableDate: '1-APR-2003', groupA: '400', groupB: '200', groupC: '100', groupD: '50' },
  ];

  // Table Columns for Resolution Master Table
  resolutionMasterDataSourceColumn: string[] = [
    'srno', 'resolutionDate', 'applicableDate', 'groupA', 'groupB', 'groupC', 'groupD',
  ];
  resolutionMasterDataSource = new MatTableDataSource<GiResolutionMaster>(this.resolutionMasterData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.resolutionMasterFormData();
  }

  // form data
  resolutionMasterFormData() {
    this.resolutionMasterForm = this.fb.group({
      resolutionDate: [''],
      applicatbleDate: [''],
      groupA: [''],
      groupB: [''],
      groupC: [''],
      groupD: [''],
    });
  }

  // on click on save
  submit() {
    if (this.resolutionMasterForm.controls['resolutionDate'].value !== '' ||
      this.resolutionMasterForm.controls['applicatbleDate'].value !== '' ||
      this.resolutionMasterForm.controls['groupA'].value !== '' || this.resolutionMasterForm.controls['groupB'].value !== '' ||
      this.resolutionMasterForm.controls['groupC'].value !== '' || this.resolutionMasterForm.controls['groupD'].value !== '') {
      this.showTable = true;
      this.addDetails();
    }
  }

  // on click on save add details in table
  addDetails() {
    const Col_Data = this.resolutionMasterDataSource.data;
    Col_Data.push({
      resolutionDate: this.resolutionMasterForm.controls['resolutionDate'].value,
      applicableDate: this.resolutionMasterForm.controls['applicatbleDate'].value,
      groupA: this.resolutionMasterForm.controls['groupA'].value,
      groupB: this.resolutionMasterForm.controls['groupB'].value,
      groupC: this.resolutionMasterForm.controls['groupC'].value,
      groupD: this.resolutionMasterForm.controls['groupD'].value
    });
    this.resolutionMasterDataSource.data = Col_Data;
  }

}
