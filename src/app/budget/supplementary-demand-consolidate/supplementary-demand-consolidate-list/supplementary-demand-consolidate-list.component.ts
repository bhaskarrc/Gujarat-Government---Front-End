import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {map, startWith, takeUntil} from 'rxjs/operators';
import { SuppDemandList } from 'src/app/model/budget';


@Component({
  selector: 'app-supplementary-demand-consolidate-list',
  templateUrl: './supplementary-demand-consolidate-list.component.html',
  styleUrls: ['./supplementary-demand-consolidate-list.component.css']
})
export class SupplementaryDemandConsolidateListComponent implements OnInit {
  // Listing table Data
  // ELEMENT_DATA: SupplementaryDemand[] = [
  ELEMENT_DATA: SuppDemandList[] = [
    {position: 1, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020', demand: '70 : Community Development',
    revenueCapital: 'Revenue', votedCharged: 'Voted', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 1, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020', demand: '70 : Community Development',
    revenueCapital: 'Revenue', votedCharged: 'Charged', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 1, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020',  demand: '70 : Community Development',
    revenueCapital: 'Capital', votedCharged: 'Voted', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 1, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020',  demand: '70 : Community Development',
    revenueCapital: 'Capital', votedCharged: 'Charged', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 2, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020', demand: '95 : Scheduled Castes Sub Plan',
    revenueCapital: 'Revenue', votedCharged: 'Voted', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 2, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020', demand: '95 : Scheduled Castes Sub Plan',
    revenueCapital: 'Revenue', votedCharged: 'Charged', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 2, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020',  demand: '95 : Scheduled Castes Sub Plan',
    revenueCapital: 'Capital', votedCharged: 'Voted', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

    {position: 2, refNo: '19-20/BUD/SD/001', refDate: '14-Jul-2020',  demand: '95 : Scheduled Castes Sub Plan',
    revenueCapital: 'Capital', votedCharged: 'Charged', recFrom: 'Mr. Rajesh', recDate: '14-Apr-2020',
    sentTo: 'Mr. Ramesh', sentDate: '14-Apr-2020', lyingWith: 'MR. Sharma',
    status: 'Approved', wstatus: 'Approved by AD', excess: 25.01},

  ];

  // Listing Table
  displayedColumns: string[] = [ 'position', 'refNo', 'refDate', 'demand', 'revenueCapital', 'votedCharged', 'excess',
  'recFrom', 'recDate', 'sentTo', 'sentDate', 'lyingWith',
  'status', 'wstatus', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;

  searchListForm: FormGroup;

  // Search Parameter Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
    { value: '3', viewValue: '2021-2022' },
  ];

  department_list: CommonListing[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  demand_list: CommonListing[] = [
    {value: '70 : Community Development', viewValue: '70 : Community Development'},
    {value: '71 : Rural Housing and Rural Development', viewValue: '71 : Rural Housing and Rural Development'},
    {value: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department',
     viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'},
    {value: '76 : Revenue Department', viewValue: '76 : Revenue Department'},
    {value: '79 : Relief on account Natural Calamities', viewValue: '79 : Relief on account Natural Calamities'},
    {value: '81 : Compensation and Assignment', viewValue: '81 : Compensation and Assignment'},
    {value: '87 : Gujarat Capital Construction Scheme', viewValue: '87 : Gujarat Capital Construction Scheme'},
    {value: '93 : Welfare of Scheduled Tribes', viewValue: '93 : Welfare of Scheduled Tribes'},
    {value: '95 : Scheduled Castes Sub Plan', viewValue: '95 : Scheduled Castes Sub Plan'},
    {value: '97 : Sports,Youth and Cultural Activities Department', viewValue: '97 : Sports,Youth and Cultural Activities Department'},
    {value: '10 : Other expenditure pertaining to Education Department',
     viewValue: '10 : Other expenditure pertaining to Education Department'},
  ];

  revenue_capital_list: CommonListing[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];

  charged_voted_list: CommonListing[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' },
  ];
  statuslist: CommonListing[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Rejected' },
    { value: '3', viewValue: 'Cancelled' }
  ];
  wstatuslist: CommonListing[] = [
    { value: '1', viewValue: 'Approved by AD' },
    { value: '2', viewValue: 'Rejected by FD' },
    { value: '3', viewValue: 'Cancelled' }
  ];

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  revenueCapitalCtrl: FormControl = new FormControl();
  filteredRevenueCapital: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  chargedVotedCtrl: FormControl = new FormControl();
  filteredChargedVoted: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  statusCtrl: FormControl = new FormControl();
  wstatusCtrl: FormControl = new FormControl();


  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  spanningColumns = ['position', 'demand', 'revenueCapital'];

  spans = [];

  constructor(public fb: FormBuilder) {
    this.cacheSpan('demand', d => d.demand);
    this.cacheSpan('position', d => d.position);
    this.cacheSpan('revenueCapital', d => d.revenueCapital + d.position);
  }

  ngOnInit() {

    this.createForm();

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      });

    this.filteredDepartmentCode.next(this.department_list.slice());
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      });

    this.filteredDemandCode.next(this.demand_list.slice());
    this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      });

    this.filteredRevenueCapital.next(this.revenue_capital_list.slice());
    this.revenueCapitalCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.revenue_capital_list, this.revenueCapitalCtrl.value, this.filteredRevenueCapital);
      });

      this.filteredChargedVoted.next(this.charged_voted_list.slice());
      this.chargedVotedCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(this.charged_voted_list, this.chargedVotedCtrl.value, this.filteredChargedVoted);
        });
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      departmentCode: [''],
      demandCode: [''],
      revenueCapital: [''],
      chargedVoted: [''],
      lyingWithBox: [''],
      status: [''],
      wstatus: [''],
      refNo: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  cacheSpan(key, accessor) {
    for (let i = 0; i < this.ELEMENT_DATA.length;) {
      const currentValue = accessor(this.ELEMENT_DATA[i]);
      let count = 1;

      for (let j = i + 1; j < this.ELEMENT_DATA.length; j++) {
        if (currentValue != accessor(this.ELEMENT_DATA[j])) {
          break;
        }

        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      this.spans[i][key] = count;
      i += count;
    }
  }

  // Get Row Span
  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }
  clearForm() {
    this.searchListForm.reset();
  }

  saveEstimate() {

   }

}
