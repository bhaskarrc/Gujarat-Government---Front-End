import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { CommonListing } from 'src/app/model/common-listing';
import { GiChallanEntryAisListing } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-challan-entry-ais-listing',
  templateUrl: './gi-challan-entry-ais-listing.component.html',
  styleUrls: ['./gi-challan-entry-ais-listing.component.css']
})
export class GiChallanEntryAisListingComponent implements OnInit {

  // variable
  showTable = false;
  inwardDetails = true;

  // date
  todayDate = new Date();

  // form group
  employeeMasterForm: FormGroup;

  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  treasuryOfficeAhmedabadCtrl: FormControl = new FormControl();
  treasuryOfficeGandhinagarCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  headChargableCtrl: FormControl = new FormControl();


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

  // List of Months
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

  // List of Treasury in offices Gandhinagar
  treasuryOfficeGandhinagarList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Gandhinagar' },
    { value: '2', viewValue: 'PAO, Gandhinagar' },
  ];

  // List of Treasury offices in Ahmeadabad
  treasuryOfficeAhmedabadList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'PAO, Ahmedabad' },
  ];

  // List of Years
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

  // List of Head Chargaeble
  headChargableList: CommonListing[] = [
    { value: '1', viewValue: '8011-00-107-01' },
    { value: '2', viewValue: '8011-00-107-03' },
    { value: '3', viewValue: '8658-00-123-00' },
  ];

  // Table Columns for Employee Master
  employeeMasterDataSourceColumn: string[] = [
    'srno', 'challanNo', 'challanDate', 'district', 'ddoName', 'treasuryOffice', 'employeeNumber',
    'employeeName', 'headChargable', 'year', 'month', 'insuranceFund', 'savingFund', 'total'
  ];
  employeeMasterData: GiChallanEntryAisListing[] = [
    {
      challanNo: '3647', challanDate: '5-Jun-2019', district: 'Ahmedabad', ddoName: 'Directorate of Account & Treasury',
      treasuryOffice: 'District Treasury Office, Ahmedabad', employeeNumber: '1000004643',
      employeeName: 'Mr. S K Das', headChargable: '8011-00-107-01', year: '2019',
      month: 'June', insuranceFund: '120.00', savingFund: '280.00'
    }
  ];
  employeeMasterDataSource = new MatTableDataSource<GiChallanEntryAisListing>(this.employeeMasterData);
  // Table Columns for Employee Master end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeMasterFormData();
  }

  // form data
  employeeMasterFormData() {
    this.employeeMasterForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      district: [''],
      challanNo: [''],
      challanDate: [''],
      year: [''],
      month: [''],
      treasuryOfficeAhmedabad: [''],
      treasuryOfficeGandhinagar: [''],
      treasuryOffice: [''],
      headChargable: ['']
    });
  }

  // on click on search button
  search() {
    if (
      this.employeeMasterForm.controls['employeeNo'].value !== ''
      || this.employeeMasterForm.controls['employeeName'].value !== ''
      || this.employeeMasterForm.controls['treasuryOfficeAhmedabad'].value !== ''
      || this.employeeMasterForm.controls['district'].value !== ''
      || this.employeeMasterForm.controls['challanNo'].value !== ''
      || this.employeeMasterForm.controls['challanDate'].value !== ''
      || this.employeeMasterForm.controls['year'].value !== ''
      || this.employeeMasterForm.controls['month'].value !== ''
      || this.employeeMasterForm.controls['treasuryOfficeGandhinagar'].value !== ''
      || this.employeeMasterForm.controls['treasuryOffice'].value !== '' || this.employeeMasterForm.controls['headChargable'].value !== ''
    ) {
      this.showTable = true;
    }

  }

  // open employee number dialog pop up
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inwardDetails = true;
        this.employeeMasterForm.patchValue({
          employeeNo: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '1',
          group: '1',
          class: '1',
        });
      }
    });
  }

  // calculate total amount
  calculateTotalAmount(element) {
    let amount = 0;
    amount = Number(element.insuranceFund) + Number(element.savingFund);
    return amount;
  }

}
