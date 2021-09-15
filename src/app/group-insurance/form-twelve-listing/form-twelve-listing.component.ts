import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { FormElevenListing } from 'src/app/model/group-insurance';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';

@Component({
  selector: 'app-form-twelve-listing',
  templateUrl: './form-twelve-listing.component.html',
  styleUrls: ['./form-twelve-listing.component.css']
})
export class FormTwelveListingComponent implements OnInit {

  // form group
  formTwelve: FormGroup;

  // date
  todayDate = new Date();

  // variables
  showTable = false;

  // form controls
  districtCtrl: FormControl = new FormControl();
  groupCtrl: FormControl = new FormControl();

  // lists
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  groupList: CommonListing[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' },
    { value: '4', viewValue: 'D' },
  ];
  // lists end

  // table start
  displayColumns: string[] = [
    'srno',
    'district',
    'employeeNo',
    'employeeName',
    'schemeJoinDate',
    'retiredResignationDate',
    'deathDate',
    'savingFund',
    'insuranceFund',
    'total',
    'action'
  ];

  elementData1: FormElevenListing[] = [
    {
      district: 'Ahmedabad',
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
      district: 'Gandhinagar',
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
      district: 'Rajkot',
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
  dataSource = new MatTableDataSource<FormElevenListing>(this.elementData1);
  // table data end

  // constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.formTwelveData();
  }

  // form data
  formTwelveData() {
    this.formTwelve = this.fb.group({
      district: [''],
      employeeNo: [''],
      group: ['']
    });
  }

  // perform function on seach button click
  search() {
    if (
      this.formTwelve.controls['employeeNo'].value !== '' ||
      this.formTwelve.controls['district'].value !== '' ||
      this.formTwelve.controls['group'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // on click on view navigate to form-11-view screen
  onView(index) {
    this.router.navigate(['gi/form-12-view']);
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
        });
      }
    });
  }


}
