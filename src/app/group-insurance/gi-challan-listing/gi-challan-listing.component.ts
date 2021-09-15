import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { CommonListing } from 'src/app/model/common-listing';
import { GiChallanListing } from 'src/app/model/group-insurance';

@Component({
  selector: 'app-gi-challan-listing',
  templateUrl: './gi-challan-listing.component.html',
  styleUrls: ['./gi-challan-listing.component.css']
})
export class GiChallanListingComponent implements OnInit {

  // variables
  showTable = false;

  // date
  todayDate = new Date();

  // form group
  employeeMasterForm: FormGroup;

  // form control
  districtCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  treasuryOfficeCtrl: FormControl = new FormControl();
  headChargableCtrl: FormControl = new FormControl();

  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // List of Department
  departmentList: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Climate Change Department' },
    { value: '3', viewValue: 'Education Department' },
    { value: '4', viewValue: 'Energy & Petrochemicals Department' },
    { value: '5', viewValue: 'Finance Department' },
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '7', viewValue: 'Forest & Environment Department' },
    { value: '8', viewValue: 'General Administration Department' },
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '10', viewValue: 'Health & Family Welfare Department' },
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

  // List of Years
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];

  // List of Major Head
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8011-00-107-01' },
    { value: '2', viewValue: '8011-00-107-03' },
    { value: '3', viewValue: '8658-00-123-00' },
  ];

  treasuryOfficeNameList: CommonListing[] = [];

  // Table Data for Emoloyee Master Table
  employeeMasterData: GiChallanListing[] = [
    {
      district: 'Ahmedabad',
      treasuryOffice: 'District Treasury Office, Ahmedabad',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000004643',
      employeeName: 'Mr. S K Das',
      headChargable: '8011-00-107-01',
      insuranceFund: '120.00',
      savingFund: '280.00',
      challanNo: '3647',
      challanDate: '5-Jun-2019',
      total: '400.00'
    },
    {
      district: 'Ahmedabad',
      treasuryOffice: 'District Treasury Office, Ahmedabad',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000000435',
      employeeName: 'Mr. K V Rangnath',
      headChargable: '8011-00-107-01',
      insuranceFund: '120.00',
      savingFund: '280.00',
      challanNo: '56888',
      challanDate: '5-Jun-2019',
      total: '400.00'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'District Treasury Office, Gandhinagar',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000056749',
      employeeName: 'Mr. S P Thakar',
      headChargable: '8658-00-123-00',
      insuranceFund: '60.00',
      savingFund: '140.00',
      challanNo: '6574',
      challanDate: '3-Jun-2019',
      total: '200.00'
    },
    {
      district: 'Gandhinagar',
      treasuryOffice: 'District Treasury Office, Gandhinagar',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000004563',
      employeeName: 'Mr. J N Sheth',
      headChargable: '8658-00-123-00',
      insuranceFund: '120.00',
      savingFund: '280.00',
      challanNo: '3457',
      challanDate: '5-Jun-2019',
      total: '400.00'
    },
    {
      district: 'Rajkot',
      treasuryOffice: 'District Treasury Office, Rajkot',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000008765',
      employeeName: 'Mr. L K Shah',
      headChargable: '8011-00-107-03',
      insuranceFund: '60.00',
      savingFund: '140.00',
      challanNo: '8765',
      challanDate: '5-Jun-2019',
      total: '200.00'
    },
    {
      district: 'Bhavnagar',
      treasuryOffice: 'District Treasury Office, Bhavnagar',
      ddoName: 'Directorate of Account & Treasury',
      year: '2019',
      month: 'June',
      employeeNumber: '1000000076',
      employeeName: 'Kum. R V Doshi',
      headChargable: '8011-00-107-03',
      insuranceFund: '60.00',
      savingFund: '140.00',
      challanNo: '2406',
      challanDate: '10-Jun-2019',
      total: '200.00'
    },
  ];
  employeeMasterDataSourceColumn: string[] = [
    'srno',
    'challanNo',
    'challanDate',
    'district',
    'ddoName',
    'treasuryOffice',
    'employeeNumber',
    'employeeName',
    'headChargable',
    'month',
    'year',
    'insuranceFund',
    'savingFund',
    'total',
    'action'
  ];
  employeeMasterDataSource = new MatTableDataSource<GiChallanListing>(this.employeeMasterData);
  // Table Data for Emoloyee Master Table

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.employeeMasterFormData();
    this.employeeMasterDataSource.paginator = this.paginator;

  }

  // form data
  employeeMasterFormData() {
    this.employeeMasterForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      treasuryOffice: [''],
      district: [''],
      challanNo: [''],
      challanDate: [''],
      year: [''],
      month: [''],
      headChargable: [''],
      treasuryOfficeOther: ['']
    });
  }

  // on click on search button
  search() {
    if (this.employeeMasterForm.controls['employeeNo'].value !== '' || this.employeeMasterForm.controls['employeeName'].value !== ''
      || this.employeeMasterForm.controls['treasuryOffice'].value !== '' || this.employeeMasterForm.controls['district'].value !== ''
      || this.employeeMasterForm.controls['challanNo'].value !== '' || this.employeeMasterForm.controls['challanDate'].value !== ''
      || this.employeeMasterForm.controls['year'].value !== '' || this.employeeMasterForm.controls['month'].value !== '' ||
      this.employeeMasterForm.controls['headChargable'].value !== ''
    ) {
      this.showTable = true;
    }
  }

  // navigates to challan entry
  goToView() {
    this.router.navigate(['gi/challan-entry']);
  }

  // open employee number pop up
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeMasterForm.patchValue({
          employeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: '1',
          group: '1',
          class: '1',
        });
      }
    });
  }

  // on selecting district sets the value of treasury office name value
  onSelectingDistrict(event) {

    if (event.value === '1') {
      // tslint:disable-next-line: prefer-const
      let treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue });

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value === '2') {
      // tslint:disable-next-line: prefer-const
      let treasuryList = [];
      treasuryList.push({
        value: '1', viewValue: 'Treasury Office, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue
      },
        { value: '2', viewValue: 'PAO, ' + this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue },

        { value: '3', viewValue: 'Lisaning Office Delhi' },
        { value: '4', viewValue: 'Lisaning Office Mumbai' });

      this.treasuryOfficeNameList = treasuryList;
    }
    if (event.value !== '2' && event.value !== '1') {
      this.employeeMasterForm.controls['treasuryOfficeOther'].setValue('District Treasury Office, ' +
        this.districtList[this.employeeMasterForm.controls['district'].value - 1].viewValue);
    }
  }
}
