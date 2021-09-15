
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {map, startWith, takeUntil} from 'rxjs/operators';

export interface PeriodicElement {
  position: number;
  // formType: string;
  finYear: string;
  estimateFrom: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  chargedVoted: string;
  itemName: string;
  css: string;
  submitedby: string;
  amount: string;
  refNo: string;
  status: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-new-item-estimates-list',
  templateUrl: './new-item-estimates-list.component.html',
  styleUrls: ['./new-item-estimates-list.component.css']
})
export class NewItemEstimatesListComponent implements OnInit {

  typesOfShoes: string[] = ['Construction', 'Building ', 'Bridge', 'Road', 'Office'];

  ELEMENT_DATA: PeriodicElement[] = [
    
    {position: 1,  itemName: 'Construction ', finYear: '2019-2020', estimateFrom: 'Guj. University Serv. Tribunal', demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes', submitedby:"DDO" , amount:"40",  refNo: '-', status: 'Draft'},
    
    {position: 2,  itemName: 'Construction of Building', finYear: '2021-2022', estimateFrom: 'Guj. University Serv. Tribunal', demand: '008', majorHead: '3451',subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes', submitedby:"DDO" , amount:"40",  refNo: '-', status: 'Draft'},
    
    {position: 3,  itemName: 'Construction of Building',  finYear: '2018-2019', estimateFrom: 'Department', demand: '009', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes',submitedby:"DDO" , amount:"40",   refNo: '-', status: 'Draft'},
    
    {position: 4,  itemName: 'Construction of Building', finYear: '2015-2016', estimateFrom: 'Guj. University Serv. Tribunal', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes', submitedby:"DDO" , amount:"40",  refNo: '-', status: 'Draft'},
    
    {position: 5,  itemName: 'Construction of Building',  finYear: '2021-2022', estimateFrom: 'Guj. University Serv. Tribunal', demand: '008', majorHead: '3451',
    subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes', submitedby:"DDO" , amount:"40",  refNo: '-', status: 'Draft'},
    
    {position: 6,  itemName: 'Construction of Building',  finYear: '2021-2022', estimateFrom: 'HOD', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes',submitedby:"DDO" , amount:"40",   refNo: '-', status: 'Draft'},
    
    {position: 7,  itemName: 'Construction of Building',  finYear: '2022-2023', estimateFrom: 'Department', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes',submitedby:"DDO" , amount:"40",   refNo: '-', status: 'Draft'},
    
    {position: 8,  itemName: 'Construction of Building', finYear: '2015-2016', estimateFrom: 'Guj. University Serv. Tribunal', demand: '008', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes',submitedby:"DDO" , amount:"40",   refNo: '-', status: 'Draft'},
    
    {position: 9,  itemName: 'Construction of Building',  finYear: '2024-2025', estimateFrom: 'Guj. University Serv. Tribunal', demand: '008', majorHead: '3451',subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes',submitedby:"DDO" , amount:"40",   refNo: '-', status: 'Draft'},
    
  ];

  displayedColumns: string[] = [ 'position',  'finYear', 'estimateFrom', 'demand', 'majorHead',
  'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'chargedVoted', 'css', 'itemName', "submitedby", "amount", 'refNo', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;

  searchListForm: FormGroup;

  finYear_list: any[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
  ];

  estimation_for_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
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

  revenue_capital_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
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
    { value: '101', viewValue: '101 : Forest Conservation, Development and Regeneration' },
    { value: '102', viewValue: '102 : Small Scale Industries' },
    { value: '105', viewValue: '105 : Forest Produce' },
  ];

  referenceNumber_list: any[] = [
    { value: '19-20/BUD/SCE/001', viewValue: 'C' },
    { value: '19-20/BUD/SCE/002', viewValue: 'F' },
  ];

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimateForCtrl: FormControl = new FormControl();
  filteredEstimateFor: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  revenueCapitalCtrl: FormControl = new FormControl();
  filteredRevenueCapital: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCodeCtrl: FormControl = new FormControl();
  filteredSubMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCodeCtrl: FormControl = new FormControl();
  filteredMinorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  referenceNumberCodeCtrl: FormControl = new FormControl();
  filteredReferenceNumberCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

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
    public fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.createForm();

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      });

    this.filteredDepartmentCode.next(this.department_list.slice());
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      });

    this.filteredEstimationFrom.next(this.estimation_list.slice());
    this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationFromCtrl.value, this.filteredEstimationFrom);
      });

    this.filteredEstimateFor.next(this.estimation_for_list.slice());
    this.estimateForCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_for_list, this.estimateForCtrl.value, this.filteredEstimateFor);
      });

    this.filteredDemandCode.next(this.demand_list.slice());
    this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      });

    this.filteredRevenueCapital.next(this.revenue_capital_list.slice());
    this.revenueCapitalCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.revenue_capital_list, this.revenueCapitalCtrl.value, this.filteredRevenueCapital);
      });

    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
      });

    this.filteredSubMajorHeadCode.next(this.subMajorHead_list.slice());
    this.subMajorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.subMajorHead_list, this.subMajorHeadCodeCtrl.value, this.filteredSubMajorHeadCode);
      });

    this.filteredMinorHeadCode.next(this.minorHead_list.slice());
    this.minorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.minorHead_list, this.minorHeadCodeCtrl.value, this.filteredMinorHeadCode);
      });

    this.filteredReferenceNumberCode.next(this.referenceNumber_list.slice());
    this.referenceNumberCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.referenceNumber_list, this.referenceNumberCodeCtrl.value, this.filteredReferenceNumberCode);
      });

  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      departmentCode: [''],
      estimationFrom: [''],
      estimateFor: [''],
      demandCode: [''],
      revenueCapital: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      referenceNumber: [''],
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

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  consolidate(element): void {
    const employees: string[] = [
      'Satendra Zala',
      'Hardik Chaudhary',
      'C.K Brahmbhatt',
    ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NewItemEstimatesForwardDialogComponent, {
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


@Component({
  selector: 'app-new-item-estimates-forward-dialog',
  templateUrl: 'consolidate-dialog.html',
})
export class NewItemEstimatesForwardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewItemEstimatesForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
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
