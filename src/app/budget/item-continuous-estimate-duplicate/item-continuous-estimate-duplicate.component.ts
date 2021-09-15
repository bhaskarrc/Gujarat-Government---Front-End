import { startWith, map, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonList, CommonListing } from 'src/app/model/common-listing';
import { BudgetFormType, ItemContinuous1, DirstrictTableSecondItemCont, DistrictElement1ItemCont } from 'src/app/model/budget';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from './../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { ItemContEstimateConfirmDialogComponent, ItemContEstimateDialogComponent, ItemContEstimateViewCommentsComponent } from '../item-continuous/item-continuous-estimate/create-budget-estimate.component';
import { DistrictElement, ItemContinuous, CssDetail, Attachment } from 'src/app/model/item-continuous';



const ELEMENT_DATA: ItemContinuous1[] = [];
// Object Class Wise Data
const ELEMENT_DATA_CL1: ItemContinuous1[] = [
  {
    objectHead: '0101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '0101 : Pay of Officers Including Grade Pay'
  },
  {
    objectHead: '0102', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '0102 : Pay of Establishment Including Grade Pay'
  },
  {
    objectHead: '0103', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '0103 : Dearness Allowance'
  },
];
const ELEMENT_DATA_CL2: ItemContinuous1[] = [
  {
    objectHead: '2100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '2100'
  },
  {
    objectHead: '2101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '2101'
  },
];

const ELEMENT_DATA_CL3: ItemContinuous1[] = [
  {
    objectHead: '3131', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '3131'
  },
  {
    objectHead: '3135', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '3135'
  },
  {
    objectHead: '3243', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '3243'
  },
];

const ELEMENT_DATA_CL4: ItemContinuous1[] = [
  {
    objectHead: '4100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '4100'
  },
  {
    objectHead: '4101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '4101'
  },
];

const ELEMENT_DATA_CL5: ItemContinuous1[] = [
  {
    objectHead: '5100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '5100'
  },
  {
    objectHead: '5101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '5101'
  },
];

const ELEMENT_DATA_CL6: ItemContinuous1[] = [
  {
    objectHead: '6100', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '6100'
  },
  {
    objectHead: '6101', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '6101'
  },
];

const ELEMENT_DATA_CL7: ItemContinuous1[] = [
  {
    objectHead: '7057', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '7100'
  },
  {
    objectHead: '7058', actualsThirdLastYear: '20.00', actualsSecondLastYear: '20.00', lastYear: '20.00', criteria: '200.00',
    endBaseLine: '10.00', improvementFifteen: '100.00', improvementSixteen: '200.00',
    improvementEighteen: '100.00', currentYear: '300.00',
    underStatedOperation: '100.00', amountProposedByHod: '400.00', remarks: '',
    toolTipData: '7101'
  },
];

// GIA Jilla Table Data
const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
  { id: 1, expenditure: '0.00', districtName: 'Ahmedabad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 2, expenditure: '0.00', districtName: 'Vadodara', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 3, expenditure: '0.00', districtName: 'Anand', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 4, expenditure: '0.00', districtName: 'Chhota Udaipur', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 5, expenditure: '0.00', districtName: 'Dahod', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 6, expenditure: '0.00', districtName: 'Kheda', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 7, expenditure: '0.00', districtName: 'Mahisagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 8, expenditure: '0.00', districtName: 'Panchmahal', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 9, expenditure: '0.00', districtName: 'Gandhinagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 10, expenditure: '0.00', districtName: 'Aravalli', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 11, expenditure: '0.00', districtName: 'Banaskantha', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 12, expenditure: '0.00', districtName: 'Mehsana', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 13, expenditure: '0.00', districtName: 'Patan', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 14, expenditure: '0.00', districtName: 'Sabarkantha', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 15, expenditure: '0.00', districtName: 'Rajkot', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 16, expenditure: '0.00', districtName: 'Amreli', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 17, expenditure: '0.00', districtName: 'Bhavnagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 18, expenditure: '0.00', districtName: 'Botad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 19, expenditure: '0.00', districtName: 'Devbhoomi Dwarka', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 20, expenditure: '0.00', districtName: 'Gir Somnath', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 21, expenditure: '0.00', districtName: 'Jamnagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 22, expenditure: '0.00', districtName: 'Junagadh', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 23, expenditure: '0.00', districtName: 'Morbi', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 24, expenditure: '0.00', districtName: 'Porbandar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 25, expenditure: '0.00', districtName: 'Surendranagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 26, expenditure: '0.00', districtName: 'Kachchh', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 27, expenditure: '0.00', districtName: 'Surat', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 28, expenditure: '0.00', districtName: 'Bharuch', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 29, expenditure: '0.00', districtName: 'Dang', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 30, expenditure: '0.00', districtName: 'Narmada', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 31, expenditure: '0.00', districtName: 'Navsari', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 32, expenditure: '0.00', districtName: 'Tapi', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
  { id: 33, expenditure: '0.00', districtName: 'Valsad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
];
// GIA Corporation Table Data
const DISTRICT_ELEMENT_DATA2: DirstrictTableSecondItemCont[] = [
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
  // {
  //   id: 34,
  //   expendature: '',
  //   districtName: 'State Level Only (if any)',
  //   talukaexpendature: '',
  //   gramexpendature: ''
  // }
];
// GIA State Table Data
const DISTRICT_ELEMENT_DATA1: DistrictElement1ItemCont[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];

@Component({
  selector: 'app-item-continuous-estimate-duplicate',
  templateUrl: './item-continuous-estimate-duplicate.component.html',
  styleUrls: ['./item-continuous-estimate-duplicate.component.css']
})
export class ItemContinuousEstimateDuplicateComponent implements OnInit {
  // Header Tab Details
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
  step = 0;
  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  classOneCtrl: FormControl = new FormControl();
  codeCtrl = new FormControl();
  codes: string[] = [];
  codesBreakUP: string[] = [];

  // Object Head Details
  allMainCodes: CommonListing[] = [
    { value: '0101', viewValue: '0101 : Pay of Officers Including Grade Pay' },
    { value: '0102', viewValue: '0102 : Pay of Establishment Including Grade Pay' },
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
    { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
    { value: '3135-14', viewValue: '3135-14 : Junagadh Agricultural University' },
    { value: '3135-15', viewValue: '3135-15 : Navsari Agricultural University' },
    { value: '3135-16', viewValue: '3135-16 : Dantiwada Agricultural University' },
    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
    { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
    { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
    { value: '3161', viewValue: '3561 : Grants for creation of Capital Assets to Panchayats' },
    { value: '3363', viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies' },
  ];
  // Class Type Details
  classType: CommonListing[] = [
    { value: '1', viewValue: 'Object Class-1 (Personnel Services and Benefits)' },
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
    { value: '3', viewValue: 'Object Class-3 (Contractual Services and Supplies)' },
    { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
    { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
    { value: '6', viewValue: 'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)' },
    { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' },
  ];
// Year list
  underStateYears_list: CommonListing[] = [
    { value: '1', viewValue: '1990' },
    { value: '2', viewValue: '1991' },
    { value: '3', viewValue: '1992' },
    { value: '4', viewValue: '1993' },
    { value: '5', viewValue: '1994' },
    { value: '6', viewValue: '1995' },
    { value: '7', viewValue: '1996' },
    { value: '8', viewValue: '1997' },
    { value: '9', viewValue: '1998' },
    { value: '10', viewValue: '1999' },
    { value: '11', viewValue: '2000' },
    { value: '12', viewValue: '2001' },
    { value: '13', viewValue: '2002' },
    { value: '14', viewValue: '2003' },
    { value: '15', viewValue: '2004' },
    { value: '16', viewValue: '2005' },
    { value: '17', viewValue: '2006' },
    { value: '18', viewValue: '2007' },
    { value: '19', viewValue: '2008' },
    { value: '20', viewValue: '2009' },
    { value: '21', viewValue: '2010' },
    { value: '22', viewValue: '2011' },
    { value: '23', viewValue: '2012' },
    { value: '23', viewValue: '2013' },
    { value: '25', viewValue: '2014' },
    { value: '26', viewValue: '2015' },
    { value: '27', viewValue: '2016' },
    { value: '28', viewValue: '2017' },
    { value: '29', viewValue: '2018' },
    { value: '30', viewValue: '2019' },
    { value: '30', viewValue: '2020' },
  ];

  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
// Expansion Panel Table Columns
  displayedColumnsExpan = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear', 'actualsSecondLastYear',
    'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen',
    'improvementEighteen', 'currentYear', 'amountProposedByHod', 'remarks', 'action'];

// Expansion Panel Table Columns for ReadOnly Table
  displayedColumnsExpanReadOnly = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear', 'actualsSecondLastYear',
    'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen', 'improvementSixteen',
    'improvementEighteen', 'currentYear', 'amountProposedByHod', 'remarks'];

    // Object Class Wise Data Source
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
  dataSourceClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
  dataSourceClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
  dataSourceClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
  dataSourceClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
  dataSourceClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
  dataSourceClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);
  // breakup section
  dataSourceBreakClass1 = new MatTableDataSource(ELEMENT_DATA_CL1);
  dataSourceBreakClass2 = new MatTableDataSource(ELEMENT_DATA_CL2);
  dataSourceBreakClass3 = new MatTableDataSource(ELEMENT_DATA_CL3);
  dataSourceBreakClass4 = new MatTableDataSource(ELEMENT_DATA_CL4);
  dataSourceBreakClass5 = new MatTableDataSource(ELEMENT_DATA_CL5);
  dataSourceBreakClass6 = new MatTableDataSource(ELEMENT_DATA_CL6);
  dataSourceBreakClass7 = new MatTableDataSource(ELEMENT_DATA_CL7);

  // GIA Jilla Table Columns
  districtColumns = ['position', 'district', 'expendature', 'talukaExpenditure', 'gramExpenditure'];
    // GIA Corpoartion Table Columns
  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];
  // GIA State Table Columns
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
  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );
  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;
  expendCharges: boolean;
  showObject: string;
  saveCharge: boolean;
  hodAmount: any;
  succObjectCode: Array<any> = [];
  errObjectCode: Array<any> = [];
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // Object Head List
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
    { name: '3561 : Grants for creation of Capital Assets to Panchayats', id: '3161' },
    { name: '3563 : Grants for creation of Capital Assets to Local Bodies', id: '3363' },
  ];



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
  attachmentTypeCtrl: FormControl = new FormControl();
  classTwoCtrl: FormControl = new FormControl();
  filteredAttachmentList: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];

  CSSPartDiv = true;
  finalSum = 0;
  @ViewChild('singleSelect') singleSelect: MatSelect;

  CSSDetails: CssDetail[] = [
    { year: '2016-17', ration: '3.00', general: '10.25', scsp: '10.00', tasp: '10.00', total: '30.25' },
    { year: '2017-18', ration: '100.00', general: '20.00', scsp: '20.00', tasp: '20.00', total: '60.0' },
    { year: '2018-19 (Till 31-10-2018)', ration: '5.00', general: '30.00', scsp: '30.00', tasp: '30.00', total: '90.00' },
  ];


// CSS Details Table 1
  dataSourceCSSDetail = new MatTableDataSource(this.CSSDetails);
  displayedColumnsSection = ['year', 'ration', 'general', 'scsp', 'tasp', 'total'];
  displayedColumnsSection1 = ['position', 'year', 'ration', 'general', 'scsp', 'tasp', 'total'];
  schemDetails: any[] = [
    {
      details: 'CENTRAL', amount: 23.02, persentage: 1.00, amountscpc: 23.02,
      persentagescpc: 1.00, amounttasp: 23.02, persentagetasp: 1.00, totalSchem: 183.47,
    },
    {
      details: 'STATE', amount: 20.02, persentage: 2.00, amountscpc: 300.00,
      persentagescpc: 5.00, amounttasp: 45.85, persentagetasp: 8.00, totalSchem: 365.87,
    },
    {
      details: 'TOTAL', amount: 43.04, persentage: 2, amountscpc: 425.00,
      persentagescpc: 2, amounttasp: 81.30, persentagetasp: 0, totalSchem: 649.34,
    },

  ];
// CSS Details Table 2
  dataSourceschemDetails = new MatTableDataSource(this.schemDetails);
  displayedschemColumnsSection = ['details', 'amount', 'persentage', 'amountscpc',
    'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];
  displayedschemColumnsSection1 = ['position', 'details', 'amount', 'persentage', 'amountscpc',
    'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];

  outSourceData: any[] = [
    {
      serviceType: 'Testing',
      budgetEstimate: '0.00'
    }
  ];
  dataSourceOutSource = new MatTableDataSource(this.outSourceData);
  EstimateForm: FormGroup;
  showObjectHeadWise = false;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  selectedindex: number;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  showState = true;
  showCSS = true;
  public scheme;
  brwoseData: Attachment[] = [{
    name: undefined,
    file: undefined,
  }];
// Attachment Table
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  fileBrowseIndex: any;
  amountProposedData: any;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    public dialog: MatDialog,
  ) { }

  subscribeParams: Subscription;



  ngOnInit() {
    this.initialSubObject();
    this.selectedindex = 1;
    this.createForm();

    this.selectedindex = 1;
    this.createForm();
    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {

      this.scheme = resRoute.id;

    });
    if (this.scheme == '1') {
      this.showState = true;
      this.showCSS = false;

    } else if (this.scheme == '2') {
      this.showState = false;
      this.showCSS = true;
    }
  }
  createForm() {
    this.EstimateForm = this.fb.group({
      formType: ['1', Validators.required],
      finYear: ['1', Validators.required],
      departmentCode: ['1', Validators.required],
      branchCode: ['1', Validators.required],
      estimationFrom: ['1', Validators.required],
      estimationFor: ['1', Validators.required],
      demandCode: ['1', Validators.required],
      ministerInCharge: ['1', Validators.required],
      bpnCode: ['1', Validators.required],
      majorHeadCode: ['1', Validators.required],
      subMajorHeadCode: ['1', Validators.required],
      minorHeadCode: ['1', Validators.required],
      subHeadCode: ['1', Validators.required],
      detailHeadCode: ['1', Validators.required],
      chargedVoted: ['2', Validators.required],
      schemeType: ['2', Validators.required],
      cssPercentage: ['1', [Validators.min(0), Validators.max(100)]],
      itemCategory: ['1', Validators.required],
      itemName: ['1', [Validators.required]],
      writeUpEng: ['1', [Validators.required]],
      writeUpGuj: ['1', [Validators.required]],
      financialYear: ['3'],
      proposalCategory: ['4'],
      majorCategory: ['1'],
      proposalType: ['2'],
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
      classTwo: ['']
    });
    this.EstimateForm.disable();
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }
  // Expansion Panel Switch Functions
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

  integerKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  integerKeyPressValue(event: any) {
    const pattern = /^\d{0,1}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 2) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  initialSubObject() {
    this.filteredSubObjects.next(this.sObjectHead.slice());
    this.subObjectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubObject();
      });
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.objectCodeFilterData();
  }

  getRowData(index) { }

  // To Open Breakup Section
  showCharge(event, index, element) {
    if (element && element.objectHead && element.criteria && element.endBaseLine && element.improvementFifteen
      && element.currentYear) {

      if (element.objectHead === '3133' ||
        element.objectHead === '3243' ||
        element.objectHead === '3353' ||
        element.objectHead === '3563') {
        this.grantInAid = true;
        this.table1 = true;
        this.table2 = false;
      } else if (element.objectHead === '3131' ||
        element.objectHead === '3132' ||
        element.objectHead === '3241' ||
        element.objectHead === '3351' ||
        element.objectHead === '3561') {
        this.grantInAid = true;
        this.table1 = false;
        this.table2 = true;
      } else if (element.objectHead === '3135' ||
        element.objectHead === '3135-13' ||
        element.objectHead === '3135-14' ||
        element.objectHead === '3135-15' ||
        element.objectHead === '3135-16') {
        this.grantInAid = false;
      }

      this.expendCharges = true;
      this.showObjectHeadWise = true;
      this.selSubObjectId = '';
      this.subObjectId = [];
      const data = this.dataSourceClass3.data.filter((x, i) => i === index);
      this.dataSourceClass3.data = data;
      this.showObject = element.objectHead;
      this.hodAmount = element.amountProposedByHod;
    } else {
      this.toastr.error('Please fill all the details object head!');
    }
  }

  saveStandCharge() { }

  objectCodeFilterData() {
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata.filter(x => this.codes.includes(x.objectHead));
  }

  getBillNo(data) {
  }

  covertToNumber(data) {
    let returnData = 0;
    if (data.last8month || data.first4month) {
      returnData = Number(data.last8month) + Number(data.first4month);
    }
    return returnData;
  }


  protected filterSubObject() {
    if (!this.sObjectHead) {
      return;
    }
    let search = this.subObjectFilterCtrl.value;
    if (!search) {
      this.filteredSubObjects.next(this.sObjectHead.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredSubObjects.next(
      this.sObjectHead.filter(obj => obj.name.toLowerCase().indexOf(search) > -1)
    );
  }


  onBlurMethod() {
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedindex = 1;
  }
// Attachments Section Functions
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
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
// Delete Functions from Main Table
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
// Delete Functions from BreakUp Table
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
  goToDashboard() { this.router.navigate(['']); }

  goBack() {
    this.expendCharges = false;
    this.showObjectHeadWise = false;
    const pdata = ELEMENT_DATA_CL3;
    this.dataSourceClass3.data = pdata;

  }
  saveEstimate() { }

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  selectedObjectHead(event): void {
    this.codes = [];
    this.codes = event.value;
    this.codeCtrl.setValue(null);
  }



// CSS Details Functions
  receveddetails(data) {
    let returnData = 0;
    if (data.general || data.scsp || data.tasp) {
      returnData = Number(data.general) + Number(data.scsp) + Number(data.tasp);
    }

    return returnData;
  }

  receveddetailsTwo(data) {
    let returnData = 0;
    if (data.amount || data.amountscpc || data.amounttasp) {
      returnData = Number(data.amount) + Number(data.amountscpc) + Number(data.amounttasp);

      const sum = parseFloat(this.schemDetails[0].amount == '' ? 0 : this.schemDetails[0].amount) + parseFloat(this.schemDetails[1].amount == '' ? 0 : this.schemDetails[1].amount);
      this.schemDetails[2].amount = sum;

      const sumAmountscpc = parseFloat(this.schemDetails[0].amountscpc == '' ? 0 : this.schemDetails[0].amountscpc) + parseFloat(this.schemDetails[1].amountscpc == '' ? 0 : this.schemDetails[1].amountscpc);
      this.schemDetails[2].amountscpc = sumAmountscpc;

      const sumamounttasp = parseFloat(this.schemDetails[0].amounttasp == '' ? 0 : this.schemDetails[0].amounttasp) + parseFloat(this.schemDetails[1].amounttasp == '' ? 0 : this.schemDetails[1].amounttasp);
      this.schemDetails[2].amounttasp = sumamounttasp;

    }

    return returnData;
  }

  doFinalSum(amount1, amount2) {
    if (amount2 != 0 || amount1 != 0) {
      debugger;
      this.finalSum = amount1 + amount2;
    }

  }
// GIA Table Functions
  jilla() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.expenditure);
    });
    return amountExp;
  }
  taluka() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.talukaExpenditure);
    });
    return amountExp;
  }
  gram() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.gramExpenditure);
    });
    return amountExp;
  }

  corporation() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp = amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  municipal() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp = amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  notifiedArea() {
    let amountExp = 0;
    this.districtDataSource2.data.forEach((element) => {
      amountExp = amountExp + Number(element.gramexpendature);
    });
    return amountExp;
  }
// History Popup
  openHistory(data) {
    data.isSelected = true;
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
// View Comments Popup
  viewComments(): void {
    const dialogRef = this.dialog.open(ItemContEstimateViewCommentsComponent, {
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
  // Submit Popup
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(ItemContEstimateDialogComponent, {
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
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(ItemContEstimateConfirmDialogComponent, {
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

}