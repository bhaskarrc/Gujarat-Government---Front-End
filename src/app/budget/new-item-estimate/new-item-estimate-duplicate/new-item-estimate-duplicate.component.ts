import { startWith, map, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Output, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject, from, Subscription, BehaviorSubject } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import {
  MatDialog,
  MatAutocomplete,
  MatTableDataSource,
  MatSelect,
} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { FormC, District } from '../../../model/new-item-estimate';
import { HeaderElement, CommonList, CommonListing } from '../../../model/common-listing';
import { BudgetFormType, DistrictElement1, FormC1, ObjectClassDataNewItem, DirstrictTableSecond, ChecklistTable } from 'src/app/model/budget';
// tslint:disable-next-line: max-line-length
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
// tslint:disable-next-line: max-line-length
import { StadingChargeConfirmDialogComponent1, StandingChargeForwardDialogComponent1, StandingChargeViewCommentsComponent1 } from '../new-item-estimates/new-item-estimates.component';

declare function SetEnglish();
declare function SetGujarati();

const ELEMENT_DATA_C2: FormC1[] = [];
// Object Class Wise Data
const ELEMENT_DATA_CL1: ObjectClassDataNewItem[] = [
    {
        objecthead: '0101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0101 : Pay of Officers Including Grade Pay'
    },
    {
        objecthead: '0102', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0102 : Pay of Establishment Including Grade Pay'
    },
    {
        objecthead: '0103', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '0103 : Dearness Allowance'
    },
];
const ELEMENT_DATA_CL2: ObjectClassDataNewItem[] = [
    {
        objecthead: '2100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '2100'
    },
    {
        objecthead: '2101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '2101'
    },
];

const ELEMENT_DATA_CL3: ObjectClassDataNewItem[] = [
    {
        objecthead: '3131', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3131'
    },
    {
        objecthead: '3135', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3135'
    },
    {
        objecthead: '3243', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '3243'
    },
];

const ELEMENT_DATA_CL4: ObjectClassDataNewItem[] = [
    {
        objecthead: '4100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '4100'
    },
    {
        objecthead: '4101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '4101'
    },
];

const ELEMENT_DATA_CL5: ObjectClassDataNewItem[] = [
    {
        objecthead: '5100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '5100'
    },
    {
        objecthead: '5101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '5101'
    },
];

const ELEMENT_DATA_CL6: ObjectClassDataNewItem[] = [
    {
        objecthead: '6100', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '6100'
    },
    {
        objecthead: '6101', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '6101'
    },
];

const ELEMENT_DATA_CL7: ObjectClassDataNewItem[] = [
    {
        objecthead: '7057', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '7100'
    },
    {
        objecthead: '7058', recurrentAmount: '60.00', nonRecurrentAmount: '100.00', budgetEstimateNextYear: '200.00',
        ultimateAnnualRecurrentAmount: '400.00', remarks: '',
        toolTipData: '7101'
    },
];


// Jilla Table
const DISTRICT_ELEMENT_DATA: District[] = [
  { id: 1, expendature: 0.00, districtName: 'Ahmedabad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 2, expendature: 0.00, districtName: 'Vadodara', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 3, expendature: 0.00, districtName: 'Anand', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 4, expendature: 0.00, districtName: 'Chhota Udaipur', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 5, expendature: 0.00, districtName: 'Dahod', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 6, expendature: 0.00, districtName: 'Kheda', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 7, expendature: 0.00, districtName: 'Mahisagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 8, expendature: 0.00, districtName: 'Panchmahal', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 9, expendature: 0.00, districtName: 'Gandhinagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 10, expendature: 0.00, districtName: 'Aravalli', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 11, expendature: 0.00, districtName: 'Banaskantha', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 12, expendature: 0.00, districtName: 'Mehsana', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 13, expendature: 0.00, districtName: 'Patan', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 14, expendature: 0.00, districtName: 'Sabarkantha', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 15, expendature: 0.00, districtName: 'Rajkot', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 16, expendature: 0.00, districtName: 'Amreli', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 17, expendature: 0.00, districtName: 'Bhavnagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 18, expendature: 0.00, districtName: 'Botad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 19, expendature: 0.00, districtName: 'Devbhoomi Dwarka', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 20, expendature: 0.00, districtName: 'Gir Somnath', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 21, expendature: 0.00, districtName: 'Jamnagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 22, expendature: 0.00, districtName: 'Junagadh', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 23, expendature: 0.00, districtName: 'Morbi', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 24, expendature: 0.00, districtName: 'Porbandar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 25, expendature: 0.00, districtName: 'Surendranagar', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 26, expendature: 0.00, districtName: 'Kachchh', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 27, expendature: 0.00, districtName: 'Surat', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 28, expendature: 0.00, districtName: 'Bharuch', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 29, expendature: 0.00, districtName: 'Dang', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 30, expendature: 0.00, districtName: 'Narmada', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 31, expendature: 0.00, districtName: 'Navsari', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 32, expendature: 0.00, districtName: 'Tapi', talukaexpendature: 0.00, gramexpendature: 0.00 },
  { id: 33, expendature: 0.00, districtName: 'Valsad', talukaexpendature: 0.00, gramexpendature: 0.00 },
  // { id: 34,  expendature: 0.00, districtName: 'State Level Only (if any)', talukaexpendature: 0.00, gramexpendature: 0.00},
];

// Corporation Table
const DISTRICT_ELEMENT_DATA2: DirstrictTableSecond[] = [
  {
    id: 1,
    expendature: '',
    districtName: 'Ahmedabad',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 2,
    expendature: '',
    districtName: 'Vadodara',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 3,
    expendature: '',
    districtName: 'Anand',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 4,
    expendature: '',
    districtName: 'Chhota Udaipur',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 5,
    expendature: '',
    districtName: 'Dahod',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 6,
    expendature: '',
    districtName: 'Kheda',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 7,
    expendature: '',
    districtName: 'Mahisagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 8,
    expendature: '',
    districtName: 'Panchmahal',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 9,
    expendature: '',
    districtName: 'Gandhinagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 10,
    expendature: '',
    districtName: 'Aravalli',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 11,
    expendature: '',
    districtName: 'Banaskantha',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 12,
    expendature: '',
    districtName: 'Mehsana',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 13,
    expendature: '',
    districtName: 'Patan',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 14,
    expendature: '',
    districtName: 'Sabarkantha',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 15,
    expendature: '',
    districtName: 'Rajkot',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 16,
    expendature: '',
    districtName: 'Amreli',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 17,
    expendature: '',
    districtName: 'Bhavnagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 18,
    expendature: '',
    districtName: 'Botad',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 19,
    expendature: '',
    districtName: 'Devbhoomi Dwarka',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 20,
    expendature: '',
    districtName: 'Gir Somnath',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 21,
    expendature: '',
    districtName: 'Jamnagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 22,
    expendature: '',
    districtName: 'Junagadh',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 23,
    expendature: '',
    districtName: 'Morbi',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 24,
    expendature: '',
    districtName: 'Porbandar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 25,
    expendature: '',
    districtName: 'Surendranagar',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 26,
    expendature: '',
    districtName: 'Kachchh',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 27,
    expendature: '',
    districtName: 'Surat',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 28,
    expendature: '',
    districtName: 'Bharuch',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 29,
    expendature: '',
    districtName: 'Dang',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 30,
    expendature: '',
    districtName: 'Narmada',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 31,
    expendature: '',
    districtName: 'Navsari',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 32,
    expendature: '',
    districtName: 'Tapi',
    talukaexpendature: '',
    gramexpendature: ''
  },
  {
    id: 33,
    expendature: '',
    districtName: 'Valsad',
    talukaexpendature: '',
    gramexpendature: ''
  },
];

// state table data
const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];

const ELEMENT_TAB1_DATA: FormC[] = [];

// Add Checklist Table Data
const ELEMENT_DATAc: ChecklistTable[] = [
  { position: 1, name: 'Account Officer' },
  { position: 2, name: 'Head Accountant' },
  { position: 3, name: 'Sub Accountant' },
];


@Component({
  selector: 'app-new-item-estimate-duplicate',
  templateUrl: './new-item-estimate-duplicate.component.html',
  styleUrls: ['./new-item-estimate-duplicate.component.css']
})
export class NewItemEstimateDuplicateComponent implements OnInit {
  public toggleButton = true;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  step = 0;

  isCheckList = false;

  valueCheckdata;

  newItemCheckList = true;

  yesNo = false;
  yesNo2 = false;
  placeCharge2: string;
  placeCharge3: string;

  QuotedRemarks = false;
  Quotedvehicle = false;


  fiveSixLable = false;

  // Header Tab Dropdown Data
  financialYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
  ];
  department_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Education Department' }
  ];
  demand_list: BudgetFormType[] = [
    { value: '1', viewValue: '9' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '11' },
    { value: '4', viewValue: '12' },
  ];
  majorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '2049' },
    { value: '2', viewValue: '2051' },
    { value: '3', viewValue: '3049' },
    { value: '4', viewValue: '3051' }
  ];
  subMajorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  minorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  subHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  detailHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' }
  ];
  proposalType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Continuous' }
  ];
  proposalCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];
  schemeType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];
  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '0010' },
    { value: '2', viewValue: '0011' },
    { value: '3', viewValue: '0012' },
    { value: '4', viewValue: '0013' },
    { value: '5', viewValue: '5400' },
    { value: '6', viewValue: '3131' }
  ];
  itemName_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '2', viewValue: 'Purchase Furniture for record room of Office' },
    { value: '3', viewValue: 'Purchase of new Furniture for the Joint Director Office' },
    { value: '4', viewValue: 'Purchase of new Furniture for the Deputy Director' }
  ];
  establishment_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  expenditureType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Re-current' },
    { value: '2', viewValue: 'Non re-current' },
    { value: '3', viewValue: 'Both' }
  ];
  majorCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Specific' },
    { value: '2', viewValue: 'Regular' }
  ];
  revenueCapital_list: BudgetFormType[] = [
    { value: '1', viewValue: ' Revenue ' },
    { value: '2', viewValue: 'Capital' }
  ];
  chargedVoted_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];
  minister_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Shri Vijaybhai R. Rupani' }
  ];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  condition = false;
  isvisibledata = false;
  yesNo3 = false;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  showFormC: Boolean = true;
  showFormF: Boolean = true;
  isCSS: Boolean = false;
  submitted: Boolean = false;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  codeCtrl = new FormControl();
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codes: string[] = [];
// Entry Field Details
  classType: CommonListing[] = [
    {
      value: '1',
      viewValue: 'Object Class-1 (Personnel Services and Benefits)'
    },
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
    {
      value: '3',
      viewValue: 'Object Class-3 (Contractual Services and Supplies)'
    },
    { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
    { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
    {
      value: '6',
      viewValue:
        'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)'
    },
    { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' }
  ];

  allMainCodes: CommonListing[] = [
    { value: '0101', viewValue: '0101 : Pay of Officers Including Grade Pay' },
    {
      value: '0102',
      viewValue: '0102 : Pay of Establishment Including Grade Pay'
    },
    { value: '0103', viewValue: '0103 : Dearness Allowance' },
    { value: '0104', viewValue: '0104 : Other Allowances' },
    { value: '0105', viewValue: '0105 : Leave Travel Concession' },
    { value: '0106', viewValue: '0106 : Reimbursement of Medical Charges' },
    { value: '0107', viewValue: '0107 : Medical Allowance' },
    { value: '0108', viewValue: '0108 : Bonus' },
    { value: '0109', viewValue: '0109 : eave Encashment' },
    { value: '0110', viewValue: '0110 : House Rent Allowance' },
    { value: '0111', viewValue: '0111 : Compensatory Local Allowance' },
    { value: '0113', viewValue: '0113 : Transport Allowance' },
    { value: '0114', viewValue: '0114 : Sumptuary Allowance' },
    { value: '0117', viewValue: '0117 : R.O.P. Arrears Gazetted' },
    { value: '0118', viewValue: '0118 : R.O.P. Arrears Non Gazetted' },
    { value: '0119', viewValue: '0119 : Dearness Pay-Gazetted' },
    { value: '0120', viewValue: '0120 : Dearness Pay-Non-Gazetted' },
    { value: '3131', viewValue: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances' },
    { value: '3132', viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining' },
    { value: '3135', viewValue: '3135 : Grants-in-Aid General to Panchayats pertaining' },
    { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
    { value: '3135-14', viewValue: '3135-14 : Junagadh Agricultural University' },
    { value: '3135-15', viewValue: '3135-15 : Navsari Agricultural University' },
    { value: '3135-16', viewValue: '3135-16 : Dantiwada Agricultural University' },
    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
    { value: '3133', viewValue: '3133 : Contributions (a) To Panchayats' },
    { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
    { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
    { value: '3561', viewValue: '3561 : Grants for creation of Capital Assets to Panchayats' },
    { value: '3563', viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies' },
  ];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  // Table Columns
  displayedColumns = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'ultimateAnnualRecurrentAmount', 'budgetEstimateNextYear',
    'remarks', 'action'];
    // ReadOnly Table Columns
    displayedColumnsReadOnly = ['objecthead', 'recurrentAmount', 'nonRecurrentAmount',
    'ultimateAnnualRecurrentAmount', 'budgetEstimateNextYear', 'remarks'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_C2);
  // Entry Section Data Source
  dataSourceClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
  dataSourceClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
  dataSourceClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
  dataSourceClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
  dataSourceClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
  dataSourceClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
  dataSourceClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);
  // breakup section Data Source
  dataSourceBreakClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
  dataSourceBreakClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
  dataSourceBreakClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
  dataSourceBreakClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
  dataSourceBreakClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
  dataSourceBreakClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
  dataSourceBreakClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);

  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );
// GIA Table Columns
  districtColumns = ['position', 'district', 'expendature', 'talukaexpenditure', 'gramexpenditure'];

  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];
  subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];

  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtDataSource2 = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA2.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );
  // Attachments
  browseData: any[] = [{
    // dropDown: undefined,
    name: undefined,
    file: undefined,
  }];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  displayedBrowseColumnss = ['browse', 'uploadedFileName', 'action'];
  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATAc;
  fileBrowseIndex: number;
  subscribeParams: Subscription;
  public index;
  public scheme;
  showState = true;
  showCSS = true;
  expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  @ViewChild('codeGJ') codeGJ: ElementRef;
  expendCharges: boolean;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  showObject: string;
  saveCharge: boolean;
  hodAmount: any;
  succObjectCode: Array<any> = [];
  errObjectCode: Array<any> = [];
  /** control for the MatSelect filter keyword */
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  sObjectHead: CommonList[] = [
    { name: '0101 : Pay of Officers Including Grade Pay', id: '0101' },
    { name: '0102 : Pay of Establishment Including Grade Pay', id: '0102' },
    { name: '0103 : Dearness Allowance', id: '0103' },
    { name: '0104 : Other Allowances', id: '0104' },
    { name: '0105 : Leave Travel Concession', id: '0105' },
    { name: '0106 : Reimbursement of Medical Charges', id: '0106' },
    { name: '0107 : Medical Allowance', id: '0107' },
    { name: '0108 : Bonus', id: '0108' },
    { name: '0109 : eave Encashment', id: '0109' },
    { name: '0110 : House Rent Allowance', id: '0110' },
    { name: '0111 : Compensatory Local Allowance', id: '0111' },
    { name: '0113 : Transport Allowance', id: '0113' },
    { name: '0114 : Sumptuary Allowance', id: '0114' },
    { name: '0117 : R.O.P. Arrears Gazetted', id: '0117' },
    { name: '0118 : R.O.P. Arrears Non Gazetted', id: '0118' },
    { name: '0119 : Dearness Pay-Gazetted', id: '0119' },
    { name: '0120 : Dearness Pay-Non-Gazetted', id: '0120' },
    { name: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', id: '3131' },
    { name: '3135 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', id: '3135' },
    { name: '3132 : Grants-in-Aid General to Panchayats pertaining', id: '3132' },
    { name: '3135-13 : Anand Agricultural University', id: '3135-13' },
    { name: '3135-14 : Junagadh Agricultural University', id: '3135-14' },
    { name: '3135-15 : Navsari Agricultural University', id: '3135-15' },
    { name: '3135-16 : Dantiwada Agricultural University', id: '3135-16' },
    { name: '3200 : Contributions', id: '3200' },
    { name: '3241 : Contributions (a) To Panchayats', id: '3241' },
    { name: '3243 : Contributions (b) To Local Bodies', id: '3243' },
    { name: '3351 : Subsidies (a) To Panchayats', id: '3351' },
    { name: '3353 : Subsidies (b) To Local Bodies', id: '3153' },
    { name: '3561 : Grants for creation of Capital Assets to Panchayats', id: '3561' },
    { name: '3563 : Grants for creation of Capital Assets to Local Bodies', id: '3363' }, ];
  private _onDestroy = new
    Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();


  createEstimateForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  classOneCtrl: FormControl = new FormControl();
  classTwoCtrl: FormControl = new FormControl();

  attachment_type_list: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' }
  ];

  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  newPostCtrl: FormControl = new FormControl();
  degCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  servicCtrl: FormControl = new FormControl();
  requrementCtrl: FormControl = new FormControl();
  positionsCtrl: FormControl = new FormControl();
  WhetherDepartmenCtrl: FormControl = new FormControl();
  placeCtrl: FormControl = new FormControl();
  placeCtrl2: FormControl = new FormControl();
  placeCtrl3: FormControl = new FormControl();
  NewVehicalCtrl: FormControl = new FormControl();
  purchageVehicalCtrl: FormControl = new FormControl();
  powarVehicalCtrl: FormControl = new FormControl();
  priceQuotedCtrl: FormControl = new FormControl();
  vecicleGovCtrl: FormControl = new FormControl();
// Checklist Dropdown Details
  newPostType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  WhetherDepart: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  positionsRirect: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  reqType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  deginationList: CommonListing[] = [
    { value: '1', viewValue: 'Degination' },
    { value: '2', viewValue: 'Degination' },
  ];

  classList: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '2', viewValue: 'Class 3' },
    { value: '2', viewValue: 'Class 4' },
  ];

  servicList: CommonListing[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Driver' },
    { value: '2', viewValue: 'Vehicle + Driver' },
    { value: '2', viewValue: 'Staff' },
    { value: '2', viewValue: 'Peons' },
    { value: '2', viewValue: 'House Keeping' },
    { value: '2', viewValue: 'Security Guard' },
    { value: '2', viewValue: 'Consulting Service' },
    { value: '2', viewValue: 'Others' },
  ];

  placeChargeValid: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];

  placeChargeValid2: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];
  reveList: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];
  placeChargeValid3: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
    { value: '3', viewValue: 'Not Applicable' }
  ];

  NewVehicalReq: CommonListing[] = [
    { value: '1', viewValue: 'New Vehicle' },
    { value: '2', viewValue: 'Against Condemn Vehicle' },
  ];

  purchageVehicalReq: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  powarVehicaType: CommonListing[] = [
    { value: '1', viewValue: 'CNG' },
    { value: '2', viewValue: 'Petrol/Diesel' },
  ];

  priceQuotedType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  vecicleGovType: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  designation_list: any[] = [
    { value: '001', viewValue: 'Under Secretary' },
    { value: '002', viewValue: 'Deputy Secretary' },
    { value: '003', viewValue: 'Secretary' },
    { value: '004', viewValue: 'Joint Secretary' },
  ];
  itemCategorySelect: Boolean = true;
  newpost = false;
  addShow = false;
  Outsourcesactive = false;
  Machine = false;
  Vehicle = true;
  construction = false;
  isdisableds: Boolean;
  dataCapDriver = false;
  @ViewChild('singleSelect') singleSelect: MatSelect;
  OutSource = new MatTableDataSource();
  displayedItemCategoryChecklistColumns = ['srno', 'checklistField', 'fieldDetail'];
  displayedoutColumns = ['srno', 'checklistField', 'fieldDetail'];

  // Form C Statement 1 Section
  FormCStmt1: any[] = [
    {
      designationEng: 'Team Leader', designationEngEdit: true,
      designationGuj: 'ટીમ', designationGujEdit: true,
      noOfPosts: '5', noOfPostsEdit: true,
      payScale: '3000.00', payScaleEdit: true,
      payPost: '3000.00', payPostEdit: true,
      gradePay: '300.00', gradePayEdit: true,
    }
  ];
  dataSourceFormCStmt1 = new MatTableDataSource(this.FormCStmt1);
  displayedFormCStmt1Columns = ['designationEng', 'designationGuj', 'noOfPosts', 'payScale', 'payPost', 'Action'];

  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  selectedindex: number;
  selectedindexTemp = 1;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute,

  ) {

  }
  // showStateCSS : boolean= true;
  ngOnInit() {

    // For choosing a checklist and scheme type
    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
      console.log(resRoute.id);
      const temp = resRoute.id.split('-');
      const arg1 = temp[0];
      const arg2 = temp[1];
      const arg3 = temp[2];

      this.index = arg1;
      this.scheme = arg2;
      this.selectedindexTemp = Number(arg3);

    });

    if (this.scheme === '1') {
      this.showState = true;
      this.showCSS = false;

    } else if (this.scheme === '2') {
      this.showState = false;
      this.showCSS = true;
    }
    this.onItemCategorySelect();

    this.selectedindex = 1;
    if (this.selectedindexTemp === 2) {
      this.selectedindex = this.selectedindexTemp;
    }
    this.filteredCodes.next(this.allMainCodes.slice());
    this.codeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.allMainCodes, this.codeCtrl.value, this.filteredCodes);
      });
    this.initialSubObject();

    this.createForm();

    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));
    this.createEstimateForm.controls.departmentCode.patchValue('1');

  }


  updateAttachmentRemarks() {

  }
  // Toggle Functions for language change Eng/Guj
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }
  // Expansion Panel Switching Functions
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.toastr.success('Data Saved Successfully..');
  }

  prevStep() {
    this.step--;
  }

// Entry Table Calculation Functions
  calculateBE(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      returnData = Number(data.recurrentAmount) + Number(data.nonRecurrentAmount);
    }
    return returnData;
  }
  calculateUltimateAmount(data) {
    let returnData = 0;
    if (data.recurrentAmount || data.nonRecurrentAmount) {
      // returnData = this.calculateBE(data) * 12;
      returnData = Number(data.recurrentAmount) * 12 / 11;
    }
    return returnData;
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

  // To hide/show particular fields in checklist
  ontoken(index) {
    if (index.value === '1') {
      this.isvisibledata = true;
    } else {
      this.isvisibledata = false;
    }
  }
  ontokens(index) {
    if (index.value === '1') {
      this.yesNo2 = true;
    } else {
      this.yesNo2 = false;
    }
  }
  createForm() {
    this.createEstimateForm = this.fb.group({
      departmentCode: ['1', Validators.required],
      demandCode: ['1', Validators.required],
      ministerInCharge: ['1', Validators.required],
      majorHeadCode: ['1', Validators.required],
      subMajorHeadCode: ['1', Validators.required],
      minorHeadCode: ['1', Validators.required],
      subHeadCode: ['1', Validators.required],
      detailHeadCode: ['1', Validators.required],
      chargedVoted: ['2', Validators.required],
      schemeType: ['1', Validators.required],
      // itemCategoryCheckList: ['', Validators.required],
      itemName: ['1', [Validators.required]],
      writeUpEng: ['1', [Validators.required]],
      writeUpGuj: ['1', [Validators.required]],
      financialYear: ['3'],
      proposalCategory: ['1'],
      majorCategory: ['1'],
      proposalType: ['1'],
      objectHead: ['1'],
      itemWorkName: [''],
      writeUpEnglish: [''],
      writeUpGujrati: [''],
      establishment: ['1'],
      expenditureType: ['1'],
      itemNames: [''],
      revenueCapital: ['1'],
      schemeTypeRatio: ['1'],
      noOfMonths: [{ value: 13 - new Date().getMonth().valueOf(), disabled: true }],
      classTwo: [''],
      finYearsad: [''],
      revenuecapital: [''],
    });
    this.createEstimateForm.disable();
  }
  // Attachment Functions
  // Add
  addBrowserow() {
    this.dataSourceBrowse.data.push(['browse', 'uploadedFileName', 'action']);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  // Delete
  deleteRow(element, index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    // console.log('event.target.value', event.target.value);
    // console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

  integerKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Adding data in Form C Statement 1 Tab
  addFormCStmt1() {
    if (this.dataSourceFormCStmt1) {
      this.dataSourceFormCStmt1.data.forEach((element, index) => {
        if ((this.dataSourceFormCStmt1.data.length === (index + 1)) && element && element.designationEng &&
          element.noOfPosts && element.payScale && element.payPost && element.designationGuj) {
          const p_data = this.dataSourceFormCStmt1.data;
          p_data.push({
            designationEng: '', designationEngEdit: true, designationGuj: '', designationGujEdit: true, noOfPosts: '', noOfPostsEdit: true,
            payScale: '', payScaleEdit: true, payPost: '', payPostEdit: true

          });
          this.dataSourceFormCStmt1.data = p_data;
        } else if (this.dataSourceFormCStmt1.data.length === (index + 1)) {
          this.toastr.error('Please fill the detail.');
        }
      });
    }
  }

  // Delete data in Form C Statement 1 Tab
  deleteFormCStmt1(index) {
    this.dataSourceFormCStmt1.data.splice(index, 1);
    this.dataSourceFormCStmt1 = new MatTableDataSource(this.dataSourceFormCStmt1.data);
  }
  initialSubObject() {
    this.filteredSubObjects.next(this.sObjectHead.slice());
    // listen for search field value changes
    this.subObjectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubObject();
      });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.objectCodeFilterData();
  }

  // For selecting a particular checklist from parameters
  onItemCategorySelect() {
    this.itemCategorySelect = true;
    const index = this.index;

    switch (index) {
      case '0':
        this.Vehicle = true;
        this.Outsourcesactive = false;
        this.construction = false;
        this.newpost = false;
        this.Machine = false;
        break;
      case '2':
        this.Outsourcesactive = false;
        this.construction = false;
        this.newpost = true;
        this.Vehicle = false;
        this.Machine = false;
        break;

      case '3':
        this.newpost = false;
        this.Outsourcesactive = false;
        // this.construction = true;
        this.Vehicle = false;
        this.Machine = false;

        break;
      case '4':
        this.newpost = false;
        this.Outsourcesactive = false;
        this.construction = false;
        this.Vehicle = false;
        this.Machine = true;
        break;
      case '5':
        this.newpost = false;
        this.Outsourcesactive = true;
        this.construction = false;
        this.Vehicle = false;
        this.Machine = false;
        break;
    }
  }



  // To show checklist table below in checklist tab
  showchecklist() {
    this.isCheckList = !this.isCheckList;
  }

  placeSelection(event: any) {

    if (event == '1') {
      this.newItemCheckList = false;
      this.isdisableds = false;
      this.toastr.success('You are not eligible to submit a new item for "New Vehicle Category for in-charged post".');
    } else if (event == '2') {
      this.newItemCheckList = true;
      this.isdisableds = true;
    }
  }

// Checklist functions
  placeSelection2() {
    if (this.placeCharge2 == '1') {
      this.yesNo = true;
    } else {
      this.yesNo = false;
    }

  }
  placeSelection3() {
    if (this.placeCharge3 == '1') {
      this.yesNo2 = true;
    } else {
      this.yesNo2 = false;
    }
  }

  newVehicalSelection(event: any) {
    console.log(event);


    if (event == '2') {
      this.fiveSixLable = true;
    } else {
      this.fiveSixLable = false;
    }
  }

  selectQuoted(event: any) {
    if (event === '2') {
      this.QuotedRemarks = true;
    } else {
      this.QuotedRemarks = false;
    }
  }
  selectpurch(event: any) {
    if (event === '1') {
      this.Quotedvehicle = true;
    } else {
      this.Quotedvehicle = false;
    }
  }
  driveNameDate(event: any) {
    if (event = '1') {
      this.dataCapDriver = true;
    } else {
      this.dataCapDriver = false;
    }
  }


// To show breakup of particular object head
  showCharge(event, index, element) {

    if (element && element.objecthead && element.recurrentAmount && element.nonRecurrentAmount && element.budgetEstimateNextYear
      && element.ultimateAnnualRecurrentAmount) {

      this.expendCharges = true;
      // this.submitted = true;

      if (element.objecthead === '3133' ||
        element.objecthead === '3243' ||
        element.objecthead === '3353' ||
        element.objecthead === '3563') {
        this.table1 = true;
        this.table2 = false;
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];

        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      } else {
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];




        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      }



      if (element.objecthead === '3131' ||
        element.objecthead === '3132' ||
        element.objecthead === '3241' ||
        element.objecthead === '3351' ||
        element.objecthead === '3561') {
        this.table1 = false;
        this.table2 = true;

        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];

        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      } else {
        this.districtColumns = [
          'position',
          'district',
          'expendature',
          'talukaexpendature',
          'gramexpendature'
        ];
        this.subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];
        this.districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        ));
      }

      if (element.objecthead === '3135' ||
        element.objecthead === '3135-13' ||
        element.objecthead === '3135-14' ||
        element.objecthead === '3135-15' ||
        element.objecthead === '3135-16') {
        this.grantInAid = false;
      } else {
        this.grantInAid = true;
      }

      this.selSubObjectId = '';
      this.subObjectId = [];
      const data = this.dataSourceClass3.data.filter((x, i) => i === index);
      this.dataSourceClass3.data = data;
      this.showObject = element.objecthead;
      this.hodAmount = element.amountproposedbyHOD;
    } else {
      this.toastr.error('Please fill all the details object head!');
    }

  }

  // Grant in Aid Table Functions to calculate amount Starts

  jilla() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  taluka() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  gram() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }

  corporation() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp =  amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }
  // Grant in Aid Table Functions to calculate amount Ends


  saveStandCharge() { }

  // Action on back Button click
  backCharge() {
    this.showObject = '';
    this.expendCharges = false;
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata;
  }

  objectCodeFilterData() {
    const pdata = ELEMENT_DATA_C2;
    this.dataSource.data = pdata.filter(x => this.codes.includes(x.objecthead));
  }

  getBillNo(data) {
  }

  covertToNumber(data) {
    let returnData;
    if (data.last8month && data.first4month) {
      returnData = Number(data.last8month) + Number(data.first4month);
    }
    return returnData;
  }

  protected filterSubObject() {
    if (!this.sObjectHead) {
      return;
    }
    // get the search keyword
    let search = this.subObjectFilterCtrl.value;
    if (!search) {
      this.filteredSubObjects.next(this.sObjectHead.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredSubObjects.next(
      this.sObjectHead.filter(obj => obj.name.toLowerCase().indexOf(search) > -1)
    );
  }

  selectCharge(data) {
    this.selSubObjectId = data.value[data.value.length - 1];
  }
  onBlurMethod() {
    console.log('blur==>');
  }
// Eng/Guj language functions
  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }

  checkGujarati(data) {
    this.createEstimateForm.patchValue({
      writeUpGuj: data
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  // Save and Proceed Button in Header Tab
  goToNext() {
    if (this.createEstimateForm.controls.formType.invalid) {
      this.toastr.error('Please fill all the details.');
      this.tabDisable = true;
      _.each(this.createEstimateForm.controls, function (control) {
        if (control.status === 'INVALID') {
          control.markAsTouched({ onlySelf: true });
        }
      });
    } else {
      this.tabDisable = false;
      this.selectedindex = 1;
      this.doneHeader = true;
    }
  }

  // Attachment Tab Functions Starts

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  onFileSelectiona(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  openFileSelectora(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined,
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  // Attachment Tab Functions Ends

// Delete Functions Object Class Wise for Main Table starts
  deleteClass1(index) {
    this.dataSourceClass1.data.splice(index, 1);
    this.dataSourceClass1 = new MatTableDataSource(this.dataSourceClass1.data);
  }

  deleteClass2(index) {
    this.dataSourceClass2.data.splice(index, 1);
    this.dataSourceClass2 = new MatTableDataSource(this.dataSourceClass2.data);
  }

  deleteClass3(index) {
    this.dataSourceClass3.data.splice(index, 1);
    this.dataSourceClass3 = new MatTableDataSource(this.dataSourceClass3.data);
  }

  deleteClass4(index) {
    this.dataSourceClass4.data.splice(index, 1);
    this.dataSourceClass4 = new MatTableDataSource(this.dataSourceClass4.data);
  }

  deleteClass5(index) {
    this.dataSourceClass5.data.splice(index, 1);
    this.dataSourceClass5 = new MatTableDataSource(this.dataSourceClass5.data);
  }

  deleteClass6(index) {
    this.dataSourceClass6.data.splice(index, 1);
    this.dataSourceClass6 = new MatTableDataSource(this.dataSourceClass6.data);
  }

  deleteClass7(index) {
    this.dataSourceClass7.data.splice(index, 1);
    this.dataSourceClass7 = new MatTableDataSource(this.dataSourceClass7.data);
  }
  // Delete Functions Object Class Wise for Main Table Ends

// Delete Functions Object Class Wise for Breakup Table starts
  deleteBreakClass1(index) {
    this.dataSourceBreakClass1.data.splice(index, 1);
    this.dataSourceBreakClass1 = new MatTableDataSource(this.dataSourceBreakClass1.data);
  }

  deleteBreakClass2(index) {
    this.dataSourceBreakClass2.data.splice(index, 1);
    this.dataSourceBreakClass2 = new MatTableDataSource(this.dataSourceBreakClass2.data);
  }

  deleteBreakClass3(index) {
    this.dataSourceBreakClass3.data.splice(index, 1);
    this.dataSourceBreakClass3 = new MatTableDataSource(this.dataSourceBreakClass3.data);
  }

  deleteBreakClass4(index) {
    this.dataSourceBreakClass4.data.splice(index, 1);
    this.dataSourceBreakClass4 = new MatTableDataSource(this.dataSourceBreakClass4.data);
  }

  deleteBreakClass5(index) {
    this.dataSourceBreakClass5.data.splice(index, 1);
    this.dataSourceBreakClass5 = new MatTableDataSource(this.dataSourceBreakClass5.data);
  }

  deleteBreakClass6(index) {
    this.dataSourceBreakClass6.data.splice(index, 1);
    this.dataSourceBreakClass6 = new MatTableDataSource(this.dataSourceBreakClass6.data);
  }

  deleteBreakClass7(index) {
    this.dataSourceBreakClass7.data.splice(index, 1);
    this.dataSourceBreakClass7 = new MatTableDataSource(this.dataSourceBreakClass7.data);
  }
  // Delete Functions Object Class Wise for Breakup Table Ends

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  // Filters Object head as per Dropdown selection Of Object Head
  selectedObjectHead(event): void {
    console.log(event.value);
    this.codes = [];
    this.codes = event.value;
    this.codeCtrl.setValue(null);
    if (this.codes && this.codes.length > 0 && this.checkValueInList(event.value)) {
      // console.log("checkValueInList applyFilter true");
      this.applyFilter(event.value[0]);
    }
  }
  // History Popup
  openHistory(data) {
    this.showHistoryDialog();
  }
  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  checkValueInList(value) {
    let flag = false;
    for (const str of value) {
      for (const data of this.allMainCodes) {
        if (data.value == str) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }
  saveEstimate() {

  }

  // Confirm Popup
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent1, {
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

  // Submit Popup
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent1, {
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

  // View Comments Popup
  viewComments(): void {
    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent1, {
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

}
