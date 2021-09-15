import { CommonListing } from './../../model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

// Listing table Data
const ELEMENT_DATA = [
  {
    financialYear: '2019-2020', bpnCode: '56:Outcome budget', status: 'Submitted',  action: '-'
  },
  {
    financialYear: '2019-2020', bpnCode: '56:Outcome budget', status: 'Submitted',  action: '-'
  },
  {
    financialYear: '2019-2020', bpnCode: '56:Outcome budget', status: 'Submitted',  action: '-'
  },
  {
    financialYear: '2019-2020', bpnCode: '56:Outcome budget', status: 'Draft',  action: '-'
  },
  {
    financialYear: '2019-2020', bpnCode: '56:Outcome budget', status: 'Draft',  action: '-'
  },
];

@Component({
  selector: 'app-disclaimer-list',
  templateUrl: './disclaimer-list.component.html',
  styleUrls: ['./disclaimer-list.component.css']
})
export class DisclaimerListComponent implements OnInit {
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  disclaimerFinYearCtrl: FormControl = new FormControl();
  filtereddisclaimerFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  // Listing table
  displayedColumns: string[] = [
    'srNo', 'financialYear', 'bpnCode', 'status',  'action'
  ];
  // Search field details
  disclaimerFinYearList: CommonListing[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];
  disclaimerListForm: FormGroup;
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
  constructor(private fb: FormBuilder, private router: Router, ) { }
  ngOnInit() {
    this.disclaimerListForm = this.fb.group({
      financialYear: [''],
       pressName : [''],
      disclaimerFinYear : [''],
      attatchmentType: [''],
      pressTypeCtrl : [''],
    });
//  financial year
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

  leaveSubmit() {
    let p_data = this.disclaimerListForm;
    console.log(p_data);
  }
  // Reset
  clearForm() {
    this.disclaimerListForm.reset();
  }
  // on Search click
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }

}



