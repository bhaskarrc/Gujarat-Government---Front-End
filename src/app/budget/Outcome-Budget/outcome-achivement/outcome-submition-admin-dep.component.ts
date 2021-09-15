import { CommonListing } from './../../../model/common-listing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs';
import { Router } from '@angular/router';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';
import { OutcomeAchievement, OutcomeAchieve } from 'src/app/model/budget';


@Component({
  selector: 'app-outcome-submition-admin-dep',
  templateUrl: './outcome-submition-admin-dep.component.html',
  styleUrls: ['./outcome-submition-admin-dep.component.css']
})
export class OutcomeSubmitionAdminDepComponent implements OnInit {
  achivetable: Boolean = false;
  errorMessages = budgetMessage;
  
// Entry Field Details

disclaimerFinYearList: CommonListing[] = [
  { value: '1', viewValue: '2020-2021' },
  { value: '2', viewValue: '2019-2020' },
  { value: '3', viewValue: '2021-2022' },
  { value: '4', viewValue: '2011-2012' },
  { value: '5', viewValue: '2012-2013' },
  { value: '6', viewValue: '2013-2014' },
  { value: '7', viewValue: '2014-2015' },
  { value: '8', viewValue: '2015-2016' },
  { value: '9', viewValue: '2016-2017' },
  { value: '10', viewValue: '2017-2018' },
  { value: '11', viewValue: '2018-2019' },
];

  department_list: CommonListing[] = [
    { value: '1', viewValue: ' Finance Department ' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Home Department' }
  ];
  macroPubNumberList: CommonListing[] = [
    {value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department '},
    {value: '2', viewValue: '04:Education Department'},
    {value: '3', viewValue: '05:Energy and Petro-Chemicals Department'},
    {value: '4', viewValue: '06:Finance Department'},
    {value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department'},
  ];

  demandList: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department'}
  ];

  createOutcomeForm: FormGroup;
  departCtrlCtrl: FormControl = new FormControl();
  macroPubNumberCtrl: FormControl = new FormControl();
  disclaimerFinYearCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();

  // Entry table data
  PhysicalTargetData: OutcomeAchieve[] = [
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/OBA/001', referenceDate: '14-Apr-20',
    demandNo: '001:Agriculture and Co-operation Department', status: 'Draft' },
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/OBA/002', referenceDate: '14-Apr-20',
    demandNo: '002:Agriculture', status: 'Submitted' },
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/OBA/003', referenceDate: '14-Apr-20',
    demandNo: '003:Minor Irrigation, Soil Conservation and Area Development', status: 'Submitted' },
  ];
// Listing
  PhysicalTargetDataColumn: string[] = [
    'srno', 'financialYear', 'demandNo', 'referenceNo', 'referenceDate', 'status', 'action'
  ];

  PhysicalTargetDataSource = new MatTableDataSource(this.PhysicalTargetData);

  showTabs = false;
  constructor(private fb: FormBuilder, private router: Router) {}

  private _onDestroy = new Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();

  expendCharges: boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createOutcomeForm = this.fb.group({
      departCtrl: [''],
      disclaimerFinYear: [''],
      macroPubNumber: [''],
      demand: [''],
    });
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  saveLockUnlock() {
    this.createOutcomeForm.value;
  }

  // On Search Button Click
  search() {
    this.showTabs = true;
  }

  goToScreen() {
    this.router.navigate(['/budget/achievement-against-targets']);
  }

}

