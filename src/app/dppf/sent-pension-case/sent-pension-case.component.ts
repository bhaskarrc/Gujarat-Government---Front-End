import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SentCases } from 'src/app/model/dppf';

@Component({
  selector: 'app-sent-pension-case',
  templateUrl: './sent-pension-case.component.html',
  styleUrls: ['./sent-pension-case.component.css']
})
export class SentPensionCaseComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }
  // Variable
  isTokentable = true;

  gtrfourtyFout = 'Form GTR 44 - Detailed Bill of Contingent Charges of Fully vouched contingent charges';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';

  // Form group
  sentPensionCase: FormGroup;
  // list
  ELEMENT_DATA: SentCases[] = [
    {
      // checkbox: false,
      inwardNo: '002810/02/2020', inwardDate: '06-Feb-2020', inwType: 'PC', ppoNo_scNo: ' PR-1/09/2020/355853',
      employeeID: 1234567891, name: 'SANJAYSINGH SISODIYA', retDate: '30-Sep-2020', pnsnType: 'Sup', docCount: 1, revNo: 0,
      branchName: 'PR-1', to: 'Himanshu Chandrakanthbhai Trivedi', status: 'Sent'
    },
    {
      // checkbox: false,
      inwardNo: '002766/02/2020', inwardDate: '06-Feb-2020', inwType: 'PC', ppoNo_scNo: ' PR-1/09/2019/357076',
      employeeID: 1234567891, name: 'LT.VIRENDRABHAI PATEL', retDate: '11-Sep-2020', pnsnType: 'Fam', docCount: 1, revNo: 0,
      branchName: 'PR-1', to: 's d parmar', status: 'Save As Draft'
    }
  ];
  pensionType_list: CommonListing[] = [
    { value: 1, viewValue: 'Retiring' },
    { value: 2, viewValue: 'Absorption' },
    { value: 3, viewValue: 'Compensation' },
    { value: 4, viewValue: 'Compassionate' },
    { value: 5, viewValue: 'Family' },
    { value: 6, viewValue: 'Family Lost' },
    { value: 7, viewValue: 'Invalid' },
    { value: 8, viewValue: 'Other' },
    { value: 9, viewValue: 'Superannuation' },
    { value: 10, viewValue: 'Voluntary' },
    { value: 11, viewValue: 'Wound and Injury' },
  ];

  branchName_list: CommonListing[] = [
    { value: 1, viewValue: 'PR-1' },
    { value: 2, viewValue: 'PR-2' },
    { value: 3, viewValue: 'PR-3' },
    { value: 4, viewValue: 'PR-4' },
    { value: 5, viewValue: 'PR-5' },
    { value: 6, viewValue: 'PR-6' },
    { value: 7, viewValue: 'PR-7' },
    { value: 8, viewValue: 'PR-8' },
  ];

  districtName_list: CommonListing[] = [
    { value: 1, viewValue: 'Gandhinagar' },
  ];

  inwardType_list: CommonListing[] = [
    { value: 1, viewValue: 'Pension Case' },
    { value: 2, viewValue: 'Service Certificate ' },
    { value: 3, viewValue: 'Old Account General Cases' },
    { value: 4, viewValue: 'Other State Pension Cases' },
    { value: 5, viewValue: 'NPS Gratuity' },
  ];
  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Sent Pension Case' },
    { value: '2', viewValue: 'Save As Draft' },
  ];
  // Date
  todayDate = Date.now();
  todaysDate = new Date();
  // FormControl
  pensionTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  statusTypeCtrl: FormControl = new FormControl();

  dataSource = new MatTableDataSource<SentCases>(this.ELEMENT_DATA);
  // sent table source
  displayedColumns: any[] = [
    'serialNo',
    'inwardNo',
    'inwardDate',
    'inwType',
    'ppoNo_scNo',
    'employeeID',
    'name',
    'retDate',
    'pnsnType',
    'docCount',
    'revNo',
    'branchName',
    'to',
    'status',
    'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sentPensionCase = this.fb.group({
      inwardNo: [''],
      inwardFrom: [''],
      inwardTo: [''],
      inwardType: [''],
      retirementDate: [''],
      pensionType: [''],
      branchName: [''],
      districtName: [''],
      ppoNo: [''],
      statusap: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']

    });
  }

  clearForm() {
    this.sentPensionCase.reset();
  }

  searchSentPensionCase() { }

  ontoken(index) {

    if (index.value === '2') {
      this.isTokentable = false;
    } else {
      this.isTokentable = true;
    }
  }
  // Message
  saveAllData() {
    this.toastr.error('Please Enter Any one details for pension case search');
  }
  // navigation
  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }
}
