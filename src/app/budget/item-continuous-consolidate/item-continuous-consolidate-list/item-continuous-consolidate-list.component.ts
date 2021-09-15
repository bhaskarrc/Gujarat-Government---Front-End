import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ReceiptEstimateList } from 'src/app/model/receipt-estimate-list';
import { CommonListing } from 'src/app/model/common-listing';
import { takeUntil } from 'rxjs/operators';
import { StandingChargeViewCommentsComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-item-continuous-consolidate-list',
  templateUrl: './item-continuous-consolidate-list.component.html',
  styleUrls: ['./item-continuous-consolidate-list.component.css']
})
export class ItemContinuousConsolidateListComponent implements OnInit {
  ELEMENT_DATA: any[] = [

    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted ',
      hod: 'DDO',
      itemName: 'Organic Farming Cell Staff',
      noDDOs: 4,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/ICE/001',
      refDate: '14-Dec-2020',
      status: '-',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',
      ddo: '110.00',
      cohod: '100.00',
      ad: '80.00',
      fd: '70.00',
      percentage: 0,
      amount: 0,


    },
    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted ',
      hod: 'DDO',
      itemName: 'To rent vehicles from outsourced.',
      noDDOs: 4,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/ICE/001',
      refDate: '14-Dec-2020',
      status: 'Draft',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',
      ddo: '110.00',
      cohod: '100.00',
      ad: '80.00',
      fd: '70.00',
      percentage: 0,
      amount: 0,

    },
    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 03 : 00 : Revenue: Voted ',
      hod: 'DDO',
      itemName: 'Modernization of Veterinary Polyclinics',
      noDDOs: 3,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/SCE/001',
      refDate: '14-Dec-2020',
      status: 'Pending',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Pending By Rajesh 10-Feb-2020 10:30',
      ddo: '110.00',
      cohod: '100.00',
      ad: '80.00',
      fd: '70.00',
      percentage: 0,
      amount: 0,

    },
    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 02 : 00 : Revenue: Voted ',
      hod: 'DDO',
      itemName: 'New Construction programme for Education',
      noDDOs: 2,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/ICE/001',
      refDate: '14-Dec-2020',
      status: 'Approved',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Approved By Rajesh 10-Feb-2020 10:30',
      ddo: '90.00',
      cohod: '85.00',
      ad: '80.00',
      fd: '70.00',
      percentage: 0,
      amount: 0,

    },
    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
      hod: 'DDO',
      itemName: 'Karuna Animal Ambulance-1962',
      noDDOs: 10,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/ICE/001',
      refDate: '14-Dec-2020',
      status: 'Rejected',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Rejected By Rajesh 10-Feb-2020 10:30',
      ddo: '150.00',
      cohod: '140.00',
      ad: '120.00',
      fd: '190.00',
      percentage: 0,
      amount: 0,

    },
    {
      budgetHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
      hod: 'DDO',
      itemName: 'Karuna Animal Ambulance-1962',
      noDDOs: 10,
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/ICE/001',
      refDate: '14-Dec-2020',
      status: 'Approved',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Approved By Rajesh 10-Feb-2020 10:30',
      ddo: '180.00',
      cohod: '150.00',
      ad: '140.00',
      fd: '120.00',
      percentage: 0,
      amount: 0,

    },

  ];
  dataSource = new MatTableDataSource<ReceiptEstimateList>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'position',
    'budgetHead',
    'itemName',
    'noDDOs',
    'ddo',
    'cohod',
    'ad',
    'fd',
    'refNo',
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
  reveList: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
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

  isToken: Boolean = false;
  isTokentable: Boolean = false;
  rangeTypeValue = 'Approved';
  receiveValue = 'Received From';
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
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
    // this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    // (this.majorHeadCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
    //   }));
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
  createForm() {
    this.searchListForm = this.fb.group({
      finYear: ['1'],
      departmentCode: [''],
      estimationFrom: ['1'],
      estimateBy: [''],
      majorHeadCode: [''],
      refNO: [''],
      revenuecapital: [''],
      frRefDate: [''],
      refDatepickerto: [''],
      recRefDate: [''],
      recRetDate: [''],
      apporRefDate: [''],
      apporReftDate: [''],
      statusd: [''],
      approvedBy: [''],
      receiveddata: [''],
      datepickerfrom: [''],
      datepickerto: [''],
      recevie: ['']

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

  consolidatePage(){
    this.router.navigate(['./budget/item-continuous-consolidate']);
  }

  resetForm() {
    this.searchListForm.reset();
  }

  consolidateView(){
    this.router.navigate(['./budget/item-continuous-consolidate-view']);
  }

  showHistoryDialog(): void {

    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
      width: '2700px',
      height: '600px'
      // data: employees
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
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
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

  loadDDOList (data) {
    console.log(data);
    this.router.navigate(['../item-continuous-consolidate/ddo-list', {schemeName: data.schemeName, ddoCount: data.noDDOs, percentage: data.percentage, amount: data.amount}], {relativeTo: this.route});
    console.log('ddolist data', data.amount);
  }

  consolidate() {
    this.router.navigate(['./budget/item-continuous-consolidate']);
  }


}
