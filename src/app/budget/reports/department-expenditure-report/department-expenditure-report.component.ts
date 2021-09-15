
import { Component, OnInit, ViewChild, OnDestroy, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
export interface ItemContiniousElement {
  bpn: number | '';
  demand: number | '';
  majorHead: number | '';
  subMajorHead: number | '';
  minorHead: number | '';
  subHead: number | '';
  detailHead: number | '';
  objectHead: number | '';
  chargeVoted: string | '';
  planNonPlan: string | '';
  formType: string | '';
  account: number | '';
  curtYrBe: number | '';
  curtYrRe: number | '';
  nxtYrBe: number | '';
  nxtYrBeDept: number | '';
  recFlag: number | '';
}

const reports_data: any[] = [
  // tslint:disable-next-line:max-line-length
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
  {bpn: '025', demand: 125, majorHead: 3451, subMajorHead: 100, minorHead: 252, subHead: 253, detailHead: 356,
  // tslint:disable-next-line:max-line-length
  objectHead: 475, chargeVoted: 'VT', planNonPlan: 'NP', formType: 'B', account: 452, curtYrBe: 124, curtYrRe: 111, nxtYrBe: 112, nxtYrBeDept: 0, recFlag: '' },
];

@Component({
  selector: 'app-department-expenditure-report',
  templateUrl: './department-expenditure-report.component.html',
  styleUrls: ['./department-expenditure-report.component.css']
})
export class DepartmentExpenditureReportComponent implements OnInit, OnDestroy {
  filteredinddo: any;
  dataSource = new MatTableDataSource(reports_data);
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['bpn', 'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objectHead', 'chargeVoted', 'planNonPlan', 'formType',
  'account', 'curtYrBe', 'curtYrRe', 'nxtYrBe', 'nxtYrBeDept', 'recFlag'];

  constructor(public dialog: MatDialog, private fb: FormBuilder, private toastr: ToastrService, private el: ElementRef) { }
  budgetreportsform: FormGroup;
  uploadExcelStep: FormGroup;
  newWorkEstimate: FormGroup;
  filteredCodes: Observable<string[]>;
  tabDisable: Boolean = true;
  date: any = new Date();
  doneHeader: Boolean = false;
  selectedIndex: number;
  public show = false;
  public buttonName;
  private _onDestroy = new
   Subject<void>();

  private paginator: MatPaginator;
  private sort: MatSort;

  ngOnInit() {
    this.budgetreportsform = this.fb.group({
      finYear : ['2020-2021', Validators.required],
      departmentCode : ['', Validators.required],
    });
    this.filteredFinYear.next(this.finYear_list.slice());

    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      }));

    this.filteredDepartmentCode.next(this.department_list.slice());
    (this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      }));
  }
  filterEstimationFor(arrValue, searchValue) {
    const search = searchValue;
    if (!arrValue) {
      return;
    }
    const filterArray = arrValue.filter(function(number) {
      return (number.value === search);
    });
    return filterArray;
  }

  // tslint:disable-next-line:member-ordering
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
  };


  // tslint:disable-next-line:member-ordering
  finYear_list: any[] = [
    {value: '2019-2020', viewValue: '2019-2020'},
    {value: '2020-2021', viewValue: '2020-2021'},
  ];

  // tslint:disable-next-line:member-ordering
  department_list: any[] = [
    {value: '1', viewValue: 'Home Department'},
    {value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
    {value: '3', viewValue: 'Health and Family Welfare Department'},
  ];
  // tslint:disable-next-line:member-ordering
  finYearCtrl: FormControl = new FormControl();
  // tslint:disable-next-line:member-ordering
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // tslint:disable-next-line:member-ordering
  departmentCodeCtrl: FormControl = new FormControl();
  // tslint:disable-next-line:member-ordering
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // tslint:disable-next-line:member-ordering
  @ViewChild('singleSelect') singleSelect: MatSelect;

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
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

  toggle() {
    this.show = !this.show;
  }
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
    // if (this.createEstimateForm.invalid) {
    //   this.toastr.error('Please fill all the details.');
    //   this.tabDisable = true;
    // } else {
    //   this.tabDisable = false;
    //   this.selectedIndex = 1;
    //   this.doneHeader = true;
    // }
  }
  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }
 
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

}


