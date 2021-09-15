import { datasource } from './../../delegation/delegation.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import {StandingChargeElementView, ObjectHeadBreakupElementView, DistrictElementView, DistrictElement1View } from 'src/app/model/budget';

export interface DistrictElement2 {
  id: number;
  districtName: string;
  expendature: string;
  talukaexpendature: string;
  gramexpendature: string;
}

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

const ELEMENT_DATA: StandingChargeElementView[] = [
  {
    objecthead: '3131', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3132', thirdlastyear: 2200, secondlastyear: 31.89, lastyear: 1255, currentyear: 2023, last8month: 2285,
    first4month: 3945, totalof8and4month: 6230, col6: 3427.50, col7: 11835, amountproposedbyDDO: 2260, amountproposedbyHOD: 2260,
    remarks: '', isBreakup: true
  },
  {
    objecthead: '3133', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3135-13', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3135-14', thirdlastyear: 2200, secondlastyear: 31.89, lastyear: 1255, currentyear: 2023, last8month: 2285,
    first4month: 3945, totalof8and4month: 6230, col6: 3427.50, col7: 11835, amountproposedbyDDO: 2260, amountproposedbyHOD: 2260,
    remarks: '', isBreakup: true
  },
  {
    objecthead: '3135-15', thirdlastyear: 2200, secondlastyear: 31.89, lastyear: 1255, currentyear: 2023, last8month: 2285,
    first4month: 3945, totalof8and4month: 6230, col6: 3427.50, col7: 11835, amountproposedbyDDO: 2260, amountproposedbyHOD: 2260,
    remarks: '', isBreakup: true
  },
  {
    objecthead: '3135-16', thirdlastyear: 954, secondlastyear: 14.67, lastyear: 251, currentyear: 844, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3241', thirdlastyear: 362, secondlastyear: 15.94, lastyear: 251, currentyear: 111, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3243', thirdlastyear: 321, secondlastyear: 18.94, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3351', thirdlastyear: 752, secondlastyear: 20.97, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3153', thirdlastyear: 2200, secondlastyear: 31.89, lastyear: 1255, currentyear: 2023, last8month: 2285,
    first4month: 3945, totalof8and4month: 6230, col6: 3427.50, col7: 11835, amountproposedbyDDO: 2260, amountproposedbyHOD: 2260,
    remarks: '', isBreakup: true
  },
  {
    objecthead: '3161', thirdlastyear: 241, secondlastyear: 24.30, lastyear: 251, currentyear: 812, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452,
     remarks: '', isBreakup: true
  },
  {
    objecthead: '3363', thirdlastyear: 2200, secondlastyear: 31.89, lastyear: 1255, currentyear: 2023, last8month: 2285,
    first4month: 3945, totalof8and4month: 6230, col6: 3427.50, col7: 11835, amountproposedbyDDO: 2260, amountproposedbyHOD: 2260,
    remarks: '', isBreakup: true
  }
];

const RECOVERY_DATA: StandingChargeElementView[] = [
  { objecthead: '7057', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, amountproposedbyHOD: 452.23, remarks: '', isBreakup: false },
  { objecthead: '7058', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '',
    amountproposedbyDDO: 450.54, amountproposedbyHOD: 452.23, remarks: '', isBreakup: false },
];

const OBJECT_HEAD_BREAKUP_DATA: ObjectHeadBreakupElementView[] = [
  {
    objecthead: '6100', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452, remarks: ''
  },
  {
    objecthead: '6200', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452, remarks: ''
  },
  {
    objecthead: '6300', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452, remarks: ''
  },
  {
    objecthead: '6400', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452, remarks: ''
  },
  {
    objecthead: '7000', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyDDO: 452, amountproposedbyHOD: 452, remarks: ''
  },
];

const DISTRICT_ELEMENT_DATA: DistrictElementView[] = [
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

const DISTRICT_ELEMENT_DATA2: DistrictElement2[] = [
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

const DISTRICT_ELEMENT_DATA1: DistrictElement1View[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];
@Component({
  selector: 'app-standing-charge-consolidate-view',
  templateUrl: './standing-charge-consolidate-view.component.html',
  styleUrls: ['./standing-charge-consolidate-view.component.css']
})
export class StandingChargeConsolidateViewComponent implements OnInit {

  isBreakupVisible: Boolean = false;
  // tslint:disable-next-line:member-ordering
  date: any = new Date();
  // tslint:disable-next-line:member-ordering
  readOnlyDetailDataSource: any;

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    // { label: 'Estimation By', value: 'Shri Arun Mahesh Babu MS' },
    { label: 'Demand', value: '010: Other expenditure pertaining to Education Department' },
    { label: 'Book Publication No.', value: '04: Education Department' },
    { label: 'Revenue/Capital', value: 'Revenue' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sector', value: 'A - General Services' },
    { label: 'Sub Sector', value: '(a) Organs of State' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' },
  ];


  table1 = true;
  table2 = false;
  grantInAid: Boolean;

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

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
    'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountproposedbyHOD', 'remarks'];

  recoveryDataSource = new MatTableDataSource(RECOVERY_DATA);
  consolidateColumns: string[] = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountproposedbyHOD', 'remarks'];

  ESTABLISHMENT_DATA: any[] = [
    {
      data: 'A. Gazetted Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: '1) Permanent Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: 'Filled', val1: '0', val2: '10.00', val3: '02.05', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Vacant', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Total (1)', val1: '0', val2: '10.00', val3: '02.05', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: '(2) Temporany Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: 'Filled', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Vacant', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Total (2)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: 'Total (A)', val1: '0', val2: '10.00', val3: '02.05', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: 'B. Non-Gazetted Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: '1) Permanent Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: 'Filled', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Vacant', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Total (1)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: '(2) Temporary Post', val1: '', val2: '', val3: '', val4: '', val5: '',
      val6: '', val7: '', remark: '', extend: true
    },
    {
      data: 'Filled', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Vacant', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: 'No Remarks For this field', extend: false
    },
    {
      data: 'Total (2)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: 'Total (B)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
      val6: '0.00', val7: '0.00', remark: '', extend: false
    },
    {
      data: 'Grand Total (A+B)', val1: '0', val2: '10.00', val3: '02.05', val4: '0.00',
      val5: '0.00', val6: '0.00', val7: '0.00', remark: '', extend: false
    },
  ];

  // attachmentSubTable = [
  //   {data: 'No of Post for Class 1', val1: '0', val2: '1000.00', val3: 'No of Post for Class 1', val4: '0', val5: '1000.00'},
  //   {data: 'No of Post for Class 2', val1: '0', val2: '100.00', val3: 'No of Post for Class 2', val4: '0', val5: '100.00'},
  //   {data: 'No of Post for Class 3', val1: '0', val2: '5000.00', val3: 'No of Post for Class 3', val4: '0', val5: '5000.00'},
  //   {data: 'No of Post for Class 4', val1: '0', val2: '5800.00', val3: 'No of Post for Class 4', val4: '0', val5: '5800.00'},
  //   {data: 'Fix Pay', val1: '0', val2: '6910.00', val3: 'Fix Pay', val4: '0', val5: '6910.00'},
  //   {data: 'Total', val1: '0', val2: '18810.00', val3: 'Total', val4: '0', val5: '18810.00'},
  // ];

  DATA: any[] = [
    {
      data: 'A. Gazetted Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: '1) Permanent Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '15.00',
      val1Edit: true,
      val2: '10.00',
      val2Edit: true,
      val3: '2.05',
      val3Edit: true,
      val4: '20.00',
      val4Edit: true,
      val5: '20.00',
      val5Edit: true,
      val6: '50.00',
      val6Edit: true,
      val7: '20.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '30.00',
      val3Edit: true,
      val4: '40.00',
      val4Edit: true,
      val5: '05.00',
      val5Edit: true,
      val6: '11.00',
      val6Edit: true,
      val7: '12.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (1)',
      val1: '10.00',
      val1Edit: false,
      val2: '15.00',
      val2Edit: false,
      val3: '16.00',
      val3Edit: false,
      val4: '17.00',
      val4Edit: false,
      val5: '12.00',
      val5Edit: false,
      val6: '10.00',
      val6Edit: false,
      val7: '10.00',
      val7Edit: false,
      remark: '08.00',
      remarkEdit: false,
      extend: false
    },
    {
      data: '(2) Temporany Post',
      val1: '10.00',
      val1Edit: false,
      val2: '20.00',
      val2Edit: false,
      val3: '25.00',
      val3Edit: false,
      val4: '22.00',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '21.00',
      val6Edit: false,
      val7: '23.00',
      val7Edit: false,
      remark: '24.00',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '11.00',
      val2Edit: true,
      val3: '12.00',
      val3Edit: true,
      val4: '12.00',
      val4Edit: true,
      val5: '05.00',
      val5Edit: true,
      val6: '15.00',
      val6Edit: true,
      val7: '10.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '10.00',
      val3Edit: true,
      val4: '14.00',
      val4Edit: true,
      val5: '15.00',
      val5Edit: true,
      val6: '20.00',
      val6Edit: true,
      val7: '20.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (2)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Total (A)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'B. Non-Gazetted Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: '1) Permanent Post',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '11.00',
      val3Edit: true,
      val4: '30.00',
      val4Edit: true,
      val5: '20.00',
      val5Edit: true,
      val6: '10.00',
      val6Edit: true,
      val7: '12.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '21.00',
      val1Edit: true,
      val2: '22.00',
      val2Edit: true,
      val3: '14.00',
      val3Edit: true,
      val4: '13.00',
      val4Edit: true,
      val5: '14.00',
      val5Edit: true,
      val6: '16.00',
      val6Edit: true,
      val7: '18.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (1)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: '(2) Temporary Post',
      val1: '10.00',
      val1Edit: false,
      val2: '11.00',
      val2Edit: false,
      val3: '15.00',
      val3Edit: false,
      val4: '16.00',
      val4Edit: false,
      val5: '15.00',
      val5Edit: false,
      val6: '10.00',
      val6Edit: false,
      val7: '19.00',
      val7Edit: false,
      remark: '10.00',
      remarkEdit: false,
      extend: true
    },
    {
      data: 'Filled',
      val1: '10.00',
      val1Edit: true,
      val2: '20.00',
      val2Edit: true,
      val3: '21.00',
      val3Edit: true,
      val4: '22.00',
      val4Edit: true,
      val5: '23.00',
      val5Edit: true,
      val6: '22.00',
      val6Edit: true,
      val7: '23.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Vacant',
      val1: '11.00',
      val1Edit: true,
      val2: '50.00',
      val2Edit: true,
      val3: '18.00',
      val3Edit: true,
      val4: '17.00',
      val4Edit: true,
      val5: '18.00',
      val5Edit: true,
      val6: '10.00',
      val6Edit: true,
      val7: '10.00',
      val7Edit: false,
      remark: 'No Remarks For this field',
      remarkEdit: true,
      extend: false
    },
    {
      data: 'Total (2)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Total (B)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    },
    {
      data: 'Grand Total (A+B)',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: '',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      val6: '',
      val6Edit: false,
      val7: '',
      val7Edit: false,
      remark: '',
      remarkEdit: false,
      extend: false
    }
  ];

  attachmentSubTable = [
    {
      data: 'No of Post for Class 1',
      val1: '2',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 1',
      val3Edit: false,
      val4: '3',
      val4Edit: true,
      val5: '300.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 2',
      val1: '1',
      val1Edit: true,
      val2: '100.00',
      val2Edit: true,
      val3: 'No of Post for Class 2',
      val3Edit: false,
      val4: '1',
      val4Edit: true,
      val5: '100.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 3',
      val1: '5',
      val1Edit: true,
      val2: '500.00',
      val2Edit: true,
      val3: 'No of Post for Class 3',
      val3Edit: false,
      val4: '5',
      val4Edit: true,
      val5: '500.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 4',
      val1: '6',
      val1Edit: true,
      val2: '600.00',
      val2Edit: true,
      val3: 'No of Post for Class 4',
      val3Edit: false,
      val4: '6',
      val4Edit: true,
      val5: '600.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Fix Pay',
      val1: '8',
      val1Edit: true,
      val2: '800.00',
      val2Edit: true,
      val3: 'Fix Pay',
      val3Edit: false,
      val4: '8',
      val4Edit: true,
      val5: '800.00',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Total',
      val1: '',
      val1Edit: false,
      val2: '',
      val2Edit: false,
      val3: 'Total',
      val3Edit: false,
      val4: '',
      val4Edit: false,
      val5: '',
      val5Edit: false,
      extend: false
    }
  ];

  rojmadarWorkCharge: any[] = [
    {
      data: 'Rojmdar',
      dataEdit: true,
      val1: '5',
      val1Edit: true,
      val2: '50000.00',
      val2Edit: true,
      val3: '500.00',
      val3Edit: true,
      val4: '',
      remark: 'Approved',
      remarkEdit: true
    },
    {
      data: 'Work Charge Establishment',
      dataEdit: true,
      val1: '10',
      val1Edit: true,
      val2: '100000.00',
      val2Edit: true,
      val3: '1000.00',
      val3Edit: true,
      val4: '',
      remark: '',
      remarkEdit: true
    }
  ];

  ELEMENT_DATA4: any[] = [
    {
      expDet: 'Peon',
      budEst: '5000.00'
    },
    {
      expDet: 'Driver',
      budEst: '6000.00'
    }, {
      expDet: 'Data Entry Operator',
      budEst: '4000.00'
    }, {
      expDet: 'Swipper',
      budEst: '8000.00'
    }, {
      expDet: 'Water Bearer',
      budEst: '9000.00'
    }, {
      expDet: 'Security',
      budEst: '8000.00'
    }, {
      expDet: 'Other',
      budEst: '50000.00'
    },
  ];

  ELEMENT_DATA5: any[] = [
    {
    name: 'Rakesh Kumar',
    post: 'Section Officer',
    bPay: '14000.00',
    lEncash: '5000.00',
    retire: '15/02/2019',
    },

  ];

  displayedAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7'];
  dataSourceAttachment = new MatTableDataSource(this.DATA);

  dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  displayedSubAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5'];



  dataSourceRojamadar = new MatTableDataSource(this.rojmadarWorkCharge);
  displayedRojamdarColumns = [
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    // 'remark',
    // 'Action'
  ];



  dataSource4 = new MatTableDataSource(this.ELEMENT_DATA4);

  dataSource4Columns = [
    'expDet',
    'budEst'
  ];



  dataSource5 = new MatTableDataSource(this.ELEMENT_DATA5);

  dataSource5Columns = [
    'name',
    'post',
    'bPay',
    'lEncash',
    'retire',


  ];
isExtendedRow = (index, item) => item.extend;

// For Outsource Tab
// tslint:disable-next-line: member-ordering
outSourceData: any[] = [
  { serviceType: 'Testing', budgetEstimate: '0.00' }
];
// tslint:disable-next-line: member-ordering
dataSourceOutSource = new MatTableDataSource(this.outSourceData);
// tslint:disable-next-line: member-ordering
displayedOutSourceColumns = ['serviceType', 'budgetEstimate'];

// For Leave Encashment Tab
// tslint:disable-next-line: member-ordering
leaveEncashmentData: any[] = [
  { nameOfOfficer: 'Mr. Shakil Bheda', designation: 'HOD', basicSalary: '25.00', proposedAmount: '60.00',
    dateOfRetirement: '12-Aug-2019' }
];
// tslint:disable-next-line: member-ordering
dataSourceLeaveEncashment = new MatTableDataSource(this.leaveEncashmentData);
// tslint:disable-next-line: member-ordering
displayedLeaveEncashmentColumns = ['nameOfOfficer', 'designation', 'basicSalary', 'proposedAmount', 'dateOfRetirement'];

// For Attachments Tab
// tslint:disable-next-line:member-ordering
brwoseData: any[] = [
  { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
  { attachmentType: 'Sanction Order', fileName: 'Sanction order.pdf' },
];
// tslint:disable-next-line: member-ordering
dataSourceBrowse = new MatTableDataSource(this.brwoseData);
// tslint:disable-next-line: member-ordering
displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];

// For Object Head Wise Breakup Tab
// tslint:disable-next-line:member-ordering
objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);
// tslint:disable-next-line:member-ordering
objectHeadBreakupColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'amountproposedbyHOD', 'remarks'];

// For Grant-in-Aid Tab
// tslint:disable-next-line: member-ordering
districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
// tslint:disable-next-line: member-ordering
districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

constructor(
  private router: Router
) { }

ngOnInit() {

  this.calculateAttachmentValue();
  this.calculateSubAttachmentValue();
}

calculateAttachmentValue() {
  let gazPerFilled = 0;
  let gazPerVacant = 0;
  let gazPerTotal1 = 0;
  let gazTempFilled = 0;
  let gazTempVacant = 0;
  let gazTempTotal2 = 0;
  let gazTotalA = 0;

  let nonGazPerFilled = 0;
  let nonGazPerVacant = 0;
  let nonGazPerTotal1 = 0;
  let nonGazTempFilled = 0;
  let nonGazTempVacant = 0;
  let nonGazTempTotal2 = 0;
  let nonGazTotalB = 0;

  for (let i = 1; i < this.displayedAttachmentColumns.length - 2; i++) {
    // tslint:disable-next-line:max-line-length
    this.DATA[4][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[2][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[3][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[8][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[6][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[7][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[9][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[4][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[8][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[14][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[12][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[13][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[18][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[16][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[17][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[19][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[14][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[18][this.displayedAttachmentColumns[i]]);
    // tslint:disable-next-line:max-line-length
    this.DATA[20][this.displayedAttachmentColumns[i]] =
      Number(this.DATA[9][this.displayedAttachmentColumns[i]]) +
      Number(this.DATA[19][this.displayedAttachmentColumns[i]]);

    if (this.displayedAttachmentColumns[i] !== 'val1') {
      this.DATA[4][this.displayedAttachmentColumns[i]] = this.DATA[4][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[8][this.displayedAttachmentColumns[i]] = this.DATA[8][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[9][this.displayedAttachmentColumns[i]] = this.DATA[9][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[14][this.displayedAttachmentColumns[i]] = this.DATA[14][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[18][this.displayedAttachmentColumns[i]] = this.DATA[18][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[19][this.displayedAttachmentColumns[i]] = this.DATA[19][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
      this.DATA[20][this.displayedAttachmentColumns[i]] = this.DATA[20][
        this.displayedAttachmentColumns[i]
      ].toFixed(2);
    }
    if (i > 1) {
      gazPerFilled =
        gazPerFilled +
        Number(this.DATA[2][this.displayedAttachmentColumns[i]]);
      gazPerVacant =
        gazPerVacant +
        Number(this.DATA[3][this.displayedAttachmentColumns[i]]);
      gazPerTotal1 =
        gazPerTotal1 +
        Number(this.DATA[4][this.displayedAttachmentColumns[i]]);

      gazTempFilled =
        gazTempFilled +
        Number(this.DATA[6][this.displayedAttachmentColumns[i]]);
      gazTempVacant =
        gazTempVacant +
        Number(this.DATA[7][this.displayedAttachmentColumns[i]]);
      gazTempTotal2 =
        gazTempTotal2 +
        Number(this.DATA[8][this.displayedAttachmentColumns[i]]);

      gazTotalA =
        gazTotalA + Number(this.DATA[9][this.displayedAttachmentColumns[i]]);

      nonGazPerFilled =
        nonGazPerFilled +
        Number(this.DATA[12][this.displayedAttachmentColumns[i]]);
      nonGazPerVacant =
        nonGazPerVacant +
        Number(this.DATA[13][this.displayedAttachmentColumns[i]]);
      nonGazPerTotal1 =
        nonGazPerTotal1 +
        Number(this.DATA[14][this.displayedAttachmentColumns[i]]);

      nonGazTempFilled =
        nonGazTempFilled +
        Number(this.DATA[16][this.displayedAttachmentColumns[i]]);
      nonGazTempVacant =
        nonGazTempVacant +
        Number(this.DATA[17][this.displayedAttachmentColumns[i]]);
      nonGazTempTotal2 =
        nonGazTempTotal2 +
        Number(this.DATA[18][this.displayedAttachmentColumns[i]]);

      nonGazTotalB =
        nonGazTotalB +
        Number(this.DATA[19][this.displayedAttachmentColumns[i]]);
    }
  }

  this.DATA[2].val7 = gazPerFilled.toFixed(2);
  this.DATA[3].val7 = gazPerVacant.toFixed(2);
  this.DATA[4].val7 = gazPerTotal1.toFixed(2);
  this.DATA[6].val7 = gazTempFilled.toFixed(2);
  this.DATA[7].val7 = gazTempVacant.toFixed(2);
  this.DATA[8].val7 = gazTempTotal2.toFixed(2);
  this.DATA[9].val7 = gazTotalA.toFixed(2);
  this.DATA[12].val7 = nonGazPerFilled.toFixed(2);
  this.DATA[13].val7 = nonGazPerVacant.toFixed(2);
  this.DATA[14].val7 = nonGazPerTotal1.toFixed(2);
  this.DATA[16].val7 = nonGazTempFilled.toFixed(2);
  this.DATA[17].val7 = nonGazTempVacant.toFixed(2);
  this.DATA[18].val7 = nonGazTempTotal2.toFixed(2);
  this.DATA[19].val7 = nonGazTotalB.toFixed(2);
  this.DATA[20].val7 = (gazTotalA + nonGazTotalB).toFixed(2);

  // this.DATA[28].val1 = (Number(this.DATA[23].val1) + Number(this.DATA[24].val1)
  //   + Number(this.DATA[25].val1) + Number(this.DATA[26].val1) + Number(this.DATA[27].val1)).toFixed(2);
  // this.DATA[28].val2 = (Number(this.DATA[23].val2) + Number(this.DATA[24].val2)
  //   + Number(this.DATA[25].val2) + Number(this.DATA[26].val2) + Number(this.DATA[27].val2)).toFixed(2);
  // this.DATA[28].val4 = (Number(this.DATA[23].val4) + Number(this.DATA[24].val4)
  //   + Number(this.DATA[25].val4) + Number(this.DATA[26].val4) + Number(this.DATA[27].val4)).toFixed(2);
  // this.DATA[28].val5 = (Number(this.DATA[23].val5) + Number(this.DATA[24].val5)
  //   + Number(this.DATA[25].val5) + Number(this.DATA[26].val5) + Number(this.DATA[27].val5)).toFixed(2);
}

calculateSubAttachmentValue() {
  this.attachmentSubTable[5].val1 = (
    Number(this.attachmentSubTable[0].val1) +
    Number(this.attachmentSubTable[1].val1) +
    Number(this.attachmentSubTable[2].val1) +
    Number(this.attachmentSubTable[3].val1) +
    Number(this.attachmentSubTable[4].val1)
  ).toString();
  this.attachmentSubTable[5].val2 = (
    Number(this.attachmentSubTable[0].val2) +
    Number(this.attachmentSubTable[1].val2) +
    Number(this.attachmentSubTable[2].val2) +
    Number(this.attachmentSubTable[3].val2) +
    Number(this.attachmentSubTable[4].val2)
  ).toFixed(2);
  this.attachmentSubTable[5].val4 = (
    Number(this.attachmentSubTable[0].val4) +
    Number(this.attachmentSubTable[1].val4) +
    Number(this.attachmentSubTable[2].val4) +
    Number(this.attachmentSubTable[3].val4) +
    Number(this.attachmentSubTable[4].val4)
  ).toString();
  this.attachmentSubTable[5].val5 = (
    Number(this.attachmentSubTable[0].val5) +
    Number(this.attachmentSubTable[1].val5) +
    Number(this.attachmentSubTable[2].val5) +
    Number(this.attachmentSubTable[3].val5) +
    Number(this.attachmentSubTable[4].val5)
  ).toFixed(2);
}

viewBreakup (element) {

  if (element.objecthead === '3133' ||
         element.objecthead === '3243' ||
         element.objecthead === '3353' ||
         element.objecthead === '3563') {
        this.grantInAid = true;
        this.table1 = true;
        this.table2 = false;
      } else if (element.objecthead === '3131' ||
      element.objecthead === '3132' ||
      element.objecthead === '3241' ||
      element.objecthead === '3351' ||
      element.objecthead === '3561' ) {
    this.grantInAid = true;
    this.table1 = false;
    this.table2 = true;
  } else if (element.objecthead === '3135' ||
  element.objecthead === '3135-13' ||
  element.objecthead === '3135-14' ||
  element.objecthead === '3135-15' ||
  element.objecthead === '3135-16') {
      this.grantInAid = false;
  }


  console.log(element);
  this.isBreakupVisible = true;
  this.readOnlyDetailDataSource = new MatTableDataSource(
    ELEMENT_DATA.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
  );
}

hideBreakup() {
  this.readOnlyDetailDataSource = new MatTableDataSource();
  this.isBreakupVisible = false;
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

loadCurrentYear() {
  return this.headerJson[0].value;
}

loadPreviousYear() {
  const year: any[] = this.headerJson[0].value.split('-');
  return (Number(year[0]) - 1).toString();
}

currentYear() {
  const year: any[] = this.headerJson[0].value.split('-');
  return (Number(year[0]) - 0).toString();
}

calcThirdLastYear(dataSourceValue): number {
  let calcThirdLastYear = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcThirdLastYear = calcThirdLastYear + Number(element.thirdlastyear);
  });
  return calcThirdLastYear;

}

calcSecondLastYear(dataSourceValue): number {
  let calcSecondLastYear = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcSecondLastYear = calcSecondLastYear + Number(element.secondlastyear);
  });
  return calcSecondLastYear;
}

calcLastYear(dataSourceValue): number {
  let calcLastYear = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcLastYear = calcLastYear + Number(element.lastyear);
  });
  return calcLastYear;
}

calcCurrentYear(dataSourceValue): number {
  let calcCurrentYear = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcCurrentYear = calcCurrentYear + Number(element.currentyear);
  });
  return calcCurrentYear;
}

calcLast8Month(dataSourceValue): number {
  let calcLast8Month = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcLast8Month = calcLast8Month + Number(element.last8month);
  });
  return calcLast8Month;
}

calcFirst4Month(dataSourceValue): number {
  let calcFirst4Month = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcFirst4Month = calcFirst4Month + Number(element.first4month);
  });
  return calcFirst4Month;
}

calcTotalof8and4Month(dataSourceValue): number {
  let calcTotalof8and4Month = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcTotalof8and4Month = calcTotalof8and4Month + (Number(element.last8month) + Number(element.first4month));
  });
  return calcTotalof8and4Month;
}

calcCol6_15(dataSourceValue): number {
  let calcCol6_15 = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcCol6_15 = calcCol6_15 + (Number(element.last8month) * 1.5);
  });
  return calcCol6_15;
}

calcCol7_3(dataSourceValue): number {
  let calcCol7_3 = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcCol7_3 = calcCol7_3 + (Number(element.first4month) * 3);
  });
  return calcCol7_3;
}

calcAmtProposedByDDO(dataSourceValue): number {
  let calcAmtProposedByDDO = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcAmtProposedByDDO = calcAmtProposedByDDO + Number(element.amountproposedbyDDO);
  });
  return calcAmtProposedByDDO;
}

calcAmtProposedByHOD(dataSourceValue): number {
  // if (!data) {
  //   return;
  // }
  let calcAmtProposedByHOD = 0;
  // tslint:disable-next-line:no-shadowed-variable
  dataSourceValue.data.forEach((element, index) => {
    calcAmtProposedByHOD = calcAmtProposedByHOD + Number(element.amountproposedbyHOD);
  });
  return calcAmtProposedByHOD;
}

// calcNetThirdLastYear(): number {
//   let calcNetThirdLastYear = 0;
//   const calcThirdLastYear = this.calcThirdLastYear([]);
//   // tslint:disable-next-line:no-shadowed-variable
//   this.recoveryDataSource.data.forEach((element, index) => {
//     calcNetThirdLastYear = calcNetThirdLastYear + Number(element.thirdlastyear);
//   });

//   return (calcThirdLastYear - calcNetThirdLastYear);
// }

gotoListing() {
  this.router.navigate(['./budget/standing-charge-consolidate-list']); }

goToDashboard() {
  this.router.navigate(['']);
}

tot3() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      amountExp =  amountExp + Number(element.val2) + Number(element.val3);
    });
    return amountExp;
  }

  OtherAllowance() {
    let val3 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val3 = val3 + Number(element.val3);
    });
    return val3;
  }

  CountTotalSalaries() {
    let val2 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val2 = val2 + Number(element.val2);
    });
    return val2;
  }

  CountTotalPost() {
    let val1 = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      val1 = val1 + Number(element.val1);
    });
    return val1;
  }

  tot4() {
    let amountExp = 0;
    this.dataSource4.data.forEach((element) => {
      amountExp =  amountExp + Number(element.budEst);
    });
    return amountExp;
  }


  basicPay2() {
    let bPay = 0;
    this.dataSource5.data.forEach((element) => {
      bPay = bPay + Number(element.bPay);
    });
    return bPay;
  }

  LeaveEncashment() {
    let lEncash = 0;
    this.dataSource5.data.forEach((element) => {
      lEncash = lEncash + Number(element.lEncash);
    });
    return lEncash;
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

    this.dataSource.data.forEach((el, idx) => {
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

}

