import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import {
  ReceiptEstimateList,
  DialogData
} from '../../../model/receipt-estimate-list';
import { CommonListing } from 'src/app/model/common-listing';
// tslint:disable-next-line: max-line-length
import { ReceiptEstimateViewCommentsComponent, ReceiptEstimateConfirmDialogComponent } from '../receipt-estimates/receipt-estimates.component';

@Component({
  selector: 'app-receipt-estimates-list',
  templateUrl: './receipt-estimates-list.component.html',
  styleUrls: ['./receipt-estimates-list.component.css']
})
export class ReceiptEstimatesListComponent implements OnInit {
  ELEMENT_DATA: ReceiptEstimateList[] = [

    {
      finYear: '2020-2021',
      hod: 'HOD',
      majorHead: '0021',
      receipt: 20.2,
      disbursement: 130.0,
      refNo: '21-22/BUD/RE/001',
      refDate: '11-Dec-2020',
      status: 'Draft',
      lyingWith: 'MR. Sharma',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30'
    },
    {
      finYear: '2018-2019',
      hod: 'Department',
      majorHead: '0031',
      receipt: 100,
      disbursement: 190.1,
      refNo: '-',
      refDate: '12-Dec-2020',
      status: 'Pending',
      lyingWith: 'MR. Kumar',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Pending By Rajesh 10-Feb-2020 10:30'
    },
    {
      finYear: '2021-2022',
      hod: 'DDO',
      majorHead: '0028',
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '-',
      refDate: '14-Dec-2020',
      status: 'Approved',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Approved By Rajesh 10-Feb-2020 10:30'
    },
    {
      finYear: '2015-2016',
      hod: 'HOD',
      majorHead: '0029',
      receipt: 150.5,
      disbursement: 240.2,
      refNo: '-',
      refDate: '13-Dec-2020',
      status: 'Cancelled',
      lyingWith: 'MR. sharma',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Cancelled By Rajesh 10-Feb-2020 10:30'
    },
  ];
  isToken: Boolean = false;
  isTokentable: Boolean = false;
  rangeTypeValue = 'Approved';
  receiveValue = 'Received From';
  displayedColumns: string[] = [
    'position',
    'finYear',
    'majorHead',
    'refNo',
    'refDate',
    'receipt',
    'disbursement',
    'receivedOnFrom',
    'sentToOn',
    'lyingWith',
    'status',
    'action'
  ];

  searchListForm: FormGroup;

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2020-2021' }
  ];
  statuslist: any[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Rejected' },
    { value: '3', viewValue: 'Cancelled' }
  ];

  receivelist: any[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Received SentTo' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    {
      value: '2',
      viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
    },
    { value: '3', viewValue: 'Health and Family Welfare Department' }
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' }
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
    { value: '2', viewValue: 'Director of Animal Husbandry' },
    { value: '3', viewValue: 'Commission of Geology and Mining' }
  ];

  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' }
  ];

  filteredMajorlist: any[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    {
      value: '2',
      viewValue: '0021: Taxes on Income other than Corporation Tax'
    },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' }
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

  dataSource = new MatTableDataSource<ReceiptEstimateList>(this.ELEMENT_DATA);
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

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

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
    if (this.department_list) {
      this.filteredDepartmentCode.next(this.department_list.slice());
    }
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.department_list,
          this.departmentCodeCtrl.value,
          this.filteredDepartmentCode
        );
      });
    if (this.branch_list) {
      this.filteredBranchCode.next(this.branch_list.slice());
    }
    this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCodeCtrl.value,
          this.filteredBranchCode
        );
      });
    this.filteredEstimationFrom.next(this.estimation_list.slice());
    this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_list,
          this.estimationFromCtrl.value,
          this.filteredEstimationFrom
        );
      });
    this.filteredEstimateBy.next(this.estimation_by_list.slice());
    this.estimateByCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_by_list,
          this.estimateByCtrl.value,
          this.filteredEstimateBy
        );
      });
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: ['1'],
      departmentCode: [''],
      estimationFrom: ['1'],
      estimateBy: [''],
      majorHeadCode: [''],
      refNO: [''],
      lyingWithBox: [''],
      frRefDate: [''],
      refDatepickerto: [''],
      recRefDate: [''],
      recRetDate: [''],
      apporRefDate: [''],
      apporReftDate: [''],
      statusd: [''],
      approvedBy: [''],
      recevie: [''],
      receiveddata: [''],
      datepickerfrom: [''],
      datepickerto: ['']

    });
  }
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
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
  ontoken(index) {
    console.log(index.value);
    this.isTokentable = true;
    for (const item of this.statuslist) {
      if (item.value === index.value) {
        this.rangeTypeValue = item.viewValue;
      }
    }
  }
  onrecevietoken(index) {
    this.isToken = true;
    for (const item of this.receivelist) {
      if (item.value === index.value) {
        this.receiveValue = item.viewValue;
      }
    }
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
      'C.K Brahmbhatt'
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

  saveEstimate() { }



  viewComments(): void {
    const dialogRef = this.dialog.open(ReceiptEstimateViewCommentsComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        this.showConfirmationPopup();
      }
    });
  }

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(ReceiptEstimateConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log(result);
      } else if (result === 'save') {
        console.log(result);
      }
    });
  }
}

@Component({
  selector: 'app-receipt-forward-dialog',
  templateUrl: 'receipt-forward-dialog.html'
})
export class ReceiptForwardDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReceiptForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
