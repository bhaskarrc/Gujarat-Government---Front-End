import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { GroupDetailsListing, FormElevenEntryListing } from 'src/app/model/group-insurance';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';

@Component({
  selector: 'app-form-eleven-entry',
  templateUrl: './form-eleven-entry.component.html',
  styleUrls: ['./form-eleven-entry.component.css']
})
export class FormElevenEntryComponent implements OnInit {

  // form group
  formEleven: FormGroup;

  // date
  todayDate = new Date();

  // group detail table
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
      fromDate: new Date('4/1/1988'),
      endDate: new Date('3/31/1989'),
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
      insuranceFund: '0',
      total: '35816'
    },
  ];
  groupDetailDataSource = new MatTableDataSource<GroupDetailsListing>(this.elementData);
  // group detail table end

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
      insuranceFund: '0',
      total: '144976',
    },
    {
      employeeNo: '1000000000',
      employeeName: 'Mr. S K Patel',
      schemeJoinDate: '01-Apr-1970',
      retiredResignationDate: '30-Jul-2011',
      deathDate: 'NA',
      savingFund: '2938265',
      insuranceFund: '0',
      total: '2938265',
    },
    {
      employeeNo: '1000000000',
      employeeName: 'Mrs. S S Shah',
      schemeJoinDate: '01-Apr-1990',
      retiredResignationDate: 'NA',
      deathDate: '15-Jul-2015',
      savingFund: '163456',
      insuranceFund: '0',
      total: '163456',
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
    this.formEleven = this.fb.group({
      district: [{ value: 'Gandhinagar', disabled: true }],
      ddoNo: [{ value: '49', disabled: true }],
      cardexNo: [{ value: '132', disabled: true }],
      ddoOfficeName: [{ value: 'Directorate of Account & Treasury', disabled: true }],
      employeeNo: [''],
      employeeName: [{ value: '', disabled: true }],
      schemeJoinDate: [{ value: '', disabled: true }],
      schemeJoinGroup: [{ value: '', disabled: true }],
      payScale: [{ value: '', disabled: true }],
      retiredResignationDate: [''],
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
        this.formEleven.patchValue({
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
