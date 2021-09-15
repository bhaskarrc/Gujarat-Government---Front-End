import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatOption, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { payrollMessage } from 'src/app/common/error-message/common-message.constants';

import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { CommonListing } from './../../model/common-listing';
import { BudgetHeadMappingTwo } from './../../model/payroll';

@Component({
  selector: 'app-budget-head-mapping-two',
  templateUrl: './budget-head-mapping-two.component.html',
  styleUrls: ['./budget-head-mapping-two.component.css']
})
export class BudgetHeadMappingTwoComponent implements OnInit {


  budgetHeadMappingForm: FormGroup;
  isSearch = false;

  payMonthCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  payrollTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  employeeNoCtrl: FormControl = new FormControl();
  typeOfEstimationCTRL: FormControl = new FormControl();
  itemNameCTRL: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  errorMessages;
  budgetHead = '70:2251:8:101:12:0:1';


  payMonthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'Decmber' }
  ];

  typeOfEstimationList: CommonListing[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' },
  ];

  itemNameList: CommonListing[] = [
    { value: '1', viewValue: 'Construction of Govt. Hostel' },
    { value: '2', viewValue: 'Maintance of Road' },
    { value: '3', viewValue: 'Maintance of Boys Hostel' },
  ];

  finYearList: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  payrollTypelist: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Supplementary' }
  ];

  demandList: CommonListing[] = [
    { value: '1', viewValue: '70 : Community Development' },
    { value: '2', viewValue: '71 : Rural Housing and Rural Development' },
    { value: '3', viewValue: '76 : Revenue Department' },
    { value: '4', viewValue: '79 : Relief on account Natural Calamities' },
    { value: '5', viewValue: '81 : Compensation and Assignment' },
    { value: '6', viewValue: '87 : Gujarat Capital Construction Scheme' },
  ];
  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2', viewValue: '2049 : Interest Payments' },
    { value: '3', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '4', viewValue: '3435 : Ecology and Environment' },
    { value: '5', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '6', viewValue: '2202 : General Education' },
  ];
  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8 : Other Transfer/Grants to States' },
    { value: '2', viewValue: '6 : Centrally Sponsored Schemes' },
  ];
  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '101 : Forest Conservation, Development and Regeneration' },
    { value: '2', viewValue: '102 : Small Scale Industries' },
    { value: '3', viewValue: '105 : Forest Produce' },
  ];
  subHeadList: CommonListing[] = [
    { value: '1', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '2', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '3', viewValue: '15 : Soil and Water Conservation' },
    { value: '4', viewValue: '16 : Community Development' },
    { value: '5', viewValue: '19 : Technical Education Polytechnics' },
  ];
  detailHeadList: CommonListing[] = [
    { value: '1', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    { value: '2', viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students' },
    { value: '3', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  objectClassList: CommonListing[] = [
    { value: '1', viewValue: 'Object Class-1 (Personnel Services and Benefits)' },
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
    { value: '3', viewValue: 'Object Class-3 (Contractual Services and Supplies)' },
    { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
    { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
    { value: '6', viewValue: 'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)' },
    { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' }
  ];
  employeeNoList: CommonListing[] = [
    { value: '1', viewValue: '1000000001' },
    { value: '2', viewValue: '1000000002' },
    { value: '3', viewValue: '1000000003' },
    { value: '4', viewValue: '1000000004' },
    { value: '5', viewValue: '1000000005' },
    { value: '6', viewValue: '1000000006' },
    { value: '7', viewValue: '1000000007' }
  ];

  designationList: CommonListing[] = [
    { value: '1', viewValue: 'GRD1' },
    { value: '2', viewValue: '2nd Additional Senior Civil Judge' },
    { value: '3', viewValue: 'A.D.C. To H.E. Governor ' },
    { value: '4', viewValue: 'Account Assistant' },
    { value: '5', viewValue: 'Account Clerk' },
    { value: '6', viewValue: 'Account Controller' },
    { value: '7', viewValue: 'Account Cum - Administrator Officer' },
    { value: '8', viewValue: 'Account Officer-Class I' },
    { value: '9', viewValue: 'Account Officer-Class II' },
    { value: '10', viewValue: 'Accountant' },
  ];



  // table data
  Element_Data: BudgetHeadMappingTwo[] = [
    {
      srNo: '1',
      employeeNo: '1000000001',
      employeeName: 'Mr. Padmanaabh Singh',
      designation: 'GRD1',
      employeeClass: 'Class IV',
      employeeCat: 'GO',
      budgetHead: this.budgetHead,
      isSubmitted: false
    },
    {
      srNo: '2',
      employeeNo: '1000000002',
      employeeName: 'Mr. Rahul Singh',
      designation: 'GRD1',
      employeeClass: 'Class III',
      employeeCat: 'NGO',
      budgetHead: this.budgetHead,
      isSubmitted: false
    },
    {
      srNo: '3',
      employeeNo: '1000000003',
      employeeName: 'Mr. JigneshKumar Chauhan',
      designation: 'GRD1',
      employeeClass: 'Class I',
      employeeCat: 'AIS',
      budgetHead: this.budgetHead,
      isSubmitted: false
    },
  ];

  dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
  displayedRows: any[] = ['noData'];
  displayedColumns: any[] = [
    'srNo',
    'employeeNo',
    'employeeName',
    'designation',
    'employeeClass',
    'employeeCat',
    'budgetHead',
    // 'action',
  ];
  colCount = this.displayedColumns.length;
  directiveObj = new CommonDirective(this.router);
  paginator: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild('allSelected') private allSelected: MatOption;


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }


  ngOnInit() {
    this.errorMessages = payrollMessage;
    this.budgetHeadMappingForm = this.fb.group({
      ddoNo: [{ value: '4265', disabled: true }],
      cardexNo: [{ value: '5622', disabled: true }],
      officeName: [{ value: 'Collector Office, Ahmedabad', disabled: true }],
      district: [{ value: 'Ahmedabad', disabled: true }],

      payrollType: [{ value: '1', disabled: true }],
      financialYear: [{ value: '2', disabled: true }],
      payMonth: [{ value: '1', disabled: true }],

      demand: [{ value: '', disabled: false }],
      majorHead: [{ value: '', disabled: false }],
      subMajorHead: [{ value: '', disabled: false }],
      minorHead: [{ value: '', disabled: false }],

      subHead: [{ value: '', disabled: false }],
      detailHead: [{ value: '', disabled: false }],
      typeOfEstimation: [{ value: '', disabled: false }],
      itemName: [{ value: '', disabled: false }],
      objectClass: [{ value: '', disabled: false }],
      designation: [{ value: '', disabled: false }],
    });

  }

  // on clicking change year type button
  onChangeYearType() {
    this.budgetHeadMappingForm.controls['payrollType'].enable();
  }
  // on clicking change Payroll button
  onPayrollType(eventVal) {
    if (eventVal === '2') {
      this.budgetHeadMappingForm.controls['financialYear'].enable();
      this.budgetHeadMappingForm.controls['payMonth'].enable();
    } else {
      this.budgetHeadMappingForm.controls['financialYear'].disable();
      this.budgetHeadMappingForm.controls['payMonth'].disable();
      this.budgetHeadMappingForm.controls['financialYear'].setValue('2');
      this.budgetHeadMappingForm.controls['payMonth'].setValue('1');
    }
  }

  // shows table data only when clicked on search button
  search() {
    if (this.budgetHeadMappingForm.valid) {
      this.isSearch = true;
      const demandVal = this.directiveObj.getViewValue(this.demandList, this.budgetHeadMappingForm.controls['demand'].value).slice(0, 2);
      // tslint:disable-next-line: max-line-length
      const majorHeadVal = this.directiveObj.getViewValue(this.majorHeadList, this.budgetHeadMappingForm.controls['majorHead'].value).slice(0, 4);
      // tslint:disable-next-line: max-line-length
      const subMajorHeadVal = this.directiveObj.getViewValue(this.subMajorHeadList, this.budgetHeadMappingForm.controls['subMajorHead'].value).slice(0, 1);
      // tslint:disable-next-line: max-line-length
      const minorHeadVal = this.directiveObj.getViewValue(this.minorHeadList, this.budgetHeadMappingForm.controls['minorHead'].value).slice(0, 3);
      const subHeadVal = this.directiveObj.getViewValue(this.subHeadList, this.budgetHeadMappingForm.controls['subHead'].value).slice(0, 2);
      // tslint:disable-next-line: max-line-length
      const detailHeadVal = this.directiveObj.getViewValue(this.detailHeadList, this.budgetHeadMappingForm.controls['detailHead'].value).slice(0, 1);
      // tslint:disable-next-line: max-line-length
      const typeOfEstimation = this.directiveObj.getViewValue(this.typeOfEstimationList, this.budgetHeadMappingForm.controls['typeOfEstimation'].value).slice(0, 1);
      const itemName = this.directiveObj.getViewValue(this.itemNameList, this.budgetHeadMappingForm.controls['itemName'].value).slice(0, 1);
      const objectClassVal = 'C' + this.budgetHeadMappingForm.controls['objectClass'].value;
      // tslint:disable-next-line: max-line-length
      this.budgetHead = demandVal + ':' + majorHeadVal + ':' + subMajorHeadVal + ':' + minorHeadVal + ':' + subHeadVal + ':' + detailHeadVal + ':' + typeOfEstimation + ':' + itemName + ':' + objectClassVal;

      this.dataSource = new MatTableDataSource<any>(this.Element_Data);
      this.displayedRows = this.displayedColumns;
      this.dataSource.data.forEach(item => {
        item.budgetHead = this.budgetHead;
      });

    }
  }

  // on Add
  add() {
    this.dataSource.data.push({
      srNo: (Number(this.dataSource.data[this.dataSource.data.length - 1].srNo) + 1),
      employeeNo: '',
      employeeName: '',
      designation: '',
      employeeClass: '',
      employeeCat: '',
      budgetHead: this.budgetHead,
      isSubmitted: false,
    });
    this.dataSource.data = this.dataSource.data;
  }

  // On Submit
  onSubmit() {
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      width: '250px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Ok') {
        this.dataSource.data.forEach(item => {
          if (item.employeeNo) {
            item.isSubmitted = true;
          } else {
            item.isSubmitted = false;
          }
        });
      }
    });
  }


  // on reset form
  resetForm() {

    this.dataSource = new MatTableDataSource<any>([{ noData: 'No Data Available!' }]);
    this.displayedRows = ['noData'];
    this.directiveObj.selection.clear();
    this.budgetHeadMappingForm.patchValue({
      ddoNo: '4265',
      cardexNo: '5622',
      officeName: 'Collector Office, Ahmedabad',
      district: 'Ahmedabad',
      payrollType: '1',
      financialYear: '2',
      payMonth: '1',
      demand: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      detailHead: '',
      objectClass: '',
    });
    this.budgetHeadMappingForm.controls['financialYear'].disable();
    this.budgetHeadMappingForm.controls['payrollType'].disable();
    this.budgetHeadMappingForm.controls['payMonth'].disable();
  }


  // On Selection change of employee No.
  openEmployeeNumber(element, event) {
    if (event.value === '1') {
      element.employeeName = 'Mr. Padmanaabh Singh';
      element.designation = 'GRD1';
      element.employeeClass = 'Class IV';
      element.employeeCat = 'GO';
    } else if (event.value === '2') {
      element.employeeName = 'Mr. Rahul Singh';
      element.designation = 'Account Clerk';
      element.employeeClass = 'Class III';
      element.employeeCat = 'NGO';
    } else {
      element.employeeName = 'Mr. JigneshKumar Chauhan';
      element.designation = 'Account Assistant';
      element.employeeClass = 'Class I';
      element.employeeCat = 'AIS';
    }

  }


}
