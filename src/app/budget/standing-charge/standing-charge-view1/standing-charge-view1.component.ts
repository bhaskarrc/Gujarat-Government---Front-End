import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatAccordion } from '@angular/material';

export interface StandingChargeElement {
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
  amountproposedbyHOD: number | '';
  remarks: string | '';
}
export interface DistrictElement {
  id: number;
  districtName: string;
  expendature: number;
  talukaexpendature: number;
  gramexpendature: number;
}

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

const ELEMENT_DATA: StandingChargeElement[] = [
  { objecthead: '3131', thirdlastyear: 200, secondlastyear: 1.79, lastyear: 251, currentyear: 356,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3132', thirdlastyear: 300, secondlastyear: 4.06, lastyear: 251, currentyear: 456,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3133', thirdlastyear: 400, secondlastyear: 6.91, lastyear: 251, currentyear: 213,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3135-13', thirdlastyear: 500, secondlastyear: 9.02, lastyear: 251, currentyear: 454,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3135-14', thirdlastyear: 800, secondlastyear: 10.11, lastyear: 251, currentyear: 544,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3135-15', thirdlastyear: 470, secondlastyear: 12.07, lastyear: 251, currentyear: 541,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3135-16', thirdlastyear: 954, secondlastyear: 14.67, lastyear: 251, currentyear: 844,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3241', thirdlastyear: 362, secondlastyear: 15.94, lastyear: 251, currentyear: 111,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3243', thirdlastyear: 321, secondlastyear: 18.94, lastyear: 251, currentyear: 544,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3351', thirdlastyear: 752, secondlastyear: 20.97, lastyear: 251, currentyear: 544,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3153', thirdlastyear: 562, secondlastyear: 22.97, lastyear: 251, currentyear: 874,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3161', thirdlastyear: 241, secondlastyear: 24.30, lastyear: 251, currentyear: 812,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' },
  { objecthead: '3363', thirdlastyear: 654, secondlastyear: 26.15, lastyear: 251, currentyear: 248,
    last8month: 457, first4month: 789, totalof8and4month: 475, col6: '', col7: '', amountproposedbyHOD: 452, remarks: '' }
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
  selector: 'app-standing-charge-view1',
  templateUrl: './standing-charge-view1.component.html',
  styleUrls: ['./standing-charge-view1.component.css']
})
export class StandingChargeView1Component implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentyear', 'last8month', 'first4month',
  'totalof8and4month', 'col6', 'col7', 'amountproposedbyHOD', 'remarks'];

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Department', value: 'Education Department'},
    {label: 'Branch Name', value: 'Budget'},
    {label: 'Estimation From', value: 'DDO'},
    {label: 'Estimation By', value: 'Shri Arun Mahesh Babu MS'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Book Publication No.', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
  ];

  districtColumns = ['position', 'district', 'expendature', 'talukaexpendature', 'gramexpendature'];
  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);

  // attachment sheet init
  DATA: any[] = [
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
      data: 'Total (1)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
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
      data: 'Total (A)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00', val5: '0.00',
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
      data: 'Grand Total (A+B)', val1: '0', val2: '0.00', val3: '0.00', val4: '0.00',
      val5: '0.00', val6: '0.00', val7: '0.00', remark: '', extend: false
    },
  ];
  attachmentSubTable = [
    {data: 'No of Post for Class 1', val1: '0', val2: '1000.00', val3: 'No of Post for Class 1', val4: '0', val5: '1000.00'},
    {data: 'No of Post for Class 2', val1: '0', val2: '100.00', val3: 'No of Post for Class 2', val4: '0', val5: '100.00'},
    {data: 'No of Post for Class 3', val1: '0', val2: '5000.00', val3: 'No of Post for Class 3', val4: '0', val5: '5000.00'},
    {data: 'No of Post for Class 4', val1: '0', val2: '5800.00', val3: 'No of Post for Class 4', val4: '0', val5: '5800.00'},
    {data: 'Fix Pay', val1: '0', val2: '6910.00', val3: 'Fix Pay', val4: '0', val5: '6910.00'},
    {data: 'Total', val1: '0', val2: '18810.00', val3: 'Total', val4: '0', val5: '18810.00'},
  ];

  displayedAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'remark'];
  dataSourceAttachment = new MatTableDataSource(this.DATA);
  isExtendedRow = (index, item) => item.extend;
  // tslint:disable-next-line:member-ordering
  dataSourceSubAttachment = new MatTableDataSource(this.attachmentSubTable);
  // tslint:disable-next-line:member-ordering
  displayedSubAttachmentColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'val5'];
  // attachment sheet init end here

  // tslint:disable-next-line:member-ordering
  expandPanel: Boolean = true;
  // tslint:disable-next-line:member-ordering
  rojmadarWorkCharge: any[] = [
    {
      data: 'Rojmdar', dataEdit: true,
      val1: '5', val1Edit: true,
      val2: '100.00', val2Edit: true,
      val3: '10.00', val3Edit: true,
      val4: '110.00',
      remark: 'Approved', remarkEdit: true,
    },
    {
      data: 'Work Charge Establishment', dataEdit: true,
      val1: '2', val1Edit: true,
      val2: '155.00', val2Edit: true,
      val3: '15.00', val3Edit: true,
      val4: '170.00',
      remark: '', remarkEdit: true,
    },
  ];
  // tslint:disable-next-line:member-ordering
  dataSourceRojamadar = new MatTableDataSource(this.rojmadarWorkCharge);
  // tslint:disable-next-line:member-ordering
  displayedRojamdarColumns = ['data', 'val1', 'val2', 'val3', 'val4', 'remark'];


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
    { financialYear: '2019-2020', fileName: 'PAN.jpeg' },
    { financialYear: '2020-2021', fileName: 'AadharCard.pdf' },
  ];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['financialYear', 'fileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // tslint:disable-next-line:member-ordering
  date: any = new Date();

  // tslint:disable-next-line:member-ordering
  @ViewChild('accordion') accordion: MatAccordion;
  // tslint:disable-next-line:member-ordering
  allExpandState: Boolean = true;

  constructor() { }

  ngOnInit() {
    // this.accordion.openAll();
    this.toggleExpandState();
  }

  toggleExpandState() {
    this.allExpandState = !this.allExpandState;
    if (this.allExpandState) {
      this.accordion.openAll();
    } else {
      this.accordion.closeAll();
    }
  }
}
