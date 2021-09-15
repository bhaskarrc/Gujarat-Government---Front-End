import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {map, startWith, takeUntil} from 'rxjs/operators';
import { BudgetFormType, PeriodicElementRevExpEstimate } from 'src/app/model/budget';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';




@Component({
  selector: 'app-revised-listing',
  templateUrl: './revised-listing.component.html',
  styleUrls: ['./revised-listing.component.css']

})
export class RevisedListingComponent  implements OnInit {

  // Listing table Data
  ELEMENT_DATA: any[] = [
    {position: 1,  finYear: '2019-2020', type: 'New Item Estimate  – Form C / F', bHead: '001:2254:00:101:01:00',
    iName: 'Organic Farming Cell Staff' , rNumber: '19-20/BUD/REE/001' , wStatus: '' , receivedFrom: 'Director of Horticulture',
     demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
      refNo: '19-20/BUD/SCE/001', lyingWith: 'User 1' , status: 'Pending'},
  {position: 2,  finYear: '2019-2020', type: 'Item Continious Estimate – Form E', bHead: '001:2254:00:101:01:00',
  iName: 'To rent vehicles from outsourced.' , rNumber: '19-20/BUD/REE/001' , wStatus: 'Forwarded to Approver' ,
   receivedFrom: 'Director of Horticulture',
   demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    refNo: '21-22/BUD/SCE/001' , lyingWith: 'User 2' , status: 'Pending'},
  {position: 3,  finYear: '2019-2020', type: 'Standing Charges Estimates - Form B', bHead: '001:2254:00:101:01:00',
  iName: '-' , rNumber: '19-20/BUD/REE/001' , wStatus: 'Cancelled' , receivedFrom: 'Director of Horticulture',
   demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    refNo: '19-20/BUD/SCE/001', lyingWith: 'User 3' , status: 'Pending'},
  {position: 4,  finYear: '2019-2020', type: 'New Work Estimates – Form G/H', bHead: '001:2254:00:101:01:00',
  iName: 'Modernization of Veterinary Polyclinics' , rNumber: '19-20/BUD/REE/001' , wStatus: 'Approved by AD' ,
   receivedFrom: 'Director of Horticulture',
   demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
   refNo: '21-22/BUD/SCE/001' , lyingWith: 'User 4' , status: 'Pending'},
  {position: 5,  finYear: '2019-2020', type: 'Work in Progress – Form I', bHead: '001:2254:00:101:01:00',
  iName: 'New Construction programme for Education' , rNumber: '19-20/BUD/REE/001' , wStatus: 'Rejected by FD' ,
   receivedFrom: 'Director of Horticulture',
  demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
   refNo: '19-20/BUD/SCE/001', lyingWith: 'User 5' , status: 'Pending'},
  {position: 6,  finYear: '2019-2020', type: 'Item Continious Estimate – Form E', bHead: '001:2254:00:101:01:00',
  iName: 'Karuna Animal Ambulance-1962' , rNumber: '19-20/BUD/REE/001' , wStatus: 'Approved by FD' ,
   receivedFrom: 'Director of Horticulture',
  demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
   refNo: '19-20/BUD/SCE/001', lyingWith: '' , status: 'Pending'},

  ];
  // Listing Table
   displayedColumns: string[] = [ 'position', 'bHead', 'type', 'iName', 'rNumber', 'wStatus', 'lyingWith', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElementRevExpEstimate>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;

  searchListForm: FormGroup;

  // Search Field Details
  finYear_list: any[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  demand_list: any[] = [
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

  majorHead_list: any[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];

  subMajorHead_list: any[] = [
    { value: '8 : Other Transfer/Grants to States', viewValue: '8 : Other Transfer/Grants to States'},
    { value: '6 : Centrally Sponsored Schemes', viewValue: '6 : Centrally Sponsored Schemes'},
  ];

  minorHead_list: any[] = [
    {
      value: '101 : Forest Conservation, Development and Regeneration',
      viewValue: '101 : Forest Conservation, Development and Regeneration'
    },
    { value: '102 : Small Scale Industries', viewValue: '102 : Small Scale Industries'},
    { value: '105 : Forest Produce', viewValue: '105 : Forest Produce'},
  ];

  detailHead_list: any[] = [
    { value: '0 : HLT-28  Leprosy Control Programme', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    {
      value: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students',
      viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students'
    },
    { value: '0 : VKY-9 Umbrella Scheme', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  revenue_capital_list: any[] = [
    {value: '1', viewValue: 'Revenue'},
    {value: '2', viewValue: 'Capital'},
  ];

  type_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Standing Charges Estimates - Form B' },
    { value: '2', viewValue: 'New Item Estimates – Form C / F' },
    { value: '3', viewValue: 'Item Continuous Estimates – Form E' },
    { value: '4', viewValue: 'New Work Estimates – Form G/H' },
    { value: '5', viewValue: 'Work in Progress – Form I' }
  ];
  charged_voted_list: any[] = [
    {value: '1', viewValue: ' Charged '},
    {value: '2', viewValue: 'Voted'},
    {value: '3', viewValue: 'Both'},
  ];
  status_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Pending' }
  ];

  typeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCodeCtrl: FormControl = new FormControl();
  filteredSubMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCodeCtrl: FormControl = new FormControl();
  filteredMinorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  detailHeadCodeCtrl: FormControl = new FormControl();
  filteredDetailHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  revenueCapitalCtrl: FormControl = new FormControl();
  filteredRevenueCapital: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  chargedVotedCtrl: FormControl = new FormControl();
  filteredchargedVoted: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  errorMessages = budgetMessage;

  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();
  options: any;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }


  ngOnInit() {
    this.createForm();

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

    this.filteredDemandCode.next(this.demand_list.slice());
    (this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      }));

    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    (this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
      }));

    this.filteredSubMajorHeadCode.next(this.subMajorHead_list.slice());
    (this.subMajorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.subMajorHead_list, this.subMajorHeadCodeCtrl.value, this.filteredSubMajorHeadCode);
      }));

    this.filteredMinorHeadCode.next(this.minorHead_list.slice());
    (this.minorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.minorHead_list, this.minorHeadCodeCtrl.value, this.filteredMinorHeadCode);
      }));

    this.filteredDetailHeadCode.next(this.detailHead_list.slice());
    (this.detailHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.detailHead_list, this.detailHeadCodeCtrl.value, this.filteredDetailHeadCode);
      }));

      this.filteredRevenueCapital.next(this.revenue_capital_list.slice());
      (this.revenueCapitalCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(this.revenue_capital_list, this.revenueCapitalCtrl.value, this.filteredRevenueCapital);
        }));
        this.filteredchargedVoted.next(this.charged_voted_list.slice());
      (this.chargedVotedCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(this.charged_voted_list, this.chargedVotedCtrl.value, this.filteredchargedVoted);
        }));

  }


  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      departmentCode: [''],
      demandCode: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      detailHeadCode: [''],
      chargedVoted: [''],
      RevenueCapital: ['2'],
      type: [''],
      status: ['']
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

  saveEstimate( ) { }

  clearForm() {
    this.searchListForm.reset();
  }
}


@Component({
  selector: 'app-revised-estimate-forward-dialog',
  templateUrl: 'revised-estimate-forward-dialog.html',
})

export class RevisedEstimateForwardDialogComponent implements OnInit {
  dataSource: any;
  searchListForm: any;

  constructor(
    public dialogRef: MatDialogRef<RevisedEstimateForwardDialogComponent>,
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
