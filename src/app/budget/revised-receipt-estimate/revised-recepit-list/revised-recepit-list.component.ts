import { CommonListing } from './../../../model/common-listing';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {map, startWith, takeUntil} from 'rxjs/operators';
import { PeriodicElementRevisedReceipt } from 'src/app/model/budget';

@Component({
  selector: 'app-revised-recepit-list',
  templateUrl: './revised-recepit-list.component.html',
  styleUrls: ['./revised-recepit-list.component.css']
})
export class RevisedRecepitListComponent implements OnInit {
  // Listing table Data
  ELEMENT_DATA: PeriodicElementRevisedReceipt[] = [
    {position: 1, finYear: '2018-2019', estimateFrom: 'Director of Horticulture',
    majorHead: '2251 : Secretariat-Social Services', branch: ' B1 Section - Budget ', receipt: 100,
    disbursement: 100, file: '19-20/BUD/RRE/001', status: '100%'},

    {position: 2, finYear: '2019-2020', estimateFrom: 'Director of Animal Husbandry',
    majorHead: '2049 : Interest Payments', branch: 'TH (Budget Non Plan)', receipt: 100,
    disbursement: 100, file: '19-20/BUD/RRE/001', status: '90%'},

    {position: 3, finYear: '2017-2018', estimateFrom: 'Commission of Geology and Mining',
    majorHead: '6216 : Loans for Housing', branch: 'TH3 (Budget Plan)', receipt: 100,
    disbursement: 100, file: '19-20/BUD/RRE/001', status: '85%'}
  ];
// Listing Table
displayedColumns: string[] = [ 'position', 'finYear', 'estimateFrom', 'majorHead', 'branch', 'receipt', 'disbursement', 'file',
 'action'];

  dataSource = new MatTableDataSource<PeriodicElementRevisedReceipt>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;

  searchListForm: FormGroup;
// Search Parameter Details
  department_list: CommonListing[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
    {value: '4', viewValue: 'Gujarat Legislature Secretariat'},
    {value: '5', viewValue: 'Gujarat Forest Service Officers'},
    {value: '6', viewValue: 'Women and Child Development Department'}
  ];

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2018-2019' },
    { value: '3', viewValue: '2019-2020' },
  ];

  estimation_list: CommonListing[] = [
    {value: '1', viewValue: 'Director of Horticulture'},
    {value: '2', viewValue: 'Director of Animal Husbandry'},
    {value: '3', viewValue: 'Commission of Geology and Mining'},
  ];

  estimation_for_list: CommonListing[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];

  revenue_capital_list: CommonListing[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];
  branch_list: CommonListing[] = [
    {value: '1', viewValue: 'Administration'},
    {value: '2', viewValue: 'B1 Section - Budget '},
    {value: '3', viewValue: 'TH (Budget Non Plan)'},
    {value: '4', viewValue: 'K Section - Establishment'},
    {value: '5', viewValue: 'Budget - Revenue'},
    {value: '6', viewValue: 'Budget - FIN'},
  ];


  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchNameCtrl: FormControl = new FormControl();
  filteredbranchName: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


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

  constructor( private fb: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.createForm();
    this.filteredDepartmentCode.next(this.department_list.slice());
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      });

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      });

    this.filteredEstimationFrom.next(this.estimation_list.slice());
    this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationFromCtrl.value, this.filteredEstimationFrom);
      });

      this.filteredbranchName.next(this.branch_list.slice());
    this.branchNameCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.branchNameCtrl.value, this.filteredbranchName);
      });

    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
      });

  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createForm() {
    this.searchListForm = this.fb.group({
      departmentCode: ['', ],
      finYear: ['1'],
      estimationFrom: ['1', ],
      branchName: [''],
      revenueCapital: [''],
      majorHeadCode: [''],

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

  // Send To verifier Function
  sendTo(element): void {
    const employees: string[] = [
      'Satendra Zala',
      'Hardik Chaudhary',
      'C.K Brahmbhatt',
    ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(RevisedRecepitForwardDialogComponent, {
      width: '400px',
      data: employees
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  clearForm() {
    this.searchListForm.reset();
  }
  saveEstimate() {}
}

@Component({
  selector: 'app-revised-recepit-forward-dialog',
  templateUrl: 'revised-recepit-forward-dialog.html',
})
export class RevisedRecepitForwardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RevisedRecepitForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();
  ngOnInit() {
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
