import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { AgDataListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-ag-data-listing',
  templateUrl: './gi-ag-data-listing.component.html',
  styleUrls: ['./gi-ag-data-listing.component.css']
})
export class GiAgDataListingComponent implements OnInit {

  // List of Cadre
  cadreList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // List of Month
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // Table Data for AG Data
  agData: AgDataListing[] = [
    {
      employeeNumber: '',
      employeeName: '',
      cadre: '',
      ddoOfficeName: '',
      monthOfDeduction: '',
      amountOfDeduction: '',
      dateOfSuspension: ''
    }
  ];
  agDataSourceColumn: string[] = [
    'srno',
    'employeeNumber',
    'employeeName',
    'cadre',
    'ddoOfficeName',
    'dateOfSuspension',
    'monthOfDeduction',
    'amountOfDeduction',
  ];
  agDataSource = new MatTableDataSource<AgDataListing>(this.agData);
  // Table Data for AG Data end


  // variables
  showTable = false;
  inwardDetails = true;
  errorMessages = GroupInsuranceMessage;

  // date
  todayDate = new Date();

  // from group
  agForm: FormGroup;

  // form control
  cadreCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.agFormData();
  }

  // ag form data
  agFormData() {
    this.agForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      cadre: [''],
      month: [''],
      ddoOfficeName: ['']
    });
  }

  // perform function on seach button click
  search() {
    if (
      this.agForm.controls['employeeNo'].value !== '' ||
      this.agForm.controls['employeeName'].value !== '' ||
      this.agForm.controls['cadre'].value !== '' ||
      this.agForm.controls['month'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // open employee no dialog box
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inwardDetails = true;
        this.agForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          cadre: '1',
          group: '1',
          class: '1',
          department: '5'
        });
      }
    });
  }

}
