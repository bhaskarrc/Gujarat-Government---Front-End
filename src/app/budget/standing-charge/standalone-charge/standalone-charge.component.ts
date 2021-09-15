import { startWith, map, takeUntil } from 'rxjs/operators';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import {
  MatAutocomplete,
  MatChipInputEvent,
  MatAutocompleteSelectedEvent,
  MatTableDataSource,
  MatSelect,
  MatBottomSheet,
  MatBottomSheetRef,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

import {
  ConfirmDialogModel,
  StandingChargeHistoryComponent
} from '../standing-charge-history/standing-charge-history.component';
import { DialogData } from 'src/app/model/standing-charge';
import { HeaderElement, CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { cursorTo } from 'readline';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';

export interface Element {
  thirdlastyear: number | string | '';
  objecthead: string | '';
  secondlastyear: number | string | '';
  lastyear: number | string | '';
  currentyear: number | string | '';
  last8month: number | string | '';
  first4month: number | string | '';
  totalof8and4month: number | string | '';
  col6: number | '';
  col7: number | '';
  amountproposedbyHOD: number | string | '';
  remarks: string | '';
  status?: boolean;
  classStatus?: boolean;
  action?: string | '';
  isSelected: boolean;
  toolTipData?: string | '';
  isBreakUp: boolean;
}

export interface Element2 {

  post: string | '';
  goNgo: string | '';
  perTemp: string | '';
  fillVacant: string | '';
  class: string | '';

}

export interface Element3 {

  post: string | '';
  totalNo: string | '';
  approxEst: String | '';


}

export interface Element4 {
  expDet: string | '';
  budEst: string | '';
}

export interface Element5 {
  name: string | '';
  post: string | '';
  bPay: string | '';
  lEncash: string | '';
  retire: string | '';

}

export interface Element6 {

  post: string | '';
  goNgo: string | '';
  perTemp: string | '';
  fillVacant: string | '';
  class: string | '';

}
export interface Element7 {

  bPay: string | '';
  DA: string | '';
  HRA: string | '';
  CLA: string | '';
  LTC: string | '';
  reimb: string | '';
  medicalAllowances: string | '';
  Bonus: string | '';
  leaveEncashment: string | '';
  IR: string | '';
  transportAllowance: string | '';
  ropArriarse1: string | '';
  ropArriarse2: string | '';
  dearnessPay1: string | '';
  dearnessPay2: string | '';

}




export interface HistoryElement {
  userRole: string | '';
  userSortName: string | '';
  userCode: string | '';
  proposedAmt: number | '';
  remark: string | '';
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
  propsedAmount: number | '';


}



// export interface RojmdarElement {
//   typeOfExpenditure: string;
//   noOfPost: number;
//   salaries: number;
//   otherAllowance: number;
//   total: number;
//   remarks: string | '';
// }

export interface RojmdarElement {
  typeOfExpenditure: string;
  noOfPost: string;
  salaries: string;
  otherAllowance: string;
  total: string;
  remarks: string | '';
}

export interface SubObjectHead {
  id: string;
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {
    objecthead: '0101',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '356.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '0101 : Pay of Officers Including Grade Pay',
    isBreakUp: false
  },
  {
    objecthead: '0102',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '456.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '0102 : Pay of Establishment Including Grade Pay',
    isBreakUp: false
  },
  {
    objecthead: '0103',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '213.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '0103 : Dearness Allowance',
    isBreakUp: false
  },
  {
    objecthead: '',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '250.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '0104 : Other Allowances',
    isBreakUp: false
  },
  {
    objecthead: '3131',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '454.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData:
      '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances',
    isBreakUp: true
  },
  {
    objecthead: '3132',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '550.00',
    last8month: '',
    first4month: ' ',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3132 : Grants-in-Aid General to Panchayats pertaining',
    isBreakUp: true
  },
  {
    objecthead: '3135',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '650.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3135 : Junagadh Agricultural University',
    isBreakUp: true
  },

  {
    objecthead: '3135-14',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '100.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3135-14 : Junagadh Agricultural University',
    isBreakUp: true
  },
  {
    objecthead: '3135-13',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '300.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3135-13 : Navsari Agricultural University',
    isBreakUp: true
  },
  // {
  //   objecthead: '3135-14',
  //   thirdlastyear: 800.0,
  //   secondlastyear: 10.11,
  //   lastyear: 251.0,
  //   currentyear: 544.0,
  //   last8month: 457.0,
  //   first4month: 789.0,
  //   totalof8and4month: 475.0,
  //   col6: '',
  //   col7: '',
  //   amountproposedbyHOD: 452.0,
  //   remarks: '',
  //   isSelected: false,
  //   toolTipData: '3135-14 : Junagadh Agricultural University',
  //   isBreakUp: true
  // },
  {
    objecthead: '3135-15',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '400.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3135-15 : Navsari Agricultural University',
    isBreakUp: true
  },
  {
    objecthead: '3135-16',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '350.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3135-16 : Dantiwada Agricultural University',
    isBreakUp: true
  },
  {
    objecthead: '3241',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '450.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3241 : Contributions (a) To Panchayats',
    isBreakUp: true
  },
  {
    objecthead: '3243',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '250.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3243 : Contributions (b) To Local Bodies',
    isBreakUp: true
  },
  {
    objecthead: '3133',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '90.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3133 : Contributions (b) To Local Bodies',
    isBreakUp: true
  },
  {
    objecthead: '3351',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '180.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3351 : Subsidies (a) To Panchayats',
    isBreakUp: true
  },
  {
    objecthead: '3353',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '248.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3353 : Subsidies (b) To Local Bodies',
    isBreakUp: true
  },
  {
    objecthead: '3561',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '150.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3561 : Grants for creation of Capital Assets to Panchayats',
    isBreakUp: true
  },
  {
    objecthead: '3563',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: '441.00',
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    // amountproposedbyHOD: 452.0,
    amountproposedbyHOD: '',
    remarks: '',
    isSelected: false,
    toolTipData: '3563 : Grants for creation of Capital Assets to Local Bodies',
    isBreakUp: true
  }
];

const ELEMENT_DATA2: Element2[] = [
  {
    post: '',
    goNgo: '',
    perTemp: '',
    fillVacant: '',
    class: '',
  },
  // {
  //   post: 'Accounts officer',
  //   goNgo: '1',
  //   perTemp: '1',
  //   fillVacant: '1',
  //   class: '2',
  // },
  // {
  //   post: 'Sr. Clerk',
  //   goNgo: '1',
  //   perTemp: '1',
  //   fillVacant: '1',
  //   class: '2',
  // }
];

const ELEMENT_DATA6: Element6[] = [
  {
    post: 'Accounts officer',
    goNgo: '1',
    perTemp: '1',
    fillVacant: '1',
    class: '3',
  }
];

const ELEMENT_DATA7: Element7[] = [
  {
    bPay: '',
    DA: '',
    HRA: '',
    CLA: '',
    LTC: '',
    reimb: '',
    medicalAllowances: '',
    Bonus: '',
    leaveEncashment: '',
    IR: '',
    transportAllowance: '',
    ropArriarse1: '',
    ropArriarse2: '',
    dearnessPay1: '',
    dearnessPay2: '',
  }
];

const ELEMENT_DATA3: Element3[] = [
  {
    post: 'NO OF POST FOR CLASS1',
    totalNo: '',
    approxEst: ''
  },
  {
    post: 'NO OF POST FOR CLASS2',
    totalNo: '',
    approxEst: ''
  },
  {
    post: 'NO OF POST FOR CLASS3',
    totalNo: '',
    approxEst: ''
  }, {
    post: 'NO OF POST FOR CLASS4',
    totalNo: '',
    approxEst: ''
  }, {
    post: 'FIX PAY',
    totalNo: '',
    approxEst: ''
  },
];
const ELEMENT_DATA4: Element4[] = [
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

const ELEMENT_DATA5: Element5[] = [
  {
    name: 'Rakesh Kumar',
    post: 'Section Officer',
    bPay: '14000.00',
    lEncash: '5000.00',
    retire: '15-Feb-2019',
  },

];




const HISTORY_DATA: HistoryElement[] = [
  {
    userRole: 'Approver',
    userSortName: 'Shri S M Modi',
    userCode: 'GAD12345',
    proposedAmt: 100.0,
    remark: ''
  },
  {
    userRole: 'Verifier',
    userSortName: 'Shri P J Patel',
    userCode: 'GAGUJ23231',
    proposedAmt: 200.0,
    remark: 'We may approve.'
  },
  {
    userRole: 'Verifier',
    userSortName: 'Shri S M Jani',
    userCode: 'GAGUJ23343',
    proposedAmt: 170.0,
    remark: 'We may approve.'
  },
  {
    userRole: 'Verifier',
    userSortName: 'Shri R P Joshi',
    userCode: 'GAGUJ23232',
    proposedAmt: 250.0,
    remark: ''
  },
  {
    userRole: 'Verifier',
    userSortName: 'Shri P S Patel',
    userCode: 'GAGUJ23341',
    proposedAmt: 300.0,
    remark: 'We may approve.'
  },
  {
    userRole: 'Creator',
    userSortName: 'Shri M J Soni',
    userCode: 'GAGUJ34342',
    proposedAmt: 300.0,
    remark: 'Approved.'
  }
];

// const ELEMENT_ROJMDAR_DATA: RojmdarElement[] = [
//   {
//     typeOfExpenditure: 'Rojmdar',
//     noOfPost: 5,
//     salaries: 100.0,
//     otherAllowance: 20.0,
//     total: 110.0,
//     remarks: 'Approved'
//   },
//   {
//     typeOfExpenditure: 'Work charge establishment',
//     noOfPost: 2,
//     salaries: 155.0,
//     otherAllowance: 15.0,
//     total: 170.0,
//     remarks: 'ok'
//   }
// ];

const ELEMENT_ROJMDAR_DATA: RojmdarElement[] = [
  {
    typeOfExpenditure: 'Rojmdar',
    noOfPost: '',
    salaries: '',
    otherAllowance: '',
    total: '',
    remarks: ''
  },
  {
    typeOfExpenditure: 'Work charge establishment',
    noOfPost: '',
    salaries: '',
    otherAllowance: '',
    total: '',
    remarks: ''
  }
];




const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
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



const DISTRICT_ELEMENT_DATA1: DistrictElement1[] = [

  {

    id: 34,
    expendature: '',
    districtName: 'State Level Only (if any)',
    propsedAmount: '',

  }
];



const recoveryData: any[] = [
  {
    objecthead: '7057',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: 356.00,
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    amountproposedbyDDO: '',
    amountWorkOutByFormula: '',
    // amountproposedbyHOD: 452.23,
    amountproposedbyHOD: '',
    remarks: '',
    isBreakup: false,
    isSelected: false,
    percentage: 3,
    toolTipData: '7057 : Festival Advance '
  },
  {
    objecthead: '7058',
    thirdlastyear: '',
    secondlastyear: '',
    lastyear: '',
    currentyear: 456.00,
    last8month: '',
    first4month: '',
    totalof8and4month: '',
    col6: '',
    col7: '',
    amountproposedbyDDO: '',
    amountWorkOutByFormula: '',
    // amountproposedbyHOD: 452.23,
    amountproposedbyHOD: '',
    remarks: '',
    isBreakup: false,
    isSelected: false,
    percentage: 3,
    toolTipData: '7058 : Food Grain Advance'
  }
];
const recoveryExpendData: any[] = [
  {
    objecthead: '7057',
    thirdlastyear: 200.15,
    secondlastyear: 1.79,
    lastyear: 251,
    currentyear: 356,
    last8month: 457,
    first4month: 789,
    totalof8and4month: 475,
    col6: '',
    col7: '',
    amountproposedbyDDO: 450.54,
    amountWorkOutByFormula: '',
    // amountproposedbyHOD: 452.23,
    amountproposedbyHOD: 0.00,
    remarks: '',
    isBreakup: false,
    isSelected: false,
    percentage: 3,
    toolTipData: '7057 : Festival Advance'
  },
  {
    objecthead: '7058',
    thirdlastyear: 300,
    secondlastyear: 4.06,
    lastyear: 251,
    currentyear: 456,
    last8month: 457,
    first4month: 789,
    totalof8and4month: 475,
    col6: '',
    col7: '',
    amountproposedbyDDO: 450.54,
    amountWorkOutByFormula: '',
    // amountproposedbyHOD: 452.23,
    amountproposedbyHOD: 0.00,
    remarks: '',
    isBreakup: false,
    isSelected: false,
    percentage: 3,
    toolTipData: '7058 : Food Grain Advance'
  }
];
// const objs_tab1_data = { objecthead: '', thirdlastyear: '', secondlastyear: '', lastyear: '', currentyear: '',
// last8month: '', first4month: '', totalof8and4month: '', col6: '', col7: '', amountproposedbyHOD: '', remarks: '' };
const ELEMENT_TAB1_DATA: Element[] = [];

@Component({
  selector: 'app-standalone-charge',
  templateUrl: './standalone-charge.component.html',
  styleUrls: ['./standalone-charge.component.css']
})
export class StandaloneChargeComponent implements OnInit, OnDestroy {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  showBPNCode = false;
  salTab1 = true;
  showRevCap = false;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  codeCtrl = new FormControl();
  // filteredCodes: Observable<string[]>;
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codes: string[] = [];
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

  post_list: any = [
    { value: '1', viewValue: 'Accounts officer' },

    { value: '2', viewValue: 'Sr. Clerk' },


  ];
  goNgo_list: any = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
  ];
  perTemp_list: any = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' },
  ];
  fillVacant_list: any = [
    { value: '1', viewValue: 'Filled' },
    { value: '2', viewValue: 'Vacant' },
  ];
  class_list: any = [
    { value: '1', viewValue: 'Class-1' },
    { value: '2', viewValue: 'Class-2' },
    { value: '3', viewValue: 'Class-3' },
    { value: '3', viewValue: 'Class-4' },
    { value: '4', viewValue: 'Fix Pay' },
  ];


  indexValues;
  selectedValue: string;
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  displayedColumns = [
    'objecthead',
    'thirdlastyear',
    'secondlastyear',
    'lastyear',
    'currentyear',
    'last8month',
    'first4month',
    'totalof8and4month',
    'col6',
    'col7',
    'amountproposedbyHOD',
    'remarks',
    'action'
  ];
  estimationfrom_list: any[] = [


  ];
  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
  ];
  subDisplayedColumns = [
    'objecthead',
    'thirdlastyear',
    'secondlastyear',
    'lastyear',
    'currentyear',
    'last8month',
    'first4month',
    'totalof8and4month',
    'col6',
    'col7',
    'amountproposedbyHOD',
    'remarks',
    'action'
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);

  districtDataTotal: any = {
    districtTotal: 0,
    gramTotal: 0,
    talukaTotal: 0,
    total: 0
  };

  dataSource4Columns = [
    'expDet',
    'budEst'
  ];
  dataSource5Columns = [
    'name',
    'post',
    'bPay',
    'lEncash',
    'retire',


  ];
  districtColumns = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];

  stateColumns = [
    'position',
    'district',
    'propsedAmount',
  ];

  subHeaderDistrictColumns = ['total', 'districtTotal', 'talukaTotal', 'gramTotal'];


  consolidateColumns: string[] = [
    'objecthead',
    'thirdlastyear',
    'secondlastyear',
    'lastyear',
    'currentyear',
    'last8month',
    'first4month',
    'totalof8and4month',
    'col6',
    'col7',
    'amountproposedbyHOD',
    'remarks',
    'action'
  ];

  districtDataSource = new MatTableDataSource(
    DISTRICT_ELEMENT_DATA.sort((a, b) =>
      a.districtName > b.districtName
        ? 1
        : b.districtName > a.districtName
          ? -1
          : 0
    )
  );
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


  expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
  recoveryDataSource = new MatTableDataSource(recoveryData);
  recoveryDataExpendSource = new MatTableDataSource(recoveryExpendData);
  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;


  table1 = true;
  table2 = false;
  grantInAid: Boolean;
  subHeadLvlVar: boolean = false;


  expendCharges: boolean;
  displayedRojmdarColumns = [
    'typesofexpenditure',
    'noofpost',
    'salaries',
    'otherallowance',
    'total',
    'remarks'
  ];
  showObject: string;
  objs_tab1_data = {
    objecthead: '',
    thirdlastyear: '0.00',
    secondlastyear: '0.00',
    lastyear: '0.00',
    currentyear: '0.00',
    last8month: '0.00',
    first4month: '0.00',
    totalof8and4month: '0.00',
    col6: '0.00',
    col7: '0.00',
    amountproposedbyHOD: '0.00',
    remarks: ''
  };
  saveCharge: boolean;
  condition: Boolean;   // open for condition base Grant AId
  secondTable: Boolean; // open for condition base Grant AId
  // grantInAid: Boolean;
  thirdTable: Boolean;
  hodAmount: any;
  succObjectCode: Array<any> = [];
  errObjectCode: Array<any> = [];
  /** control for the MatSelect filter keyword */
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  sObjectHead: SubObjectHead[] = [
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
    { name: '3563 : Grants for creation of Capital Assets to Local Bodies', id: '3363' },];
  private _onDestroy = new Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    {
      label: 'Demand',
      value: '010: Other expenditure pertaining to Education Department'
    },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' }
  ];

  // added by shailesh
  createEstimateForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    ESTIMATE_BY: 'Please select any Estimation By ',
    DEMAND: 'Please select any Demand',
    BPN: 'Please select any BPN code',
    REVENUE_CAPITAL: 'Please select any Revenue/Capital',
    MAJOR_HEAD: 'Please select any Major Head',
    SUB_MAJOR_HEAD: 'Please select any Sub Major Head',
    MINOR_HEAD: 'Please select any Minor Head',
    SUB_HEAD: 'Please select any Sub Head',
    DETAILED_HEAD: 'Please insert Detailed Head',
    CHARGED_VOTED: 'Please insert Detailed Head'
  };

  finYear_list: any[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2021-2022' }
  ];

  department_list: any[] = [
    {
      value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
    },
    { value: '2', viewValue: 'Industries and Mines Department' }
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' }
  ];



  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' }
  ];

  demand_list: any[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },




  ];

  bpn_list: any[] = [
    {
      value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '2', viewValue: '13:Industries and Mines Department' },

    { value: '3', viewValue: '22:Roads And Buildings Department' },
    { value: '4', viewValue: '24c: Tribal Development Department - Part III' },
    { value: '5', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '6', viewValue: '24d: Tribal Development Department - Part IV' },



  ];

  revenue_capital_list: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2',
      viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
  ];

  subMajorHead_list: any[] = [
    {
      value: '1',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '2',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '3',
      viewValue: '00:Crop Husbandry'
    },

    {
      value: '4',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '5',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '6',
      viewValue: '01:Civil'
    },

    {
      value: '7',
      viewValue: '00:Stationery and Printing'
    },

    {
      value: '8',
      viewValue: '00::Co-operation'
    }
  ];

  minorHead_list: any[] = [
    {
      value: '1',
      viewValue: '090:Secretariat'
    },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '800:Other Expenditure', viewValue: '800:Other Expenditure' },

    { value: '3', viewValue: '101:Direction And Administration' },
    { value: '4', viewValue: '102:Food grain Crops' },

    { value: '5', viewValue: '103:Seed' },
    { value: '6', viewValue: '800:Other Expenditure' },

    { value: '7', viewValue: '108:Contribution to Provident Funds' },
    { value: '8', viewValue: '001:Direction and Administration' },

    { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '10', viewValue: '103:Government Presses' },

    { value: '11', viewValue: '105:Government Publications' },

    {
      value: '12',
      viewValue: '797:Transfer to Reserve fund and Deposite Account'
    },

    {
      value: '13',
      viewValue: '108:Assistance to other co-operatives'
    }
  ];

  subHead_list: any[] = [
    {
      value: '01:Agricultural and Co-operation Department',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development ',
      viewValue:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },

    {
      value: '01:AGR-15 Information & Technology',
      viewValue: '01:AGR-15 Information & Technology'
    },

    {
      value: '02:Expenditure for Training',
      viewValue: '02:Expenditure for Training'
    },

    {
      value: '01:AGR-Renovation Of The Department',
      viewValue: '01:AGR-Renovation Of The Department'
    },

    {
      value: '01:Direcorate of Agriculture',
      viewValue: '01:Direcorate of Agriculture'
    },

    {
      value: '02:Divisional Establishmen',
      viewValue: '02:Divisional Establishmen'
    },

    {
      value: '03:District Establishment',
      viewValue: '03:District Establishment'
    },

    {
      value: '01:Intensive Agricultural District Programme',
      viewValue: '01:Intensive Agricultural District Programme'
    },

    {
      value:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '03:National Food Security Mission',
      viewValue: '03:National Food Security Mission'
    },

    {
      value:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },

    {
      value: '01:Multiplication and Distribution of various type of cotton',
      viewValue: '01:Multiplication and Distribution of various type of cotton'
    },

    {
      value: '02:Seed Testing Laboratory',
      viewValue: '02:Seed Testing Laboratory'
    },

    {
      value: '03:AGR 5 -Taluka Seed Multiplication Farms',
      viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms'
    },

    {
      value: '04:Adj.Establishment of seed cell',
      viewValue: '04:Adj.Establishment of seed cell'
    },

    {
      value: '01:IND-51 Industries and Mines Department',
      viewValue: '01:IND-51 Industries and Mines Department'
    },

    {
      value: '01:IND-1 Planning Machinery in the Industries & Mines Department',
      viewValue:
        '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '01:IND-44 Information Technology',
      viewValue: '01:IND-44 Information Technology'
    },

    {
      value: '01:OIN-17 Industries & Mines Department',
      viewValue: '01:OIN-17 Industries & Mines Department'
    },

    {
      value:
        '01:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue:
        '01:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '01:IND-11 Directorate of Printing and Stationery',
      viewValue: '01:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '01:Stationery offices Stores',
      viewValue: '01:Stationery offices Stores'
    },

    {
      value: '01:IND-48 Government Presses',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value: '02:IND-42 Apprentice Training in Government Presses',
      viewValue: '02:IND-42 Apprentice Training in Government Presses'
    },

    {
      value: '01:IND-32 Government Book Depots',
      viewValue: '01:IND-32 Government Book Depots'
    },

    {
      value: '01:Depreciation Reserve Fund for Government Presses',
      viewValue: '01:Depreciation Reserve Fund for Government Presses'
    },

    {
      value: '01:IND-48 Government Presses',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];

  detailHead_list: any[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },

    {
      value: '00:AGR-15 Information & Technology',
      viewValue: '00:AGR-15 Information & Technology'
    },

    {
      value: '00:Expenditure for Training',
      viewValue: '00:Expenditure for Training'
    },

    {
      value: '00:AGR-Renovation Of The Department',
      viewValue: '00:AGR-Renovation Of The Department'
    },

    {
      value: '00:Direcorate of Agriculture',
      viewValue: '00:Direcorate of Agriculture'
    },

    {
      value: '00:Intensive Agricultural District Programme',
      viewValue: '00:Intensive Agricultural District Programme'
    },

    {
      value:
        '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue:
        '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '00:National Food Security Mission',
      viewValue: '00:National Food Security Mission'
    },

    {
      value:
        '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue:
        '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },

    {
      value: '00:Multiplication and Distribution of various type of cotton',
      viewValue: '00:Multiplication and Distribution of various type of cotton'
    },

    {
      value: '00:Seed Testing Laboratory',
      viewValue: '00:Seed Testing Laboratory'
    },

    {
      value: '00:AGR 5 -Taluka Seed Multiplication Farms',
      viewValue: '00:AGR 5 -Taluka Seed Multiplication Farms'
    },

    {
      value: '00:Adj.Establishment of seed cell',
      viewValue: '00:Adj.Establishment of seed cell'
    },

    {
      value: '00:IND-51 Industries and Mines Department',
      viewValue: '00:IND-51 Industries and Mines Department'
    },

    {
      value: '00:IND-1 Planning Machinery in the Industries & Mines Department',
      viewValue:
        '00:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue:
        '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '00:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue:
        '00:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '00:IND-44 Information Technology',
      viewValue: '00:IND-44 Information Technology'
    },

    {
      value: '00:OIN-17 Industries & Mines Department',
      viewValue: '00:OIN-17 Industries & Mines Department'
    },

    {
      value:
        '00:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue:
        '00:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '00:IND-11 Directorate of Printing and Stationery',
      viewValue: '00:IND-11 Directorate of Printing and Stationery'
    },

    {
      value:
        '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue:
        '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue:
        '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];

  chargedVoted_list: any[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
    // {value: 'Both', viewValue: 'Both'},
  ];

  attachmentType_list: any[] = [
    // { value: '1', viewValue: 'Establishment' },
    // { value: '2', viewValue: 'Leave Encashment' },
    { value: '1', viewValue: 'Other' },
    // { value: '4', viewValue: 'Outsource' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Supporting Document' }
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

  classTwoCtrl: FormControl = new FormControl();

  finYearCtrl: FormControl = new FormControl();
  // post1Ctrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();


  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimateByCtrl: FormControl = new FormControl();
  filteredEstimateBy: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

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

  chargedVotedCodeCtrl: FormControl = new FormControl();
  filteredchargedVotedCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  positionCtrl: FormControl = new FormControl();
  postCtrl: FormControl = new FormControl();
  goNgoCtrl: FormControl = new FormControl();
  perTempCtrl: FormControl = new FormControl();
  fillVacantCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();

  @ViewChild('singleSelect') singleSelect: MatSelect;
  // _onDestroy = new Subject<void>();

  // attachment sheet init
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
  displayedRojamdarColumns = [
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    // 'remark',
    // 'Action'
  ];
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  displayedBrowseColumns2 = [
    'position',
    'post',
    'goNgo',
    'perTemp',
    'fillVacant',
    'class',
    'action'
  ];

  displayedBrowseColumns4 = [
    'position',
    'post',
    'goNgo',
    'perTemp',
    'fillVacant',
    'class',

  ];
  displayedBrowseColumns51 = [
    'bPay', 'da', 'hra', 'cla', 'other'
  ];
  displayedBrowseColumns52 = [
    'ltc', 'reimb', 'medicalAllowances', 'bonus', 'leaveEncashment', 'ir',
    'transportAllowance', 'ropArriarse1', 'ropArriarse2', 'dearnessPay1', 'dearnessPay2',
  ];
  displayedBrowseColumns53 = [
    'bPay', 'da', 'hra', 'cla', 'ltc', 'reimb', 'medicalAllowances', 'bonus',
    'leaveEncashment', 'ir', 'transportAllowance', 'ropArriarse1', 'ropArriarse2', 'dearnessPay1', 'dearnessPay2',
  ];

  displayedBrowseColumns3 = [

    'post',
    'totalNo',
    'approxEst',

  ];

  displayedAttachmentColumns = [
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    'val5',
    'val6',
    'val7'
  ];
  dataSourceAttachment = new MatTableDataSource(this.DATA);
  isExtendedRow = (index, item) => item.extend;

  // tslint:disable-next-line:member-ordering
  dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  // tslint:disable-next-line:member-ordering
  displayedSubAttachmentColumns = [
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    'val5'
  ];
  // attachment sheet init end here

  // tslint:disable-next-line:member-ordering
  // rojmadarWorkCharge: any[] = [
  //   {
  //     data: 'Rojmdar',
  //     dataEdit: true,
  //     val1: '5',
  //     val1Edit: true,
  //     val2: '100.00',
  //     val2Edit: true,
  //     val3: '10.00',
  //     val3Edit: true,
  //     val4: '110.00',
  //     remark: 'Approved',
  //     remarkEdit: true
  //   },
  //   {
  //     data: 'Work Charge Establishment',
  //     dataEdit: true,
  //     val1: '2',
  //     val1Edit: true,
  //     val2: '155.00',
  //     val2Edit: true,
  //     val3: '15.00',
  //     val3Edit: true,
  //     val4: '170.00',
  //     remark: '',
  //     remarkEdit: true
  //   }
  // ];
  // tslint:disable-next-line:member-ordering
  dataSourceRojamadar = new MatTableDataSource(this.rojmadarWorkCharge);
  // tslint:disable-next-line:member-ordering
  // displayedRojamdarColumns = [
  //   'data',
  //   'val1',
  //   'val2',
  //   'val3',
  //   'val4',
  //   'remark',
  //   'Action'
  // ];


  // tslint:disable-next-line:member-ordering
  outSourceData: any[] = [
    {
      serviceType: 'Testing',
      budgetEstimate: ''
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceOutSource = new MatTableDataSource(this.outSourceData);
  // tslint:disable-next-line:member-ordering
  displayedOutSourceColumns = ['serviceType', 'budgetEstimate', 'Action'];

  // tslint:disable-next-line:member-ordering
  leaveEncashmentData: any[] = [
    {
      nameOfOfficer: '',
      designation: '',
      basicSalary: '',
      proposedAmount: '',
      dateOfRetirement: ''
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceLeaveEncashment = new MatTableDataSource(this.leaveEncashmentData);
  // tslint:disable-next-line:member-ordering
  displayedLeaveEncashmentColumns = [
    'nameOfOfficer',
    'designation',
    'basicSalary',
    'proposedAmount',
    'dateOfRetirement',
    'Action'
  ];

  // tslint:disable-next-line:member-ordering
  tabDisable: Boolean = true;
  // tslint:disable-next-line:member-ordering
  doneHeader: Boolean = false;
  // tslint:disable-next-line:member-ordering
  selectedIndex: number;

  // shailesh code end here
  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // tslint:disable-next-line:member-ordering
  fileBrowseIndex: number;
  // tslint:disable-next-line:member-ordering
  @ViewChild('table') table: ElementRef;
  budgetMessage: any;

  districtName: string[];

  district: any;

  totRow = 1;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.errorMessage = budgetMessage;
    this.filteredCodes.next(this.allMainCodes.slice());
    this.codeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.allMainCodes,
          this.codeCtrl.value,
          this.filteredCodes
        );
      });
    // this.filteredCodes = this.codeCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allMainCodes.slice()));
    this.initialSubObject();

    // added by shailesh
    this.createForm();

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.finYear_list,
          this.finYearCtrl.value,
          this.filteredFinYear
        );
      });

    this.filteredDepartmentCode.next(this.department_list.slice());
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.department_list,
          this.departmentCodeCtrl.value,
          this.filteredDepartmentCode
        );
      });

    this.filteredBranchCode.next(this.branch_list.slice());
    this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCodeCtrl.value,
          this.filteredBranchCode
        );
      });

    this.filteredEstimationFrom.next(this.estimation_list.slice());
    this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_list,
          this.estimationFromCtrl.value,
          this.filteredEstimationFrom
        );
      });

    this.filteredEstimateBy.next(this.estimation_by_list.slice());
    this.estimateByCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_by_list,
          this.estimateByCtrl.value,
          this.filteredEstimateBy
        );
      });

    this.filteredDemandCode.next(this.demand_list.slice());
    this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.demand_list,
          this.demandCodeCtrl.value,
          this.filteredDemandCode
        );
      });

    this.filteredBPNCode.next(this.bpn_list.slice());
    this.bpnCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.bpn_list,
          this.bpnCodeCtrl.value,
          this.filteredBPNCode
        );
      });

    this.filteredRevenueCapital.next(this.revenue_capital_list.slice());
    this.revenueCapitalCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.revenue_capital_list,
          this.revenueCapitalCtrl.value,
          this.filteredRevenueCapital
        );
      });

    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.majorHead_list,
          this.majorHeadCodeCtrl.value,
          this.filteredMajorHeadCode
        );
      });

    this.filteredSubMajorHeadCode.next(this.subMajorHead_list.slice());
    this.subMajorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.subMajorHead_list,
          this.subMajorHeadCodeCtrl.value,
          this.filteredSubMajorHeadCode
        );
      });

    this.filteredMinorHeadCode.next(this.minorHead_list.slice());
    this.minorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.minorHead_list,
          this.minorHeadCodeCtrl.value,
          this.filteredMinorHeadCode
        );
      });

    this.filteredSubHeadCode.next(this.subHead_list.slice());
    this.subHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.subHead_list,
          this.subHeadCodeCtrl.value,
          this.filteredSubHeadCode
        );
      });

    this.filteredDetailHeadCode.next(this.detailHead_list.slice());
    this.detailHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.detailHead_list,
          this.detailHeadCodeCtrl.value,
          this.filteredDetailHeadCode
        );
      });

    this.filteredchargedVotedCode.next(this.chargedVoted_list.slice());
    this.chargedVotedCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.chargedVoted_list,
          this.chargedVotedCodeCtrl.value,
          this.filteredchargedVotedCode
        );
      });

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });

    this.calculateAttachmentValue();
    this.calculateSubAttachmentValue();
    this.calculateRojamadarValue();

    // this.createEstimateForm.controls.finYear.patchValue('2020-2021');
    // this.createEstimateForm.controls.branchCode.patchValue('2');
    // this.createEstimateForm.controls.revenueCapital.patchValue('1');
    // this.createEstimateForm.controls.estimationFrom.patchValue('1');
    // this.createEstimateForm.controls.estimateBy.patchValue('1');
    this.createEstimateForm.patchValue({
      // finYear: '2020-2021',
      finYear: '2',
      branchCode: '2',
      // revenueCapital: '1',
      estimationFrom: '1',
      estimateBy: '1'
    });

    this.createEstimateForm.valueChanges.subscribe(val => {
      // to detect the form value change and set the flag for the form value change.
    });
    // shailesh code end here
  }

  // added by shailesh
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

  updateAttachmentRemarks() { }

  calculateRojamadarValue() {
    this.dataSourceRojamadar.data.forEach((element, index) => {
      element.val4 = (Number(element.val2) + Number(element.val3)).toFixed(2);
    });

    // this.rojmadarWorkCharge[0].val4 = (Number(this.rojmadarWorkCharge[0].val2) + Number(this.rojmadarWorkCharge[0].val3)).toFixed(2);
    // this.rojmadarWorkCharge[1].val4 = (Number(this.rojmadarWorkCharge[1].val2) + Number(this.rojmadarWorkCharge[1].val3)).toFixed(2);
  }

  updateRojamadarRemarks() { }

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
    this.createEstimateForm = this.fb.group({
      finYear: ['2', Validators.required],
      departmentCode: ['2', Validators.required],
      branchCode: ['', Validators.required],
      estimationFrom: [''],
      estimateBy: [''],
      demandCode: ['', Validators.required],
      bpnCode: ['1', Validators.required],
      revenueCapital: ['1', Validators.required],
      majorHeadCode: ['', Validators.required],
      subMajorHeadCode: ['', Validators.required],
      minorHeadCode: ['', Validators.required],
      subHeadCode: ['', Validators.required],
      detailHeadCode: ['', Validators.required],
      chargedVotedCode: ['2', Validators.required],
      // classOne:[''],
      // classTwo: ['']
    });
  }

  decimalKeyPress(event: any) {
    console.log(event);
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );

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
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout =
      '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
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

  addRojmadar() {
    if (this.dataSourceRojamadar) {
      this.dataSourceRojamadar.data.forEach((element, index) => {
        if (
          this.dataSourceRojamadar.data.length === index + 1 &&
          element &&
          element.data &&
          element.val1 &&
          element.val2 &&
          element.val3
        ) {
          const p_data = this.dataSourceRojamadar.data;
          p_data.push({
            data: '',
            dataEdit: true,
            val1: '',
            val1Edit: true,
            val2: '',
            val2Edit: true,
            val3: '',
            val3Edit: true,
            val4: '0.00',
            remarks: '',
            remarkEdit: true
          });
          this.dataSourceRojamadar.data = p_data;
        } else if (this.dataSourceRojamadar.data.length === index + 1) {
          this.toastr.error('Please fill the detail.');
        }
      });
    }
  }

  deleteRojmadar(index) {
    this.dataSourceRojamadar.data.splice(index, 1);
    this.dataSourceRojamadar = new MatTableDataSource(
      this.dataSourceRojamadar.data
    );
  }

  addOutSource() {
    if (this.dataSourceOutSource) {
      this.dataSourceOutSource.data.forEach((element, index) => {
        if (
          this.dataSourceOutSource.data.length === index + 1 &&
          element &&
          element.serviceType &&
          element.budgetEstimate
        ) {
          const p_data = this.dataSourceOutSource.data;
          p_data.push({ serviceType: '', budgetEstimate: '' });
          this.dataSourceOutSource.data = p_data;
        } else if (this.dataSourceOutSource.data.length === index + 1) {
          this.toastr.error('Please fill the detail.');
        }
      });
    }
  }

  deleteOutSource(index) {
    this.dataSourceOutSource.data.splice(index, 1);
    this.dataSourceOutSource = new MatTableDataSource(
      this.dataSourceOutSource.data
    );
  }

  addLeaveEncashment() {
    if (this.dataSourceLeaveEncashment) {
      this.dataSourceLeaveEncashment.data.forEach((element, index) => {
        if (
          this.dataSourceLeaveEncashment.data.length === index + 1 &&
          element &&
          element.nameOfOfficer &&
          element.designation &&
          element.basicSalary &&
          element.proposedAmount &&
          element.dateOfRetirement
        ) {
          const p_data = this.dataSourceLeaveEncashment.data;
          p_data.push({
            nameOfOfficer: '',
            designation: '',
            basicSalary: '',
            proposedAmount: '',
            dateOfRetirement: ''
          });
          this.dataSourceLeaveEncashment.data = p_data;
        } else if (this.dataSourceLeaveEncashment.data.length === index + 1) {
          this.toastr.error('Please fill the detail.');
        }
      });
    }
  }

  deleteLeaveEncashment(index) {
    this.dataSourceLeaveEncashment.data.splice(index, 1);
    this.dataSourceLeaveEncashment = new MatTableDataSource(
      this.dataSourceLeaveEncashment.data
    );
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    // debugger
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // debugger
      // Add our fruit
      if ((value || '').trim()) {
        // tslint:disable-next-line: no-unused-expression
        !this.codes.includes(value) && this.allMainCodes.includes(value)
          ? this.codes.push(value.trim())
          : '';
      }
      if (
        this.codes &&
        this.codes.length > 0 &&
        this.allMainCodes.includes(value)
      ) {
        this.applyFilter(value);
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.codeCtrl.setValue(null);
    }
  }

  selectedObjectHead1(event, index, value): void {
    // tslint:disable-next-line:no-unused-expression

    event.value.forEach(element => {
      if (!this.codes.includes(element)) {
        console.log(element);
        console.log('index: ', event);
        debugger;
        this.codes.push(element);
        this.codeCtrl.setValue(null);
        const value = this.allMainCodes.filter(objectHead => {
          return objectHead.value === element;
        });
        if (this.codes && this.codes.length > 0 && value.length > 0) {
          this.applyFilter(element);
          // tslint:disable-next-line:no-unused-expression
          // !this.changeInDetailTabCheck ? this.changeInDetailTabCheck = true : '';
        }
      }
    });
  }

  selectedObjectHead(event): void {
    this.subHeadLvlVar = true;
    console.log(event.value);
    this.codes = [];
    this.codes = event.value;
    this.codeCtrl.setValue(null);
    if (this.codes && this.codes.length > 0) {
      this.applyFilter(event.value[0]);
    }

  }

  deleteConfirmation(index: number, objectHead) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent2, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.removeObjectHead(index, objectHead);
      }
    });
  }
  removeObjectHead(index: number, objectHead): void {
    const self = this;
    if (objectHead.objectDetailId) {
      // this.budgetStandingChargeService.deleteObjectHead({id: objectHead.objectDetailId}).subscribe((res) => {
      // if (res && res['status'] === 200) {
      self.dataSource.data.splice(index, 1);
      self.dataSource = new MatTableDataSource(self.dataSource.data);
      // if (index >= 0) {
      self.codes.splice(self.codes.indexOf(objectHead.objectId), 1);
      self.toastr.success('Successfully deleted!');
      // } else {
      //   self.toastr.error('Some error while deleting!');
      // }
      // }, (err) => {
      //   self.toastr.error('Some error while deleting!');
      // });
    } else {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataSource.data);
      // if (index >= 0) {
      this.codes.splice(this.codes.indexOf(objectHead.objectId), 1);
    }
    // }
  }

  deleteConfirmation2(index: number, objectHead) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent2, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.removeObjectHead2(index, objectHead);
      }
    });
  }

  removeObjectHead2(index: number, objectHead): void {
    const self = this;
    if (objectHead.objectDetailId) {
      // this.budgetStandingChargeService.deleteObjectHead({id: objectHead.objectDetailId}).subscribe((res) => {
      // if (res && res['status'] === 200) {
      self.recoveryDataSource.data.splice(index, 1);
      self.recoveryDataSource = new MatTableDataSource(self.recoveryDataSource.data);
      // if (index >= 0) {
      self.codes.splice(self.codes.indexOf(objectHead.objectId), 1);
      self.toastr.success('Successfully deleted!');
      // } else {
      //   self.toastr.error('Some error while deleting!');
      // }
      // }, (err) => {
      //   self.toastr.error('Some error while deleting!');
      // });
    } else {
      this.recoveryDataSource.data.splice(index, 1);
      this.recoveryDataSource = new MatTableDataSource(this.recoveryDataSource.data);
      // if (index >= 0) {
      this.codes.splice(this.codes.indexOf(objectHead.objectId), 1);
    }
    // }
  }

  remove(fruit: string): void {
    const index = this.codes.indexOf(fruit);

    if (index >= 0) {
      this.codes.splice(index, 1);
    }
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

  selected(event: MatAutocompleteSelectedEvent): void {
    // this.codes.push(event.option.viewValue);
    // tslint:disable-next-line:no-unused-expression
    !this.codes.includes(event.option.viewValue)
      ? this.codes.push(event.option.viewValue)
      : '';
    this.codeInput.nativeElement.value = '';
    this.codeCtrl.setValue(null);
    if (
      this.codes &&
      this.codes.length > 0 &&
      this.allMainCodes.includes(event.option.viewValue)
    ) {
      this.applyFilter(event.option.viewValue);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMainCodes.filter(
      fruit => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // debugger
    // this.dataSource.filter = filterValue;
    // const pdata = this.dataSource.data.forEach(element => {
    //   return (this.codes.includes(element.objecthead)) ? element : '';
    // });
    // const pdata = ELEMENT_DATA;
    // this.dataSource.data = pdata.filter(x => this.codes.includes(x.objecthead));
    this.objectCodeFilterData(filterValue);
  }

  getRowData(index) {
    // this.dataSource.data.forEach((data, dataindex: any) => {
    //   if (dataindex === index) {
    //     data.status = false;
    //   } else {
    //     data.status = true;
    //   }
    // });
  }

  showCharge(event, index, element) {
    if (element.objecthead && element.currentyear) {
      this.expendCharges = true;

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
      const data = this.dataSource.data.filter((x, i) => i === index);
      this.dataSource.data = data;
      this.showObject = element.objecthead;
      this.hodAmount = element.amountproposedbyHOD;
    }
    //  else {
    //   this.toastr.error('Please fill all the details object head!');
    // }
    // setTimeout(() => {
    //   this.myScrollContainer.nativeElement.scrollIntoView({top: (this.parentGrid.nativeElement.scrollHeight + 100), behavior: 'smooth'});
    // }, 0);
  }

  // showCharge(event, index, element) {
  //   // this.myScrollContainer.nativeElement.scrollIntoView();
  //   // if (
  //   //   element &&
  //   //   element.objecthead &&
  //   //   element.thirdlastyear &&
  //   //   element.secondlastyear &&
  //   //   element.lastyear &&
  //   //   element.currentyear &&
  //   //   element.last8month &&
  //   //   element.first4month &&
  //   //   element.amountproposedbyHOD
  //   // ) {
  //     this.expendCharges = true;
  //     this.selSubObjectId = '';
  //     this.subObjectId = [];
  //     const data = this.dataSource.data.filter((x, i) => i === index);
  //     this.dataSource.data = data;
  //     this.showObject = element.objecthead;
  //     this.hodAmount = element.amountproposedbyHOD;
  //   // } else {
  //   //   this.toastr.error('Please fill all the details object head!');
  //   // }
  //   // setTimeout(() => {
  // tslint:disable-next-line: max-line-length
  //   //   this.myScrollContainer.nativeElement.scrollIntoView({top: (this.parentGrid.nativeElement.scrollHeight + 100), behavior: 'smooth'});
  //   // }, 0);
  // }

  saveStandCharge() { }

  backCharge() {
    this.showObject = '';
    this.expendCharges = false;
    this.objectCodeFilterData('');
  }

  objectCodeFilterData(data) {
    const pdata = ELEMENT_DATA;
    this.dataSource.data = pdata.filter(x => this.codes.includes(x.objecthead));
  }

  addExpense(showObject) {
    console.log('this.expendDataSource.data', this.expendDataSource.data);
    const expendDatacount = this.expendDataSource.data.length;
    if (this.selSubObjectId) {
      if (
        this.expendDataSource &&
        this.expendDataSource.data &&
        this.expendDataSource.data.length === 0
      ) {
        this.expendDataSource.data = [
          {
            objecthead: this.selSubObjectId,
            thirdlastyear: '',
            secondlastyear: '',
            lastyear: '',
            currentyear: '',
            last8month: 0,
            first4month: 0,
            totalof8and4month: 0,
            col6: '',
            col7: '',
            amountproposedbyHOD: '',
            remarks: '',
            isSelected: false,
            isBreakUp: false
          }
        ];
        this.subObjectId.push(this.selSubObjectId);
      } else {
        this.expendDataSource.data.forEach((element, index) => {
          element.objecthead = this.subObjectId[index];
          if (
            this.expendDataSource.data.length === index + 1 &&
            element &&
            element.objecthead &&
            element.thirdlastyear &&
            element.secondlastyear &&
            element.lastyear &&
            element.currentyear &&
            element.last8month &&
            element.first4month &&
            element.amountproposedbyHOD
          ) {
            const p_data = this.expendDataSource.data;
            this.subObjectId.push(this.selSubObjectId);
            // element.objecthead = this.subObjectId[index + 1];
            p_data.push({
              objecthead: this.selSubObjectId,
              thirdlastyear: '',
              secondlastyear: '',
              lastyear: '',
              currentyear: '',
              last8month: '',
              first4month: '',
              totalof8and4month: '',
              col6: '',
              col7: '',
              amountproposedbyHOD: '',
              remarks: '',
              isSelected: false,
              isBreakUp: false
            });
            this.expendDataSource.data = p_data;
          } else if (this.expendDataSource.data.length === index + 1) {
            element.objecthead = this.subObjectId[index];
            this.toastr.error(
              'Please fill the detail of object head ' + element.objecthead + ''
            );
          }
        });
      }
    } else {
      this.toastr.error('Please select object head to add expense');
    }
    // debugger
  }



  saveAllCharge() {
    let pstatus;
    let expenseHod: any = 0;
    let expendStatus;
    if (this.expendDataSource.data && this.expendDataSource.data.length === 0) {
      this.toastr.error('Please add the expense with selected object head.');
    } else {
      this.expendDataSource.data.forEach((element, index) => {
        // element.objecthead = showObject;
        if (
          element.objecthead === '' ||
          element.thirdlastyear === '' ||
          element.secondlastyear === '' ||
          element.lastyear === '' ||
          element.currentyear === '' ||
          element.last8month === '' ||
          element.first4month === '' ||
          element.amountproposedbyHOD === ''
        ) {
          pstatus = 1;
        } else if (
          element &&
          element.objecthead &&
          element.thirdlastyear &&
          element.secondlastyear &&
          element.lastyear &&
          element.currentyear &&
          element.last8month &&
          element.first4month &&
          element.amountproposedbyHOD
        ) {
          expenseHod = expenseHod + Number(element.amountproposedbyHOD);
          if (this.hodAmount !== expenseHod) {
            pstatus = 2;
          }
          // this.hodAmount
          // this.toastr.error('Please fill the detail of object head ' + showObject + '');
        } else {
          pstatus = '';
        }
        if (this.expendDataSource.data.length === index + 1) {
          if (pstatus === 1) {
            this.toastr.error('Please fill the detail for sub object head.');
          } else if (pstatus === 2) {
            this.toastr.error(
              'Your proposed HOD amount did not match to main object proposed HOD.'
            );
          } else {
            this.toastr.success(
              'Your expendcharges proposed HOD amount matched successfully.'
            );
            // this.expendCharges = false;
            expendStatus = true;
            return;
          }
        }
      });
    }

    let sData = 0;
    let districtStatus;
    this.districtDataSource.data.forEach((element, index) => {
      if (element) {
        sData +=
          Number(element.expendature) +
          Number(element.talukaexpendature) +
          Number(element.gramexpendature);
      }
      if (this.districtDataSource.data.length === index + 1) {
        if (this.hodAmount !== sData) {
          this.toastr.error(
            'Your district, taluka & gram panchayat expense did not match to main object proposed HOD.'
          );
        } else {
          this.toastr.success(
            'Your district, taluka & gram panchayat expense matched to main object successfully.'
          );
          districtStatus = true;
        }
      }
    });

    if (
      expendStatus &&
      districtStatus &&
      this.districtDataSource.data.length > 0 &&
      this.expendDataSource.data.length > 0
    ) {
      // tslint:disable-next-line:no-unused-expression
      !this.succObjectCode.includes(this.showObject)
        ? this.succObjectCode.push(this.showObject)
        : '';
      this.backCharge();
    } else if (
      (expendStatus || districtStatus) &&
      this.districtDataSource.data.length > 0 &&
      this.expendDataSource.data.length > 0
    ) {
      // this.errObjectCode.push(this.showObject);
    }
  }

  saveAllData() {
    this.toastr.success('Data Saved Successfully.');
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
      this.sObjectHead.filter(
        obj => obj.name.toLowerCase().indexOf(search) > -1
      )
    );
  }

  selectCharge(data) {
    this.selSubObjectId = data.value;
    this.addExpense(this.showObject);
  }
  onBlurMethod() {
    console.log('blur==>');
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list-duplicate']);
  }

  // goToNext() {
  //   this.tabDisable = false;
  //   this.selectedIndex = 1;
  // }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
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

  deleteConfirmation3(i) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent2, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteObjectHeadBreakupRow(i);
      }
    });
  }

  deleteObjectHeadBreakupRow(objIndex) {
    const p_data = this.expendDataSource.data;
    this.subObjectId.splice(objIndex, 1);
    p_data.splice(objIndex, 1);
    // element.objecthead = this.subObjectId[index + 1];
    this.expendDataSource.data = p_data;
  }
  decimalPoint(data, key) {
    // debugger
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  loadThirdLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 3).toString() + '-' + (Number(year[0]) - 2).toString()
    );
  }

  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString()
    );
  }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString()
    );
  }

  loadPreviousYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString();
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
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


  saveEstimate() { }

  goToDashboard() { }

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

  viewComments(): void {
    // const employees: string[] = [
    //   'Satendra Zala',
    //   'Hardik Chaudhary',
    //   'C.K Brahmbhatt',
    // ];
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
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

    const dialogRef = this.dialog.open(StandingChargeHistoryComponent, {
      maxWidth: '',
      data: dialogData,
      panelClass: 'StandingChargeHistoryModel'
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

  saveConfirmationPopup() {
    const dialogRef = this.dialog.open(SaveConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.tabDisable = false;
        this.selectedIndex = 1;
      }
    });
  }

  deleteConfirmationPopup(i) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent2, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRow(i);
      }
    });
  }


  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  addToDistrictTotal() {
    let tmp = 0;
    this.districtDataSource.data.forEach((element, index) => {
      if (element.expendature) {
        tmp = +tmp + +element.expendature;
      }
    });
    this.districtDataTotal.districtTotal = tmp.toFixed(2);
    this.districtDataTotal.total =
      +tmp +
      +this.districtDataTotal.talukaTotal +
      +this.districtDataTotal.gramTotal;
  }

  addToTalukaTotal() {
    let tmp = 0;
    this.districtDataSource.data.forEach((element, index) => {
      if (element.talukaexpendature) {
        tmp = +tmp + +element.talukaexpendature;
      }
    });
    this.districtDataTotal.talukaTotal = tmp.toFixed(2);
    this.districtDataTotal.total =
      +tmp +
      +this.districtDataTotal.districtTotal +
      +this.districtDataTotal.gramTotal;
  }

  addToGramTotal() {
    let tmp = 0;
    this.districtDataSource.data.forEach((element, index) => {
      if (element.gramexpendature) {
        tmp = +tmp + +element.gramexpendature;
      }
    });
    this.districtDataTotal.gramTotal = tmp.toFixed(2);
    this.districtDataTotal.total =
      +tmp +
      +this.districtDataTotal.districtTotal +
      +this.districtDataTotal.talukaTotal;
  }
  calcThirdLastYear(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.thirdlastyear);
    });

    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetThirdLastYear(): any {
    let calcNetThirdLastYear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      calcNetThirdLastYear =
        calcNetThirdLastYear + Number(element.thirdlastyear);
    });
    let final_Value = this.calcThirdLastYear() - calcNetThirdLastYear;
    // return this.calcThirdLastYear() - calcNetThirdLastYear;
    return final_Value != 0 ? final_Value : '';
  }

  calcSecondLastYear(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.secondlastyear);
    });
    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetSecondLastYear(): any {
    let secondlastyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      secondlastyear = secondlastyear + Number(element.secondlastyear);
    });
    let final_Date = this.calcSecondLastYear() - secondlastyear;
    return final_Date != 0 ? final_Date : '';
    // return this.calcSecondLastYear() - secondlastyear;
  }

  calcLastYear(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.lastyear);
    });
    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetLastYear(): any {
    let lastyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      lastyear = lastyear + Number(element.lastyear);
    });
    let final_date = this.calcLastYear() - lastyear;
    return final_date != 0 ? final_date : '';
    // return this.calcLastYear() - lastyear;
  }

  calcCurrentYear(): number {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.currentyear);
    });
    // return calcThirdLastYear != 0 ? calcThirdLastYear:'';
    return calcThirdLastYear;
  }

  calcNetCurrentYear(): number {
    let currentyear = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      currentyear = currentyear + Number(element.currentyear);
    });
    // let p_data = this.calcCurrentYear() - currentyear;
    // return p_data !=0 ? p_data:'';
    return this.calcCurrentYear() - currentyear;
  }


  calcLast8Month(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.last8month);
    });
    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetLast8Month(): any {
    let last8month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      last8month = last8month + Number(element.last8month);
    });
    let final_Date = this.calcLast8Month() - last8month;
    return final_Date != 0 ? final_Date : '';
    // return this.calcLast8Month() - last8month;
  }

  calcFirst4Month(): any {
    let first4month = 0;
    this.dataSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month);
    });
    return first4month != 0 ? first4month : '';
  }

  calcNetFirst4Month(): any {
    let first4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month);
    });
    let final_data = this.calcFirst4Month() - first4month;
    return final_data != 0 ? final_data : '';
    // return this.calcFirst4Month() - first4month;
  }



  calcTotalof8and4Month(): any {
    let totalof8and4month = 0;
    this.dataSource.data.forEach((element, index) => {
      totalof8and4month =
        totalof8and4month +
        (Number(element.last8month) + Number(element.first4month));
    });
    return totalof8and4month != 0 ? totalof8and4month : '';
  }

  calcNetTotalof8and4Month(): any {
    let totalof8and4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      totalof8and4month =
        totalof8and4month +
        (Number(element.last8month) + Number(element.first4month));
    });
    let final_data = this.calcTotalof8and4Month() - totalof8and4month;
    return final_data != 0 ? final_data : '';
    // return this.calcTotalof8and4Month() - totalof8and4month;
  }

  totalof8and4Month() {
    let totalof8and4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      totalof8and4month = totalof8and4month + (Number(element.last8month) + Number(element.first4month));
    });
    return totalof8and4month;
  }

  calcCol6_15(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.last8month) * 1.5;
    });
    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetCol6_15(): any {
    let last8month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      last8month = last8month + Number(element.last8month) * 1.5;
    });
    let final_data = this.calcCol6_15() - last8month;
    return final_data != 0 ? final_data : '';
    // return this.calcCol6_15() - last8month;
  }

  calcCol7_3(): any {
    let first4month = 0;
    this.dataSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month) * 3;
    });
    return first4month != 0 ? first4month : '';
  }

  calcNetCol7_3(): any {
    let first4month = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month) * 3;
    });
    let final_data = this.calcCol7_3() - first4month;
    return final_data != 0 ? final_data : '';
    // return this.calcCol7_3() - first4month;
  }

  calcAmtProposedByDDO(): any {
    let calcThirdLastYear = 0;
    this.dataSource.data.forEach((element, index) => {
      calcThirdLastYear =
        calcThirdLastYear + Number(element.amountproposedbyHOD);
    });
    return calcThirdLastYear != 0 ? calcThirdLastYear : '';
  }

  calcNetAmtProposedByHOD(): any {
    let amountproposedbyHOD = 0;
    this.recoveryDataSource.data.forEach((element, index) => {
      amountproposedbyHOD =
        amountproposedbyHOD + Number(element.amountproposedbyHOD);
    });
    let final_data = this.calcAmtProposedByDDO() - amountproposedbyHOD;
    return final_data != 0 ? final_data : '';
    // return this.calcAmtProposedByDDO() - amountproposedbyHOD;
  }

  calcThirdLastYear1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.thirdlastyear);
    });
    return calcThirdLastYear;
  }

  calcNetThirdLastYear1(): any {
    let calcNetThirdLastYear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      calcNetThirdLastYear =
        calcNetThirdLastYear + Number(element.thirdlastyear);
    });
    let finalTotal = this.calcThirdLastYear1() - calcNetThirdLastYear;
    return finalTotal != 0 ? finalTotal : '';
  }

  calcSecondLastYear1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.secondlastyear);
    });
    return calcThirdLastYear;
  }

  calcNetSecondLastYear1(): number {
    let secondlastyear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      secondlastyear = secondlastyear + Number(element.secondlastyear);
    });
    return this.calcSecondLastYear1() - secondlastyear;
  }

  calcLastYear1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.lastyear);
    });
    return calcThirdLastYear;
  }

  calcNetLastYear1(): number {
    let lastyear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      lastyear = lastyear + Number(element.lastyear);
    });
    return this.calcLastYear1() - lastyear;
  }

  calcCurrentYear1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.currentyear);
    });
    return calcThirdLastYear;
  }

  calcNetCurrentYear1(): number {
    let currentyear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      currentyear = currentyear + Number(element.currentyear);
    });
    return this.calcCurrentYear1() - currentyear;
  }

  calcLast8Month1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.last8month);
    });
    return calcThirdLastYear;
  }

  calcNetLast8Month1(): number {
    let last8month = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      last8month = last8month + Number(element.last8month);
    });
    return this.calcLast8Month1() - last8month;
  }

  calcFirst4Month1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.last8month);
    });
    return calcThirdLastYear;
  }

  calcNetFirst4Month1(): number {
    let first4month = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      first4month = first4month + Number(element.first4month);
    });
    return this.calcFirst4Month1() - first4month;
  }

  calcTotalof8and4Month1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.totalof8and4month);
    });
    return calcThirdLastYear;
  }

  calcNetTotalof8and4Month1(): number {
    let totalof8and4month = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      totalof8and4month =
        totalof8and4month +
        Number(element.last8month) +
        Number(element.first4month);
    });
    return this.calcTotalof8and4Month1() - totalof8and4month;
  }

  calcCol6_151(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.last8month) * 1.5;
    });
    return calcThirdLastYear;
  }
  calcNetCol6_151(): number {
    let calcNetThirdLastYear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      calcNetThirdLastYear =
        calcNetThirdLastYear + Number(element.last8month) * 1.5;
    });
    return this.calcCol6_151() - calcNetThirdLastYear;
  }

  calcCol7_31(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear = calcThirdLastYear + Number(element.first4month) * 3;
    });
    return calcThirdLastYear;
  }

  calcNetCol7_31(): number {
    let calcNetThirdLastYear = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      calcNetThirdLastYear =
        calcNetThirdLastYear + Number(element.first4month) * 3;
    });
    return this.calcCol7_31() - calcNetThirdLastYear;
  }

  calcAmtProposedByDDO1(): number {
    let calcThirdLastYear = 0;
    this.expendDataSource.data.forEach((element, index) => {
      calcThirdLastYear =
        calcThirdLastYear + Number(element.amountproposedbyHOD);
    });
    return calcThirdLastYear;
  }

  calcNetAmtProposedByHOD1(): number {
    let amountproposedbyHOD = 0;
    this.recoveryDataExpendSource.data.forEach((element, index) => {
      amountproposedbyHOD =
        amountproposedbyHOD + Number(element.amountproposedbyHOD);
    });
    return this.calcAmtProposedByDDO1() - amountproposedbyHOD;
  }

  tot1() {
    let amountExp = 0;
    this.dataSource3.data.forEach((element) => {
      amountExp = amountExp + Number(element.totalNo);
    });
    return amountExp;
  }
  tot2() {
    let amountExp = 0;
    this.dataSource3.data.forEach((element) => {
      amountExp = amountExp + Number(element.approxEst);
    });
    return amountExp;
  }

  tot3() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach((element) => {
      amountExp = amountExp + Number(element.val2) + Number(element.val3);
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

  basicPay() {
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



  tot4() {
    let amountExp = 0;
    this.dataSource4.data.forEach((element) => {
      amountExp = amountExp + Number(element.budEst);
    });
    return amountExp;
  }
  addLeave() {
    const p_data = this.dataSource2.data;
    this.totRow++;
    p_data.push({
      post: '',
      goNgo: '',
      perTemp: '',
      fillVacant: '',
      class: '',
    });
    this.dataSource2.data = p_data;
  }

  deleteRow(index) {
    this.dataSource2.data.splice(index, 1);
    this.totRow--;
    this.dataSource2 = new MatTableDataSource(
      this.dataSource2.data
    );
  }

  showSal() {
    this.salTab1 = false;
  }

  displayRevCap() {
    this.showRevCap = true;
  }

  displayDemand() {
    this.showBPNCode = true;
  }

  jilla() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.expendature);
    });
    return amountExp;
  }
  taluka() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.talukaexpendature);
    });
    return amountExp;
  }
  gram() {
    let amountExp = 0;
    this.districtDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.gramexpendature);
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

}

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./standalone-charge.component.css']
})
export class DeleteConfirmDialogComponent2 implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SaveConfirmDialogComponent>
  ) { }

  selectedIndex: number;

  ngOnInit() { }

  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }

}

@Component({
  selector: 'app-standing-charge-view-comments-dialog',
  templateUrl: 'standing-charge-view-comments-dialog.html',
  styleUrls: ['./standalone-charge.component.css']
})
export class StandingChargeViewCommentsComponent implements OnInit {
  // showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Demand', value: '010: Other expenditure ' },
    { label: 'Revenue/Capital', value: 'Revenue' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' }
  ];

  displayData = false;

  attachment = [
    // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = true;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;



  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  master_checked = false;
  master_indeterminate = false;

  forwardDialog_history_list: any[] = [
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 1,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretary',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 3,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
    // { value: 'Return', viewValue: 'Return' },
    // { value: 'Approve', viewValue: 'Approve' },
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
    // { value: '2', viewValue: 'Hardik Chaudhary' },
    // { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];

  // branchPopupCtrl:FormControl = new FormControl();
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];

  branchPopupCtrl: FormControl = new FormControl();
  branchPopupType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeViewCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });
    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.branchPopupCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchPopupCtrl.value,
          this.branchPopupType
        );
      });

    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });

    // this.checkDisplayFile(this.attachment[0]);
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
      userCode: ['', Validators.required],
      branchPopupCode: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    // console.log("pdfData",  pdfData)
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }

  // initVar(){
  //   this.totalPages = 0;
  //   this.page = 1;
  // }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    // if(data.fileType === 'image'){
    // data.imgStatus = !data.imgStatus;
    // (data.imgStatus) ? (data.imgStatus = false) : (data.imgStatus = true);
    // (!data.pdfStatus) ? (data.imgStatus = false) : '';
    // if(!data.pdfStatus) {
    //   this.sampleFlag = true;
    // }

    //   if(data.imgStatus){
    //     data.imgStatus = false;
    //   } else {
    //     console.log('hello one');
    //     data.imgStatus = true;
    //     // data.pdfStatus = false;
    //   }
    // } else{
    //   // data.imgStatus = false;
    // }

    // if(data.fileType === 'pdf'){
    //   // (!data.imgStatus) ? (data.pdfStatus = false) : '';
    //   // data.pdfStatus = !data.pdfStatus;
    //   if(data.pdfStatus){
    //     data.pdfStatus = false;
    //   } else {
    //     console.log('hello one');
    //     // data.imgStatus = false;
    //     data.pdfStatus = true;
    //   }
    // } else{
    //   // data.pdfStatus = false;
    //   // data.imgStatus = false;
    // }
    console.log(data);
    // return data;
  }

  // onResizeEnd(event: ResizeEvent): void {
  //   console.log('Element was resized', event);
  //   document.getElementById("block1").style.width = String(Number(document.getElementById("block1").style.width) + Number(event.edges.right)) + 'px';
  //   document.getElementById("block2").style.width = String(Number(document.getElementById("block2").style.width) - Number(event.edges.right)) + 'px';
  // }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
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

  master_change() {
    for (let value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    //Get total checked items
    for (let value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) checked_count++;
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.forwardDialog_history_list.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}

@Component({
  selector: 'app-standing-charge-forward-dialog',
  templateUrl: 'standing-charge-forward-dialog.html',
  styleUrls: ['./standalone-charge.component.css']
})
export class StandingChargeForwardDialogComponent implements OnInit {
  showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Demand', value: '010: Other expenditure ' },
    { label: 'Revenue/Capital', value: 'Revenue' },
    { label: 'Major Head', value: '2205: Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '101: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Voted' }
  ];

  displayData = false;

  attachment = [
    // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
    // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = false;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;
  tabDisable: Boolean = true;
  selectedIndex: number;

  actionForm: FormGroup;
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  forwardDialog_history_list: any[] = [
    {
      id: 3,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretaryr',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      id: 1,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
    }

    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
    // { value: 'Return', viewValue: 'Return' },
    // { value: 'Approve', viewValue: 'Approve' },
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
    // { value: '2', viewValue: 'Hardik Chaudhary' },
    // { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];
  branchCtrl: FormControl = new FormControl();
  filteredBranch: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.branch_list) {
      this.filteredBranch.next(this.branch_list.slice());
    }
    this.branchCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCtrl.value,
          this.filteredBranch
        );
      });

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });

    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });
    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  backToAction() {
    this.showAction = true;
    this.show = false;

  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
  uploadAttachment() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }
  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branch: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    // console.log("pdfData",  pdfData)
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }

  // initVar(){
  //   this.totalPages = 0;
  //   this.page = 1;
  // }



  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    // if(data.fileType === 'image'){
    // data.imgStatus = !data.imgStatus;
    // (data.imgStatus) ? (data.imgStatus = false) : (data.imgStatus = true);
    // (!data.pdfStatus) ? (data.imgStatus = false) : '';
    // if(!data.pdfStatus) {
    //   this.sampleFlag = true;
    // }

    //   if(data.imgStatus){
    //     data.imgStatus = false;
    //   } else {
    //     console.log('hello one');
    //     data.imgStatus = true;
    //     // data.pdfStatus = false;
    //   }
    // } else{
    //   // data.imgStatus = false;
    // }

    // if(data.fileType === 'pdf'){
    //   // (!data.imgStatus) ? (data.pdfStatus = false) : '';
    //   // data.pdfStatus = !data.pdfStatus;
    //   if(data.pdfStatus){
    //     data.pdfStatus = false;
    //   } else {
    //     console.log('hello one');
    //     // data.imgStatus = false;
    //     data.pdfStatus = true;
    //   }
    // } else{
    //   // data.pdfStatus = false;
    //   // data.imgStatus = false;
    // }
    console.log(data);
    // return data;
  }

  // onResizeEnd(event: ResizeEvent): void {
  //   console.log('Element was resized', event);
  //   document.getElementById("block1").style.width = String(Number(document.getElementById("block1").style.width) + Number(event.edges.right)) + 'px';
  //   document.getElementById("block2").style.width = String(Number(document.getElementById("block2").style.width) - Number(event.edges.right)) + 'px';
  // }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
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
  selector: 'app-standing-charge-confirm-dialog',
  templateUrl: './standing.charge.confirm.dialog.html',
  styleUrls: ['./standalone-charge.component.css']
})
export class StadingChargeConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<StadingChargeConfirmDialogComponent>
  ) { }

  ngOnInit() { }

  onCancel(): void {
    this.dialogRef.close('no');
  }

  onSave(): void {
    this.dialogRef.close('save');
  }
}



