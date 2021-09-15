import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { GroupInsuranceMessage } from 'src/app/common/error-message/common-message.constants';
import { GiPlusMinusStatementListing } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-gi-plus-minus-statement-listing',
  templateUrl: './gi-plus-minus-statement-listing.component.html',
  styleUrls: ['./gi-plus-minus-statement-listing.component.css']
})
export class GiPlusMinusStatementListingComponent implements OnInit {

  // variable
  showTable = false;
  errorMessages = GroupInsuranceMessage;
  isCheckedSelected = false;
  // date
  todayDate = new Date();
  // form group
  plusMinusForm: FormGroup;
  // form control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  // directive object for checkbox
  directiveObj = new CommonDirective(this.router);


  // List of Year
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
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

  // List of Districts
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

  // List of Treasury Offices in Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury Offices in Ahmedabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];

  // Table data for Insurance Saving Table
  insuranceSavingDetailsData: GiPlusMinusStatementListing[] = [
    {
      year: '2019',
      month: 'May',
      district: 'Ahmedabad',
      treasuryOffice: 'District Treasury office, Ahmedabad',
      openingBalance: '1892713134',
      receivedAmount: '1209846',
      totalBalance: '1893922980',
      paidAmount: '68549262',
      adjustment: '0',
      closingBalance: '68549262',
      workflowStatus: 'Verified',
      status: 'Sent Mail'
    },
    {
      year: '2019',
      month: 'May',
      district: 'Gandhinagar',
      treasuryOffice: 'District Treasury office, Gandhinagar',
      openingBalance: '2094553671',
      receivedAmount: '198567',
      totalBalance: '2094553671',
      paidAmount: '749573',
      adjustment: '0',
      closingBalance: '749573',
      workflowStatus: 'Forward to Approver', status: 'Received Acknowledgement'
    },
    {
      year: '2019',
      month: 'May',
      district: 'Rajkot',
      treasuryOffice: 'District Treasury office, Rajkot',
      openingBalance: '3498273543',
      receivedAmount: '342985',
      totalBalance: '3498616528',
      paidAmount: '34298563',
      adjustment: '0',
      closingBalance: '34298563',
      workflowStatus: 'Verified', status: 'Sent Mail'
    },
    {
      year: '2019',
      month: 'May',
      district: 'Bhavnagar',
      treasuryOffice: 'District Treasury office, Bhavnagar',
      openingBalance: '23008794',
      receivedAmount: '209478',
      totalBalance: '23218272',
      paidAmount: '37294638',
      adjustment: '0',
      closingBalance: '37294638',
      workflowStatus: 'Approved', status: 'Received Acknowledgement'
    },
    {
      year: '2019',
      month: 'May',
      district: 'Surat',
      treasuryOffice: 'District Treasury office, Surat',
      openingBalance: '2683469546',
      receivedAmount: '246397',
      totalBalance: '784539',
      paidAmount: '784539',
      adjustment: '0',
      closingBalance: '784539',
      workflowStatus: 'Approved', status: 'Received Acknowledgement'
    },
    {
      year: '2019',
      month: 'May',
      district: 'Morbi',
      treasuryOffice: 'District Treasury office, Morbi',
      openingBalance: '9183274593',
      receivedAmount: '35802812',
      totalBalance: '9219077405',
      paidAmount: '2719853',
      adjustment: '0',
      closingBalance: '2719853',
      workflowStatus: 'Verified', status: 'Sent Mail'
    },
  ];

  // Table Columns for Insurance Saving Detail table
  insuranceSavingDetailsDataColumn: string[] = ['select',
    'srno', 'year', 'month', 'district', 'treasuryOffice',
    'openingBalance', 'receivedAmount', 'totalBalance', 'paidAmount', 'adjustment', 'closingBalance', 'workflowStatus', 'status', 'action',
  ];
  insuranceSavingDetailsDataSource = new MatTableDataSource<GiPlusMinusStatementListing>(this.insuranceSavingDetailsData);

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.plusMinusFormData();
  }

  // form data
  plusMinusFormData() {
    this.plusMinusForm = this.fb.group({
      treasuryOffice: [''],
      month: [''],
      year: [''],
      district: [''],
      treasuryOfficeAhmedabad: [''],
      treasuryOfficeGandhinagar: [''],
    });
  }

  // on click on search button show table
  showResult(e) {
    e.preventDefault();
    if (this.plusMinusForm.controls['month'].value !== '' && this.plusMinusForm.controls['year'].value !== '') {
      this.showTable = true;
    }
  }

  // click on view icon
  view() {
    this.router.navigate(['/gi/plus-minus-statement']);
  }

  // set treasury office name on basis of district
  updateOffice() {
    this.plusMinusForm.controls['treasuryOffice'].setValue('District Treasury Office, '
      + this.districtList[this.plusMinusForm.controls['district'].value - 1].viewValue);
  }

  // check is check box checked
  onCheck(event) {
    if (event.checked) {
      this.isCheckedSelected = true;
    } else {
      this.isCheckedSelected = false;
    }
  }

  // opens accept dialog box
  accept() {
    if (this.isCheckedSelected) {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(AcceptDialogComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  // opens return dialog box
  return() {
    if (this.isCheckedSelected) {
      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(ReturnDialogComponent, {
        width: '1200px',
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

}

/** ReturnDialogComponent start*/
@Component({
  selector: 'app-return-dialog',
  templateUrl: './return-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class ReturnDialogComponent implements OnInit {
  // variable
  errorMessage = GroupInsuranceMessage;
  // form group
  notAcceptDialogForm: FormGroup;

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReturnDialogComponent>
  ) { }

  ngOnInit(): void {
    this.notAcceptDialogForm = this.fb.group({
      reason: [''],
    });
  }

  // on close
  okClick($event?) {
    this.dialogRef.close();
  }
  // on submit
  onSubmit($event?) {
    if (this.notAcceptDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}
/** ReturnDialogComponent end*/


/** AcceptDialogComponent start*/
@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class AcceptDialogComponent implements OnInit {

  // variable
  errorMessage = GroupInsuranceMessage;

  // constructor
  constructor(
    public dialogRef: MatDialogRef<AcceptDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  // on click on Close
  onNo($event?) {
    this.dialogRef.close();
  }

}
/** AcceptDialogComponent end*/
