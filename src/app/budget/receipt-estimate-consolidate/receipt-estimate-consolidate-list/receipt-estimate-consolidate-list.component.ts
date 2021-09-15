import { ReceiptEstimateConsolidateList } from 'src/app/model/receipt-estimate-consolidate-list';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { DialogData } from '../../../model/receipt-estimate-list';
import { CommonListing } from 'src/app/model/common-listing';
import { ReceiptForwardDialogComponent } from '../../receipt-estimate/receipt-estimates-list/receipt-estimates-list.component';


@Component({
  selector: 'app-receipt-estimate-consolidate-list',
  templateUrl: './receipt-estimate-consolidate-list.component.html',
  styleUrls: ['./receipt-estimate-consolidate-list.component.css']
})
export class ReceiptEstimateConsolidateListComponent implements OnInit {

  ELEMENT_DATA: ReceiptEstimateConsolidateList[] = [
    {
      finYear: '2019-2020', hod: 'DDO', majorHead: '0020',
      receipt: 115.10, disbursement: 124.25, refNo: '19-20/BUD/RE/001',
      status: 'Completed'
    },
    {
      finYear: '2021-2022', hod: 'HOD', majorHead: '0021',
      receipt: 20.20, disbursement: 130.00, refNo: '21-22/BUD/RE/001', status: 'Completed'
    },
    // {
    //   finYear: '2018-2019', hod: 'Department', majorHead: '0031',
    //   receipt: 100, disbursement: 190.10, refNo: '-', status: '80%'
    // },
    {
      finYear: '2021-2022', hod: 'DDO', majorHead: '0028',
      receipt: 100.65, disbursement: 110.10, refNo: '-', status: 'Pending'
    },
    {
      finYear: '2015-2016', hod: 'HOD', majorHead: '0029',
      receipt: 150.50, disbursement: 240.20, refNo: '-', status: 'Pending'
    },
    {
      finYear: '2017-2018', hod: 'HOD', majorHead: '0030',
      receipt: 550.10, disbursement: 340.20, refNo: '21-22/BUD/RE/001', status: 'Completed'
    },
  ];

  displayedColumns: string[] = ['position', 'finYear', 'majorHead',
    'receipt', 'disbursement', 'refNo', 'status', 'action'];

  searchListForm: FormGroup;

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
  ];

  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];

  filteredMajorlist: any[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimateByCtrl: FormControl = new FormControl();
  filteredEstimateBy: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  // filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource<ReceiptEstimateConsolidateList>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.createForm();

    if (this.finYear_list) {
      this.filteredFinYear.next(this.finYear_list.slice());
    }
    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      }));
    if (this.department_list) {
      this.filteredDepartmentCode.next(this.department_list.slice());
    }
    (this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      }));
    if (this.branch_list) {
      this.filteredBranchCode.next(this.branch_list.slice());
    }
    (this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.branch_list, this.branchCodeCtrl.value, this.filteredBranchCode);
      }));
    this.filteredEstimationFrom.next(this.estimation_list.slice());
    (this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationFromCtrl.value, this.filteredEstimationFrom);
      }));
    this.filteredEstimateBy.next(this.estimation_by_list.slice());
    (this.estimateByCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_by_list, this.estimateByCtrl.value, this.filteredEstimateBy);
      }));
    // this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    // (this.majorHeadCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
    //   }));
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      departmentCode: [''],
      branchCode: [''],
      estimationFrom: [''],
      estimateBy: [''],
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  sendTo(element): void {
    const employees: string[] = [
      'Satendra Zala',
      'Hardik Chaudhary',
      'C.K Brahmbhatt',
    ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ReceiptForwardDialogComponent, {
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

  saveEstimate() {
  }
}
