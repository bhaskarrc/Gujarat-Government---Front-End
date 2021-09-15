
import { Component, OnInit, AfterViewInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import * as cloneDeep from 'lodash/cloneDeep';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../standing-charge-consolidate-history/standing-charge-consolidate-history.component';
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
  status: string;
  chargedVoted: string;
}

export interface StandingChargeElement {
  isSelected: boolean;
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
  ConsolidateProposedAmountByHod: number | string;
  ConsolidateProposedAmountByDepartment: number | string;
  amountWorkOutByFormula: number | string;
  amountproposedbyHOD: number | '';
  percentage: number | string;
  remarks: string | '';
  isBreakup: Boolean;
  toolTipData?: string | '';
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



const scheme_List: SchemeList[] = [
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Revenue',
    chargedVoted: 'Charged', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '01', noOfDDO: 10,
    consolidatedAmt: 451.52, referenceNo: '19-20/BUD/SCE/001', status: 'Pending'
  },
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Revenue',
    chargedVoted: 'Voted', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '02',
    noOfDDO: 4, consolidatedAmt: 451.52, referenceNo: '-', status: 'Pending'
  },
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Capital',
    chargedVoted: 'Charged', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '03', noOfDDO: 6,
    consolidatedAmt: 522.45, referenceNo: '-', status: 'Pending'
  },
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Revenue',
    chargedVoted: 'Voted', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '04', noOfDDO: 2,
    consolidatedAmt: 522.45, referenceNo: '-', status: 'Pending'
  },
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Capital',
    chargedVoted: 'Charged', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '05', noOfDDO: 8,
    consolidatedAmt: 522.45, referenceNo: '-', status: 'Pending'
  },
  {
    financialYear: '2018-2019', demand: '001', bpn: '03', revenueCapital: 'Revenue',
    chargedVoted: 'Voted', major: '2049', subMajor: '01', minor: '102', sub: '02', detail: '06', noOfDDO: 5,
    consolidatedAmt: 522.45, referenceNo: '-', status: 'Pending'
  },
];

const recoveryData: StandingChargeElement[] = [
  { objecthead: '0101', thirdlastyear: 200.15, secondlastyear: 1.79, lastyear: 251, currentyear: 356,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '', amountproposedbyHOD: 452.23, remarks: '', isBreakup: false, isSelected: false,  percentage: 3 },
  { objecthead: '0102', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '', amountproposedbyHOD: 452.23, remarks: '', isBreakup: false, isSelected: false,  percentage: 3, },
];

const establishmentTabData: EstablishmentElement[] = [
  {
    postType: 'A. Gazetted Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: '1) Permanent Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: 'Filled', noOfPost: 0, basicPay: 10.00, DA: 2.05, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Vacant', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Total (1)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: '(2) Temporany Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: 'Filled', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Vacant', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Total (2)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: 'Total (A)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: 'B. Non-Gazetted Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: '1) Permanent Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: 'Filled', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Vacant', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Total (1)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: '(2) Temporary Post', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: true
  },
  {
    postType: 'Filled', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Vacant', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: 'No Remarks For this field', extend: false
  },
  {
    postType: 'Total (2)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: 'Total (B)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00, CLA: 0.00,
    OA: 0.00, total: 0.00, remarks: '', extend: false
  },
  {
    postType: 'Grand Total (A+B)', noOfPost: 0, basicPay: 0.00, DA: 0.00, HRA: 0.00,
    CLA: 0.00, OA: 0.00, total: 0.00, remarks: '', extend: false
  },
];

const establishmentSubTable: EstablishmentSubElement[]  = [
  {post1: 'No of Post for Class 1', noOfPost1: 0, approximateEstimate1: 1000.00,
  post2: 'No of Post for Class 1', noOfPost2: 0, approximateEstimate2: 1000.00},
  {post1: 'No of Post for Class 2', noOfPost1: 0, approximateEstimate1: 100.00,
  post2: 'No of Post for Class 2', noOfPost2: 0, approximateEstimate2: 100.00},
  {post1: 'No of Post for Class 3', noOfPost1: 0, approximateEstimate1: 5000.00,
  post2: 'No of Post for Class 3', noOfPost2: 0, approximateEstimate2: 5000.00},
  {post1: 'No of Post for Class 4', noOfPost1: 0, approximateEstimate1: 5800.00,
  post2: 'No of Post for Class 4', noOfPost2: 0, approximateEstimate2: 5800.00},
  {post1: 'Fix Pay', noOfPost1: 0, approximateEstimate1: 6910.00,
  post2: 'Fix Pay', noOfPost2: 0, approximateEstimate2: 6910.00},
  {post1: 'Total', noOfPost1: 0, approximateEstimate1: 18810.00,
  post2: 'Total', noOfPost2: 0, approximateEstimate2: 18810.00},
];

const rojmadarWorkCharge: RojmadarElement[] = [
  { typeOfExpenditure: 'Rojmdar', noOfPost: 5, salaries: 100.00, OA: 10.00, total: 110.00, remarks: 'Approved' },
  { typeOfExpenditure: 'Work Charge Establishment', noOfPost: 2, salaries: 155.00, OA: 15.00, total: 170.00, remarks: '' },
];

const outSourceData: OutSourceElement[] = [
  { serviceType: 'Testing', budgetEstimate: 0.00 },
];

const leaveEncashmentData: LeaveEncashmentElement[] = [
  { nameOfOfficer: 'Mr. Shakil Bheda', designation: 'HOD', basicSalary: 25.00, proposedAmount: 60.00, dateOfRetirement: '12-Aug-2019' },
];

const ELEMENT_DATA: StandingChargeElement[] = [
  {
    objecthead: '0101',  thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '', amountproposedbyHOD: '',
    remarks: '', isBreakup: false, isSelected: false, toolTipData: '0101 : Pay of Officers Including Grade Pay ' , percentage: 3,
  },
  {
    objecthead: '0102', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '', amountproposedbyHOD: '',
     remarks: '', isBreakup: true, isSelected: false, toolTipData: '0102 : Pay of Establishment Including Grade Pay ', percentage: 3,
  },
  {
    objecthead: '0103', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '0103 : Dearness Allowance' , percentage: 11,
  },
  {
    objecthead: '0104', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 1230, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '0104 : Agricultural University' , percentage: 5,
  },
  {
    objecthead: '1100', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 1230, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24, amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '1100 : Agricultural University' , percentage: 5,
  },
  {
    objecthead: '1300', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 1230, ConsolidateProposedAmountByHod: 351.25, ConsolidateProposedAmountByDepartment: 456.24,amountWorkOutByFormula: '100', amountproposedbyHOD: '',
     remarks: '', isBreakup: false, isSelected: false, toolTipData: '1300 : Anand Agricultural University' , percentage: 5,
  }
  // {
  //   objecthead: '3135-14', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: true, isSelected: false, toolTipData: '3135-14 : Junagadh Agricultural University'
  // },
  // {
  //   objecthead: '3135-15', thirdlastyear: 470, secondlastyear: 12.07, lastyear: 251, currentyear: 541, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: true, isSelected: false, toolTipData: '3135-15 : Navsari Agricultural University'
  // },
  // {
  //   objecthead: '3135-16', thirdlastyear: 954, secondlastyear: 14.67, lastyear: 251, currentyear: 844, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: false, isSelected: false, toolTipData: '3135-16 : Dantiwada Agricultural University'
  // },
  // {
  //   objecthead: '3200', thirdlastyear: 362, secondlastyear: 15.94, lastyear: 251, currentyear: 111, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: false, isSelected: false, toolTipData: '3200 : Contributions'
  // },
  // {
  //   objecthead: '3241', thirdlastyear: 321, secondlastyear: 18.94, lastyear: 251, currentyear: 544, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: false, isSelected: false, toolTipData: '3241 : Contributions (a) To Panchayats'
  // },
  // {
  //   objecthead: '3243', thirdlastyear: 752, secondlastyear: 20.97, lastyear: 251, currentyear: 544, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: false, isSelected: false, toolTipData: '3243 : Contributions (b) To Local Bodies'
  // },
  // {
  //   objecthead: '3153', thirdlastyear: 562, secondlastyear: 22.97, lastyear: 251, currentyear: 874, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: true, isSelected: false, toolTipData: '3353 : Subsidies (b) To Local Bodies'
  // },
  // {
  //   objecthead: '3161', thirdlastyear: 241, secondlastyear: 24.30, lastyear: 251, currentyear: 812, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: false, isSelected: false, toolTipData: '3561 : Grants for creation of Capital Assets to Panchayats'
  // },
  // {
  //   objecthead: '3363', thirdlastyear: 654, secondlastyear: 26.15, lastyear: 251, currentyear: 248, last8month: 457,
  //   first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: '',
  //    remarks: '', isBreakup: true, isSelected: false, toolTipData: '3563 : Grants for creation of Capital Assets to Local Bodies'
  // }
];

const OBJECT_HEAD_BREAKUP_DATA: ObjectHeadBreakupElement[] = [
  {
    objecthead: '6100', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6200', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6300', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '6400', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
  },
  {
    objecthead: '7000', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountWorkOutByFormula: '', amountproposedbyHOD: '', remarks: ''
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
  { id: 34,  expendature: '', districtName: 'State Level Only (if any)', talukaexpendature: '', gramexpendature: ''},
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
  selector: 'app-standing-charge-consolidate-fd',
  templateUrl: './standing-charge-consolidate-fd.component.html',
  styleUrls: ['./standing-charge-consolidate-fd.component.css']
})
export class StandingChargeConsolidateFdComponent implements OnInit, AfterViewInit {
  animal: string;
  name: string;
  isBreakupVisible: Boolean = false;
  isAttachmentSelected: Boolean = false;
  selectedIndex: number;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks'];

  districtDataTotal: any = {
    districtTotal: 0,
    gramTotal: 0,
    talukaTotal: 0,
    total: 0
  };
  // tslint:disable-next-line:max-line-length
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA.sort((a, b) => (a.districtName > b.districtName) ? 1 : ((b.districtName > a.districtName) ? -1 : 0)));
  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

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

  /** Whether the number of selected elements matches the total number of rows. */
  isSchemeListVisible: Boolean = true;
  isConsolidateVisible: Boolean = false;

  isConsolidateDetailView: Boolean = false;
  isObjectHeadWiseBreakupVisible: Boolean = false;
  readOnlyDetailDataSource: any;

  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);
  // tslint:disable-next-line:member-ordering
  objectHeadBreakupColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks'];

  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  @ViewChild('schemeListPaginator') schemeListPaginator: MatPaginator;
  @ViewChild('ddoListPaginator') ddoListPaginator: MatPaginator;

  @ViewChild('schemeListSort') schemeListSort: MatSort;
  @ViewChild('ddoListSort') ddoListSort: MatSort;

  // isProcessed: Boolean = false;

  schemeListDataSource = new MatTableDataSource(scheme_List);
  selection = new SelectionModel<SchemeList>(true, []);
  // schemeListColumn: string[] = ['srNo', 'financialYear', 'schemeName', 'noOfDDO', 'consolidatedAmt', 'action'];
  schemeListColumn: string[] = ['srNo', 'financialYear', 'demand', 'bpn', 'revenueCapital',
  'chargedVoted', 'major', 'subMajor', 'minor', 'sub', 'detail', 'noOfDDO', 'consolidatedAmt',
  'referenceNo', 'status', 'action'];

  consolidateDataSource = new MatTableDataSource(ELEMENT_DATA);
  consolidateColumns: string[] = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'ConsolidateProposedAmountByHod', 'ConsolidateProposedAmountByDepartment', 'amountWorkOutByFormula', 'amountproposedbyHOD', 'remarks'];

  recoveryDataSource = new MatTableDataSource(recoveryData);
  recoveryBreakupDataSource = new MatTableDataSource(recoveryData);
  subDisplayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'remarks', 'action'];

  establishmentDataSource = new MatTableDataSource(establishmentTabData);
  establishmentColumns = ['postType', 'noOfPost', 'basicPay', 'DA', 'HRA', 'CLA', 'OA', 'total', 'remarks'];

  subEstablishmentDataSource = new MatTableDataSource(establishmentSubTable);
  establishmentSubTableColumns = ['post1', 'noOfPost1', 'approximateEstimate1', 'post2', 'noOfPost2', 'approximateEstimate2'];

  rojamadarDataSource = new MatTableDataSource(rojmadarWorkCharge);
  rojamdarColumns = ['typeOfExpenditure', 'noOfPost', 'salaries', 'OA', 'total', 'remarks'];

  outSourceDataSource = new MatTableDataSource(outSourceData);
  outSourceColumns = ['serviceType', 'budgetEstimate'];

  leaveEncashmentDataSource = new MatTableDataSource(leaveEncashmentData);
  leaveEncashmentColumns = ['nameOfOfficer', 'designation', 'basicSalary', 'proposedAmount', 'dateOfRetirement'];

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
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];

  fileBrowseIndex: number;

  date: any = new Date();
  searchListForm: NewType;

  finYear_list: any[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  departments: any[] = [
    { value: 'Finance Department', viewValue: 'Finance Department' },
    { value: 'Education Department', viewValue: 'Education Department' },
    { value: 'Home Department', viewValue: 'Home Department' }
  ];

  DDO_Name_list: any[] = [
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

  bpn_list: any[] = [
    {value: '1 : GREEN BOOK', viewValue: '1 : GREEN BOOK'},
    {value: '2 : RECEIPT UNDER CONSOLIDATED FUND', viewValue: '2 : RECEIPT UNDER CONSOLIDATED FUND'},
    {
      value: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT',
      viewValue: '3 : AGRICULTURE, FARMERS WELFARE & CO-OPERATION DEPARTMENT'
    },
  ];

  revenue_capital_list: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
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

  subHead_list: any[] = [
    { value: '12 : Welfare of Schedule Castes', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '13 : Welfare of Scheduled Tribes', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '15 : Soil and Water Conservation', viewValue: '15 : Soil and Water Conservation' },
    { value: '16 : Community Development', viewValue: '16 : Community Development' },
    { value: '19 : Technical Education Polytechnics', viewValue: '19 : Technical Education Polytechnics' },
  ];
  
  detailHead_list: any[] = [
    { value: '0 : HLT-28  Leprosy Control Programme', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    {
      value: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students',
      viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students'
    },
    { value: '0 : VKY-9 Umbrella Scheme', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];

  status_list: any[] = [
    {value: 'Pending', viewValue: 'Pending'},
    {value: 'Processed', viewValue: 'Processed'},
  ];

  chargedVoted_list: any[] = [
    {value: 'Charged', viewValue: 'Charged'},
    {value: 'Voted', viewValue: 'Voted'},
    {value: 'Both', viewValue: 'Both'},
  ];

  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
  ];

  // chargedVotedOptions: any[] = [
  //   {value: '1', viewValue: 'Charged'},
  //   {value: '2', viewValue: 'Voted'},
  //   {value: '3', viewValue: 'Both'},
  // ];

  departmentNameCtrl: FormControl = new FormControl();

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  ddoNameCodeCtrl: FormControl = new FormControl();
  filteredDDONameCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  bpnCodeCtrl: FormControl = new FormControl();
  filteredBPNCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  revenueCapitalCtrl: FormControl = new FormControl();
  filteredRevenueCapital: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCodeCtrl: FormControl = new FormControl();
  filteredSubMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCodeCtrl: FormControl = new FormControl();
  filteredMinorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subHeadCodeCtrl: FormControl = new FormControl();
  filteredSubHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  detailHeadCodeCtrl: FormControl = new FormControl();
  filteredDetailHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  statusCodeCtrl: FormControl = new FormControl();
  filteredStatusCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  chargedVotedCodeCtrl: FormControl = new FormControl();
  filteredChargedVotedCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  isExtendedRow = (index, item) => item.extend;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.schemeListDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.schemeListDataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SchemeList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.financialYear + 1}`;
    // this.isProcessed = (cnt > 0) ? true : false;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.createForm();

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      });

    this.filteredDDONameCode.next(this.DDO_Name_list.slice());
    this.ddoNameCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.DDO_Name_list, this.ddoNameCodeCtrl.value, this.filteredDDONameCode);
      });

    this.filteredDemandCode.next(this.demand_list.slice());
    this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      });

    this.filteredBPNCode.next(this.bpn_list.slice());
    this.bpnCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.bpn_list, this.bpnCodeCtrl.value, this.filteredBPNCode);
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

    this.filteredSubHeadCode.next(this.subHead_list.slice());
    (this.subHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.subHead_list, this.subHeadCodeCtrl.value, this.filteredSubHeadCode);
      }));

    this.filteredDetailHeadCode.next(this.detailHead_list.slice());
    (this.detailHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.detailHead_list, this.detailHeadCodeCtrl.value, this.filteredDetailHeadCode);
      }));

    this.filteredStatusCode.next(this.status_list.slice());
    (this.statusCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.status_list, this.statusCodeCtrl.value, this.filteredStatusCode);
      }));

    this.filteredChargedVotedCode.next(this.chargedVoted_list.slice());
    (this.chargedVotedCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.chargedVoted_list, this.chargedVotedCodeCtrl.value, this.filteredChargedVotedCode);
      }));

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
    });
  }

  ngAfterViewInit() {
    this.schemeListDataSource.sort = this.schemeListSort;
    this.schemeListDataSource.paginator = this.schemeListPaginator;
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewFDExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.schemeListDataSource.filter = filterValue;
  }

  createForm() {
    this.searchListForm = this.fb.group({
      finYear: [''],
      departmentName: [''],
      ddoName: [''],
      demandCode: [''],
      bpnCode: [''],
      revenueCapital: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHeadCode: [''],
      detailHeadCode: [''],
      statusCode: [''],
      referenceCode: [''],
      chargedVotedCode: [''],
    });
  }

  loadSchemeWiseDDOList (data) {
    // this.isSchemeListVisible = false;
    this.router.navigate(['./ddo-list', {schemeName: data.schemeName, ddoCount: data.noOfDDO}], {relativeTo: this.route});
  }
  saveEstimate() {}
  calConsolidatedDDOAmt(item) {
    // console.log(item);
    const list = cloneDeep(DDO_List).slice(0, item.noOfDDO);
    let calConsolidatedDDOAmt = 0;
    list.forEach(obj => {
      if (obj.ddoProposedAmt !== '-') {
        calConsolidatedDDOAmt = calConsolidatedDDOAmt + Number(obj.ddoProposedAmt);
      }
    });

    return calConsolidatedDDOAmt;
  }

  loadDDOList (data) {
    // this.isDDoListVisible = true;
    // this.isSchemeListVisible = false;
    this.router.navigate(['./ddo-list', {schemeName: data.schemeName, ddoCount: data.noOfDDO}], {relativeTo: this.route});
  }

  goToSchemeList() {
    if (this.isObjectHeadWiseBreakupVisible) {
      this.isConsolidateVisible = true;
      this.isObjectHeadWiseBreakupVisible = false;
      this.isSchemeListVisible = false;
      this.isConsolidateDetailView = true;
    } else if (this.isConsolidateDetailView) {
      this.gotoListing();
    }
  }

  getTabIndex (tabIndex) {
    this.selectedIndex = tabIndex;
  }

  gotoListing() {
    this.isSchemeListVisible = true;
    this.isConsolidateVisible = false;
    this.schemeListDataSource = new MatTableDataSource(this.schemeListDataSource.data);
    this.schemeListDataSource.paginator = this.schemeListPaginator;
    this.schemeListDataSource.sort = this.schemeListSort;
  }

  // tslint:disable-next-line:no-shadowed-variable
  consolidateView(element) {
    // console.log(element);
    this.isConsolidateVisible = true;
    this.isConsolidateDetailView = true;
    this.isSchemeListVisible = false;
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
    return (Number(year[0]) - 1).toString() + " - " +  year[0].toString();
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

  calcAmtProposedByHOD(data): number {
    let calcAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcAmtProposedByHOD = calcAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return calcAmtProposedByHOD;
  }
  ConsolidateProposedAmountByHod(data): number {
    let ConsolidateProposedAmountByHod = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      ConsolidateProposedAmountByHod = ConsolidateProposedAmountByHod + Number(element.ConsolidateProposedAmountByHod);
    });
    return ConsolidateProposedAmountByHod;
  }
  ConsolidateProposedAmountByDepartment(data): number {
    let ConsolidateProposedAmountByDepartment = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      ConsolidateProposedAmountByDepartment = ConsolidateProposedAmountByDepartment + Number(element.ConsolidateProposedAmountByDepartment);
    });
    return ConsolidateProposedAmountByDepartment;
  }
  calcBreakupAmtProposedByHOD(): number {
    let calcBreakupAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.objectBreakupDataSource.data.forEach((element, index) => {
      calcBreakupAmtProposedByHOD = calcBreakupAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return calcBreakupAmtProposedByHOD;
  }

  calcNetAmtProposedByHOD(data): number {
    let calcNetAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetAmtProposedByHOD = calcNetAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return (this.calcAmtProposedByHOD(data) - calcNetAmtProposedByHOD);
  }

  calcBreakupNetAmtProposedByHOD(data): number {
    let calcBreakupNetAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetAmtProposedByHOD = calcBreakupNetAmtProposedByHOD + Number(element.amountproposedbyHOD);
    });
    return (this.calcBreakupAmtProposedByHOD() - calcBreakupNetAmtProposedByHOD);
  }

  calcAmtProposedByDDO(): number {
    let calcAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcAmtProposedByDDO = calcAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });
    return calcAmtProposedByDDO;
  }
  amountWorkOutBy(): number {
    let amountWorkOutBy = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element) => {
      amountWorkOutBy = amountWorkOutBy + Number((element.objecthead == '0104'  || element.objecthead == '1100' || element.objecthead == '1300' ? element.lastyear : element.amountproposedbyDDO)) + (Number((element.objecthead == '0104'  || element.objecthead == '1100' || element.objecthead == '1300' ? element.lastyear : element.amountproposedbyDDO)) * Number(element.percentage) /100);
    });
    return amountWorkOutBy;
  }
  calcNetamountWorkOutBy(): number {
    let calcNetamountWorkOutBy = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element) => {
      calcNetamountWorkOutBy = calcNetamountWorkOutBy + Number((element.objecthead == '0104'  || element.objecthead == '1100' || element.objecthead == '1300' ? element.lastyear : element.amountproposedbyDDO)) + (Number((element.objecthead == '0104'  || element.objecthead == '1100' || element.objecthead == '1300' ? element.lastyear : element.amountproposedbyDDO)) * Number(element.percentage)/ 100);
    });
    return (this.amountWorkOutBy() - calcNetamountWorkOutBy);
  }
  calcNetAmtProposedByDDO(): number {
    let calcNetAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetAmtProposedByDDO = calcNetAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });

    return (this.calcAmtProposedByDDO() - calcNetAmtProposedByDDO);
  }

  calcBreakupNetAmtProposedByDDO(): number {
    let calcBreakupNetAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetAmtProposedByDDO = calcBreakupNetAmtProposedByDDO + Number(element.amountproposedbyDDO);
    });

    return (this.calcAmtProposedByDDO() - calcBreakupNetAmtProposedByDDO);
  }

  calcCol7_3(): number {
    let calcCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCol7_3 = calcCol7_3 + (Number(element.first4month) * 3);
    });
    return calcCol7_3;
  }

  calcNetCol7_3(): number {
    let calcNetCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCol7_3 = calcNetCol7_3 + (Number(element.first4month) * 3);
    });

    return (this.calcCol7_3() - calcNetCol7_3);
  }

  calcBreakupNetCol7_3(): number {
    let calcBreakupNetCol7_3 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCol7_3 = calcBreakupNetCol7_3 + (Number(element.first4month) * 3);
    });

    return (this.calcCol7_3() - calcBreakupNetCol7_3);
  }

  calcCol6_15(): number {
    let calcCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCol6_15 = calcCol6_15 + (Number(element.last8month) * 1.5);
    });
    return calcCol6_15;
  }

  calcNetCol6_15(): number {
    let calcNetCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCol6_15 = calcNetCol6_15 + (Number(element.last8month) * 1.5);
    });

    return (this.calcCol6_15() - calcNetCol6_15);
  }

  calcBreakupNetCol6_15(): number {
    let calcBreakupNetCol6_15 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCol6_15 = calcBreakupNetCol6_15 + (Number(element.last8month) * 1.5);
    });

    return (this.calcCol6_15() - calcBreakupNetCol6_15);
  }

  calcTotalof8and4Month(): number {
    let calcTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcTotalof8and4Month = calcTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });
    return calcTotalof8and4Month;
  }

  calcNetTotalof8and4Month(): number {
    let calcNetTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetTotalof8and4Month = calcNetTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });

    return (this.calcTotalof8and4Month() - calcNetTotalof8and4Month);
  }

  calcBreakupNetTotalof8and4Month(): number {
    let calcBreakupNetTotalof8and4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetTotalof8and4Month = calcBreakupNetTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
    });

    return (this.calcTotalof8and4Month() - calcBreakupNetTotalof8and4Month);
  }

  calcFirst4Month(): number {
    let calcFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcFirst4Month = calcFirst4Month + Number(element.first4month);
    });
    return calcFirst4Month;
  }

  calcNetFirst4Month(): number {
    let calcNetFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetFirst4Month = calcNetFirst4Month + Number(element.first4month);
    });

    return (this.calcFirst4Month() - calcNetFirst4Month);
  }

  calcBreakupNetFirst4Month(): number {
    let calcBreakupNetFirst4Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetFirst4Month = calcBreakupNetFirst4Month + Number(element.first4month);
    });

    return (this.calcFirst4Month() - calcBreakupNetFirst4Month);
  }

  calcLast8Month(): number {
    let calcLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcLast8Month = calcLast8Month + Number(element.last8month);
    });
    return calcLast8Month;
  }

  calcNetLast8Month(): number {
    let calcNetLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetLast8Month = calcNetLast8Month + Number(element.last8month);
    });

    return (this.calcLast8Month() - calcNetLast8Month);
  }

  calcBreakupNetLast8Month(): number {
    let calcBreakupNetLast8Month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetLast8Month = calcBreakupNetLast8Month + Number(element.last8month);
    });

    return (this.calcLast8Month() - calcBreakupNetLast8Month);
  }

  calcCurrentYear(): number {
    let calcCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcCurrentYear = calcCurrentYear + Number(element.currentyear);
    });
    return calcCurrentYear;
  }

  calcNetCurrentYear(): number {
    let calcNetCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetCurrentYear = calcNetCurrentYear + Number(element.currentyear);
    });

    return (this.calcCurrentYear() - calcNetCurrentYear);
  }

  calcBreakupNetCurrentYear(): number {
    let calcBreakupNetCurrentYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetCurrentYear = calcBreakupNetCurrentYear + Number(element.currentyear);
    });

    return (this.calcCurrentYear() - calcBreakupNetCurrentYear);
  }

  calcLastYear(): number {
    let calcLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
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

  calcSecondLastYear(): number {
    let calcSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcSecondLastYear = calcSecondLastYear + Number(element.secondlastyear);
    });
    return calcSecondLastYear;
  }
  calcAmtProposedBy(): number {
    let calcSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcSecondLastYear = calcSecondLastYear + Number(element.secondlastyear);
    });
    return calcSecondLastYear;
  }
  calcNetSecondLastYear(): number {
    let calcNetSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetSecondLastYear = calcNetSecondLastYear + Number(element.secondlastyear);
    });

    return (this.calcSecondLastYear() - calcNetSecondLastYear);
  }

  calcBreakupNetSecondLastYear(): number {
    let calcBreakupNetSecondLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetSecondLastYear = calcBreakupNetSecondLastYear + Number(element.secondlastyear);
    });

    return (this.calcSecondLastYear() - calcBreakupNetSecondLastYear);
  }

  calcThirdLastYear(): number {
    let calcThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.consolidateDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.thirdlastyear);
    });
    return calcThirdLastYear;
  }


  calcHODProposedAmount(data): number {
    let calcHODProposedAmount = 0;
    const calcAmtProposedByHOD = this.calcAmtProposedByHOD([]);

    this.readOnlyDetailDataSource.data.forEach((_element, index) => {
      if (data && (_element.objecthead === data.objecthead)) {
        _element.amountproposedbyHOD = calcAmtProposedByHOD ;
      }
    });
    // tslint:disable-next-line: no-shadowed-variable
    this.objectBreakupDataSource.data.forEach((element, index) => {
      calcHODProposedAmount = calcHODProposedAmount + Number(element.amountproposedbyHOD);
    });

    this.consolidateDataSource.data.forEach((el, idx) => {
      if (data && (el.objecthead === data.objecthead)) {
        el.amountproposedbyHOD = calcHODProposedAmount;
      }
    });
    return calcHODProposedAmount;
  }

  calcDistrictProposedAmount(data) {
    let calcDistrictProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcDistrictProposedAmount = ((data.expendature * amountDiff) / 100) + data.expendature;
    return calcDistrictProposedAmount;
  }

  calcDistrictAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcDistrictProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcTalukaProposedAmount(data) {
    let calcTalukaProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcTalukaProposedAmount = ((data.talukaexpendature * amountDiff) / 100) + data.talukaexpendature;
    return calcTalukaProposedAmount;
  }
  // calcAmtProposedByDDOPersentage(data) {
  //   let amountDiff = 0;
  //   const calcHODProposedAmount = this.calcHODProposedAmount([]);
  //   this.consolidateDataSource.data.forEach((element, index) => {
  //     amountDiff = Number(calcHODProposedAmount * 3) / 100;
  //   });
  //   return amountDiff;
  // }
  calcTalukaAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcTalukaProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcGramProposedAmount(data) {
    let calcGramProposedAmount = 0;
    let amountDiff = 0;
    const calcHODProposedAmount = this.calcHODProposedAmount([]);

    // tslint:disable-next-line:no-shadowed-variable
    this.readOnlyDetailDataSource.data.forEach((element, index) => {
      amountDiff = (((calcHODProposedAmount - Number(element.amountproposedbyDDO)) * 100 ) / Number(element.amountproposedbyDDO));
    });

    calcGramProposedAmount = ((data.gramexpendature * amountDiff) / 100) + data.gramexpendature;
    return calcGramProposedAmount;
  }

  calcGramAmt() {
    let calc = 0, temp = 0;
    this.districtDataSource.data.forEach(obj => {
      calc = 0;
      calc = this.calcGramProposedAmount(obj);
      temp = +(temp + calc);
    });
    return temp;
  }

  calcNetThirdLastYear(): number {
    let calcNetThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetThirdLastYear = calcNetThirdLastYear + Number(element.thirdlastyear);
    });

    return (this.calcThirdLastYear() - calcNetThirdLastYear);
  }

  calcBreakupNetThirdLastYear(): number {
    let calcBreakupNetThirdLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryBreakupDataSource.data.forEach((element, index) => {
      calcBreakupNetThirdLastYear = calcBreakupNetThirdLastYear + Number(element.thirdlastyear);
    });

    return (this.calcThirdLastYear() - calcBreakupNetThirdLastYear);
  }

  // tslint:disable-next-line:no-shadowed-variable
  showObjectHeadBrakup(element) {
    this.isObjectHeadWiseBreakupVisible = true;
    this.isConsolidateDetailView = false;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
  }

  loadConsolidateDetailView (data) {
    this.router.navigate(['standing-charge-consolidate-view']);
  }

  submitToNextLevel(): void {
    // const employees: string[] = [
    //   'Satendra Zala',
    //   'Hardik Chaudhary',
    //   'C.K Brahmbhatt',
    // ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(StandingChargeConsolidateForwardDialogFdComponent, {

      // StandingChargeConsolidateForwardDialogFdComponent
      width: '400px',
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
      this.closeHistory();
    });
  }

  closeHistory() {
    this.dataSource.data.forEach(obj => {
      obj.isSelected = false;
    });
  }

  showConfirmationPopup() {
    const dialogRef = this.dialog.open(DialogOverviewFDExampleDialog, {
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

  clearForm() {
    this.searchListForm.reset();
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
  
}



@Component({
  selector: 'app-standing-charge-consolidate-forward-dialog',
  templateUrl: 'standing-charge-consolidate-forward-dialog.html',
})
export class StandingChargeConsolidateForwardDialogFdComponent implements OnInit {

  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
  };

  action_list: any[] = [
    { value: 'Forward', viewValue: 'Forward' },
    { value: 'Return', viewValue: 'Return' },
    { value: 'Approve', viewValue: 'Approve' },
  ];

  forwardTo_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala' },
    { value: '2', viewValue: 'Hardik Chaudhary' },
    { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  forwardToCodeCtrl: FormControl = new FormControl();
  filteredforwardToCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeConsolidateForwardDialogFdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();
    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    (this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.action_list, this.actionCtrl.value, this.filteredAction);
      }));
    if (this.forwardTo_list) {
      this.filteredforwardToCode.next(this.forwardTo_list.slice());
    }
    (this.forwardToCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.forwardTo_list, this.forwardToCodeCtrl.value, this.filteredforwardToCode);
      }));
    // console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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

  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      forwardToCode: ['', Validators.required],
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  forwardConsolidate() {

  }

}


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewFDExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewFDExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onCancel(){

  }

  onSave(){

  }
  
}

