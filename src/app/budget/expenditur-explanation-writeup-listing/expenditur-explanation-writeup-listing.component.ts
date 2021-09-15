
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { ExpenditureExpList } from 'src/app/model/budget';


@Component({
  selector: 'app-expenditur-explanation-writeup-listing',
  templateUrl: './expenditur-explanation-writeup-listing.component.html',
  styleUrls: ['./expenditur-explanation-writeup-listing.component.css']
})
export class ExpenditurExplanationWriteupListingComponent implements OnInit {
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
// Listing Table
  displayedColumnsExpanditure: string[] = [
    'srNo', 'financialYear', 'bpnCode', 'majorHead', 'demand', 'status', 'action'
  ];
// Listing Table Data
  expanditure_list: ExpenditureExpList[] = [
    {
      financialYear: '2019-2020',
      depart: 'Agriculture, Farmers Welfare and Co-operation Department',
      bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      majorHead: '-',
      demand: '003:Minor Irrigation, Soil Conservation and Area Development.',
      status: 'Submitted',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Education Department',
      bpnCode: '02:Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc' ,
      majorHead: '0020:Corporation Tax',
      demand: '010:Other expenditure pertaining to Education Department',
      status: 'Submitted',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Education Department',
      bpnCode: '04:Education Department' ,
      majorHead: '-',
      demand: '010:Other expenditure pertaining to Education Department',
      status: 'Draft',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Energy and Petro-Chemicals Department',
      bpnCode: '05:Energy and Petro-Chemicals Department',
      majorHead: '-',
      demand: '013:Power Projects',
      status: 'Draft',
      action: '-'
    },
    {
      financialYear: '2019-2020',
      depart: 'Finance Department',
      bpnCode: '06:Finance Department' ,
      majorHead: '-',
      demand: '018:Pension and other Retirement Benefits',
      status: 'Draft',
      action: '-'
    }
  ];

  expanditureDatasource = new MatTableDataSource(this.expanditure_list);


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  expenditureform: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;
  date: Date = new Date();

  constructor(private fb: FormBuilder, private router: Router, ) { }



  // Search field details
  FinYearList: CommonListing[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];


  department_list: CommonListing[] = [
    { value: '0', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Energy & Petrochemicals Department' },
    { value: '3', viewValue: 'Finance Department' },
    { value: '4', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '5', viewValue: 'Forest & Environment Department' },
    { value: '6', viewValue: 'General Administration Department' },
    { value: '7', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '8', viewValue: 'Health & Family Welfare Department' },
    { value: '9', viewValue: 'Home Department' },
    { value: '10', viewValue: 'Industries & Mines Department' },
    { value: '11', viewValue: 'Information & Broadcasting Department' },
    { value: '12', viewValue: 'Labour & Employment Department' },
    { value: '13', viewValue: 'Legal Department' },
    { value: '14', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '17', viewValue: 'Ports & Transport Department' },
    { value: '18', viewValue: 'Revenue Department' },
    { value: '19', viewValue: 'Roads & Buildings Department' },
    { value: '20', viewValue: 'Science & Technology Department' },
    { value: '21', viewValue: 'Social Justice & Empowerment Department' },
    { value: '22', viewValue: 'Tribal Development Department' },
    { value: '23', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '24', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '25', viewValue: 'Women & Child Development Department' },
    { value: '26', viewValue: 'Climate Change Department' },
  ];


  bpn_list: CommonListing[] = [
    {
      value: '1', viewValue: '02:Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc'
    },
    {
      value: '2', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '3', viewValue: '13:Industries and Mines Department' },

    { value: '4', viewValue: '22:Roads And Buildings Department' },
    { value: '5', viewValue: '24c: Tribal Development Department - Part III' },
    { value: '6', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '7', viewValue: '24d: Tribal Development Department - Part IV' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '0020:Corporation Tax' },
    { value: '2', viewValue: '0021:Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028:Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029:Land Revenue' },
    { value: '5', viewValue: '0030:Stamps and Registration Fees' },
  ];


  demand_list: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },
  ];


  finYearCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngOnInit() {
    this.expenditureform = this.fb.group({
      FinYear: [''],
      disclaimerDepartment: [''],
      bpnCode: [''],
      majorHead: [''],
      demandCode: [''],
    });
  }
  createForm() {
    throw new Error(' Method not implemented. ');
  }
  setDataSourceAttributes() {
    this.expanditureDatasource.paginator = this.paginator;
    this.expanditureDatasource.sort = this.sort;
  }

  leaveSubmit() {
    const p_data = this.expenditureform;
    console.log(p_data);
  }
  // reset form
  clearForm() {
    this.expenditureform.reset();
  }
  // On search click
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }
// Delete record
  delete(index) {
    this.expanditureDatasource.data.splice(index, 1);
    this.expanditureDatasource = new MatTableDataSource(this.expanditureDatasource.data);
  }

}



