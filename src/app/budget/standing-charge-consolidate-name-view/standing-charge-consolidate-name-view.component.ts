import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {StandingChargeViewCommentsComponent, StadingChargeConfirmDialogComponent, StandingChargeForwardDialogComponent} from '../standing-charge/standalone-charge/standalone-charge.component';
import { forEach } from '@angular/router/src/utils/collection';
import { FormControl } from '@angular/forms';
import { DistrictElementStandingCharge, DistrictElement1, HeaderElement } from 'src/app/model/budget';


const ELEMENT_DATA: any[] = [
  {
    objecthead: '3131', thirdlastyear: 200, secondlastyear: 250.00, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: '', isBreakup: true
  },
  {
    objecthead: '3132', thirdlastyear: 300, secondlastyear: 400.60, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 2260, hodProposedAmt: '', remarks: '', isBreakup: true
  },
  {
    objecthead: '3133', thirdlastyear: 400, secondlastyear: 600.90, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: '', isBreakup: true
  },
  {
    objecthead: '3135-13', thirdlastyear: 400, secondlastyear: 600.90, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: '', isBreakup: true
  }
];


const ELEMENT_DATAR: any[] = [
  {
    objecthead: '7057', thirdlastyear: '', secondlastyear: '', lastyear: '', currentyear: 356.00, last8month: '',
    first4month: '', totalof8and4month: 0, col6: '', col7: '', amountproposedbyDDO: '', hodProposedAmt: '', remarks: '',
  },

  {
    objecthead: '7058', thirdlastyear: '', secondlastyear: '', lastyear: '', currentyear: 456.00, last8month: '',
    first4month: '', totalof8and4month: 0, col6: '', col7: '', amountproposedbyDDO: '', hodProposedAmt: '', remarks: '',
  },
];

const OBJECT_HEAD_BREAKUP_DATA: any[] = [
  {
    objecthead: '6100', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: ''
  },
  {
    objecthead: '6200', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: ''
  },
  {
    objecthead: '6300', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: ''
  },
  {
    objecthead: '6400', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454, last8month: 457,
    first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, hodProposedAmt: '', remarks: ''
  },
];

const DISTRICT_ELEMENT_DATA: DistrictElementStandingCharge[] = [
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
];

const DISTRICT_ELEMENT_DATA2: DistrictElementStandingCharge[] = [
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
];

const DISTRICT_ELEMENT_DATA3: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];
@Component({
  selector: 'app-standing-charge-consolidate-name-view',
  templateUrl: './standing-charge-consolidate-name-view.component.html',
  styleUrls: ['./standing-charge-consolidate-name-view.component.css']
})
export class StandingChargeConsolidateNameViewComponent implements OnInit {
  isBreakupVisible: Boolean = false;
  percentage;
  amount;
  isVisible;
  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  classOneCtrl: FormControl = new FormControl();
  codeCtrl: FormControl = new FormControl();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // displayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  // 'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'hodProposedAmt', 'remarks'];
  displayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'hodProposedAmt', 'remarks', 'action'];
  displayedColumnsReadOnly = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'hodProposedAmt', 'remarks'];
  displayedColumnsReadOnlyRec = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'hodProposedAmt', 'remarks'];
  displayedColumns2 = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDdo', 'amountproposedbyHOD', 'remarks'];

  recoveryDataSource = new MatTableDataSource(ELEMENT_DATAR);
  consolidateColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO', 'hodProposedAmt', 'remarks', 'action'];

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Department', value: 'Education Department'},
    {label: 'Branch Name', value: 'Budget'},
    {label: 'Estimation From', value: 'Director of Horticulture'},
    {label: 'Demand/Appropriation No.', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Budget Publication Number', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sector', value: 'A-General Services'},
    {label: 'Sub Sector', value: '(a) Organs of State'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
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

  // attachmentSubTable = [
  //   {data: 'No of Post for Class 1', val1: '0', val2: '1000.00', val3: 'No of Post for Class 1', val4: '0', val5: '1000.00'},
  //   {data: 'No of Post for Class 2', val1: '0', val2: '100.00', val3: 'No of Post for Class 2', val4: '0', val5: '100.00'},
  //   {data: 'No of Post for Class 3', val1: '0', val2: '5000.00', val3: 'No of Post for Class 3', val4: '0', val5: '5000.00'},
  //   {data: 'No of Post for Class 4', val1: '0', val2: '5800.00', val3: 'No of Post for Class 4', val4: '0', val5: '5800.00'},
  //   {data: 'Fix Pay', val1: '0', val2: '6910.00', val3: 'Fix Pay', val4: '0', val5: '6910.00'},
  //   {data: 'Total', val1: '0', val2: '18810.00', val3: 'Total', val4: '0', val5: '18810.00'},
  // ];

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
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtDataSource2 = new MatTableDataSource(DISTRICT_ELEMENT_DATA2);
  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];

  stateDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA3.sort((a, b) =>
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
    corporationTotal: 0,
    municipalTotal: 0,
    notAreaTotal: 0,
    districtTotal: 0,
    gramTotal: 0,
    talukaTotal: 0,
    total: 0
  };

  ELEMENT_DATA5: any[] = [
    {
    name: 'Rakesh Kumar',
    post: 'Section Officer',
    bPay: '14000.00',
    lEncash: '5000.00',
    retire: '15-Feb-2019',
    },

  ];

  dataSource5 = new MatTableDataSource(this.ELEMENT_DATA5);

  dataSource5Columns = [
    'position',
    'name',
    'post',
    'bPay',
    'lEncash',
    'retire',


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

  dataSource4 = new MatTableDataSource(this.ELEMENT_DATA4);

  dataSource4Columns = [
    'position',
    'expDet',
    'budEst'
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
  // tslint:disable-next-line:member-ordering
  dataSourceRojamadar = new MatTableDataSource(this.rojmadarWorkCharge);
  // tslint:disable-next-line:member-ordering
  displayedRojamdarColumns = [
    'position',
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    // 'remark',
    // 'Action'
  ];



  displayedAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7'];
  dataSourceAttachment = new MatTableDataSource(this.DATA);

  isExtendedRow = (index, item) => item.extend;
  // tslint:disable-next-line:member-ordering
  dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  // tslint:disable-next-line:member-ordering
  displayedSubAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5'];





  // tslint:disable-next-line:member-ordering
  outSourceData: any[] = [
    {
      serviceType: 'Testing',
      budgetEstimate: '0.00'
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceOutSource = new MatTableDataSource(this.outSourceData);
  // tslint:disable-next-line:member-ordering
  displayedOutSourceColumns = ['serviceType', 'budgetEstimate'];

  // tslint:disable-next-line:member-ordering
  leaveEncashmentData: any[] = [
    {
      nameOfOfficer: 'Mr. Shakil Bheda',
      designation: 'HOD',
      basicSalary: '25.00',
      proposedAmount: '60.00',
      dateOfRetirement: '12-Aug-2019'
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceLeaveEncashment = new MatTableDataSource(this.leaveEncashmentData);
  // tslint:disable-next-line:member-ordering
  displayedLeaveEncashmentColumns = ['nameOfOfficer', 'designation', 'basicSalary', 'proposedAmount', 'dateOfRetirement'];


  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'Sanction Order.pdf' },
    { attachmentType: 'Establishment', fileName: 'Establishment.pdf' },
    { attachmentType: 'Rojmdar & Work charge', fileName: 'Rojmdar & Work charge.pdf' },
    { attachmentType: 'Outsource', fileName: 'Outsource.pdf' },
    { attachmentType: 'Leave Encashment', fileName: 'Leave Encashment.pdf' },
    { attachmentType: 'Other', fileName: 'Budget.pdf' },
  ];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // tslint:disable-next-line:member-ordering
  date: any = new Date();
  // tslint:disable-next-line:member-ordering
  readOnlyDetailDataSource: any;


  // tslint:disable-next-line:member-ordering
  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);
  // tslint:disable-next-line:member-ordering
  // objectHeadBreakupColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  // 'totalof8and4month', 'col6', 'col7', 'amountproposedbyDDO','amountproposedbyHOD', 'remarks'];
  // tslint:disable-next-line: member-ordering
  objectHeadBreakupColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyDdo', 'amountproposedbyHOD', 'remarks', 'action'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(resRoute => {
    //   if (resRoute.percentage) {
    //     this.dataSource.data.forEach(obj => {
    //       obj.hodProposedAmt = ((Number(obj.amountproposedbyHOD) * resRoute.percentage) / 100);
    //     });
    //   }
    //   if (resRoute.amount) {
    //     this.dataSource.data.forEach(obj => {
    //       obj.hodProposedAmt = ((Number(obj.amountproposedbyHOD) + (Number(resRoute.amount) / Number((obj.amountproposedbyHOD)))));
    //     });
    //   }
    // });

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

  viewBreakup (element, index) {

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
    const data = this.dataSource.data.filter((x, i) => i === index);
    this.dataSource.data = data;
  }

  hideBreakup() {
    this.readOnlyDetailDataSource = new MatTableDataSource();
    this.isBreakupVisible = false;
    const pdata = ELEMENT_DATA;
    this.dataSource.data = pdata;
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

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) + 1).toString() + '-' + (Number(year[0]) + 2).toString()
    );
  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }


  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list-duplicate']);
  }
  goToDdo() {
    this.router.navigate(['../standing-charge-consolidate/1/ddo-list',
     {schemeName: undefined, ddoCount: '4', percentage: '0', amount: '0'}], {relativeTo: this.route});
  }

  goToDashboard() {
  }
  // tslint:disable-next-line: member-ordering
  hodeApprodData: string;
  // values: string[] = ['Proposed Amount in Percentage', 'Proposed Amount in Value'];
  // tslint:disable-next-line: member-ordering
  values = [
    { 'name': 'Proposed Amount in Percentage', ID: 'D1', 'checked': false },
    { 'name': 'Proposed Amount in Value', ID: 'D2', 'checked': false}
];



  basicPay() {
    const totalValue = (this.percentage);

     const totper = (this.calcamountproposedbyHOD() * (this.percentage) / 100);
      const totDiff = totper + Number(this.calcamountproposedbyHOD());
      this.amount =  totDiff;

    this.dataSource.data.forEach((element, index) => {
      const perDDO = (Number(element.amountproposedbyHOD) * (Number(totalValue) / 100));
      element.hodProposedAmt =  ((Number(element.amountproposedbyHOD) + Number(perDDO)));
    });

    this.objectBreakupDataSource.data.forEach((element, index) => {
      const perDDO = (Number(element.amountproposedbyHOD) * (Number(totalValue) / 100));
      element.hodProposedAmt =  ((Number(element.amountproposedbyHOD) + Number(perDDO)));
    });
  }


  amountValue() {
    const totalValue = (this.amount);
    const perofValue = (Number(this.amount) / (Number(this.calcamountproposedbyHOD())));
      console.log(perofValue);
      const Per = ((perofValue * 100) - 100);
      this.percentage = Per.toFixed(2);
       this.dataSource.data.forEach((element) => {
        // element.hodProposedAmt = ((Number(element.amountproposedbyHOD) * Number(perofValue)))
        const hodamount = ((Number(element.amountproposedbyHOD) * Number(perofValue)));
        element.hodProposedAmt =  hodamount.toFixed(2)as any;
      });

       this.objectBreakupDataSource.data.forEach((element) => {
        const hodamount = ((Number(element.amountproposedbyHOD) * Number(perofValue)));
        element.hodProposedAmt =  hodamount.toFixed(2)as any;
      });
  }

  radioChange(event) {
    return this.isVisible = event.value;
}

deleteConsolidate(index) {
  this.dataSource.data.splice(index, 1);
  this.dataSource = new MatTableDataSource(
    this.dataSource.data
  );
}

deleteConsolidateRec(index) {
  this.recoveryDataSource.data.splice(index, 1);
  this.recoveryDataSource = new MatTableDataSource(
    this.recoveryDataSource.data
  );
}

deleteBreakup(index) {
  this.objectBreakupDataSource.data.splice(index, 1);
  this.objectBreakupDataSource = new MatTableDataSource(
    this.objectBreakupDataSource.data
  );
}

deleteBreakupRec(index) {
  this.recoveryDataSource.data.splice(index, 1);
  this.recoveryDataSource = new MatTableDataSource(
    this.recoveryDataSource.data
  );
}

  calcLastYear(): number {
    let calcLastYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcLastYear = calcLastYear + Number(element.thirdlastyear);
    });
    return calcLastYear;
  }
  calcSecYear(): number {
    let calcSecYear = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcSecYear = calcSecYear + Number(element.secondlastyear);
    });
    return calcSecYear;
  }

  calcLastYearValue(): number {
    let calcLastYearValue = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcLastYearValue = calcLastYearValue + Number(element.lastyear);
    });
    return calcLastYearValue;
  }
  calcCurrValue(): number {
    let calcCurrValue = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcCurrValue = calcCurrValue + Number(element.currentyear);
    });
    return calcCurrValue;
  }
  calcLast8month(): number {
    let calcLast8month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcLast8month = calcLast8month + Number(element.last8month);
    });
    return calcLast8month;
  }
  calcfirst4month(): number {
    let calcfirst4month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcfirst4month = calcfirst4month + Number(element.first4month);
    });
    return calcfirst4month;
  }

  calctotalof8and4month(): number {
    let calctotalof8and4month = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calctotalof8and4month = calctotalof8and4month + Number(element.totalof8and4month);
    });
    return calctotalof8and4month;
  }

  calccol6(): number {
    let calccol6 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calccol6 = calccol6 + (Number(element.last8month) * 1.5);
    });
    return calccol6;
  }

  calccol7(): number {
    let calccol7 = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calccol7 = calccol7 + (Number(element.first4month) * 3);
    });
    return calccol7;
  }
  calcamountproposedbyHOD(): number {
    let calcamountproposedbyHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calcamountproposedbyHOD = calcamountproposedbyHOD + Number(element.amountproposedbyHOD);
    });
    return calcamountproposedbyHOD;
  }
  calchodProposedAmt(): number {
    let calchodProposedAmt = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.dataSource.data.forEach((element, index) => {
      calchodProposedAmt = calchodProposedAmt + Number(element.hodProposedAmt);
    });
    // return calchodProposedAmt;
    return calchodProposedAmt !== 0 ? calchodProposedAmt : null;
  }



  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
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



  revCalchodProposedAmt(): number {
    let revCalchodProposedAmt = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.recoveryDataSource.data.forEach((element, index) => {
      revCalchodProposedAmt = revCalchodProposedAmt + Number(element.hodProposedAmt);
    });
    return (this.calchodProposedAmt() - revCalchodProposedAmt) !== 0 ? (this.calchodProposedAmt() - revCalchodProposedAmt) : null;
  }


  revDDOAmt(): number {
    let revDDOAmt = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      revDDOAmt = revDDOAmt + Number(element.amountproposedbyDDO);
    });
    return (this.calcamountproposedbyHOD() - revDDOAmt);
  }


  thirdlastyear(): number {
    let thirdlastyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      thirdlastyear = thirdlastyear + Number(element.thirdlastyear);
    });
    return (this.calcLastYear() - thirdlastyear);
  }

  secondlastyear(): number {
    let secondlastyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      secondlastyear = secondlastyear + Number(element.secondlastyear);
    });
    return (this.calcSecYear() - secondlastyear);
  }

  lastyear(): number {
    let lastyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      lastyear = lastyear + Number(element.lastyear);
    });
    return (this.calcLastYearValue() - lastyear);
  }

  currentyear(): number {
    let currentyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      currentyear = currentyear + Number(element.currentyear);
    });
    return (this.calcCurrValue() - currentyear);
  }

  last8month(): number {
    let last8month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      last8month = last8month + Number(element.last8month);
    });
    return (this.calcLast8month() - last8month);
  }

  first4month(): number {
    let first4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month);
    });
    return (this.calcfirst4month() - first4month);
  }

  totalof8and4month(): number {
    let totalof8and4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      totalof8and4month = totalof8and4month + (Number( Number(element.last8month) + Number(element.first4month)));
    });
    return (this.calctotalof8and4month() - totalof8and4month);
  }

  col6(): number {
    let last8month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      last8month = last8month + (Number(element.last8month) * 1.5);
    });
    return (this.calccol6() - last8month);
  }

  col7(): number {
    let first4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      first4month = first4month + (Number(element.first4month) * 3);
    });
    return (this.calccol7() - first4month);
  }

  calcHodProposedAmtBreakupGross(): number {
    let sum = 0;
    this.objectBreakupDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.hodProposedAmt);
    });
    return sum !== 0 ? (sum) : null;
  }

  calcHodProposedAmtBreakupNet(): number {
    let sum = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.hodProposedAmt);
    });
    // return sum;
    return (this.calcHodProposedAmtBreakupGross() - sum) !== 0 ? (this.calcHodProposedAmtBreakupGross() - sum) : null;
  }

   subheadLevalPer() {

   }

   viewComments(): void {
    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
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
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
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
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
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

  clearData() {
    for (const d of ELEMENT_DATA) {
      d.hodProposedAmt = 0.00;
    }

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

}
