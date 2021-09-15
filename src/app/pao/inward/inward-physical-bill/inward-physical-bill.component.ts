import { ListValue } from './../../../model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { ObjectClassHeadingPaoComponent } from './dialog/object-class-heading/object-class-heading.component';
import { GrantDetailsPaoComponentent } from './dialog/grant-details/grant-details.component';
import { BillTypePaoComponent } from './dialog/bill-type/bill-type.component';
import { DdoGrantHeadInwardComponent } from './dialog/ddo-grant-head/ddo-grant-head.component';
import { treasuryBillMessage } from 'src/app/common/error-message/common-message.constants';
import { TokenSearchDialogComponent } from '../../token-search-dialog/token-search-dialog.component';
import { CardexnoComponent } from '../../cardexno/cardexno.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { GrantDetailsPaoAuditComponent } from '../../audit/inward-physical-bill-audit-level/dialog/grant-details/grant-details.component';
import { tokenrange } from '../inward-bill/inward-bill.component';
import { DdoGrantHeadComponent } from '../../ddo-grant-head/ddo-grant-head.component';
import { BrwoseData } from 'src/app/model/paoModel';
import { IwardPhysicalBill } from 'src/app/model/treasury-bill';



const ELEMENT_DATA = [
  {
    tokenNo: '',
    tokenStatus: ''
  }
];



@Component({
  selector: 'app-inward-physical-bill',
  templateUrl: './inward-physical-bill.component.html',
  styleUrls: ['./inward-physical-bill.component.css']
})
export class InwardPhysicalBillComponent implements OnInit {
  ELEMENT_DATA: IwardPhysicalBill[] = [
    {
      srNo: '',
      challanNo: '',
      challanDate: '',
      challanMajorhead: '',
      challanAmount: '',
      action: '',
    }
  ];


  // Variable
  editable = false;
  errorMessages = treasuryBillMessage;
  isSubmitted = false;
  isDelete = false;
  isBDelete = false;
  challanTotalAmount = 0;
  isTokentable: Boolean = false;
  contegins: Boolean = false;
  isItemList: Boolean = false;
  public toggleButton = true;
  billinwardform: FormGroup;
  // attachment data source
  brwoseData: BrwoseData[] = [{
    name: '',
    file: '',
    uploadedBy: ''
  }];
  // Date
  todayDate = Date.now();
  // Form Control
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
  // Table Source
  transferDisplayedColumns: string[] = ['srNo', 'challanNo', 'challanDate', 'challanMajorhead', 'challanAmount', 'action'];
  transferDataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);



  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];
  directiveObject = new PaoDirectives(this.router, this.dialog);
  // Lists
  fundTypeList: ListValue[] = [{
    value: '1', viewValue: 'Consolidated'
  }, {
    value: '2', viewValue: 'Contingency '
  }, {
    value: '3', viewValue: 'Public Accounts'
  },
  ];

  typeOfEstimateList: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];


  classOfExpenditureList: ListValue[] = [{
    value: '1', viewValue: 'Voted'
  }, {
    value: '2', viewValue: 'Charged '
  },
  ];


  stateCssList: ListValue[] = [{
    value: '1', viewValue: 'State'
  }, {
    value: '2', viewValue: 'CSS '
  },
  ];


  billTypeList: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];


  objectClassList: ListValue[] = [{
    value: '1', viewValue: 'C0'
  },
  { value: '2', viewValue: 'C1 ' },
  { value: '3', viewValue: 'C2' },
  { value: '4', viewValue: 'C3' },
  { value: '5', viewValue: 'C4' },
  { value: '6', viewValue: 'C5' },
  { value: '7', viewValue: 'C6' },
  { value: '8', viewValue: 'C7' },
  ];

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },

  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' },

  ];

  challanMajorhead_list: ListValue[] = [
    { value: '1', viewValue: '8443_Civil Deposits' }
  ];
  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' },

  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  detailHead_list: ListValue[] = [
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

  officeCategoryList: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' },
  ];


  auditorNameList: ListValue[] = [
    { value: '1', viewValue: 'Shri Pratik K Shah' },

  ];


  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' },

  ];


  grantExemptedList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },

  ];

  billExemptedList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No', },

  ];


  billCodeList: ListValue[] = [
    { value: '1', viewValue: '1- pay allow retirement benefit i.e. LTC & Leave encas. at retirement' },

  ];


  chequePartyList: ListValue[] = [
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'PARTY' },


  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];

  onFileSelection($event) {

  }


  ontoken(index) {
    console.log(index);

    if (index.value === '2' || index.value === '4') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
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
      searchTokenNo: [],
      searchBillDate: [],
      searchCardexNo: [],
      tokenNo1: [''],
      ddoNo: [''],
      cardexNo: ['', Validators.required],
      officeName: [''],
      itemNameOrWorkName: [''],
      fundType: ['', Validators.required],
      classOfExpenditure: ['', Validators.required],
      stateCss: ['', Validators.required],
      typeOfEstimate: ['', Validators.required],
      schemeCode: ['', Validators.required],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      ddoGrantHead: [''],
      objectClass: ['', Validators.required],
      objectClassHeading: [''],
      headChargable: ['', Validators.required],
      totalExpenditure: [''],
      releasedGrant: [''],
      availableGrant: [''],
      grantDetails: [''],
      billType: ['', Validators.required],
      officeCategory: ['', Validators.required],
      auditorName: ['1', Validators.required],
      billCategory: ['1', Validators.required],
      grantExempted: ['', Validators.required],
      billExempted: ['2', Validators.required],
      billCode: [''],
      chequeParty: [''],
      billGrossAmount: ['', Validators.required],
      billNetAmount: ['', Validators.required],
      billremoarks: ['', Validators.required],
      billDate: [''],
      cnfOrderNo: [''],
      cnfDate: [''],
      fileName: [''],
      challanMajorhead: [''],


    });
  }

  // Cardex No Dialog

  cardexNo() {
    const dialogRef = this.dialog.open(CardexnoComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.billinwardform.patchValue({
        cardexNo: ' 1254',
        ddoNo: '87',
        officeName: 'Gandhinagar'
      })
    });
  }
  // Set cardex no

  setCardexNo(num) {

    if (num === 4) {
      this.billinwardform.patchValue({
        cardexNo: '4',
        ddoNo: '12',
        officeName: 'Under Secretary,GENERAL ADMINISTRATIVE DEPARTMENT (MINISTER), GANDHINAGAR, Gandhinagar'

      });
    }

  }
  // on load token range popup
  ngAfterViewInit() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(tokenrange, {
        width: '450px',
        height: '200px'
      });
    }, 100);
  }
  // ddo grnat dialog
  dddoGrant() {
    const dialogRef = this.dialog.open(DdoGrantHeadComponent, {
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
        headChargable: '017:2054:00:097:01:00:C2',



      });
    });
  }
  // objet head dialog

  objectHead() {
    const dialogRef = this.dialog.open(ObjectClassHeadingPaoComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Grant Details Diaog
  grantDetails() {
    const dialogRef = this.dialog.open(GrantDetailsPaoAuditComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });
  }
  // Bill type dialog
  billType() {
    const dialogRef = this.dialog.open(BillTypePaoComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addrow() {
    this.transferDataSource.data.push(['challanNo', 'challanDate', 'challanMajorhead', 'challanAmmount']);
    this.transferDataSource = new MatTableDataSource(this.transferDataSource.data);
    for (const item of this.billinwardform.value) {
      // tslint:disable-next-line:radix
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



  deletTransferRow(index) {
    this.transferDataSource.data.splice(index, 1);
    this.transferDataSource = new MatTableDataSource(
      this.transferDataSource.data
    );
  }




  totalExpeAmount(): number {
    let amountExp = 0;
    // tslint:disable-next-line: no-shadowed-variable
    this.transferDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.challanAmount);
    });
    return amountExp;
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.billinwardform.valid) {
      this.isSubmitted = false;
      console.log(this.billinwardform.value);

    }
  }

  getTabIndex($event) {

  }


}
