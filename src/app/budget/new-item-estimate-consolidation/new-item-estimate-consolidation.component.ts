import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';
import {MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, } from '@angular/forms';
import { takeUntil} from 'rxjs/operators';
import { HeaderElement } from '../standing-charge-consolidation/standing-charge-consolidate-view/standing-charge-consolidate-view.component';

export interface PeriodicElement {

  // itemName: string;
  citemName: string;
  position: string;
  finYear: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  refNo: string;
  proposeedamount: string;
  status: string;
  estimatedby: string;
  amount: string;
}


export interface FormCStmt1Element {
  designationEng: string | '';
  noOfPosts: number | '';
  payScale: number | '';
  designationGuj: string | '';
}

export interface FormCStmt2Element {
  objecthead: string | '';
  recurrentAmount: number | '';
  nonRecurrentAmount: number | '';
  budgetEstimateNextYear: number | '';
  ultimateAnnualRecurrentAmount: number | '';
  remarks: string | '';
  isBreakup: Boolean;
}

export interface FormF {
  objecthead: string | '';
  recurrentAmount: number | '';
  nonRecurrentAmount: number | '';
  budgetEstimateNextYear: number | '';
  ultimateAnnualRecurrentAmount: number | '';
  remarks: string | '';
  isBreakup: Boolean;
}

export interface ObjectHeadBreakupElement {
  objecthead: string | '';
  recurrentAmount: number | '';
  nonRecurrentAmount: number | '';
  budgetEstimateNextYear: number | '';
  ultimateAnnualRecurrentAmount: number | '';
  remarks: string | '';
}

export interface DistrictElement {
  id: number;
  districtName: string;
  expendature: number;
  talukaexpendature: number;
  gramexpendature: number;
}




const ELEMENT_DATA_C1: FormCStmt1Element[] = [
  {
    designationEng: 'Team Leader',
    noOfPosts: 5,
    payScale: 3000.00,
    designationGuj: 'ટીમ'
  },
  {
    designationEng: 'Team Leader',
    noOfPosts: 5,
    payScale: 3000.00,
    designationGuj: 'ટીમ'
  },
  {
    designationEng: 'Team Leader',
    noOfPosts: 5,
    payScale: 3000.00,
    designationGuj: 'ટીમ'
  },
  {
    designationEng: 'Team Leader',
    noOfPosts: 5,
    payScale: 3000.00,
    designationGuj: 'ટીમ'
  },
  {
    designationEng: 'Team Leader',
    noOfPosts: 5,
    payScale: 3000.00,
    designationGuj: 'ટીમ'
  }
];

const ELEMENT_DATA_C2: FormCStmt2Element[] = [
  {
    objecthead: '3131',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 1100',
    isBreakup: false,
  },
  {
    objecthead: '3132',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 5700',
    isBreakup: true
  },
  {
    objecthead: '3135-14',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 3131',
    isBreakup: true
  }

];

const ELEMENT_DATA_F: FormF[] = [
  {
    objecthead: '3133',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 1100',
    isBreakup: false
  },
  {
    objecthead: '3135-13',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 5700',
    isBreakup: false
  },
  {
    objecthead: '3153',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 3131',
    isBreakup: true
  }
];

const OBJECT_HEAD_BREAKUP_DATA: ObjectHeadBreakupElement[] = [
  {
     objecthead: '6100', recurrentAmount:58 , nonRecurrentAmount:105 ,budgetEstimateNextYear:163 , ultimateAnnualRecurrentAmount:1956 , remarks: 'Remarks for 6100'
   },
   {
     objecthead: '6200', recurrentAmount:75 , nonRecurrentAmount:200 ,budgetEstimateNextYear:275 , ultimateAnnualRecurrentAmount:3300, remarks: 'Remarks for 6200'
   },
   {
     objecthead: '6300', recurrentAmount:89 , nonRecurrentAmount:179 ,budgetEstimateNextYear:268 , ultimateAnnualRecurrentAmount:3216 , remarks: 'Remarks for 6300 '
   },
   {
     objecthead: '6400', recurrentAmount:64 , nonRecurrentAmount:111 ,budgetEstimateNextYear:175 , ultimateAnnualRecurrentAmount:2100, remarks: 'Remarks for 6400'
   },
   {
     objecthead: '7000', recurrentAmount:95 , nonRecurrentAmount:120 ,budgetEstimateNextYear:215, ultimateAnnualRecurrentAmount:2580 , remarks: 'Remarks for 7000'
   },
   {
     objecthead: '7057', recurrentAmount:55 , nonRecurrentAmount:210 ,budgetEstimateNextYear:265 , ultimateAnnualRecurrentAmount:3180 , remarks: 'Remarks for 7057'
   },
   {
     objecthead: '7058', recurrentAmount:90 , nonRecurrentAmount:101 ,budgetEstimateNextYear:191 , ultimateAnnualRecurrentAmount:2292 , remarks: 'Remarks for 7058 '
   },
 ];
 
 
 const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
   { id: 1, expendature: 0.00, districtName: 'Ahmedabad', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 2,  expendature: 0.00, districtName: 'Vadodara', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 3,  expendature: 0.00, districtName: 'Anand', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 4,  expendature: 0.00, districtName: 'Chhota Udaipur', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 5,  expendature: 0.00, districtName: 'Dahod', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 6,  expendature: 0.00, districtName: 'Kheda', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 7,  expendature: 0.00, districtName: 'Mahisagar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 8,  expendature: 0.00, districtName: 'Panchmahal', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 9,  expendature: 0.00, districtName: 'Gandhinagar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 10,  expendature: 0.00, districtName: 'Aravalli', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 11,  expendature: 0.00, districtName: 'Banaskantha', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 12,  expendature: 0.00, districtName: 'Mehsana', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 13,  expendature: 0.00, districtName: 'Patan', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 14,  expendature: 0.00, districtName: 'Sabarkantha', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 15,  expendature: 0.00, districtName: 'Rajkot', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 16,  expendature: 0.00, districtName: 'Amreli', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 17,  expendature: 0.00, districtName: 'Bhavnagar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 18,  expendature: 0.00, districtName: 'Botad', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 19,  expendature: 0.00, districtName: 'Devbhoomi Dwarka', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 20,  expendature: 0.00, districtName: 'Gir Somnath', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 21,  expendature: 0.00, districtName: 'Jamnagar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 22,  expendature: 0.00, districtName: 'Junagadh', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 23,  expendature: 0.00, districtName: 'Morbi', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 24,  expendature: 0.00, districtName: 'Porbandar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 25,  expendature: 0.00, districtName: 'Surendranagar', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 26,  expendature: 0.00, districtName: 'Kachchh', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 27,  expendature: 0.00, districtName: 'Surat', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 28,  expendature: 0.00, districtName: 'Bharuch', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 29,  expendature: 0.00, districtName: 'Dang', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 30,  expendature: 0.00, districtName: 'Narmada', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 31,  expendature: 0.00, districtName: 'Navsari', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 32,  expendature: 0.00, districtName: 'Tapi', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 33,  expendature: 0.00, districtName: 'Valsad', talukaexpendature: 0.00, gramexpendature: 0.00},
   { id: 34,  expendature: 0.00, districtName: 'State Level Only (if any)', talukaexpendature: 0.00, gramexpendature: 0.00},
 ];

@Component({
  selector: 'app-new-item-estimate-consolidation',
  templateUrl: './new-item-estimate-consolidation.component.html',
  styleUrls: ['./new-item-estimate-consolidation.component.css']
})


export class NewItemEstimateConsolidationComponent implements OnInit {

  isFormC: Boolean = false;
  isFormF: Boolean = false;
  isBreakupVisible: Boolean = false;

// typesOfShoes: string[] = ['Construction', 'Building ', 'Bridge', 'Road', 'Office'];

  ELEMENT_DATA: PeriodicElement[] = [
    // tslint:disable-next-line:max-line-length
    {  citemName: 'construction-bulding', position: '1', finYear: '2019-2020',  demand: '001', majorHead: '3451',  subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',  estimatedby:"DDO" , amount:"40", refNo: '19-20/BUD/SCE/001',  proposeedamount: '-', status: 'Pending'},
    {  citemName: '', position: '2', finYear: '2019-2020',  demand: '001', majorHead: '3451',  subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',  estimatedby:"DDO" , amount:"40", refNo: '-', proposeedamount: '-', status: 'Pending'},
    {  citemName: '', position: '3',  finYear: '2019-2020',  demand: '001', majorHead: '3451',  subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',  estimatedby:"DDO" , amount:"40", refNo: '-', proposeedamount: '-', status: 'Pending'},
    {  citemName: '', position: '4',  finYear: '2019-2020',  demand: '001', majorHead: '3451',  subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',  estimatedby:"DDO" , amount:"40", refNo: '-', proposeedamount: '-',status: 'Pending'},
    {  citemName: '', position: '5',  finYear: '2019-2020',  demand: '001', majorHead: '3451',  subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00',  estimatedby:"DDO" , amount:"40", refNo: '-', proposeedamount: '-', status: 'Pending'},
  
  ];

  browseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'AadharCard.pdf' },
  ];

  dataSourceFormCStmt1 = new MatTableDataSource(ELEMENT_DATA_C1);
  displayedColumnsFormCStmt1 = ['designationEng', 'noOfPosts', 'payScale', 'designationGuj'];
  
  dataSourceFormCStmt2 = new MatTableDataSource(ELEMENT_DATA_C2);
  displayedColumnsFormCStmt2 = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount', 'remarks'];

  dataSourceFormF = new MatTableDataSource(ELEMENT_DATA_F);
  displayedColumnsFormF = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount', 'remarks'];

  displayedBrowseColumns = ['attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.browseData);

  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);
  // tslint:disable-next-line:member-ordering
  objectHeadBreakupColumns = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount', 'remarks'];

  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];
  date: any = new Date();
  readOnlyDetailDataSource: any;

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Book Publication No.', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sector', value: 'B0: B-Social Service'},
    {label: 'Sub Sector', value: 'a0: (A) Education, Sports, Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
  ];



  isSchemeListVisible: Boolean = true;
  isConsolidateVisible: Boolean = false;

  isConsolidateDetailView: Boolean = false;
  isObjectHeadWiseBreakupVisible: Boolean = false;

  getTabIndex (tabIndex) {
    this.selectedIndex = tabIndex;
  }


  consolidateView(element) {
    // console.log(element);
    this.isConsolidateVisible = true;
    this.isConsolidateDetailView = true;
    this.isSchemeListVisible = false;
  }


  viewBreakupC (element) {
    this.isBreakupVisible = true;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA_C2.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
    this.isFormC = true;
    this.isFormF = false;
  }

  viewBreakupF (element) {
    this.isBreakupVisible = true;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA_C2.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
    this.isFormC = false;
    this.isFormF = true;
  }

  hideBreakup() {
    this.readOnlyDetailDataSource = new MatTableDataSource();
    this.isBreakupVisible = false;
  }

  selectedIndex: number;
  displayedColumns: string[] = ['position', 'finYear', 'demand', 'majorHead','subMajorHead', 'minorHead', 'subHead', 'detailHead',  'citemName', "estimatedby", "amount", "proposeedamount",  'refNo', 'status', 'action'];

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
  
  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


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


  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();



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


    this.filteredDemandCode.next(this.demand_list.slice());
    this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
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


  }

  createForm() {
    this.searchListForm = this.fb.group({
      position: [''],
      finYear: [''],
      departmentCode: [''],
      demandCode: [''],
      revenueCapital: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
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


}
