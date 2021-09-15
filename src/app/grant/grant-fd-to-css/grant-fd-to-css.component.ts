import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/model/standing-charge';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import {
  GrantdataSourcedata, SubDetailHeadSource,
  DETAILHEAD, ELEMENT_DATA_css, ELEMENT_DATA_PREVIOUS_YEAR
} from 'src/app/model/grant-fd-to-css';
import { ListValue, BrwoseDatagrant } from 'src/app/model/common-grant';

@Component({
  selector: 'app-grant-fd-to-css',
  templateUrl: './grant-fd-to-css.component.html',
  styleUrls: ['./grant-fd-to-css.component.css']
})
export class GrantFdToCssComponent implements OnInit {
  errorMessages = grantMessage;
  public toggleButton = true;
  show = false;

  // Grant Order
  finYear_list: ListValue[] = [
    { value: '1', viewValue: '2020-2021' }
  ];

  revenueCapital_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
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
    { value: '1', viewValue: 'Normal' },
    { value: '2', viewValue: 'LC' }
  ];
  fundType: ListValue[] = [
    { value: '1', viewValue: 'Consolidated' }
  ];
  schemeType_list: ListValue[] = [
    { value: '01', viewValue: 'Reimbursement Scheme' },
    { value: '02', viewValue: 'Advance Grant Scheme' }
  ];

  // Sub Head Wise Details
  demand_list: ListValue[] = [
    {
      value: '1',
      viewValue: '001:Agriculture and Co-operation Department'
    },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' }
  ];
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    {
      value: '2',
      viewValue: '0021: Taxes on Income other than Corporation Tax'
    },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' }
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
    }
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
    }
  ];
  subHead_list: ListValue[] = [
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
    { value: '2', viewValue: 'Item Continuous Estimate' },
    { value: '3', viewValue: 'New Work Estimate' },
    { value: '4', viewValue: 'Work in Progress ' }
  ];
  item_list: ListValue[] = [
    { value: '1', viewValue: 'All Item' },
    { value: '2', viewValue: 'Item 1' },
    { value: '3', viewValue: 'Item 2' },
    { value: '4', viewValue: 'Item 3' }
  ];

  department_list: ListValue[] = [{ value: '1', viewValue: 'Finance Department' }];

  grantReleseType_list: ListValue[] = [
    { value: '2', viewValue: 'Previous Year Grant' },
    { value: '3', viewValue: 'Advance Grant' },
    { value: '4', viewValue: 'Adjustment of Grant' },
    { value: '5', viewValue: 'Not Released Grant' }
  ];


  // Attachment Tab
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  brwoseData: BrwoseDatagrant[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];

  fileBrowseIndex: number;
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // Grant Order Section
  ELEMENT_DATA: GrantdataSourcedata[] = [
    {
      divisionName: '58000',
      fdaddAuthorizeState: 100,
      fdaddAuthorizeCss: 50,
      grantAvailableState: 100,
      grantAvailableCss: 50,
      revisedStateScheme: 10,
      revisedCssScheme: 90,
      grUpToState: 200,
      grUpToCss: 50,
      remark: ''
    }
  ];

  // Sub Head Wise Details
  SUBDETAILHEAD: SubDetailHeadSource[] = [
    {
      position: 1,
      budgetHead: '001:2404:00:800:01:00 Item 1 (New Item Estimate)',
      bEState: 1000,
      bECss: 500,
      rBEState: 10,
      rBECss: 90,
      grantReceivedFromGoi: '700',
      grantApproState: 200,
      grantApproCss: 50,
      departmentName: 'Finance Department',
      grantReleaseState: 356,
      grantReleaseCss: 120,
      grantReleseType: 'Previous  Year  Grant',
      grantToBeReleaseState: '',
      grantToBeReleaseCss: '',
      toolTipData: 'Available Grant : 10.0000',
      remark: ''
    }
    , {
      position: 2,
      budgetHead: '001:2404:00:800:02:00 Item 2 (New Item Estimate)',
      bEState: 2000,
      bECss: 700,
      rBEState: 80,
      rBECss: 40,
      grantReceivedFromGoi: '500',
      grantApproState: 700,
      grantApproCss: 70,
      departmentName: 'Finance Department',
      grantReleaseState: 376,
      grantReleaseCss: 170,
      grantReleseType: 'Previous  Year  Grant',
      grantToBeReleaseState: '',
      grantToBeReleaseCss: '',
      toolTipData: 'Available Grant : 10.0000',
      remark: ''
    }
    , {
      position: 3,
      budgetHead: '001:2404:00:800:03:00 Item 3 (New Item Estimate)',
      bEState: 1500,
      bECss: 600,
      rBEState: 40,
      rBECss: 20,
      grantReceivedFromGoi: '700',
      grantApproState: 300,
      grantApproCss: 60,
      departmentName: 'Finance Department',
      grantReleaseState: 356,
      grantReleaseCss: 100,
      grantReleseType: 'Previous  Year  Grant',
      grantToBeReleaseState: '',
      grantToBeReleaseCss: '',
      toolTipData: 'Available Grant : 10.0000',
      remark: ''
    }
  ];

  //  TAB - 2 Item And Class wise Details
  DETAILHEAD: any[] = [
    {
      budgetHead: '70:2251:08:101:12:00 (Item 1) ( New Itme Estimate)', department: ' panchayat, Rural Housing & Rural Development',
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
      // tslint:disable-next-line: max-line-length
      budgetHead: '71:2252:09:102:12:01: (item 2) ( Item continuous estimate)', department: '  panchayat, Rural Housing & Rural Development',
      detailHeadDiscription: 'Object Class 1', detailHeadDiscription2: 'Object Class 2',
      detailHeadDiscription3: 'Total',
      budgetState: '1500', budgetState1: '3000', budgetState2: '4500.00',
      budgetCss: '1500', budgetCss2: '3000', budgetCss3: '4500.00',
      releseTillDateState: '1500', releseTillDateState2: '3000', releseTillDateState3: '4500.00',
      releseTillDateCss: '1500', releseTillDateCss2: '3000', releseTillDateCss3: '4500.00',
      currentState3: '0.000 ', currentCss3: ' 0.000',
      detailHeadDiscriptionAtoolTip: '00:C1: Personal Service and Benefit',
      detailHeadDiscriptionBtoolTip: '00:C2: Personal Service and Benefit ',
      detailHeadDiscriptionCtoolTip: '00:C3: Personal Service and Benefit ',
    }
  ];

// Sub Head Wise Details - Column FormControlName
  displayedSubDetailHeadColumns: string[] = [
    'position',
    'budgetHead',
    'bEState',
    'bECss',
    'rBEState',
    'rBECss',
    'grantReceivedFromGoi',
    'departmentName',
    'grantReleaseState',
    'grantReleaseCss',
    'grantReleseType',
    'grantToBeReleaseState',
    'grantToBeReleaseCss',
    'action'
  ];

  // Grant Order Section
  displayedGrantColumns: string[] = [
    // 'divisionName',
    'fdaddAuthorizeState',
    'fdaddAuthorizeCss',
    'grantAvailableState',
    'grantAvailableCss',
    'revisedStateScheme',
    'revisedCssScheme',
    'grUpToState',
    'grUpToCss'
  ];

  // Item And Class wise Details
  detailHeadDisplayColumns: string[] = [
    'subHead',
    'department',
    'state',
    'css',
    'detailHeadDiscription',
    'budgetState',
    'budgetCss',
    'releseTillDateState',
    'releseTillDateCss',
    'currentState',
    'currentCss',
    'action'
  ];
  grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);
  detailHeadeDataSource = new MatTableDataSource<any>(this.DETAILHEAD);
  createGrantOrder: FormGroup;
  subHeadDetailsForm: FormGroup;
  initiatiomdate = new Date(new Date());
  finYearCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  fromMonthCtrl: FormControl = new FormControl();
  toMonthCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
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
  itemCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private toaster: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //  TAB-1 Grant Order
    this.createGrantOrder = this.fb.group({
      finYear: ['1'],
      revenueCapital: [''],
      fromMonth: [''],
      toMonth: [''],
      orderNo: [''],
      typeCtrl: [''],
      fundType: ['1'],
      type: [''],
      schemeType: ['']
    });

    //  TAB-1 Sub Head Wise Details
    this.subHeadDetailsForm = this.fb.group({
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      chargedVoted: [''],
      budgetEstimateType: [''],
      item: [''],
      department: [''],
      grantReleseType: [''],
      detailHead: ['']
    });
  }

  // History Dailog Box
  view() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GrantviewDialog2Component, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  subHeadDetailsFormSubmit() { }

  // Grant Received From GoI In Current FY
  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GrantFdToCssDialog, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getTotalCost() { }

  // Grant to Be Released CSS
  getCurrentCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach(element => {
      calcCurrentCss = calcCurrentCss + Number(element.currentCss);
    });
    return calcCurrentCss;
  }

  // Grant to be Released State
  getCurrentState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach(element => {
      calcCurrentCss = calcCurrentCss + Number(element.currentState);
    });
    return calcCurrentCss;
  }

  // Released Till Date CSS
  getReleseTillDateCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach(element => {
      calcCurrentCss = calcCurrentCss + Number(element.releseTillDateCss);
    });
    return calcCurrentCss;
  }

  // Budget State 
  getTotalBudgetState() {
    return this.DETAILHEAD.map(t => t.budgetState).reduce(
      (acc, value) => acc + value
    );
  }

  // Budget CSS
  getTotalBudgetCss(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach(element => {
      calcCurrentCss = calcCurrentCss + Number(element.budgetCss);
    });
    return calcCurrentCss;
  }

  // Grant To Be Released State
  getGrantToBeReleaseState(data): number {
    let calcAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element, index) => {
      calcAmtProposedByHOD =
        calcAmtProposedByHOD + Number(element.grantToBeReleaseState);
    });
    return calcAmtProposedByHOD;
  }
  // Grant To Be Released CSS 
  getGrantToBeReleaseCss(data): number {
    let calcAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.subDetailHeadSource.data.forEach((element, index) => {
      calcAmtProposedByHOD =
        calcAmtProposedByHOD + Number(element.grantToBeReleaseCss);
    });
    return calcAmtProposedByHOD;
  }

 // Attachment tab - Browse file
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

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
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

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
 // End - Attachment tab - Browse file

  // Released Till Date State

  getTotalReleseTillDateState(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.detailHeadeDataSource.data.forEach(element => {
      calcCurrentCss = calcCurrentCss + Number(element.releseTillDateState);
    });
    return calcCurrentCss;
  }
  showdate() {
    this.show = true;
  }

  formSubmit() { }
  grantPercentageModel() { }
  goToDashboard() { }


  // Common workflow modal
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // For 4 Decimal value for  total amount
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,4})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(4);
    }
  }
}

// Grant Received From GoI In Current FY  -  Dailog Box

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-receved-dialog',
  templateUrl: 'grant-receved-dialog.html',
  styleUrls: ['./grant-fd-to-css.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class GrantFdToCssDialog {
  ELEMENT_DATA: ELEMENT_DATA_css[] = [
    {
      srNo: 1,
      grantOrderNo: '1001',
      budgetHead: '70:2251:08:101:12:Finance Department',
      cssGrantReceved: 100.0000,
      dateOfGrantReceved: '12-Oct-2020'
    },
    {
      srNo: 2,
      grantOrderNo: '1002',
      budgetHead: '90:2251:08:101:12:Finance Department',
      cssGrantReceved: 600.0000,
      dateOfGrantReceved: '12-Oct-2019'
    }
  ];
  ELEMENT_DATA_PREVIOUS_YEAR: ELEMENT_DATA_css[] = [
    {
      srNo: 1,
      grantOrderNo: '1003',
      budgetHead: '70:2251:08:101:12:Finance Department',
      cssGrantReceved: 100.0000,
      dateOfGrantReceved: '12-Oct-2020'
    },
    {
      srNo: 2,
      grantOrderNo: '1004',
      budgetHead: '90:2251:08:101:12:Finance Department',
      cssGrantReceved: 500.0000,
      dateOfGrantReceved: '12-Oct-2019'
    }
  ];
  ELEMENT_DATA_PREVIOUS_YEAR_LAST: ELEMENT_DATA_css[] = [
    {
      srNo: 1,
      grantOrderNo: '1005',
      budgetHead: '70:2251:08:101:12:Finance Department',
      cssGrantReceved: 200.0000,
      dateOfGrantReceved: '12-Oct-2020'
    },
    {
      srNo: 2,
      grantOrderNo: '1006',
      budgetHead: '90:2251:08:101:12:Finance Department',
      cssGrantReceved: 300.0000,
      dateOfGrantReceved: '12-Oct-2019'
    }
  ];
  constructor(
    public dialogRef: MatDialogRef<GrantFdToCssDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  displayedColumns: string[] = [
    'srNo',
    'grantOrderNo',
    'budgetHead',
    'cssGrantReceved',
    'dateOfGrantReceved'
  ];
  dataSource = this.ELEMENT_DATA;
  dataSourcePreviousYear = this.ELEMENT_DATA_PREVIOUS_YEAR;
  dataSourcePreviousYearLast = this.ELEMENT_DATA_PREVIOUS_YEAR_LAST;
  getTotalCostCurrentYear() {
    return this.ELEMENT_DATA.map(t => t.cssGrantReceved).reduce(
      (acc, value) => acc + value
    );
  }
  getTotalCostCurrentPreviousYear() {
    return this.ELEMENT_DATA_PREVIOUS_YEAR.map(t => t.cssGrantReceved).reduce(
      (acc, value) => acc + value
    );
  }
  getTotalCostCurrentLastYear() {
    return this.ELEMENT_DATA_PREVIOUS_YEAR_LAST.map(
      t => t.cssGrantReceved
    ).reduce((acc, value) => acc + value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

// End Grant Received From GoI In Current FY  -  Dailog Box


// History Dialog Box
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-view-dialog',
  templateUrl: 'grant-view-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class GrantviewDialog2Component {
  SUBDETAILHEAD: any[] = [
    {
      serialNumberLabel: ' 1',
      nameOfUser: '',
      designationUser: '',
      roleOfUser: '',
      grantToBeReleasedDate: '',
      grantReleasedCss:'',
      dateAndTime: '',
      remarks: '',

    }
  ];

  displayedSubDetailHeadColumns: string[] = [
    'serialNumberLabel',
    'nameOfUser',
    'designationUser',
    'roleOfUser',
    'grantToBeReleasedDate',
    'grantReleasedCss',
    'dateAndTime',
    'remarks'
  ];

  subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);

  constructor(
    public dialogRef: MatDialogRef<GrantviewDialog2Component>
  ) { }


}


