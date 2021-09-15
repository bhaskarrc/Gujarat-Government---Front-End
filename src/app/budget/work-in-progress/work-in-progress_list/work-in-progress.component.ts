import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit, OnDestroy {

  // Define initial values.
  selectedIndex = new FormControl(0);
  searchEstimateForm = new FormGroup({
    department: new FormControl('', Validators.required),
    financialYear: new FormControl('', Validators.required),
    branchName: new FormControl('', Validators.required),
    demand: new FormControl('', Validators.required),
    estimationForm: new FormControl('', Validators.required),
    majorHead: new FormControl('', Validators.required),
    subMajorHead: new FormControl('', Validators.required),
    minorHead: new FormControl('', Validators.required),
    formType: new FormControl('Form I')
  });

  department_list: any[] = [
    {value: '1', viewValue: 'Home Department'},
    {value: '2', viewValue: 'Education Department'},
    {value: '3', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
    {value: '4', viewValue: 'Health and Family Welfare Department'},
  ];

  finYear_list: any[] = [
    {value: '2018-2019', viewValue: '2018-2019'},
    {value: '2019-2020', viewValue: '2019-2020'},
    {value: '2020-2021', viewValue: '2020-2021'},
  ];

  branch_list: any[] = [
    {value: '1', viewValue: 'Administration'},
    {value: '2', viewValue: 'Budget'},
  ];

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

  estimation_list: any[] = [
    {value: '1', viewValue: 'DDO'},
    {value: '2', viewValue: 'HOD'},
    {value: '3', viewValue: 'Department'},
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

  form_list: any[] = [
    {value: 'Form I', viewValue: 'Form I'}
  ];

  subject_list: any[] = [
    {value: '01', viewValue: '01'},
    {value: '02', viewValue: '02'},
    {value: '03', viewValue: '03'},
    {value: '04', viewValue: '04'},
    {value: '05', viewValue: '05'},
  ];

  departmentCtrl: FormControl = new FormControl();
  filteredDepartment: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  financialYearCtrl: FormControl = new FormControl();
  filteredFinancialYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchCtrl: FormControl = new FormControl();
  filteredBranch: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCtrl: FormControl = new FormControl();
  filteredDemand: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationCtrl: FormControl = new FormControl();
  filteredEstimation: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCtrl: FormControl = new FormControl();
  filteredMajorHead: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCtrl: FormControl = new FormControl();
  filteredSubMajorHead: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCtrl: FormControl = new FormControl();
  filteredMinorHead: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _onDestroy = new Subject<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filteredDepartment.next(this.department_list.slice());
    (this.departmentCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCtrl.value, this.filteredDepartment);
      })
    );
    this.filteredFinancialYear.next(this.finYear_list.slice());
    (this.financialYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.financialYearCtrl.value, this.filteredFinancialYear);
      })
    );
    this.filteredBranch.next(this.branch_list.slice());
    (this.branchCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.branch_list, this.branchCtrl.value, this.filteredBranch);
      })
    );
    this.filteredDemand.next(this.demand_list.slice());
    (this.demandCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCtrl.value, this.filteredDemand);
      })
    );
    this.filteredEstimation.next(this.estimation_list.slice());
    (this.estimationCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationCtrl.value, this.filteredEstimation);
      })
    );
    this.filteredMajorHead.next(this.majorHead_list.slice());
    (this.majorHeadCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.majorHead_list, this.majorHeadCtrl.value, this.filteredMajorHead);
      })
    );
    this.filteredSubMajorHead.next(this.subMajorHead_list.slice());
    (this.subMajorHeadCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.subMajorHead_list, this.subMajorHeadCtrl.value, this.filteredSubMajorHead);
      })
    );
    this.filteredMinorHead.next(this.minorHead_list.slice());
    (this.minorHeadCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.minorHead_list, this.minorHeadCtrl.value, this.filteredMinorHead);
      })
    );
  }

  saveWorkInProgress() {
  }

  ngOnDestroy() {
  }

  // Filter options in html
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

  // Mat tab change index.
  goToNext() {
    this.selectedIndex.setValue(1);
  }

}
