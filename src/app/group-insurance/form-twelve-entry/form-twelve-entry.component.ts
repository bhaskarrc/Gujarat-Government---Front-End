import { Component, OnInit } from '@angular/core';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FormElevenEntryListing, GroupDetailsListing } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-form-twelve-entry',
  templateUrl: './form-twelve-entry.component.html',
  styleUrls: ['./form-twelve-entry.component.css']
})
export class FormTwelveEntryComponent implements OnInit {

  // form group
  formTwelve: FormGroup;

  // date
  todayDate = new Date();

  // grouo detail table
  columns: string[] = [
    'srno',
    'group',
    'fromDate',
    'endDate',
    'groupUnit',
    'savingFund',
    'insuranceFund',
    'total'
  ];
  elementData: GroupDetailsListing[] = [
    {
      group: 'D',
      fromDate: new Date('4/1/1988'),
      endDate: new Date('3/31/1989'),
      groupUnit: '1',
      savingFund: '37528',
      insuranceFund: '0',
      total: '37528'
    },
    {
      group: 'C',
      fromDate: new Date('4/1/1989'),
      endDate: new Date('5/31/2019'),
      groupUnit: '1',
      savingFund: '35816',
      insuranceFund: '0',
      total: '35816'
    },
    {
      group: 'B',
      fromDate: new Date('4/1/2019'),
      endDate: new Date('8/31/2020'),
      groupUnit: '2',
      savingFund: '35816',
      insuranceFund: '200000',
      total: '235816'
    },
  ];
  groupDetailDataSource = new MatTableDataSource<GroupDetailsListing>(this.elementData);
  // grouo detail table end

  // second table
  displayColumns: string[] = [
    'srno',
    'employeeNo',
    'employeeName',
    'schemeJoinDate',
    'retiredResignationDate',
    'deathDate',
    'savingFund',
    'insuranceFund',
    'total'
  ];

  elementData1: FormElevenEntryListing[] = [
    {
      employeeNo: '1000000000',
      employeeName: 'Mr. K H Rana',
      schemeJoinDate: '01-Apr-1988',
      retiredResignationDate: '31-Aug-2020',
      deathDate: 'NA',
      savingFund: '144976',
      insuranceFund: '400000',
      total: '544976',
    },
    {
      employeeNo: '1000000000',
      employeeName: 'Mr. S K Patel',
      schemeJoinDate: '01-Apr-1970',
      retiredResignationDate: '30-Jul-2011',
      deathDate: 'NA',
      savingFund: '2938265',
      insuranceFund: '200000',
      total: '3138265',
    },
    {
      employeeNo: '1000000000',
      employeeName: 'Mrs. S S Shah',
      schemeJoinDate: '01-Apr-1990',
      retiredResignationDate: 'NA',
      deathDate: '15-Jul-2015',
      savingFund: '163456',
      insuranceFund: '200000',
      total: '363456',
    },
  ];

  dataSource = new MatTableDataSource<FormElevenEntryListing>(this.elementData1);
  // second table end

  // constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.formData();
  }

  // form data
  formData() {
    this.formTwelve = this.fb.group({
      district: [{ value: 'Gandhinagar', disabled: true }],
      ddoNo: [{ value: '49', disabled: true }],
      cardexNo: [{ value: '132', disabled: true }],
      ddoOfficeName: [{ value: 'Directorate of Account & Treasury', disabled: true }],
      employeeNo: [''],
      employeeName: [{ value: '', disabled: true }],
      schemeJoinDate: [{ value: '', disabled: true }],
      schemeJoinGroup: [{ value: '', disabled: true }],
      payScale: [{ value: '', disabled: true }],
      deathDate: [''],
    });
  }

  // calculate total for group detail table
  calculateTotal() {
    let amount = 0;
    this.groupDetailDataSource.data.forEach(element => {
      amount = Number(element.total) + amount;
    });

    return amount;
  }

  // open employee number dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formTwelve.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          schemeJoinDate: '18-Oct-1960',
          schemeJoinGroup: 'B',
          payScale: '6400-12000'
        });
      }
    });
  }

}
