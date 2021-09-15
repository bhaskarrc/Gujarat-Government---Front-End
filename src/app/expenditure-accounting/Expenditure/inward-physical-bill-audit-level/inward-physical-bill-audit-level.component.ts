
import { eaMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ObjectClassHeadingPaoAuditComponent } from './dialog/object-class-heading/object-class-heading.component';
import { AcceptanceCriteriaComponent } from './dialog/acceptance-criteria/acceptance-criteria.component';
import { DdoGrantHeadPaoComponent } from './dialog/ddo-grant-head/ddo-grant-head.component';
import { TokennoComponent } from './dialog/tokenno/tokenno.component';
import { CardexnoPaoAuditComponent } from './dialog/cardexno/cardexno.component';
import { BillTypeAuditComponent } from './dialog/bill-type/bill-type.component';
import { GrantDetailsPaoAuditComponent } from './dialog/grant-details/grant-details.component';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../delete-dialog-box/delete-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

export class Attachment {
  name?: string;
  file?: string;
}


const ELEMENT_DATA = [
  {
    tokenNo: '',
    tokenStatus: ''
  }
];

@Component({
  selector: 'app-inward-physical-bill-audit-level',
  templateUrl: './inward-physical-bill-audit-level.component.html',
  styleUrls: ['./inward-physical-bill-audit-level.component.css']
})
export class InwardPhysicalBillAuditLevelComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  brwoseData: any[] = [
    {
      name: '',
      file: '',
      uploadedBy: ''
    }
  ];
  initiatiomdate = new Date((new Date()));
  isBDelete = false;
  challanTotalAmount = 0;

  isTokentable: Boolean = false;
  isDelete = false;
  contegins: Boolean = false;
  isItemList: Boolean = false;
  isBillList: Boolean = false;
  isBillSchedule: Boolean = true;
  isSubmitted: Boolean = false;
  public toggleButton = true;
  billinwardform: FormGroup;
  fundTypeCtrl: FormControl = new FormControl();
  typeOfEstimateCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  classOfExpenditureCtrl: FormControl = new FormControl();
  challanMajorheadCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  stateCsseCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  officeCategoryCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  grantExemptedCtrl: FormControl = new FormControl();
  billExemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  chequePartyCtrl: FormControl = new FormControl();
  transferDisplayedColumns: string[] = [
    'srNo',
    'challanNo',
    'challanDate',
    'challanMajorhead',
    'challanAmount',
    'action'
  ];
  transferDataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  errorMessages = eaMessage;
  maxDate = new Date();

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  fundTypeList: any[] = [
    {
      value: '1',
      viewValue: 'Consolidated'
    },
    {
      value: '2',
      viewValue: 'Contingency '
    },
    {
      value: '3',
      viewValue: 'Public Accounts'
    }
  ];

  typeOfEstimateList: any[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  classOfExpenditureList: any[] = [
    {
      value: '1',
      viewValue: 'Voted'
    },
    {
      value: '2',
      viewValue: 'Charged '
    }
  ];

  stateCssList: any[] = [
    {
      value: '1',
      viewValue: 'State'
    },
    {
      value: '2',
      viewValue: 'CSS '
    }
  ];

  billTypeList: any[] = [
    { value: '1', viewValue: 'GTR-30 Pay Bill' },
    { value: '2', viewValue: 'GTR-45 TA Bill' },
    { value: '3', viewValue: 'GTR-40 Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 Advance Bill' },
    { value: '5', viewValue: 'GTR-81 Refund of Revenue' }
  ];

  objectClassList: any[] = [
    {
      value: '1',
      viewValue: 'C0'
    },
    { value: '2', viewValue: 'C1 ' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '8', viewValue: 'C7' }
  ];

  subMajorHead_list: any[] = [{ value: '1', viewValue: '00' }];

  minorHead_list: any[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' }
  ];

  challanMajorhead_list: any[] = [
    { value: '1', viewValue: '8443_Civil Deposits' }
  ];
  subHead_list: any[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' }
  ];

  demand_list: any[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
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
  officeCategoryList: any[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  auditorNameList: any[] = [{ value: '1', viewValue: 'Shri Pratik K Shah' }];

  billCategoryList: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  grantExemptedList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billExemptedList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: any[] = [
    {
      value: '1',
      viewValue:
        '1- pay allow retirement benefit i.e. LTC & Leave encas. at retirement'
    }
  ];

  chequePartyList: any[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'PARTY' }
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];

  ontoken(index) {
    console.log(index);
    if (index.value === '2' || index.value === '4') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }

  isBillType(typeValue) {
    if (typeValue.value === '1') {
      this.isBillSchedule = true;
      this.isBillList = false;
    } else if (typeValue.value === '5') {
      this.isBillList = true;
      this.isBillSchedule = false;
    } else {
      this.isBillSchedule = false;
      this.isBillList = false;
    }
  }

  itemSelect(selectedValue) {
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  contegin(index) {
    if (index.value === '2') {
      this.contegins = true;
    } else {
      this.contegins = false;
    }
  }


  ngOnInit() {
    this.billinwardform = this.fb.group({
      tokenNo: ['10237'],
      ddoNo: ['12'],
      cardexNo: ['4'],
      officeName: ['Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'],
      itemNameOrWorkName: [''],
      fundType: ['1', Validators.required],
      classOfExpenditure: ['1', Validators.required],
      stateCss: ['1', Validators.required],
      typeOfEstimate: ['1', Validators.required],
      schemeCode: ['000000', Validators.required],
      demand: ['1', Validators.required],
      majorHead: ['1', Validators.required],
      subMajorHead: ['1', Validators.required],
      minorHead: ['1', Validators.required],
      subHead: ['1', Validators.required],
      detailHead: ['00:Agricultural and Co-operation Department', Validators.required],
      ddoGrantHead: [''],
      objectClass: ['3', Validators.required],
      objectClassHeading: [''],
      headChargable: ['017:2054:00:097:01:00:C2', Validators.required],
      totalExpenditure: ['5214.00'],
      releasedGrant: ['100000.00'],
      availableGrant: ['94786.00'],
      grantDetails: [''],
      billType: ['1', Validators.required],
      officeCategory: ['1', Validators.required],
      auditorName: ['1', Validators.required],
      billCategory: ['1', Validators.required],
      grantExempted: ['1', Validators.required],
      billExempted: ['1', Validators.required],
      billCode: ['1'],
      chequeParty: [''],
      billGrossAmount: ['200000', Validators.required],
      billNetAmount: ['188105', Validators.required],
      billremoarks: ['', Validators.required],
      billDate: [''],
      cnfOrderNo: ['', Validators.required],
      cnfDate: ['', Validators.required],
      fileName: [''],
      challanMajorhead: [''],
      deductionA: ['11895', Validators.required],
      deductionB: ['0', Validators.required],
      scheduleNo: ['SCH/2/2020/31360', Validators.required],
      scheduleAmount: ['11895.00', Validators.required]
    });
  }

  tokenNo() {
    const dialogRef = this.dialog.open(TokennoComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cardexNo() {
    const dialogRef = this.dialog.open(CardexnoPaoAuditComponent, {
      width: '800px'
    });
  }

  challanNo() {
    const dialogRef = this.dialog.open(AcceptanceCriteriaComponent, {
      width: '1200px',
      height: '500px'
    });
  }

  setCardexNo(num) {
    if (num === 4) {
      this.billinwardform.patchValue({
        cardexNo: '4',
        ddoNo: '12',
        officeName:
          'Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'
      });
    }
  }

  dddoGrant() {
    const dialogRef = this.dialog.open(DdoGrantHeadPaoComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const temp = result.split('-');
      console.log(temp);
      this.billinwardform.patchValue({
        fundType: '1',
        classOfExpenditure: '1',
        typeOfEstimate: '1',
        stateCss: '1',
        schemeCode: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '00:Agricultural and Co-operation Department',
        objectClass: '3',
        headChargable: '017:2054:00:097:01:00:C2'
      });
    });
  }
  objectHead() {
    const dialogRef = this.dialog.open(ObjectClassHeadingPaoAuditComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  grantDetails() {
    const dialogRef = this.dialog.open(GrantDetailsPaoAuditComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  billType() {
    const dialogRef = this.dialog.open(BillTypeAuditComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addrow() {
    this.transferDataSource.data.push([
      'challanNo',
      'challanDate',
      'challanMajorhead',
      'challanAmmount'
    ]);
    this.transferDataSource = new MatTableDataSource(
      this.transferDataSource.data
    );
    for (const item of this.billinwardform.value) {
      // tslint:disable-next-line: radix
      this.challanTotalAmount += parseInt(item.challanAmount);
    }
  }


  addLeave() {
    const p_data = this.transferDataSource.data;

    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.transferDataSource.data = p_data;
  }
  addBrowse() {
    const p_data = this.dataSourceBrowse.data;
    this.isBDelete = true;
    p_data.push({
      name: '',
      file: '',
      uploadedBy: ''
    });
    this.dataSourceBrowse.data = p_data;
  }

  deletTransferRow(index) {

    let isYes = false;
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      isYes = result.data;
      if (isYes) {
        this.transferDataSource.data.splice(index, 1);
        this.transferDataSource = new MatTableDataSource(
          this.transferDataSource.data
        );
      }

    });
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  totalExpeAmount(): number {
    let amountExp = 0;
    this.transferDataSource.data.forEach(element => {
      amountExp = amountExp + Number(element.challanAmount);
    });
    return amountExp;
  }
  onSubmit() {
    console.log(this.billinwardform);
    if (this.billinwardform.valid) {
      this.isSubmitted = false;
      const dialogRef = this.dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
      console.log(this.billinwardform.value);
    } else {
      console.log('false');
      this.isSubmitted = true;
    }
  }

  onClose() {
    const dialogRef = this.dialog.open(CloseDialogBoxComponent, {
      width: '500px',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }
  goToDashboard() { }
  gotoListing() { }
  resetForm() { }
  onFileSelection() { }
  getTabIndex($event) { }
  clearForm() { }
  workflowDetails() { }
  headChargable() { }
}
