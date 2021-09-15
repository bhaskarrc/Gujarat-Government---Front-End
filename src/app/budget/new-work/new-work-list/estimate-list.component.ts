import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

export interface PeriodicElement {
  position: number;
  formType: string;
  // HOD: string;
  finYear: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  objectHead: string;
  chargeVoted: string;
  CSS: string;
  // needProcessing: string;
  fileRefNo: string;
  status: string;
  action: any;
}

@Component({
  selector: 'app-estimate-list',
  templateUrl: './estimate-list.component.html',
  styleUrls: ['./estimate-list.component.css']
})
export class EstimateListComponent implements OnInit, OnDestroy {

  ELEMENT_DATA: PeriodicElement[] = [
    // tslint:disable-next-line:max-line-length
    {position: 1, formType: 'G', finYear: '2019-2020', demand: '008-Education Department', majorHead: '2251-Secretariat-Social Services',
    // tslint:disable-next-line:max-line-length
    subMajorHead: '00', minorHead: '090-Secretariat', subHead: '01-EDN-149 Education Department', detailHead: '00', objectHead: 'Major Works', chargeVoted: 'Voted', CSS: 'No', fileRefNo: 'BGT/3233/V', status: 'Draft', action: ''},
    // tslint:disable-next-line:max-line-length
    {position: 2, formType: 'G', finYear: '2019-2020', demand: '008-Education Department', majorHead: '2251-Secretariat-Social Services',
    // tslint:disable-next-line:max-line-length
    subMajorHead: '00', minorHead: '090-Secretariat', subHead: '01-EDN-149 Education Department', detailHead: '00', objectHead: 'Major Works', chargeVoted: 'Voted', CSS: 'No', fileRefNo: 'BGT/3233/V', status: 'Draft', action: ''},
  ];

  constructor(private fb: FormBuilder, private router: Router) { }
  searchEstimateForm: FormGroup;
  filteredCodes: Observable<string[]>;
  codeCtrl = new FormControl();
  allMainCodes: string[] = ['3131', '3132', '3133', '3135-13', '3135-14', '3135-15',
  '3135-16', '3241', '3243', '3351', '3153', '3161', '3363'];
  private _onDestroy = new
   Subject<void>();

  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  displayedColumns: string[] = ['position', 'formType', 'finYear', 'demand', 'majorHead',
  'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objectHead', 'chargeVoted', 'CSS', 'fileRefNo', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
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

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.searchEstimateForm = this.fb.group({
      departmentCode : [''],
      finYear : [''],
      branchCode : [''],
      demandCode : [''],
      estimationFrom : [''],
      majorHeadCode : [''],
      subMajorHeadCode : [''],
      minorHeadCode : ['']
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

    this.filteredBranchCode.next(this.branch_list.slice());
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

    this.filteredDemandCode.next(this.demand_list.slice());
    (this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      }));

    this.filteredBPNCode.next(this.bpn_list.slice());
    (this.bpnCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.bpn_list, this.bpnCodeCtrl.value, this.filteredBPNCode);
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

  }

  // tslint:disable-next-line:member-ordering
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    DEMAND: 'Please select any Demand',
    BPN: 'Please select any BPN code',
    MAJOR_HEAD: 'Please select any Major Head',
    SUB_MAJOR_HEAD: 'Please select any Sub Major Head',
    MINOR_HEAD: 'Please select any Minor Head',
    SUB_HEAD: 'Please select any Sub Head',
    DETAILED_HEAD: 'Please insert Detailed Head',
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
  branch_list: any[] = [
    {value: '1', viewValue: 'Administration'},
    {value: '2', viewValue: 'Budget'},
  ];
  // tslint:disable-next-line:member-ordering
  estimation_list: any[] = [
    {value: '1', viewValue: 'DDO'},
    {value: '2', viewValue: 'HOD'},
    {value: '3', viewValue: 'Department'},
  ];
  // tslint:disable-next-line:member-ordering
  demand_list: any[] = [
    {value: '70 : Community Development', viewValue: '70 : Community Development'},
    {value: '71 : Rural Housing and Rural Development', viewValue: '71 : Rural Housing and Rural Development'},
    {value: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department', viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'},
    {value: '76 : Revenue Department', viewValue: '76 : Revenue Department'},
    {value: '79 : Relief on account Natural Calamities', viewValue: '79 : Relief on account Natural Calamities'},
    {value: '81 : Compensation and Assignment', viewValue: '81 : Compensation and Assignment'},
    {value: '87 : Gujarat Capital Construction Scheme', viewValue: '87 : Gujarat Capital Construction Scheme'},
    {value: '93 : Welfare of Scheduled Tribes', viewValue: '93 : Welfare of Scheduled Tribes'},
    {value: '95 : Scheduled Castes Sub Plan', viewValue: '95 : Scheduled Castes Sub Plan'},
    {value: '97 : Sports,Youth and Cultural Activities Department', viewValue: '97 : Sports,Youth and Cultural Activities Department'},
    {value: '10 : Other expenditure pertaining to Education Department', viewValue: '10 : Other expenditure pertaining to Education Department'},
  ];

  // tslint:disable-next-line:member-ordering
  bpn_list: any[] = [
    {value: '1 : GREEN BOOK', viewValue: '1 : GREEN BOOK'},
    {value: '2 : RECEIPT UNDER CONSOLIDATED FUND', viewValue: '2 : RECEIPT UNDER CONSOLIDATED FUND'},
    {
      value: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT',
      viewValue: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT'
    },
  ];

  // tslint:disable-next-line:member-ordering
  majorHead_list: any[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];

  // tslint:disable-next-line:member-ordering
  subMajorHead_list: any[] = [
    { value: '8 : Other Transfer/Grants to States', viewValue: '8 : Other Transfer/Grants to States'},
    { value: '6 : Centrally Sponsored Schemes', viewValue: '6 : Centrally Sponsored Schemes'},
  ];
  
  // tslint:disable-next-line:member-ordering
  minorHead_list: any[] = [
    {
      value: '101 : Forest Conservation, Development and Regeneration',
      viewValue: '101 : Forest Conservation, Development and Regeneration'
    },
    { value: '102 : Small Scale Industries', viewValue: '102 : Small Scale Industries'},
    { value: '105 : Forest Produce', viewValue: '105 : Forest Produce'},
  ];

  // tslint:disable-next-line:member-ordering
  subHead_list: any[] = [
    { value: '12 : Welfare of Schedule Castes', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '13 : Welfare of Scheduled Tribes', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '15 : Soil and Water Conservation', viewValue: '15 : Soil and Water Conservation' },
    { value: '16 : Community Development', viewValue: '16 : Community Development' },
    { value: '19 : Technical Education Polytechnics', viewValue: '19 : Technical Education Polytechnics' },
  ];

  // tslint:disable-next-line:member-ordering
  detailHead_list: any[] = [
    { value: '0 : HLT-28  Leprosy Control Programme', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    {
      value: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students',
      viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students'
    },
    { value: '0 : VKY-9 Umbrella Scheme', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  // tslint:disable-next-line:member-ordering
  finYearCtrl: FormControl = new FormControl();
  // tslint:disable-next-line:member-ordering
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  
  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  bpnCodeCtrl: FormControl = new FormControl();
  filteredBPNCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCodeCtrl: FormControl = new FormControl();
  filteredSubMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCodeCtrl: FormControl = new FormControl();
  filteredMinorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMainCodes.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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
  gotonext() {
    this.router.navigate(['/create-work-estimate']);
  }

  searchEstimate() {
    
  }

  clearForm() {
    this.searchEstimateForm.reset();
  }

}