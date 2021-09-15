
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, ReplaySubject, Subject, from } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { ItemContinuouslist } from '../../../model/item-continuous';


// export interface PeriodicElement {
//   position: number;
//   item: string;
//   finYear: string;
//   estimateFrom: string;
//   demand: string;
//   majorHead: string;
//   subMajorHead: string;
//   minorHead: string;
//   subHead: string;
//   detailHead: string;
//   chargeVoted: string;
//   refNo: string;
//   css: string;
//   status: string;
// }

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-budget-estimate-list',
  templateUrl: './create-budget-estimate-list.component.html',
  styleUrls: ['./create-budget-estimate-list.component.css']
})
export class CreateBudgetEstimateListComponent implements OnInit {
  ELEMENT_DATA: ItemContinuouslist[] = [
    {
      position: 1, item: 'to purchase a new motor car for the principel seceartory of india',
      finYear: '2019-2020', estimateFrom: 'DDO', demand: '001', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '19-20/BUD/SCE/001', css: 'N', status: '100%'
    },
    {
      position: 2, item: 'test', finYear: '2021-2022', estimateFrom: 'HOD', demand: '008', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '21-22/BUD/SCE/001', css: 'N', status: '100%'
    },
    {
      position: 3, item: 'test3', finYear: '2018-2019', estimateFrom: 'Department', demand: '009', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '-', css: 'N', status: '80%'
    },
    {
      position: 4, item: 'test3', finYear: '2015-2016', estimateFrom: 'DDO', demand: '008', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '-', css: 'N', status: '90%'
    },
    {
      position: 5, item: 'test3', finYear: '2021-2022', estimateFrom: 'HOD', demand: '008', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '-', css: 'N', status: '80%'
    },
    {
      position: 6, item: 'test3', finYear: '2021-2022', estimateFrom: 'HOD', demand: '008', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '-', css: 'N', status: '70%'
    },
    {
      position: 7, item: 'test3', finYear: '2022-2023', estimateFrom: 'Department', demand: '008', majorHead: '3451',
      subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargeVoted: 'voted', refNo: '-', css: 'N', status: '60%'
    },

  ];

  displayedColumns: string[] = ['position', 'item', 'finYear', 'estimateFrom', 'demand', 'majorHead',
    'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'chargeVoted', 'css', 'refNo', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
  searchListForm: FormGroup;

  finYearlist: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  departmentlist: CommonListing[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  branchlist: CommonListing[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
  ];

  itemNo: CommonListing[] = [
    { value: '1', viewValue: 'Purchase' },
    { value: '2', viewValue: 'Buy' },
    { value: '3', viewValue: 'Items1' },
  ];

  estimationlist: CommonListing[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
  ];

  filteredDemandList: CommonListing[] = [
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

  bpnlist: CommonListing[] = [
    { value: '1 : GREEN BOOK', viewValue: '1 : GREEN BOOK' },
    {
      value: '2 : RECEIPT UNDER CONSOLIDATED FUND',
      viewValue: '2 : RECEIPT UNDER CONSOLIDATED FUND'
    },
    {
      value: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT',
      viewValue: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT'
    },
  ];

  majorHeadlist: CommonListing[] = [
    { value: '1', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2', viewValue: '2049 : Interest Payments' },
    { value: '3', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '4', viewValue: '3435 : Ecology and Environment' },
    { value: '5', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '6', viewValue: '2202 : General Education' },
  ];

  subMajorHeadlist: CommonListing[] = [
    { value: '1 : Other Transfer/Grants to States', viewValue: '8 : Other Transfer/Grants to States' },
    { value: '2 : Centrally Sponsored Schemes', viewValue: '6 : Centrally Sponsored Schemes' },
  ];

  minorHeadlist: CommonListing[] = [
    { value: '1', viewValue: '101 : Forest Conservation, Development and Regeneration' },
    { value: '2', viewValue: '102 : Small Scale Industries' },
    { value: '3', viewValue: '105 : Forest Produce' },
  ];

  subHeadlist: CommonListing[] = [
    { value: '1', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '2', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '3', viewValue: '15 : Soil and Water Conservation' },
    { value: '4', viewValue: '16 : Community Development' },
    { value: '5', viewValue: '19 : Technical Education Polytechnics' },
  ];

  estimationForlist: CommonListing[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];
  detailHeadlist: CommonListing[] = [
    { value: '1', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    { value: '2', viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students' },
    { value: '3', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  votedlist: CommonListing[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' },
  ];


  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  branchCodeCtrl: FormControl = new FormControl();
  itemsCtrl: FormControl = new FormControl();
  estimationFromCtrl: FormControl = new FormControl();
  estimationForCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  SchemeTypeCodeCtrl: FormControl = new FormControl();

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
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: ['2'],
      departmentCode: [''],
      branchCode: ['2'],
      items: [''],
      estimationFrom: [''],
      estimationFor: [''],
      demandCode: [''],
      bpnCode: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHeadCode: [''],
      detailHeadCode: [''],
      chargedVoted: [''],
      SchemeTypeCode: ['2']
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onclickneedprocessing(data) {
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
    const dialogRef = this.dialog.open(CreateForwardDialogComponent, {
      width: '400px',
      data: employees
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  saveEstimate() { }
  clearForm() {
    this.searchListForm.reset();
  }
}

@Component({
  selector: 'app-create-forward-dialog',
  templateUrl: './create-forward-dialog.html',
})
export class CreateForwardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

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
