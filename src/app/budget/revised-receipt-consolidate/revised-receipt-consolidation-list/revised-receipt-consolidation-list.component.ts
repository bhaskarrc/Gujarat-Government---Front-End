import { Router } from '@angular/router';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReceiptEstimateList } from 'src/app/model/receipt-estimate-list';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { ReceiptConsolidateViewCommentsComponent } from '../../receipt-consolidate-list/receipt-consolidate-list.component';
@Component({
  selector: 'app-revised-receipt-consolidation-list',
  templateUrl: './revised-receipt-consolidation-list.component.html',
  styleUrls: ['./revised-receipt-consolidation-list.component.css']
})
export class RevisedReceiptConsolidationListComponent implements OnInit {
// Listing table data
  ELEMENT_DATA: any[] = [
    {
      fianicial: '2019-2020',
      majorHead: '0005',
      majorHeadToolTip: '0005:Central Goods and Services Tax',
      hod: 'Director of Agriculture',
      noDDOs: '4',
      receipt: '100.65',
      disbursement: '110.10',
      refDate: '14-Dec-2020',
      status: '-',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',

    },
    {
      fianicial: '2020-2021',
      majorHead: '0006',
      majorHeadToolTip: '0006:State Goods and Services Tax(SGST) ',
      hod: 'Director of Horticulture',
      noDDOs: '4',
      receipt: '100.65',
      disbursement: '110.10',
      refDate: '14-Dec-2020',
      status: 'Pending',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',

    },

  ];
  // Listing Table
  dataSource = new MatTableDataSource<ReceiptEstimateList>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'position',
    'fianicial',
    'majorHead',
    'noDDOs',
    'receipt',
    'disburs',
    'receivedOnFrom',
    'sentToOn',
    'lyingWith',
    'status',
    'action'
  ];

  searchListForm: FormGroup;
// Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' }
  ];
  statuslist: any[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Draft' },
    { value: '3', viewValue: 'Pending' },
    { value: '4', viewValue: 'Rejected' }
  ];
  dept_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
    {value: '4', viewValue: 'Gujarat Legislature Secretariat'},
    {value: '5', viewValue: 'Gujarat Forest Service Officers'},
    {value: '6', viewValue: 'Women and Child Development Department'}
  ];

  filteredMajorlist: any[] = [
    { value: '1', viewValue: '0005:Central Goods and Services Tax' },
    {
      value: '2',
      viewValue: '0006:State Goods and Services Tax(SGST)'
    },
    { value: '3', viewValue: '0008:Integrated Goods and Service Tax(IGST)' },
    { value: '4', viewValue: '0020:Corporation Tax' },
    { value: '5', viewValue: '0021:Taxes on Income other than Corporation Tax' }
  ];

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();

  _onDestroy = new Subject<void>();
  rangeTypeValue = 'Approved';
  receiveValue = 'Received From';
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();

    if (this.finYear_list) {
      this.filteredFinYear.next(this.finYear_list.slice());
    }
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.finYear_list,
          this.finYearCtrl.value,
          this.filteredFinYear
        );
      });
  }
  createForm() {
    this.searchListForm = this.fb.group({
      finYear: ['1'],
      dept: [''],
      majorHeadCode: [''],
      frRefDate: [''],
      toRefDate: [''],
      recRefDate: [''],
      recRetDate: [''],
      status: [''],
      sentOn: [''],
      sentTo: [''],

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

  // Go to consolidation Page
  consolidatePage() {
    this.router.navigate(['./budget/revised-receipt-consolidation']);
  }

  // Go to consolidation View
  consolidateView() {
    this.router.navigate(['./budget/revised-receipt-consolidation-view']);
  }
// History Popup
showHistoryDialog(): void {
  const dialogRef = this.dialog.open(ReceiptConsolidateViewCommentsComponent, {
    width: '2700px',
    height: '600px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'no') {
      console.log('The dialog was closed', result);
    } else if (result === 'yes') {
      console.log('The dialog was closed', result);
    }
  });
}

}