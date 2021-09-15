import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { subHeadList } from 'src/app/model/new-sub-head';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-new-sub-head',
  templateUrl: './new-sub-head.component.html',
  styleUrls: ['./new-sub-head.component.css']
})
export class NewSubHeadComponent implements OnInit, OnDestroy {
  // Listing table Data
  ELEMENT_DATA: subHeadList[] = [
    { budHead: '001:2451:100:00', subHead: '01', detHead: '01', sentToOn: '14-Apr-2020',
     subDate: '05-Apr-2020', wStatus: 'Forwarded to Verifier', lyWith: 'Mr. B.S.Patel', status: 'Pending', action: true },
    { budHead: '001:2451:100:00', subHead: '01', detHead: '02', sentToOn: '14-Apr-2020',
     subDate: '05-Apr-2020', wStatus: 'Forwarded to Verifier', lyWith: 'Mr. B.S.Patel', status: 'Approved', action: false },
    { budHead: '001:2451:100:00', subHead: '01', detHead: '02', sentToOn: '14-Apr-2020',
     subDate: '05-Apr-2020', wStatus: 'Returned to Creator', lyWith: 'Mr. B.S.Patel', status: 'Pending', action: false },
    { budHead: '001:2451:100:00', subHead: '01', detHead: '02', sentToOn: '14-Apr-2020',
     subDate: '05-Apr-2020', wStatus: 'Returned to Verifier', lyWith: 'Mr. B.S.Patel', status: 'Cancel', action: false },
  ];

  // Search Field Details
  demandList: CommonListing[] = [
    { value: '1', viewValue: '70 : Community Development' },
    { value: '2', viewValue: '71 : Rural Housing and Rural Development' },
    { value: '3', viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department' },
    { value: '4', viewValue: '76 : Revenue Department' },
    { value: '5', viewValue: '79 : Relief on account Natural Calamities' },
    { value: '6', viewValue: '81 : Compensation and Assignment' },
    { value: '7', viewValue: '87 : Gujarat Capital Construction Scheme' },
    { value: '8', viewValue: '93 : Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '95 : Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '97 : Sports,Youth and Cultural Activities Department' },
    { value: '11', viewValue: '10 : Other expenditure pertaining to Education Department' },
  ];

  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2', viewValue: '2049 : Interest Payments' },
    { value: '3', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '4', viewValue: '3435 : Ecology and Environment' },
    { value: '5', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '6', viewValue: '2202 : General Education' },
  ];

  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '8 : Other Transfer/Grants to States' },
    { value: '2', viewValue: '6 : Centrally Sponsored Schemes' },
  ];

  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '101 : Forest Conservation, Development and Regeneration' },
    { value: '2', viewValue: '102 : Small Scale Industries' },
    { value: '3', viewValue: '105 : Forest Produce' },
  ];

  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Cancel' },
  ];

  wStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Approved by FD' },
  ];

  department_list: CommonListing[] = [
      { value: '1', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar' },
      { value: '2', viewValue: 'Panchayats, Rural Housing and Rural Development Department' },
      { value: '3', viewValue: 'Revenue Department' },
      { value: '4', viewValue: 'Agriculture, Farmers Welfare & Co-Operation Department  ' },
  ];

  subHeadCode_list: CommonListing[] = [
  {value: '1', viewValue: '01:Agricultural and Co-operation Department'},

    {value: '2', viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '},

    {value: '3', viewValue: '01:AGR-15 Information & Technology'},

    {value: '4', viewValue: '02:Expenditure for Training'},

    {value: '5', viewValue: '01:AGR-Renovation Of The Department'},

    {value: '6', viewValue: '01:Direcorate of Agriculture'},

    {value: '7', viewValue: '02:Divisional Establishmen'},

    {value: '8', viewValue: '03:District Establishment'},
  ];



  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();

  @ViewChild('singleSelect') singleSelect: MatSelect;

  constructor(private fb: FormBuilder, private router: Router) { }
  seachSubHeadform: FormGroup;
  filteredCodes: Observable<string[]>;
  codeCtrl = new FormControl();
  private _onDestroy = new
    Subject<void>();

  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // Listing Table
  displayedColumns: string[] = ['position', 'budHead', 'subHead',
    'detHead', 'subDate', 'sentToOn', 'lyWith', 'status', 'wStatus', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
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
    this.seachSubHeadform = this.fb.group({
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      fromDate: [''],
      toDate: [''],
      sentFromDate: [''],
      sentToDate: [''],
      subHeadCode: [''],
      status: [''],
      wStatus: [''],
      department: [''],
    });

  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  searchSubHead() {}

  resetForm() {
    this.seachSubHeadform.reset();
  }
  gotonext() {
    this.router.navigate(['/create-work-estimate']);
  }
}
