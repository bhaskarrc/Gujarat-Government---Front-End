import { CommonListing } from './../../../model/common-listing';
import { Component, OnInit, AfterViewInit, ViewChild, Inject, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map, flatMap } from 'rxjs/operators';
import { element } from '@angular/core/src/render3/instructions';
import * as cloneDeep from 'lodash/cloneDeep';

// import { DialogData } from '../../standing-charge/standalone-charge-listing/standalone-charge-listing.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { DialogOverviewExampleDialog } from '../../standing-charge-consolidation/standing-charge-consolidate/standing-charge-consolidate.component';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
export interface HeaderElement {
  label: string | '';
  value: string | '';
}
export interface DialogData {
  animal: string;
  name: string;
}
export interface SchemeList {
  financialYear: string;
  demand: string;
  bpn: string;
  revenueCapital: string;
  major: string;
  subMajor: string;
  minor: string;
  sub: string;
  detail: string;
  noOfDDO: number;
  consolidatedAmt: number;
  referenceNo: string;
  lyingWith: string;
  transactionStatus: string;
  status: string;
  chargedVoted: string;
  percentage: number;
  amount: number;
}


export interface ObjectHeadBreakupElement {
  objecthead: string | '';
  thirdlastyear: number | '';
  secondlastyear: number | '';
  lastyear: number | '';
  currentyear: number | '';
  last8month: number | '';
  first4month: number | '';
  totalof8and4month: number | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyDDO: number | '';
  amountWorkOutByFormula: number | '';
  amountproposedbyHOD: number | '';
  remarks: string | '';
}

export interface DistrictElement {
  id: number;
  districtName: string;
  expendature: number | '';
  talukaexpendature: number | '';
  gramexpendature: number | '';
}

export interface DistrictElement1 {
  id: number;
  districtName: string;
  expendature: number | '';
  propsedAmount:  number | '';


}
export interface EstablishmentElement {
  postType: string;
  noOfPost: number | '';
  basicPay: number | '';
  DA: number | '';
  HRA: number | '';
  CLA: number | '';
  OA: number | '';
  total: number;
  remarks: string;
  extend: Boolean;
}

export interface EstablishmentSubElement {
  post1: string;
  noOfPost1: Number | '';
  approximateEstimate1: Number | '';
  post2: string;
  noOfPost2: Number | '';
  approximateEstimate2: Number | '';
}

export interface RojmadarElement {
  typeOfExpenditure: string;
  noOfPost: Number | '';
  salaries: Number | '';
  OA: Number | '';
  total: Number;
  remarks: string;
}

export interface OutSourceElement {
  serviceType: string;
  budgetEstimate: Number | '';
}

export interface LeaveEncashmentElement {
  nameOfOfficer: string;
  designation: string;
  basicSalary: Number | '';
  proposedAmount: Number | '';
  dateOfRetirement: string;
}

export interface DDOList {
  checkbox: Boolean;
  ddoName: string;
  ddoProposedAmt: number | '-';
  ddoReferenceNo: string;
  ddoTransactionDate: string;
}


const recoveryData: any[] = [
  {
      year: '2010', objectHead: '7057', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '', remarks: '', toolTipData: '0101 : Pay of Officers Including Grade Pay'
  },
  {
      year: '2010', objectHead: '7058', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
];

const ELEMENT_DATA_NEW: any[] = [
  {
      year: '2010', objectHead: '3131', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', isBreakup: true
  },
  {
      year: '2010', objectHead: '3132', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3132 : Grants-in-Aid General to Panchayats pertaining', isBreakup: true
  },
  {
      year: '2010', objectHead: '3133', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3133 : Contributions (b) To Local Bodies', isBreakup: true
  },
  {
      year: '2010', objectHead: '3135-13', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3135-13 : Navsari Agricultural University', isBreakup: true
  },
  {
      year: '2010', objectHead: '3135-14', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3135-14 : Junagadh Agricultural University', isBreakup: true
  },
  {
      year: '2010', objectHead: '3135-15', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3135-15 : Navsari Agricultural University', isBreakup: true
  },
  {
      year: '2010', objectHead: '3135-16', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3135-16 : Dantiwada Agricultural University', isBreakup: true
  },
  {
      year: '2010', objectHead: '3241', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3241 : Contributions (a) To Panchayats', isBreakup: true
  },
  {
      year: '2010', objectHead: '3243', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3243 : Contributions (b) To Local Bodies', isBreakup: true
  },
  {
      year: '2010', objectHead: '3351', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3351 : Subsidies (a) To Panchayats', isBreakup: true
  },
  {
      year: '2010', objectHead: '3353', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '', toolTipData: ' ', isBreakup: true
  },
  {
      year: '2010', objectHead: '3161', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '', toolTipData: ' ', isBreakup: true
  },
  {
      year: '2010', objectHead: '3363', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '', toolTipData: ' ', isBreakup: true
  }
];
const ELEMENT_DATA2_NEW: any[] = [
  {
      year: '2010', objectHead: '7057', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '', remarks: '',
       toolTipData: '0101 : Pay of Officers Including Grade Pay', isBreakup: false
  },
  {
      year: '2010', objectHead: '7058', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', isBreakup: false
  },
];

const OBJECT_HEAD_BREAKUP_DATA: any[] = [
  {
      year: '2010', objectHead: '6100', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
      lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
       improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
      year: '2010', objectHead: '6200', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
      year: '2010', objectHead: '6300', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
      year: '2010', objectHead: '6400', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
      year: '2010', objectHead: '7000', actualsThirdLastYear: 2019, actualsSecondLastYear: 2018,
       lastYear: 2018, criteria: '200', endBaseLine: 1.79, improvementFifteen: 100,
        improvementSixteen: 252, improvementEighteen: 253, currentYear: '356.00',
      underStatedOperation: 475, amountProposedByHod: '400.00', remarks: '',
       toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  // {
  //   objecthead: '7057', thirdlastyear: 470, secondlastyear: 12.07, lastyear: 251, currentyear: 541, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 0.00, remarks: ''
  // },
  // {
  //   objecthead: '7058', thirdlastyear: 954, secondlastyear: 14.67, lastyear: 251, currentyear: 844, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 0.00, remarks: ''
  // },
];


const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
  { id: 1, expendature: 10.00, districtName: 'Ahmedabad', talukaexpendature: 20.00, gramexpendature: 10.00},
  { id: 2,  expendature: 15.00, districtName: 'Vadodara', talukaexpendature: 50.00, gramexpendature: 20.00},
  { id: 3,  expendature: '', districtName: 'Anand', talukaexpendature: '', gramexpendature: ''},
  { id: 4,  expendature: '', districtName: 'Chhota Udaipur', talukaexpendature: '', gramexpendature: ''},
  { id: 5,  expendature: '', districtName: 'Dahod', talukaexpendature: '', gramexpendature: ''},
  { id: 6,  expendature: '', districtName: 'Kheda', talukaexpendature: '', gramexpendature: ''},
  { id: 7,  expendature: '', districtName: 'Mahisagar', talukaexpendature: '', gramexpendature: ''},
  { id: 8,  expendature: '', districtName: 'Panchmahal', talukaexpendature: '', gramexpendature: ''},
  { id: 9,  expendature: '', districtName: 'Gandhinagar', talukaexpendature: '', gramexpendature: ''},
  { id: 10,  expendature: '', districtName: 'Aravalli', talukaexpendature: '', gramexpendature: ''},
  { id: 11,  expendature: '', districtName: 'Banaskantha', talukaexpendature: '', gramexpendature: ''},
  { id: 12,  expendature: '', districtName: 'Mehsana', talukaexpendature: '', gramexpendature: ''},
  { id: 13,  expendature: '', districtName: 'Patan', talukaexpendature: '', gramexpendature: ''},
  { id: 14,  expendature: '', districtName: 'Sabarkantha', talukaexpendature: '', gramexpendature: ''},
  { id: 15,  expendature: '', districtName: 'Rajkot', talukaexpendature: '', gramexpendature: ''},
  { id: 16,  expendature: '', districtName: 'Amreli', talukaexpendature: '', gramexpendature: ''},
  { id: 17,  expendature: '', districtName: 'Bhavnagar', talukaexpendature: '', gramexpendature: ''},
  { id: 18,  expendature: '', districtName: 'Botad', talukaexpendature: '', gramexpendature: ''},
  { id: 19,  expendature: '', districtName: 'Devbhoomi Dwarka', talukaexpendature: '', gramexpendature: ''},
  { id: 20,  expendature: '', districtName: 'Gir Somnath', talukaexpendature: '', gramexpendature: ''},
  { id: 21,  expendature: '', districtName: 'Jamnagar', talukaexpendature: '', gramexpendature: ''},
  { id: 22,  expendature: '', districtName: 'Junagadh', talukaexpendature: '', gramexpendature: ''},
  { id: 23,  expendature: '', districtName: 'Morbi', talukaexpendature: '', gramexpendature: ''},
  { id: 24,  expendature: '', districtName: 'Porbandar', talukaexpendature: '', gramexpendature: ''},
  { id: 25,  expendature: '', districtName: 'Surendranagar', talukaexpendature: '', gramexpendature: ''},
  { id: 26,  expendature: '', districtName: 'Kachchh', talukaexpendature: '', gramexpendature: ''},
  { id: 27,  expendature: '', districtName: 'Surat', talukaexpendature: '', gramexpendature: ''},
  { id: 28,  expendature: '', districtName: 'Bharuch', talukaexpendature: '', gramexpendature: ''},
  { id: 29,  expendature: '', districtName: 'Dang', talukaexpendature: '', gramexpendature: ''},
  { id: 30,  expendature: '', districtName: 'Narmada', talukaexpendature: '', gramexpendature: ''},
  { id: 31,  expendature: '', districtName: 'Navsari', talukaexpendature: '', gramexpendature: ''},
  { id: 32,  expendature: '', districtName: 'Tapi', talukaexpendature: '', gramexpendature: ''},
  { id: 33,  expendature: '', districtName: 'Valsad', talukaexpendature: '', gramexpendature: ''},
  // { id: 34,  expendature: '', districtName: 'State Level Only (if any)', talukaexpendature: '', gramexpendature: ''},
];



const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];

const DISTRICT_ELEMENT_DATA2: DistrictElement[] = [
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

const DDO_List: DDOList[] = [
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 1', ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/001', ddoTransactionDate: '18-Sep-2019 15:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 2', ddoProposedAmt: 235.52, ddoReferenceNo: '19-20/BUD/SCE/061', ddoTransactionDate: '16-Sep-2019 10:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 3', ddoProposedAmt: 450.52, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '10-Sep-2019 18:00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 4', ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/007', ddoTransactionDate: '18-Sep-2019 15:48'},
  { checkbox: false, ddoName: 'DDO 5', ddoProposedAmt: 99.52, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 6', ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/14', ddoTransactionDate: '10-Sep-2019 18:00'},
  { checkbox: false, ddoName: 'DDO 7', ddoProposedAmt: 45.52, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '10-Sep-2019 18:00'},
  { checkbox: false, ddoName: 'DDO 8', ddoProposedAmt: 41.52, ddoReferenceNo: '19-20/BUD/SCE/003', ddoTransactionDate: '18-Sep-2019 15:48'},
  { checkbox: false, ddoName: 'DDO 9', ddoProposedAmt: 51.52, ddoReferenceNo: '19-20/BUD/SCE/007', ddoTransactionDate: '16-Sep-2019 10:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 10', ddoProposedAmt: 4510.52, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '16-Sep-2019 10:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 11', ddoProposedAmt: 1000.00, ddoReferenceNo: '19-20/BUD/SCE/096', ddoTransactionDate: '10-Sep-2019 18:00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 12', ddoProposedAmt: 2000.00, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '18-Sep-2019 15:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 13', ddoProposedAmt: 300.00, ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 14', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 15', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 16', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 17', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 18', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 19', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 20', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 21', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 22', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 23', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 24', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 25', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 26', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 27', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 28', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 29', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 30', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 31', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 32', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'DDO 33', ddoProposedAmt: '-', ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48'},
];

type NewType = FormGroup;
@Component({
  selector: 'app-item-continuous-consolidate',
  templateUrl: './item-continuous-consolidate.component.html',
  styleUrls: ['./item-continuous-consolidate.component.css']
})
export class ItemContinuousConsolidateComponent implements OnInit {


  animal: string;
  name: string;
  isBreakupVisible: Boolean = false;
  isAttachmentSelected: Boolean = false;
  selectedIndex: number;
  returnData: number;

  table1 = true;
  table2 = false;
  grantInAid: Boolean;

  hodeApprodData: string;
  values = [
    { 'name': 'Proposed Amount in Percentage', ID: 'D1', 'checked': false },
    { 'name': 'Proposed Amount in Value', ID: 'D2', 'checked': false}
];

  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA1.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];

  districtDataTotal: any = {
    districtTotal: 0,
    gramTotal: 0,
    talukaTotal: 0,
    total: 0
  };
  // tslint:disable-next-line:max-line-length
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) => (a.districtName > b.districtName) ? 1 : ((b.districtName > a.districtName) ? -1 : 0)));
  // districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));
  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

  districtDataSource1 = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA2.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );

  districtColumns2 = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];

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
    {label: 'Item Name', value: 'Organic Farming Cell Staff'},
  ];

  isConsolidateDetailView: Boolean = false;
  isObjectHeadWiseBreakupVisible: Boolean = false;
  readOnlyDetailDataSource: any;


  CSSDetails: any[] = [
    { year: '2016-17', ration: '3.00', general: '10.25', scsp: '10.00', tasp: '10.00', total: '30.25' },
    { year: '2017-18', ration: '100.00', general: '20.00', scsp: '20.00', tasp: '20.00', total: '60.0' },
    { year: '2018-189 ((Till 31-10-2018))', ration: '5.00', general: '30.00', scsp: '30.00', tasp: '30.00', total: '90.00' },
];



dataSourceCSSDetail = new MatTableDataSource(this.CSSDetails);
displayedColumnsSection = ['year', 'ration', 'general', 'scsp', 'tasp', 'total'];
schemDetails: any[] = [
    { details: 'CENTRAL', amount: 23.02, persentage: 1.00, amountscpc: 23.02,
     persentagescpc: 1.00, amounttasp: 23.02, persentagetasp: 1.00, totalSchem: 183.47, },
    { details: 'STATE', amount: 20.02, persentage: 2.00, amountscpc: 300.00,
     persentagescpc: 5.00, amounttasp: 45.85, persentagetasp: 8.00, totalSchem: 365.87, },
    { details: 'TOTAL', amount: 43.04, persentage: 2, amountscpc: 425.00,
     persentagescpc: 2, amounttasp: 81.30, persentagetasp: 0, totalSchem: 649.34, },

];

dataSourceschemDetails = new MatTableDataSource(this.schemDetails);
displayedschemColumnsSection = ['details', 'amount', 'persentage', 'amountscpc',
 'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];

  disableTabs: string;

  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);

  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  @ViewChild('schemeListPaginator') schemeListPaginator: MatPaginator;
  @ViewChild('ddoListPaginator') ddoListPaginator: MatPaginator;

  @ViewChild('schemeListSort') schemeListSort: MatSort;
  @ViewChild('ddoListSort') ddoListSort: MatSort;


  selection = new SelectionModel<SchemeList>(true, []);
  percentage;
  detailHead;

  recoveryDataSource = new MatTableDataSource(recoveryData);
  recoveryBreakupDataSource = new MatTableDataSource(recoveryData);
  subDisplayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'remarks', 'action'];


  dataSourceNew = new MatTableDataSource(ELEMENT_DATA_NEW);
  recoveryDataSourceNew = new MatTableDataSource(ELEMENT_DATA2_NEW);

  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [{
    // dropDown: undefined,
    name: undefined,
    file: undefined,
  }];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // displayedBrowseColumns = ['fileName', 'browse', 'uploadedFileName', 'action'];
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];

  fileBrowseIndex: number;

  date: any = new Date();


  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Other'},
  ];
allMainCodes: any[] = [
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
  {
    value: '3131',
    viewValue:
      '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
  },
  {
    value: '3132',
    viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining'
  },
  {
    value: '3135',
    viewValue: '3135: Dantiwada Agricultural University'
  },

  { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
  {
    value: '3135-14',
    viewValue: '3135-14 : Junagadh Agricultural University'
  },
  {
    value: '3135-15',
    viewValue: '3135-15 : Navsari Agricultural University'
  },
  {
    value: '3135-16',
    viewValue: '3135-16 : Dantiwada Agricultural University'
  },

  { value: '3200', viewValue: '3200 : Contributions' },
  { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
  { value: '3133', viewValue: '3133 : Contributions (a) To Panchayats' },

  { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
  { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
  { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
  {
    value: '3561',
    viewValue: '3561 : Grants for creation of Capital Assets to Panchayats'
  },
  {
    value: '3563',
    viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies'
  }
];
classType: any[] = [
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
classOneCtrl: FormControl = new FormControl();

codeCtrl: FormControl = new FormControl();

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  isExtendedRow = (index, item) => item.extend;

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  /** The label for the checkbox on the passed row */

  // @Input() someProperty: number;
  // @Output() dataChanged = new EventEmitter<string>();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    private toastr: ToastrService,
  ) {
    // this.dataChanged = new EventEmitter();
   }

  ngOnInit() {
    // this.clicked(this.returnData);



    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
    });
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

//   clicked(returnData) {
//     this.dataChanged.emit(returnData);
// }


  getTabIndex (tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // gotoListing() {
  //   this.isSchemeListVisible = true;
  //   this.isConsolidateVisible = false;
  //   this.schemeListDataSource = new MatTableDataSource(this.schemeListDataSource.data);
  //   this.schemeListDataSource.paginator = this.schemeListPaginator;
  //   this.schemeListDataSource.sort = this.schemeListSort;
  // }

  gotoListing() {
    this.router.navigate(['./budget/item-continuous-consolidate-list']);
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
    // if(this.amount.value < event.element.amountproposedbyHOD.value) {

    // }

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

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  loadThirdLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 3).toString() + '-' + (Number(year[0]) - 2).toString();
  }

  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString();
  }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString();
  }

  loadPreviousYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + ' - ' +  year[0].toString();
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }

  currentYear() {
    // const year: any[] = this.headerJson[0].value.split('-');
    // return (Number(year[0]) - 0).toString();
    return this.headerJson[0].value;
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


  calcLastYear(): number {
    let calcLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcLastYear = calcLastYear + Number(element.lastyear);
    });
    return calcLastYear;
  }

  calcNetLastYear(): number {
    let calcNetLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetLastYear = calcNetLastYear + Number(element.lastyear);
    });

    return (this.calcLastYear() - calcNetLastYear);
  }

  calcBreakupNetLastYear(): number {
    let calcBreakupNetLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetLastYear = calcBreakupNetLastYear + Number(element.lastyear);
    });

    return (this.calcLastYear() - calcBreakupNetLastYear);
  }

  calcDistrictAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      // calc = this.calcDistrictProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }


  calcTalukaAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      // calc = this.calcTalukaProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcGramAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      // calc = this.calcGramProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }


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

        // tslint:disable-next-line: triple-equals
        // tslint:disable-next-line: max-line-length
        const sum = parseFloat(this.schemDetails[0].amount == '' ? 0 : this.schemDetails[0].amount) + parseFloat(this.schemDetails[1].amount == '' ? 0 : this.schemDetails[1].amount);
        this.schemDetails[2].amount = sum;

        // tslint:disable-next-line: triple-equals
        // tslint:disable-next-line: max-line-length
        const sumAmountscpc = parseFloat(this.schemDetails[0].amountscpc == '' ? 0 : this.schemDetails[0].amountscpc) + parseFloat(this.schemDetails[1].amountscpc == '' ? 0 : this.schemDetails[1].amountscpc);
        this.schemDetails[2].amountscpc = sumAmountscpc;

        // tslint:disable-next-line: triple-equals
        // tslint:disable-next-line: max-line-length
        const sumamounttasp = parseFloat(this.schemDetails[0].amounttasp == '' ? 0 : this.schemDetails[0].amounttasp) + parseFloat(this.schemDetails[1].amounttasp == '' ? 0 : this.schemDetails[1].amounttasp);
        this.schemDetails[2].amounttasp = sumamounttasp;

    }

    return returnData;
}




  basicPay() {
  }

  amountValue() {
  }


  isVisible;
  radioChange(event) {
    return this.isVisible = event.value;
}

  loadConsolidateDetailView (data) {
    this.router.navigate(['./budget/standing-charge-consolidate-view']);
  }

  submitToNextLevel(): void {
    // const employees: string[] = [
    //   'Satendra Zala',
    //   'Hardik Chaudhary',
    //   'C.K Brahmbhatt',
    // ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {

      // StandingChargeConsolidateForwardDialogComponent
      width: '2700px',
      height: '600px'
      // data: employees
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


  viewBreakup (element) {

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
      element.objectHead === '3561' ) {
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


    console.log(element);
    this.isBreakupVisible = true;
    this.isObjectHeadWiseBreakupVisible = true;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA_NEW.filter(item => item.objectHead.indexOf(element.objectHead) > -1)
    );
  }
  goBack() {
    this.isObjectHeadWiseBreakupVisible = false;
  }

  hideBreakup() {
    this.readOnlyDetailDataSource = new MatTableDataSource();
    this.isBreakupVisible = false;
  }

  openHistory(data) {

    // const arra = this.toggleContainer.nativeElement.classList[2];
    // console.log(arra);
    data.isSelected = true;
    // this.toggleContainer.nativeElement.classList.add('toggle-bar');
    // this.historyDataSource = new MatTableDataSource(HISTORY_DATA);
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

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
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

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  onBrowseSelectChange() {}

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
            // dropDown: undefined,
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

  deleteObjectHeadRow(index) {
    this.dataSourceNew.data.splice(index, 1);
    this.dataSourceNew = new MatTableDataSource(this.dataSourceNew.data);
  }

  deleteRecObjectHeadRow(index) {
    this.recoveryDataSourceNew.data.splice(index, 1);
    this.recoveryDataSourceNew = new MatTableDataSource(this.recoveryDataSourceNew.data);
  }

  deleteObjectHeadRowBreakUp(index) {
    this.objectBreakupDataSource.data.splice(index, 1);
    this.objectBreakupDataSource = new MatTableDataSource(this.objectBreakupDataSource.data);
  }

  deleteRecObjectHeadRowBreakUpRec(index) {
    this.recoveryBreakupDataSource.data.splice(index, 1);
    this.recoveryBreakupDataSource = new MatTableDataSource(this.recoveryBreakupDataSource.data);
  }
calcActualsThirdLastYear() {
        let calcActualsThirdLastYear = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcActualsThirdLastYear =
          calcActualsThirdLastYear + Number(element.actualsThirdLastYear);
        });
        return calcActualsThirdLastYear;
      }

      calcActualsSecondLastYear() {
        let calcActualsSecondLastYear = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcActualsSecondLastYear =
            calcActualsSecondLastYear + Number(element.actualsSecondLastYear);
        });
        return calcActualsSecondLastYear;
      }

      calcLastYear1() {
        let calcLastYear = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcLastYear =
            calcLastYear + Number(element.lastYear);
        });
        return calcLastYear;
      }

      calcCriteria() {
        let calcCriteria = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcCriteria =
            calcCriteria + Number(element.criteria);
        });
        return calcCriteria;
      }

      calcEndBaseLine() {
        let calcEndBaseLine = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcEndBaseLine =
            calcEndBaseLine + Number(element.endBaseLine);
        });
        return calcEndBaseLine;
      }

      calcImprovementFifteen() {
        let calcImprovementFifteen = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcImprovementFifteen =
            calcImprovementFifteen + Number(element.improvementFifteen);
        });
        return calcImprovementFifteen;
      }

      calcImprovementSixteen() {
        let calcImprovementSixteen = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcImprovementSixteen =
            calcImprovementSixteen + Number(element.improvementSixteen);
        });
        return calcImprovementSixteen;
      }

      calcImprovementEighteen() {
        let calcImprovementEighteen = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcImprovementEighteen =
            calcImprovementEighteen + Number(element.improvementEighteen);
        });
        return calcImprovementEighteen;
      }

      calcCurrentYear1() {
        let calcCurrentYear = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcCurrentYear =
            calcCurrentYear + Number(element.currentYear);
        });
        return calcCurrentYear;
      }

      calcAmountProposedByHod() {
        let calcAmountProposedByHod = 0;
        this.dataSourceNew.data.forEach((element, index) => {
            calcAmountProposedByHod =
            calcAmountProposedByHod + Number(element.amountProposedByHod);
        });
        return calcAmountProposedByHod;
      }
}
