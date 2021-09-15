
import { AttachmentType } from './../../model/promotion-forgo';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { MacroOutcomeDetTab, MacroOutcomeList, MacroOutcomeListNew } from 'src/app/model/budget';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { StandingChargeViewCommentsComponent } from '../standing-charge/standalone-charge/standalone-charge.component';

@Component({
  selector: 'app-macro-outcome',
  templateUrl: './macro-outcome.component.html',
  styleUrls: ['./macro-outcome.component.css']
})
export class MacroOutcomeComponent implements OnInit {
  // Listing table Data
  ELEMENT_DATA: MacroOutcomeListNew[] = [
    {
      financialYear: '2020-2021', department: 'Agriculture, Farmers Welfare & Co-Operation Department',
      bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/003', refDate: '20-Apr-2020', status: 'Approved',
      recFromOn: 'Rajesh 10-Feb-2020 10:30',
      sentToON: 'Rajesh 10-Feb-2020 10:30',
      lyingWith: 'Mr. S G Yadav',
      wStatus: 'Approved by Approver',
    },
    {
      financialYear: '2019-2020', department: 'Agriculture, Farmers Welfare & Co-Operation Department',
      bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/002', refDate: '20-Apr-2020', status: 'Pending',
      recFromOn: 'Rajesh 10-Feb-2020 10:30',
      sentToON: 'Rajesh 10-Feb-2020 10:30',
      lyingWith: 'Mr. S G Yadav',
      wStatus: 'Forwarded to Verifier',
    },
    {
      financialYear: '2018-2019', department: 'Agriculture, Farmers Welfare & Co-Operation Department',
      bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/001', refDate: '20-Apr-2020', status: 'Draft',
      recFromOn: '-',
      sentToON: '-',
      lyingWith: '',
      wStatus: '-',
    },
  ];
  // Listing table
  ELEMENT_DATAColumn: string[] = [
    'srno', 'financialYear', 'department', 'bpnCode', 'refNum', 'refDate',
    'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  expendCharges: boolean;
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
  errorMessages = budgetMessage;

  MacroOutcomeListingDataSource = new MatTableDataSource(this.ELEMENT_DATA);

  receiveCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  filteredMacroPubNumber: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // disclaimerFinYearCtrl
  disclaimerFinYearCtrl: FormControl = new FormControl();
  filtereddisclaimerFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild('codeGJ') codeGJ: ElementRef;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  // Entry Field Details
  disclaimerFinYearList: any[] = [
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

  macroOutcomeForm: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;
  date: Date = new Date();
  private endDate: Date = new Date;
  private startDate: Date = new Date;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  constructor(private fb: FormBuilder, private router: Router,
    public dialog: MatDialog,) { }
  ngOnInit() {
    this.macroOutcomeForm = this.fb.group({
      financialYear: [''],
      refNO: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      wStatus: [''],
      lyWith: [''],
      status: [''],
      disclaimerFinYear: ['1'],
    });

    this.filtereddisclaimerFinYear.next(this.disclaimerFinYearList.slice());
    (this.disclaimerFinYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.disclaimerFinYearList, this.disclaimerFinYearCtrl.value, this.filtereddisclaimerFinYear);
      }));

  }
  createForm() {
    throw new Error(' Method not implemented. ');
  }
  setDataSourceAttributes() {
    this.MacroOutcomeListingDataSource.paginator = this.paginator;
    this.MacroOutcomeListingDataSource.sort = this.sort;
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
  toDateChange(endDate) {
    console.log(endDate);
    return this.endDate = endDate;
  }
  submitDetails() { }
  fromDateChange(startDate) {
    console.log(startDate);
    return this.startDate = startDate;
  }

  leaveSubmit() {
    const p_data = this.macroOutcomeForm;
    console.log(p_data);
  }
  clearForm() {
    this.macroOutcomeForm.reset();
  }
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }

  goToScreen() {
    this.router.navigate(['/budget/macro-outcome-details']);
  }
}




