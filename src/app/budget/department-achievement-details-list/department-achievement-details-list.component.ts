import { CommonListing } from './../../model/common-listing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs';
import { Router } from '@angular/router';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DeptAchieveList } from 'src/app/model/budget';
import { StandingChargeViewCommentsComponent } from '../standing-charge/standalone-charge/standalone-charge.component';

@Component({
  selector: 'app-department-achievement-details-list',
  templateUrl: './department-achievement-details-list.component.html',
  styleUrls: ['./department-achievement-details-list.component.css']
})
export class DepartmentAchievementDetailsListComponent implements OnInit {
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

  demandList: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department'}
  ];

  achieveList: FormGroup;
  departCtrlCtrl: FormControl = new FormControl();
  disclaimerFinYearCtrl: FormControl = new FormControl();

  // Entry table data
  PhysicalTargetData: DeptAchieveList[] = [
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/MO/001', referenceDate: '14-Apr-20',
    dept: 'Agriculture, Farmers Welfare & Co-Operation Department', status: 'Approved',
      recFromOn: 'Rajesh 10-Feb-2020 10:30',
      sentToON: 'Rajesh 10-Feb-2020 10:30',
      lyingWith: 'Mr. S G Yadav',
      wStatus: 'Approved by Approver',},
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/MO/002', referenceDate: '14-Apr-20',
    dept: 'Education Department', status: 'Pending',
      recFromOn: 'Rajesh 10-Feb-2020 10:30',
      sentToON: 'Rajesh 10-Feb-2020 10:30',
      lyingWith: 'Mr. S G Yadav',
      wStatus: 'Forwarded to Verifier',},
    { financialYear: '2020-2021', referenceNo: '19-20/BUD/MO/003', referenceDate: '14-Apr-20',
    dept: 'Industries and Mines Department', status: 'Draft',
      recFromOn: '-',
      sentToON: '-',
      lyingWith: '',
      wStatus: '-',},
  ];

  PhysicalTargetDataColumn: string[] = [
    'srno', 'financialYear', 'dept', 'referenceNo', 'referenceDate',
    'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Returned' },
    { value: '5', viewValue: 'Cancelled' },
  ];
  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];
  wStatus_List: CommonListing[] = [
    { value: '1', viewValue: 'Cancelled' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Returned to Creator' },
    { value: '4', viewValue: 'Forwarded to Approver' },
    { value: '5', viewValue: 'Returned to Verifier' },
    { value: '6', viewValue: 'Approved by Approver' },
    { value: '7', viewValue: 'Returned to Creator' },
    { value: '8', viewValue: 'Rejected by Approver' },
  ];

  PhysicalTargetDataSource = new MatTableDataSource(this.PhysicalTargetData);

  receiveCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  showTabs = false;
  constructor(private fb: FormBuilder, private router: Router,
    public dialog: MatDialog,) {}

  private _onDestroy = new Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();

  expendCharges: boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.achieveList = this.fb.group({
      departCtrl: [''],
      disclaimerFinYear: ['1'],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      wStatus: [''],
      lyWith: [''],
      status: [''],
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
  // History Details Dialog
  showHistoryDialog(): void {

    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
      // StandingChargeConsolidateForwardDialogComponent
      width: '2700px',
      height: '600px'
      // data: employees
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  saveLockUnlock() {
    this.achieveList.value;
  }
  search() {
    this.showTabs = true;
  }

  goToScreen() {
    this.router.navigate(['/budget/department-achievement-details']);
  }

}
