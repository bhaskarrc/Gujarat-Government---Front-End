import { ListValue } from './../../model/common-grant';
import { ELEMENT_DATA_css } from './../../model/grant-fd-to-css';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
import { Observable, ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
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

import { DialogData } from 'src/app/model/standing-charge';
import { HeaderElement, CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { cursorTo } from 'readline';
import { SaveConfirmDialogComponent } from '../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeForwardDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';


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
  bPay2: string | '';
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

export interface RojmdarElement {
  typeOfExpenditure: string;
  noOfPost: string;
  salaries: string;
  otherAllowance: string;
  total: string;
  remarks: string | '';
}

const ELEMENT_DATA2: Element2[] = [
  {
    post: '',
    goNgo: '',
    perTemp: '',
    fillVacant: '',
    class: ''
  }
];

const ELEMENT_DATA6: Element6[] = [
  {
    post: 'Accounts officer',
    goNgo: '1',
    perTemp: '1',
    fillVacant: '1',
    class: '3'
  }
];

const ELEMENT_DATA7: Element7[] = [
  {
    bPay: '',
    bPay2: '',
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
    dearnessPay2: ''
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
    approxEst: '',
  },
  {
    post: 'NO OF POST FOR CLASS3',
    totalNo: '',
    approxEst: '',
  },
  {
    post: 'NO OF POST FOR CLASS4',
    totalNo: '',
    approxEst: '',
  },
  {
    post: 'FIX PAY',
    totalNo: '',
    approxEst: '',
  }
];
const ELEMENT_DATA4: Element4[] = [
  {
    expDet: 'Peon',
    budEst: ''
  },
  {
    expDet: 'Driver',
    budEst: ''
  },
  {
    expDet: 'Data Entry Operator',
    budEst: ''
  },
  {
    expDet: 'Swipper',
    budEst: ''
  },
  {
    expDet: 'Water Bearer',
    budEst: ''
  },
  {
    expDet: 'Security',
    budEst: ''
  },
  {
    expDet: 'Other',
    budEst: ''
  }
];

const ELEMENT_DATA5: Element5[] = [
  {
    name: '',
    post: '',
    bPay: '',
    lEncash: '',
    retire: ''
  }
];


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

const ELEMENT_TAB1_DATA: Element[] = [];

@Component({
  selector: 'app-wireframe-of-establishment-details',
  templateUrl: './wireframe-of-establishment-details.component.html',
  styleUrls: ['./wireframe-of-establishment-details.component.css']
})
export class WireframeOfEstablishmentDetailsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  salTab1 = true;
  showGo: boolean;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  codeCtrl: FormControl = new FormControl();
  // filteredCodes: Observable<string[]>;
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codes: string[] = [];

  allMainCodes: any[] = [
    { value: '3100', viewValue: '3100 : Grants-in-Aid General' },
    {
      value: '3131',
      viewValue:
        '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
    },
    {
      value: '3132',
      viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining'
    },
    { value: '3133', viewValue: '3133 : Grant-in-Aid General to Local Bodies' },
    { value: '3135', viewValue: '3135 : Grant-in-Aid General to Others' },
    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions To Panchayats' },
    { value: '3243', viewValue: '3243 : Contributions To Local Bodies' },
    { value: '3245', viewValue: '3245 : Contributions to Others' },
    { value: '3300', viewValue: '3300 : Subsidies' },
    { value: '3351', viewValue: '3351 : Subsidies To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies To Local Bodies' },
    { value: '3355', viewValue: '3355 : Subsidies to Others' },
    { value: '3400', viewValue: '3400 : Scholarships / Stipend' },
    { value: '3500', viewValue: '3500 : Grant for Creation of Capital Assets' },
    {
      value: '3561',
      viewValue: '3561 : Grants for creation of Capital Assets to Panchayats'
    },
    {
      value: '3563',
      viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies'
    },
    {
      value: '3565',
      viewValue: '3565 : Grants for creation of Capital Assets to others.'
    }
  ];

  post_list: any = [
    { value: '1', viewValue: 'Accounts officer' },

    { value: '2', viewValue: 'Sr. Clerk' }
  ];
  goNgo_list: any = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' }
  ];
  perTemp_list: any = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' }
  ];
  fillVacant_list: any = [
    { value: '1', viewValue: 'Filled' },
    { value: '2', viewValue: 'Vacant' }
  ];
  class_list: any = [
    { value: '1', viewValue: 'Class-1' },
    { value: '2', viewValue: 'Class-2' },
    { value: '3', viewValue: 'Class-3' },
    { value: '3', viewValue: 'Class-4' },
    { value: '4', viewValue: 'Fix Pay' }
  ];

  gia_list: any = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  indexValues;
  selectedValue: string;
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  estimationfrom_list: any[] = [];
  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' }
  ];

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
  // districtDataTotal: any = {
  //   districtTotal: 0,
  //   gramTotal: 0,
  //   talukaTotal: 0,
  //   total: 0
  // };

  dataSource4Columns = ['expDet', 'budEst'];
  dataSource5Columns = ['name', 'post', 'bPay', 'lEncash', 'retire', 'action'];
  districtColumns = [
    'position',
    'district',
    'expendature',
    'talukaexpendature',
    'gramexpendature'
  ];

  stateColumns = ['position', 'district', 'propsedAmount'];

  subHeaderDistrictColumns = [
    'total',
    'districtTotal',
    'talukaTotal',
    'gramTotal'
  ];

  expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
  // recoveryDataSource = new MatTableDataSource(recoveryData);
  // recoveryDataExpendSource = new MatTableDataSource(recoveryExpendData);
  @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
  @ViewChild('parentGrids') private parentGrid: ElementRef;

  table1 = true;
  table2 = false;
  grantInAid: Boolean;

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
  saveCharge: boolean;
  condition: Boolean; // open for condition base Grant AId
  secondTable: Boolean; // open for condition base Grant AId
  // grantInAid: Boolean;
  // thirdTable: Boolean;
  // hodAmount: any;
  // succObjectCode: Array<any> = [];
  // errObjectCode: Array<any> = [];
  /** control for the MatSelect filter keyword */
  public subObjectFilterCtrl: FormControl = new FormControl();
  public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  private _onDestroy = new Subject<void>();
  subObjectId: Array<any> = [];
  selSubObjectId: string;
  date: any = new Date();
  showRevCap = false;
  showBPNCode = false;

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
    CHARGED_VOTED: 'Please insert Detailed Head',
    OBJECT_HEAD: 'Please insert Object Head',
    GIA_ERR: 'Please insert Grant-In-Aid'
  };

  finYear_list: any[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2021-2022' }
  ];

  department_list: any[] = [
    {
      value: '1',
      viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
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
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' }
  ];

  bpn_list: any[] = [
    {
      value: '1',
      viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '2', viewValue: '13:Industries and Mines Department' },

    { value: '3', viewValue: '22:Roads And Buildings Department' },
    { value: '4', viewValue: '24c: Tribal Development Department - Part III' },
    {
      value: '5',
      viewValue: '24b: Social Justice And Empowerment Department - Part II'
    },
    { value: '6', viewValue: '24d: Tribal Development Department - Part IV' }
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
    { value: '1', viewValue: 'Establishment' },
    { value: '2', viewValue: 'Leave Encashment' },
    { value: '3', viewValue: 'Other' },
    { value: '4', viewValue: 'Outsource' },
    { value: '5', viewValue: 'Sanction Order' },
    { value: '6', viewValue: 'Supporting Document' }
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
  post1Ctrl: FormControl = new FormControl();
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
  positionCtrl: FormControl = new FormControl();
  postCtrl: FormControl = new FormControl();
  postCtrl2: FormControl = new FormControl();
  goNgoCtrl: FormControl = new FormControl();
  perTempCtrl: FormControl = new FormControl();
  fillVacantCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  giaCtrl: FormControl = new FormControl();

  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  @ViewChild('singleSelect') singleSelect: MatSelect;
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = [
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
    'class'
  ];
  displayedBrowseColumns51 = ['bPay', 'da', 'hra', 'cla', 'other'];
  displayedBrowseColumns52 = ['ltc', 'reimb', 'medicalAllowances', 'bonus', 'leaveEncashment', 'ir',
   'transportAllowance', 'ropArriarse1', 'dearnessPay1'];
  displayedBrowseColumns53 = [
    'bPay',

    'da',
    'hra',
    'cla',
    'ltc',
    'reimb',
    'medicalAllowances',
    'bonus',
    'leaveEncashment',
    'ir',
    'transportAllowance',
    'ropArriarse1',
    'dearnessPay1'
  ];
  displayedTemp1 = new BehaviorSubject(this.displayedBrowseColumns51);
  displayedTemp2 = new BehaviorSubject(this.displayedBrowseColumns52);
  displayedTemp3 = new BehaviorSubject(this.displayedBrowseColumns53);

  displayedBrowseColumns61 = ['bPay2', 'da', 'hra', 'cla', 'other'];
  displayedBrowseColumns62 = [
    'ltc',
    'reimb',
    'medicalAllowances',
    'bonus',
    'leaveEncashment',
    'ir',
    'transportAllowance',
    'ropArriarse2',
    'dearnessPay2'
  ];
  displayedBrowseColumns63 = [

    'bPay2',
    'da',
    'hra',
    'cla',
    'ltc',
    'reimb',
    'medicalAllowances',
    'bonus',
    'leaveEncashment',
    'ir',
    'transportAllowance',
    'ropArriarse2',
    'dearnessPay2'
  ];

  displayedBrowseColumns3 = ['post', 'totalNo', 'approxEst'];
  attachmentSubTable = [
    {
      data: 'No of Post for Class 1',
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: 'No of Post for Class 1',
      val3Edit: false,
      val4: '',
      val4Edit: true,
      val5: '',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 2',
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: 'No of Post for Class 2',
      val3Edit: false,
      val4: '',
      val4Edit: true,
      val5: '',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 3',
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: 'No of Post for Class 3',
      val3Edit: false,
      val4: '',
      val4Edit: true,
      val5: '',
      val5Edit: true,
      extend: false
    },
    {
      data: 'No of Post for Class 4',
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: 'No of Post for Class 4',
      val3Edit: false,
      val4: '',
      val4Edit: true,
      val5: '',
      val5Edit: true,
      extend: false
    },
    {
      data: 'Fix Pay',
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: 'Fix Pay',
      val3Edit: false,
      val4: '',
      val4Edit: true,
      val5: '',
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

  displayedAttachmentColumns = [
    'data',
    'val1',
    'val2',
    'val3',
    'val4',
    'val5',
    'val6',
    'val7',
    'remark'
  ];
  // dataSourceAttachment = new MatTableDataSource(this.DATA);
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
  rojmadarWorkCharge: any[] = [
    {
      data: 'Rojmdar',
      dataEdit: true,
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: '',
      val3Edit: true,
      val4: '',
      remark: 'Approved',
      remarkEdit: true
    },
    {
      data: 'Work Charge Establishment',
      dataEdit: true,
      val1: '',
      val1Edit: true,
      val2: '',
      val2Edit: true,
      val3: '',
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
    'data',
    'val1',
    'val2',
    'val3',
    'val4'
    // 'remark',
    // 'Action'
  ];

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
    // if(ELEMENT_DATA6[0].goNgo=='1'){
    //   this.showGo=true
    // }
    // else{
    //   this.showGo=false;
    // }
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
    // this.initialSubObject();

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

    // this.calculateAttachmentValue();
    // this.calculateSubAttachmentValue();
    this.calculateRojamadarValue();
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

      // branchCode: ["", Validators.required],
      estimationFrom: [''],
      // estimateBy: [""],
      demandCode: ['', Validators.required],
      bpnCode: ['1', Validators.required],
      majorHeadCode: ['', Validators.required],
      revenueCapital: ['1', Validators.required],
      subMajorHeadCode: ['', Validators.required],
      minorHeadCode: ['', Validators.required],
      subHeadCode: ['', Validators.required],
      detailHeadCode: ['', Validators.required],
      chargedVotedCode: ['2', Validators.required],
      gia: [''],
      objHead: [''],

      // classOne:[''],
      // classTwo: [""],


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
        // tslint:disable-next-line: no-debugger
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
    console.log(event.value);
    this.codes = [];
    this.codes = event.value;
    this.codeCtrl.setValue(null);
    if (this.codes && this.codes.length > 0) {
      this.applyFilter(event.value[0]);
    }
  }

  remove(fruit: string): void {
    const index = this.codes.indexOf(fruit);

    if (index >= 0) {
      this.codes.splice(index, 1);
    }
  }

  // initialSubObject() {
  //   this.filteredSubObjects.next(this.sObjectHead.slice());
  //   // listen for search field value changes
  //   this.subObjectFilterCtrl.valueChanges
  //     .pipe(takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       this.filterSubObject();
  //     });
  // }

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
    // this.objectCodeFilterData(filterValue);
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

  saveStandCharge() { }

  backCharge() {
    this.salTab1 = true;
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
  onBlurMethod() {
    console.log('blur==>');
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  gotoListing() {
    this.router.navigate(['./budget/wireframe-of-establishment-list']);
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

  saveEstimate() { }

  goToDashboard() { }

  submitToNextLevel(): void {

    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {

      width: '2700px',
      height: '600px'

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        // this.showConfirmationPopup();
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
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRow(i);
      }
    });
  }

  deleteConfirmationPopup2(i) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRow2(i);
      }
    });
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  tot1() {
    let amountExp = 0;
    this.dataSource3.data.forEach(element => {
      amountExp = amountExp + Number(element.totalNo);
    });
    return amountExp;
  }
  tot2() {
    let amountExp = 0;
    this.dataSource3.data.forEach(element => {
      amountExp = amountExp + Number(element.approxEst);
    });
    return amountExp;
  }

  tot3() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach(element => {
      amountExp = amountExp + Number(element.val2) + Number(element.val3);
    });
    return amountExp;
  }

  tot5() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach(element => {
      amountExp = amountExp + Number(element.val1);
    });
    return amountExp;
  }
  tot6() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach(element => {
      amountExp = amountExp + Number(element.val2);
    });
    return amountExp;
  }
  tot7() {
    let amountExp = 0;
    this.dataSourceRojamadar.data.forEach(element => {
      amountExp = amountExp + Number(element.val3);
    });
    return amountExp;
  }

  tot4() {
    let amountExp = 0;
    this.dataSource4.data.forEach(element => {
      amountExp = amountExp + Number(element.budEst);
    });
    return amountExp;
  }

  tot8() {
    let amountExp = 0;
    this.dataSource5.data.forEach(element => {
      amountExp = amountExp + Number(element.bPay);
    });
    return amountExp;
  }

  tot9() {
    let amountExp = 0;
    this.dataSource5.data.forEach(element => {
      amountExp = amountExp + Number(element.lEncash);
    });
    return amountExp;
  }

  totRow = 1;
  addLeave() {
    const p_data = this.dataSource2.data;
    this.totRow++;
    p_data.push({
      post: '',
      goNgo: '',
      perTemp: '',
      fillVacant: '',
      class: ''
    });
    this.dataSource2.data = p_data;
  }

  addLeave2() {
    const p_data = this.dataSource5.data;
    this.totRow++;
    p_data.push({
      name: '',
      post: '',
      bPay: '',
      lEncash: '',
      retire: ''
    });
    this.dataSource5.data = p_data;
  }

  deleteRow(index) {
    this.dataSource2.data.splice(index, 1);
    this.totRow--;
    this.dataSource2 = new MatTableDataSource(this.dataSource2.data);
  }

  deleteRow2(index) {
    this.dataSource5.data.splice(index, 1);
    this.totRow--;
    this.dataSource5 = new MatTableDataSource(this.dataSource5.data);
  }

  showSal() {
    this.salTab1 = false;
  }

  showTab() { }

  changeGoNgo(event) {
    console.log('in funct');

    if (event.value == '1') {
      this.displayedTemp1.next(this.displayedBrowseColumns51);
      this.displayedTemp2.next(this.displayedBrowseColumns52);
      this.displayedTemp3.next(this.displayedBrowseColumns53);
    } else {
      this.displayedTemp1.next(this.displayedBrowseColumns61);
      this.displayedTemp2.next(this.displayedBrowseColumns62);
      this.displayedTemp3.next(this.displayedBrowseColumns63);
    }
  }
  displayRevCap() {
    this.showRevCap = true;
  }
  displayDemand() {
    this.showBPNCode = true;
  }
}

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./wireframe-of-establishment-details.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SaveConfirmDialogComponent>) { }

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
