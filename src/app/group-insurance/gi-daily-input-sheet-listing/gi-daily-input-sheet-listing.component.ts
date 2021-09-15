import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DailyInputSheetList } from 'src/app/model/group-insurance';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ReturnDialogComponent } from '../gi-plus-minus-statement-listing/gi-plus-minus-statement-listing.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-gi-daily-input-sheet-listing',
  templateUrl: './gi-daily-input-sheet-listing.component.html',
  styleUrls: ['./gi-daily-input-sheet-listing.component.css']
})
export class GiDailyInputSheetListingComponent implements OnInit {

  // form group
  dailyInputSheetListingForm: FormGroup;

  // variables
  showTable = false;
  selection = new SelectionModel<any>(true, []);
  isCheckedSelected = false;

  // date
  todayDate = new Date();

  // form control
  districtCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();


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

  // List of District
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

  // List of Major Head
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
    { value: '6', viewValue: '8011: Insurance and Pension Funds' },
  ];

  // List of Treasury offices in Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury offices in Ahmedabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];

  // Table Columns for Daily Input sheet table
  dailyInputSheetColumns: string[] = ['select',
    'srno', 'district', 'office', 'majorHead', 'insuranceFund', 'savingFund', 'total', 'workflowStatus', 'status', 'action'];
  dailyInputSheetList: DailyInputSheetList[] = [{
    district: 'Ahmedabad',
    office: 'Treasury Office,Ahmedabad',
    majorHead: '0030 : Stamps and Registration Fees',
    insuranceFund: '120.00',
    savingFund: '280.00',
    workflowStatus: 'Recommended',
    status: 'Forward to Approver'
  }];
  dailyInputSheetDataSource = new MatTableDataSource<DailyInputSheetList>(this.dailyInputSheetList);
  // Table Columns for Daily Input sheet end

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  // constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog, private route: Router) { }

  ngOnInit() {
    this.dailyInputSheetListingFormData();
  }

  // update treasury office and district name on basis of district name
  updateOffice() {
    this.dailyInputSheetListingForm.controls['treasuryOffice'].setValue('District Treasury Office, ' +
      this.districtList[this.dailyInputSheetListingForm.controls['district'].value - 1].viewValue);
  }

  // on click on search button show table
  onSearch() {
    if (this.dailyInputSheetListingForm.controls['district'].value !== '' ||
      this.dailyInputSheetListingForm.controls['treasuryOfficeAhmedabad'].value !== ''
      || this.dailyInputSheetListingForm.controls['treasuryOfficeGandhinagar'].value !== '' ||
      this.dailyInputSheetListingForm.controls['treasuryOffice'].value !== '' ||
      this.dailyInputSheetListingForm.controls['month'].value !== '' ||
      this.dailyInputSheetListingForm.controls['year'].value !== '' ||
      this.dailyInputSheetListingForm.controls['majorHead'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // form data
  dailyInputSheetListingFormData() {
    this.dailyInputSheetListingForm = this.fb.group({
      district: [''],
      treasuryOfficeAhmedabad: [''],
      treasuryOfficeGandhinagar: [''],
      treasuryOffice: [''],
      month: [''],
      year: [''],
      majorHead: ['']
    });
  }

  // calculate Total amount
  calculateTotalAmount(element) {
    let amount = '0';
    amount = String(Number(element.insuranceFund) + Number(element.savingFund));
    return amount;

  }

  // check whether checkbox is checked or not
  onCheck(event) {
    if (event.checked) {
      this.isCheckedSelected = true;
    } else {
      this.isCheckedSelected = false;
    }
  }

  // on click on return button opens dialog box
  returnRequest() {
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
