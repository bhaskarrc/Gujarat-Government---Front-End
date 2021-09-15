import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {map, startWith,} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { NewItemConsolidationList } from '../../../model/new-item-consolidation';


export interface DialogData {
  forEach(arg0: (element: any) => void);
  animal: string;
  name: string;
}

const ELEMENT_DATA: NewItemConsolidationList[] = [
  {
    position: 1,  itemName: 'Construction ', finYear: '2019-2020',
    estimateFrom: 'Guj. University Serv. Tribunal',
    demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01',
    detailHead: '00', chargedVoted: 'Charged', css: 'Yes', formTypeName: 'F', itemCategory: 'New Vehicle',
    requestReceived: 10
  },
  {
    position: 2,  itemName: 'Construction of Building', finYear: '2021-2022',
    estimateFrom: 'Guj. University Serv. Tribunal',
    demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    chargedVoted: 'Charged', css: 'Yes', formTypeName: 'C', itemCategory: 'New Vehicle', requestReceived: 10,
  },
  {
    position: 3,  itemName: 'Construction of Building',  finYear: '2018-2019',
    estimateFrom: 'Department', demand: '001',
    majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Voted',
    css: 'Yes', formTypeName: 'F', itemCategory: 'New Vehicle', requestReceived: 10,
  },
  {
    position: 4,  itemName: 'Construction of Building', finYear: '2015-2016',
    estimateFrom: 'Guj. University Serv. Tribunal',
    demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    chargedVoted: 'Voted', css: 'Yes', formTypeName: 'C', itemCategory: 'New Vehicle', requestReceived: 10,
  },
  {
    position: 5,  itemName: 'Construction of Building',  finYear: '2021-2022',
    estimateFrom: 'Guj. University Serv. Tribunal',
    demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    chargedVoted: 'Charged', css: 'No', formTypeName: 'F', itemCategory: 'New Vehicle', requestReceived: 10,
  },
  {
    position: 6,  itemName: 'Construction of Building',  finYear: '2021-2022', estimateFrom: 'Department',
    demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',
    chargedVoted: 'Voted', css: 'No', formTypeName: 'F',  itemCategory: 'New Vehicle', requestReceived: 10,
  },
];

@Component({
  selector: 'app-new-item-consolidate',
  templateUrl: './new-item-consolidate.component.html',
  styleUrls: ['./new-item-consolidate.component.css']
})
export class NewItemConsolidationComponent implements OnInit {

  typesOfShoes: string[] = ['Construction', 'Building ', 'Bridge', 'Road', 'Office'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = [
    'position',  'finYear', 'demand', 'majorHead', 'subMajorHead',
    'minorHead', 'subHead', 'detailHead', 'chargedVoted', 'css', 'formTypeName', 'itemCategory', 'requestReceived'
  ];


  private paginator: MatPaginator;
  private sort: MatSort;

  searchListForm: FormGroup;

  filteredFinYear: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  DepartmentList: CommonListing[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  EstimationFromList: CommonListing[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
  ];

  estimationForList: CommonListing[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];

  demandList: CommonListing[] = [
    {value: '1', viewValue: '70 : Community Development'},
    {value: '2', viewValue: '71 : Rural Housing and Rural Development'},
    {value: '3', viewValue: '73 : Other Expenditure pertaining to Panchayats, Rural Housing and Rural Development Department'},
    {value: '4', viewValue: '76 : Revenue Department'},
    {value: '5', viewValue: '79 : Relief on account Natural Calamities'},
    {value: '6', viewValue: '81 : Compensation and Assignment'},
    {value: '7', viewValue: '87 : Gujarat Capital Construction Scheme'},
    {value: '8', viewValue: '93 : Welfare of Scheduled Tribes'},
    {value: '9', viewValue: '95 : Scheduled Castes Sub Plan'},
    {value: '10', viewValue: '97 : Sports,Youth and Cultural Activities Department'},
    {value: '11', viewValue: '10 : Other expenditure pertaining to Education Department'},
  ];

  revenueCapitalList: CommonListing[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
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
    { value: '1 : Other Transfer/Grants to States', viewValue: '8 : Other Transfer/Grants to States'},
    { value: '2 : Centrally Sponsored Schemes', viewValue: '6 : Centrally Sponsored Schemes'},
  ];
  
  minorHeadList: CommonListing[] = [
    {value: '1',viewValue: '101 : Forest Conservation, Development and Regeneration'},
    { value: '2', viewValue: '102 : Small Scale Industries'},
    { value: '3 : Forest Produce', viewValue: '105 : Forest Produce'},
  ];

  referenceNumberlist: CommonListing[] = [
    { value: '1', viewValue: 'C' },
    { value: '2', viewValue: 'F' },
  ];

  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  estimationFromCtrl: FormControl = new FormControl();
  estimateForCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  referenceNumberCodeCtrl: FormControl = new FormControl();


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
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
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
    const dialogRef = this.dialog.open(NewItemConsolidateDialogComponent, {
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

  loadDDORequestList (data) {
    this.router.navigate(['./request-list', {schemeName: data.schemeName, ddoCount: data.requestReceived}], {relativeTo: this.route});
  }
}


@Component({
  selector: 'app-new-item-consolidate-dialog',
  templateUrl: 'new-item-consolidate-dialog.html',
})
export class NewItemConsolidateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewItemConsolidateDialogComponent>,
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
