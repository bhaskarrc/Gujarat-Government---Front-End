
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/model/standing-charge';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { SUBDETAILHEAD, DETAILHEAD } from 'src/app/model/grant-from-controlling-officer';
import { ListValue, BrwoseDatagrant } from 'src/app/model/common-grant';

@Component({
  selector: 'app-grant-from-controlling-officer',
  templateUrl: './grant-from-controlling-officer.component.html',
  styleUrls: ['./grant-from-controlling-officer.component.css']
})
export class GrantFromControllingOfficerComponent implements OnInit {
  isTokentable = false;
  errorMessages;
  public toggleButton = true;
  finYear_list: ListValue[] = [
    { value: '1', viewValue: '2020-2021' },
  ];
  fundType: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' },
    { value: '2', viewValue: 'Contingency' },
    // { value: '03', viewValue: 'Public Account' }
  ];
  revenueCapital_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
    { value: '3', viewValue: 'Public Account' },
  ];

  reveCapital_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
    { value: '2', viewValue: 'Public Account' },


  ];

  fromMonth_list: ListValue[] = [
    { value: '1', viewValue: 'April' },
    { value: '2', viewValue: 'May' },
    { value: '3', viewValue: 'June' },
    { value: '4', viewValue: 'July' },
    { value: '5', viewValue: 'August' },
    { value: '6', viewValue: 'September' },
    { value: '7', viewValue: 'October' },
    { value: '8', viewValue: 'November' },
    { value: '9', viewValue: 'December' },
    { value: '10', viewValue: 'January' },
    { value: '11', viewValue: 'February' },
    { value: '12', viewValue: 'March' }
  ];

  fromTo_list: ListValue[] = [
    { value: '1', viewValue: 'April' },
    { value: '2', viewValue: 'May' },
    { value: '3', viewValue: 'June' },
    { value: '4', viewValue: 'July' },
    { value: '5', viewValue: 'August' },
    { value: '6', viewValue: 'September' },
    { value: '7', viewValue: 'October' },
    { value: '8', viewValue: 'November' },
    { value: '9', viewValue: 'December' },
    { value: '10', viewValue: 'January' },
    { value: '11', viewValue: 'February' },
    { value: '12', viewValue: 'March' }
  ];
  type_list: ListValue[] = [
    { value: '1', viewValue: 'New Item Estimate' },
    { value: '2', viewValue: 'Item Continious Estimate' },
    { value: '3', viewValue: 'New Work Estimate' },
    { value: '4', viewValue: 'Work in Progress' },
    { value: '5', viewValue: 'Standing Charges  ' }
  ];

  grantType: ListValue[] = [
    { value: '1', viewValue: 'Normal' },
    { value: '2', viewValue: 'LC' }
  ];

  schemeType_list: ListValue[] = [
    { value: '01', viewValue: 'Reimbursement Scheme' },
    { value: '02', viewValue: 'Advance Grant Scheme' }
  ];

  demand_list: ListValue[] = [
    {
      value: '1', viewValue: '84:Non-Residential Buildings'
    },
    { value: '2', viewValue: ' 85:Residential Buildings' },
    { value: '3', viewValue: '93: Welfare of Scheduled Tribes' },
    { value: '4', viewValue: '95: Scheduled Castes Sub Plan' },
    { value: '5', viewValue: '96:Tribal Area Sub-Plan' },
  ];
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2058:Stationery and Printing' },
    { value: '2', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2425:Co-operation' },
    { value: '5', viewValue: '3451:Secretariat-Economic Services' },
    { value: '6', viewValue: '4058:Capital Outlay on Stationery and Printing' },
    { value: '7', viewValue: '5475:Capital Outlay on other General Economics Services' },
  ];
  subMajorHead_list: ListValue[] = [
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
      viewValue: '00::Capital Outlay on other General Economics Services'
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
    },
  ];
  minorHead_list: ListValue[] = [
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
    },
  ];
  subHead_list: ListValue[] = [
    {
      value: '01:Agricultural and Co-operation Department',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development ',
      viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
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
      value: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '03:National Food Security Mission',
      viewValue: '03:National Food Security Mission'
    },

    {
      value: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
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
      viewValue: '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },


    {
      value: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
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
      value: '01:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue: '01:Contribution towards employees Provident Funds Scheme for Presses'
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
      value: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },


    {
      value: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    },
  ];

  detailHead_list: ListValue[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },


  ];
  chargedVoted_list: ListValue[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];
  budgetEstimateType_list: ListValue[] = [
    { value: '1', viewValue: 'New Item Estimate' },
    { value: '2', viewValue: 'New Work Estimate' },
  ];
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' }
  ];
  grantReleseType_list: ListValue[] = [
    { value: '1', viewValue: 'System should capture the Grant Release type' },
    { value: '2', viewValue: 'Previous Year Grant' },
    { value: '3', viewValue: 'Advance Grant' },
    { value: '4', viewValue: 'Adjustment of Grant' }
  ];
  controllingOfficer_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shyam Sundar' }
  ];
  ddoName_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shyam Sundar' }
  ];
  demandHead_list: ListValue[] = [
    { value: '1', viewValue: 'Demand Major Head' },
    { value: '2', viewValue: 'Demand Sub Head' }
  ];
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  itemName_list: ListValue[] = [
    { value: '1', viewValue: 'Item 1' },
    { value: '2', viewValue: 'Item 2' },
    { value: '3', viewValue: 'Item 3' }
  ];

  brwoseData: BrwoseDatagrant[] = [{
    name: undefined,
    file: undefined,
    uploadedBy: ''
  }];

  fileBrowseIndex: number;
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  SUBDETAILHEAD: any[] = [
    {

      budgetHead: '001:2404:00:800:01:00 Item 1 (New Item Estimate)',
      bEState: 1000,
      bECss: 500,
      rBEState: 10,
      rBECss: 90,
      grantReleaseTillData: '700',
      grantApproState: 200,
      grantApproCss: 50,
      departmentName: 'Finance Department',
      grantReleaseState: 356,
      grantReleaseCss: 120,
      grantReleseType: 'Previous  Year  Grant',
      grantToBeReleaseState: '',
      grantToBeReleaseCss: '',

      remark: '',
      controllingOfficer: 'Under Secretary',
      avalilState: '10.0000',
      avalilCss: '10.0000',
      toolTipData: 'Available Grant : 10.0000',
    }
    , {
      controllingOfficer: 'Finance Department',
      budgetHead: '001:2404:00:800:02:00 Item 2 (New Item Estimate)',
      bEState: 2000,
      bECss: 700,
      rBEState: 80,
      rBECss: 40,
      grantReleaseTillData: '500',
      grantApproState: 700,
      grantApproCss: 70,
      departmentName: 'Finance Department',
      grantReleaseState: 376,
      grantReleaseCss: 170,
      grantReleseType: 'Previous  Year  Grant',
      grantToBeReleaseState: '',
      grantToBeReleaseCss: '',
      toolTipData: 'Available Grant : 10.0000',
      remark: '',
      avalilState: '10.0000',
      avalilCss: '10.0000',
    }

  ];
  DETAILHEAD: DETAILHEAD[] = [
    {
      subHead: '70:2251:08:101:12:00 (Item 1) ( New Itme Estimate)', department: ' panchayat, Rural Housing & Rural Development',
      detailHeadDiscription: 'Object Class 1', detailHeadDiscription2: 'Object Class 2',
      detailHeadDiscription3: 'Total',
      budgetState: '1500', budgetState1: '3000', budgetState2: '4500.00',
      budgetCss: '1500', budgetCss2: '3000', budgetCss3: '4500.00',
      releseTillDateState: '1500', releseTillDateState2: '3000', releseTillDateState3: '4500.00',
      releseTillDateCss: '1500', releseTillDateCss2: '3000', releseTillDateCss3: '4500.00',
      currentState: ' ', currentCss: ' ',
      currentState3: '0.000 ', currentCss3: ' 0.000',
      detailHeadDiscriptionAtoolTip: '00:C1: Personal Service and Benefit',
      detailHeadDiscriptionBtoolTip: '00:C2: Personal Service and Benefit ',
      detailHeadDiscriptionCtoolTip: '00:C3: Personal Service and Benefit ',
    },
    {
      subHead: '70:2251:08:101:12:00 (Item 1) ( New Itme Estimate)', department: ' panchayat, Rural Housing & Rural Development',
      detailHeadDiscription: 'Object Class 1', detailHeadDiscription2: 'Object Class 2',
      detailHeadDiscription3: 'Total',
      budgetState: '1500', budgetState1: '3000', budgetState2: '4500.00',
      budgetCss: '1500', budgetCss2: '3000', budgetCss3: '4500.00',
      releseTillDateState: '1500', releseTillDateState2: '3000', releseTillDateState3: '4500.00',
      releseTillDateCss: '1500', releseTillDateCss2: '3000', releseTillDateCss3: '4500.00',
      currentState: ' ', currentCss: ' ',
      currentState3: '0.000 ', currentCss3: ' 0.000',
      detailHeadDiscriptionAtoolTip: '00:C1: Personal Service and Benefit',
      detailHeadDiscriptionBtoolTip: '00:C2: Personal Service and Benefit ',
      detailHeadDiscriptionCtoolTip: '00:C3: Personal Service and Benefit ',
    },


  ];
  displayedSubDetailHeadColumns: string[] = [
    'budgetHead', 'bEState', 'bECss',
    'rBEState', 'rBECss',
    'grantApproState', 'grantApproCss', 'avalilgrantState', 'avalilgrantCss', 'avalilState', 'avalilCss', 'controllingOfficer',
    'grantReleaseState', 'grantReleaseCss',
    'grantToBeReleaseState', 'grantToBeReleaseCss', 'action'];
  detailHeadDisplayColumns: string[] = [
    'subHead', 'department', 'state', 'css', 'detailHeadDiscription', 'budgetState',
    'budgetCss', 'releseTillDateState', 'releseTillDateCss', 'avalilState', 'avalilCss', 'currentState', 'currentCss', 'action'];
  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);
  detailHeadeDataSource = new MatTableDataSource<any>(this.DETAILHEAD);
  createGrantOrder: FormGroup;
  subHeadDetailsForm: FormGroup;
  initiatiomdate = new Date((new Date()));
  controllingOfficerCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  fromMonthCtrl: FormControl = new FormControl();
  toMonthCtrl: FormControl = new FormControl();

  typeCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  grantTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  budgetEstimateTypeCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  grantReleseTypeCtrl: FormControl = new FormControl();
  ddoNameCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  show = false;
  constructor(private fb: FormBuilder, private el: ElementRef, private toaster: ToastrService, public dialog: MatDialog) { }
  showdate() {
    this.show = true;
  }
  ngOnInit() {
    this.errorMessages = grantMessage;
    this.createGrantOrder = this.fb.group({
      finYear: ['1', Validators.required],
      revenueCapital: ['', Validators.required],
      fromMonth: ['', Validators.required],
      toMonth: ['', Validators.required],
      orderNo: ['', Validators.required],
      typeCtrl: ['', Validators.required],
      fundType: ['1', Validators.required],
      grantType: ['1', Validators.required],
      noraml: [''],
      type: ['', Validators.required],
      schemeType: ['', Validators.required]
    });
    this.subHeadDetailsForm = this.fb.group({
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: [''],
      chargedVoted: ['', Validators.required],
      budgetEstimateType: ['', Validators.required],
      itemName: [''],
      department: ['', Validators.required],
      grantReleseType: ['', Validators.required],
      controllingOfficer: ['', Validators.required],
      ddoName: ['', Validators.required],
      type: [''],

    });
  }
  subHeadDetailsFormSubmit() {
  }
  officerList(): void {
    const dialogRef = this.dialog.open(GrantRecevedControllingOfficerDialogComponent, {
      width: '830px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  officerLists(): void {
    const dialogRef = this.dialog.open(GrantRecevedControllingOfficerDialogDDOComponent, {
      width: '830px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getTotalCost() {
  }
  getCurrentCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.currentCss3);
    });
    return calcCurrentCss;
  }
  getCurrentState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.currentState3);
    });
    return calcCurrentCss;
  }
  stateBudget(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.bEState);
    });
    return calcCurrentCss;
  }
  cssBudget(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.bECss);
    });
    return calcCurrentCss;
  }
  rebBudget(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.rBEState);
    });
    return calcCurrentCss;
  }
  rebBudgetCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.rBECss);
    });
    return calcCurrentCss;
  }
  grantApproState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantApproState);
    });
    return calcCurrentCss;
  }
  grantApproCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantApproCss);
    });
    return calcCurrentCss;
  }

  grantReleaseStates(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantReleaseState);
    });
    return calcCurrentCss;
  }
  getReleseCsss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantReleaseCss);
    });
    return calcCurrentCss;
  }

  grantReleaseState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.bEState);
    });
    return calcCurrentCss;
  }
  getReleseCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.grantReleaseCss);
    });
    return calcCurrentCss;
  }
  getReleseTillDateCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.releseTillDateCss3);
    });
    return calcCurrentCss;
  }
  getTotalBudgetState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.budgetState2);
    });
    return calcCurrentCss;
  }
  getTotalBudgetCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.budgetCss3);
    });
    return calcCurrentCss;
  }
  getTotalReleseTillDateState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.releseTillDateState3);
    });
    return calcCurrentCss;
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  view() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GrantviewDialog4Component, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          uploadedBy: ''
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toaster.error('Please fill the detail.');
      }
    }
  }

  ontoken(index) {

    if (index.value === '2') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,4})?$/;
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

  decimalPoint(data, key) {
    // debugger
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(4);
    }
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-receved-dialog',
  templateUrl: 'grant-receved-dialog.html',
  styleUrls: ['./grant-from-controlling-officer.component.css']
})
export class GrantRecevedControllingOfficerDialogComponent {
  department_list: any[] = [
    { value: '1', viewValue: 'Finance Department' },
  ];
  district_list: any[] = [
    { value: '1', viewValue: 'Ahemdabad' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Gandhinagar' },
  ];
  officer: any[] = [
    { value: '1', viewValue: 'Accountant General , Rajkoat' },
    { value: '2', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '3', viewValue: 'Director of Insurance' },
    { value: '4', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '5', viewValue: 'Commissionar of Commercial Tax' },
    { value: '6', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
    { value: '7', viewValue: 'Accountant General , Rajkoat' },
    { value: '8', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '9', viewValue: 'Director of Insurance' },
    { value: '10', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '11', viewValue: 'Commissionar of Commercial Tax' },
    { value: '12', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
  ];
  showListOfficer = false;
  officerForms: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<GrantRecevedControllingOfficerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  displayedColumns: string[] = ['srNo', 'grantOrderNo', 'budgetHead', 'cssGrantReceved', 'dateOfGrantReceved'];

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.officerForms = this.fb.group({
      department: [''],
      coName: [''],
      ddoName: [''],
      district: [''],
      cardex: [''],
      ddoNo: ['']
    });
  }
  showList() {
    this.showListOfficer = true;
  }
}




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-receved-dialog-ddo',
  templateUrl: 'grant-receved-dialog-ddo.html',
  styleUrls: ['./grant-from-controlling-officer.component.css']
})
export class GrantRecevedControllingOfficerDialogDDOComponent {
  department_list: any[] = [
    { value: '1', viewValue: 'Finance Department' },
  ];
  district_list: any[] = [
    { value: '1', viewValue: 'Ahemdabad' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Gandhinagar' },
  ];
  officer: any[] = [
    { value: '1', viewValue: 'Accountant General , Rajkoat' },
    { value: '2', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '3', viewValue: 'Director of Insurance' },
    { value: '4', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '5', viewValue: 'Commissionar of Commercial Tax' },
    { value: '6', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
    { value: '7', viewValue: 'Accountant General , Rajkoat' },
    { value: '8', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '9', viewValue: 'Director of Insurance' },
    { value: '10', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '11', viewValue: 'Commissionar of Commercial Tax' },
    { value: '12', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
  ];
  showListOfficer: boolean = false;
  officerForms: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<GrantRecevedControllingOfficerDialogDDOComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  displayedColumns: string[] = ['srNo', 'grantOrderNo', 'budgetHead', 'cssGrantReceved', 'dateOfGrantReceved'];
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.officerForms = this.fb.group({
      department: [''],
      coName: [''],
      ddoName: [''],
      district: [''],
      cardex: [''],
      ddoNo: ['']
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  showList() {
    this.showListOfficer = true;
  }
}




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-view-dialog',
  templateUrl: 'grant-view-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class GrantviewDialog4Component {
  SUBDETAILHEAD: any[] = [
    {
      position: ' 1',
      nameofuser: '',
      desiofuser: '',
      roleofuser: '',
      grantToBeRelease: '',
      date: '',
      remarks: '',

    }
  ];


  displayedSubDetailHeadColumns: string[] = [
    'position',
    'nameofuser',
    'desiofuser',
    'roleofuser',
    'grantToBeRelease',
    'grantToBeReleasecss',
    'date',
    'remarks'
  ];

  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);

  constructor(
    public dialogRef: MatDialogRef<GrantviewDialog4Component>

  ) { }


}

