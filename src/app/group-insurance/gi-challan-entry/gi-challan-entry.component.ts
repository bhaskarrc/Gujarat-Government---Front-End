import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { GiSearchEmployeeComponent } from '../gi-search-employee/gi-search-employee.component';
import { Attachment, EmployeeData, EmployeeDetails } from 'src/app/model/group-insurance';
import { CommonListing } from 'src/app/model/common-listing';
import { GroupInsuranceDirective } from 'src/app/common/directive/group-insurance-directive';

@Component({
  selector: 'app-gi-challan-entry',
  templateUrl: './gi-challan-entry.component.html',
  styleUrls: ['./gi-challan-entry.component.css']
})
export class GiChallanEntryComponent implements OnInit {

  // variables
  firstMajorHead = false;
  secondMajorHead = false;
  subMajorHead = false;
  firstMinorHead = false;
  secondMinorHead = false;
  firstSubHead = false;
  secondSubHead = false;
  thirdSubHead = false;
  inwardDetails = true;
  fileBrowseIndex: number;

  // date
  todayDate = new Date();

  // form group
  challanEntryForm: FormGroup;

  // form control
  designationCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  // directive object for workflow dialog
  directiveObject = new GroupInsuranceDirective(this.dialog);

  // List of Attachment Type
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  // List of Designation
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' }
  ];

  // List of Major Head
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8011 - Insurance and Pension Funds' },
    { value: '2', viewValue: '8658 - Suspense Account' },
  ];

  // List of Sub Major Head
  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '00' },
  ];

  // List of minor Head
  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '107' },
    { value: '2', viewValue: '123' },
  ];

  // List of Subhead
  subHeadList: CommonListing[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '03' },
    { value: '3', viewValue: '00' },
  ];

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




  //  Table Data for Employee Details Table
  employeeDetailsDataSourceColumn: string[] = [
    'employeeNumber',
    'employeeName',
    'phoneNo',
    'designation',
    'fromMonth',
    'toMonth',
    'insurancefundAmount',
    'savingFundAmount',
    'total',
    'action'
  ];
  employeeDetailsData: EmployeeData[] = [{
    employeeNumber: '',
    employeeName: '',
    phoneNo: null,
    designation: '',
    fromMonth: '',
    toMonth: '',
    insurancefundAmount: 0,
    savingFundAmount: 0,
  }];
  employeeMasterDataSource = new MatTableDataSource<EmployeeData>(this.employeeDetailsData);
  //  Table Data for Employee Details Table end

  // table data start
  elementData: EmployeeDetails[] = [];
  displayedColumns: string[] = ['description', 'headStructure', 'total', 'action'];
  dataSource = new MatTableDataSource<EmployeeDetails>(this.elementData);
  // table data end

  // Attachment Table data
  brwoseData: Attachment[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];
  displayedBrowseColumns: string[] = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource<Attachment>(this.brwoseData);
  // Attachment table data end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.challanEntryFormData();
  }

  // form data
  challanEntryFormData() {
    this.challanEntryForm = this.fb.group({
      district: [''],
      challanNo: [{ value: '3467', disabled: true }],
      challanDate: [''],
      ddoNo: [{ value: '49', disabled: true }],
      cardexNo: [{ value: '132', disabled: true }],
      ddoOfficeName: [{ value: 'Directorate of Account & Treasury', disabled: true }],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      insuranceFundAmount: [''],
      savingFundAmount: [''],
    });
  }

  // reset form
  resetForm() {
    this.challanEntryForm.reset();
  }

  // navigates to listing
  goToListing() {
    this.router.navigate(['gi/challan-listing']);
  }

  // open employee number
  openDialogEmployeeNumber(element, i) {
    const dialogRef = this.dialog.open(GiSearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      element.employeeNumber = result[0].employeeNumber;
      element.employeeName = result[0].employeeName;
      element.designation = '1';
    });
  }

  // calculate total amount in employee details
  calculateTotalAmountEmployeee(element) {
    let amount = 0;
    amount = (Number(element.insurancefundAmount) + Number(element.savingFundAmount));
    return amount;
  }

  // add row in employee details
  addRow(index) {
    const data = this.employeeMasterDataSource.data;
    data.push({
      employeeNumber: '',
      employeeName: '',
      phoneNo: null,
      designation: '',
      fromMonth: '',
      toMonth: '',
      insurancefundAmount: 0,
      savingFundAmount: 0,
    });

    this.employeeMasterDataSource.data = data;

  }

  // delete row from employee details
  deleteRow(index) {
    this.employeeMasterDataSource.data.splice(index, 1);
    this.employeeMasterDataSource.data = this.employeeMasterDataSource.data;
  }

  // delete row from head structure
  deleteHeadStructureRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }

  // checks which major head value is selected
  selectMajorHead(event) {
    if (event.value === '1') {
      this.firstMajorHead = true;
      this.secondMajorHead = false;
    } else if (event.value === '2') {
      this.firstMajorHead = false;
      this.secondMajorHead = true;
    } else {
      this.firstMajorHead = false;
      this.secondMajorHead = false;
    }
  }

  // checks which sub major head value is selected
  selectSubMajorHead(event) {
    if (event.value === '1') {
      this.subMajorHead = true;
    } else {
      this.subMajorHead = false;
    }

  }

  // checks which minor head value is selected
  selectMinorHead(event) {
    if (event.value === '1') {
      this.firstMinorHead = true;
      this.secondMinorHead = false;
    } else if (event.value === '2') {
      this.firstMinorHead = false;
      this.secondMinorHead = true;
    } else {
      this.firstMinorHead = false;
      this.secondMinorHead = false;
    }
  }

  // checks which sub head value is selected
  selectSubHead(event) {
    if (event.value === '1') {
      this.firstSubHead = true;
      this.secondSubHead = false;
      this.thirdSubHead = false;
    } else if (event.value === '2') {
      this.firstSubHead = false;
      this.secondSubHead = true;
      this.thirdSubHead = false;
    } else if (event.value === '3') {
      this.firstSubHead = false;
      this.secondSubHead = false;
      this.thirdSubHead = true;
    } else {
      this.firstSubHead = false;
      this.secondSubHead = false;
      this.thirdSubHead = false;
    }
  }

  // add row in head structure details table
  add() {
    const majorHead = this.challanEntryForm.controls.majorHead.value;
    const subMajorHead = this.challanEntryForm.controls.subMajorHead.value;
    const minorHead = this.challanEntryForm.controls.minorHead.value;
    const subHead = this.challanEntryForm.controls.subHead.value;


    if (majorHead === '1' && subMajorHead === '1' && minorHead === '1' && subHead === '1') {
      const data = this.dataSource.data;
      data.push({
        description: 'Insurance Fund',
        headStructure: '8011:00:107:01',
        total: this.challanEntryForm.controls['insuranceFundAmount'].value
      });
      this.dataSource.data = data;
    }

    if (majorHead === '1' && subMajorHead === '1' && minorHead === '1' && subHead === '2') {
      const data = this.dataSource.data;
      data.push({
        description: 'Saving Fund',
        headStructure: '8011:00:107:03',
        total: this.challanEntryForm.controls['savingFundAmount'].value
      });
      this.dataSource.data = data;
    }

    if (majorHead === '2' && subMajorHead === '1' && minorHead === '2' && subHead === '3') {
      const data = this.dataSource.data;
      data.push(
        {
          description: 'Insurance Fund',
          headStructure: '8658:00:123:00',
          total: this.challanEntryForm.controls['insuranceFundAmount'].value
        },
        {
          description: 'Saving Fund',
          headStructure: '8658:00:123:00',
          total: this.challanEntryForm.controls['savingFundAmount'].value
        }
      );
      this.dataSource.data = data;
    }
  }

  // calculate total in head structure details section
  calculateTotal(index) {
    let amount = 0;
    this.dataSource.data.forEach(element => { amount = Number(element.total) + amount; });
    return amount;
  }

  // clear head structure details sectionF
  clearForm() { this.challanEntryForm.reset(); }

  // go to next
  goToNext() { }
}
