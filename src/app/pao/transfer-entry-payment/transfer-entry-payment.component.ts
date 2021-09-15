import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { ExpenditureList } from 'src/app/model/expenditure-list';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transfer-entry-payment',
  templateUrl: './transfer-entry-payment.component.html',
  styleUrls: ['./transfer-entry-payment.component.css']
})
export class TransferEntryPaymentComponent implements OnInit {
  // Form Group
  transferEntryPaymentForm: FormGroup;
  // Variable
  errorMessages = paoMessage;
  isSubmitted = false;
  // Form Control
  fromPayOrRecCtrl: FormControl = new FormControl();
  fromDoCtrl: FormControl = new FormControl();
  fromClassCtrl: FormControl = new FormControl();
  fromFundCtrl: FormControl = new FormControl();
  fromBudTypeCtrl: FormControl = new FormControl();
  fromTypeOfExpenditureCtrl: FormControl = new FormControl();
  fromDdoCtrl: FormControl = new FormControl();
  fromMajorHeadCtrl: FormControl = new FormControl();
  fromSubMajorHeadCtrl: FormControl = new FormControl();
  fromMinorHeadCtrl: FormControl = new FormControl();
  fromSubHeadCtrl: FormControl = new FormControl();
  fromDetailHeadCtrl: FormControl = new FormControl();
  fromObjectClassCtrl: FormControl = new FormControl();
  fromIsExpenditureDelete = false;
  fromIsRecoveryDelete = false;
  // Listing
  payOrRec_List: ListValue[] = [
    { value: '1', viewValue: 'Payment' }
  ];

  do_List: ListValue[] = [
    { value: '1', viewValue: '-' },
    { value: '2', viewValue: '+' },

  ];

  class_List: ListValue[] = [
    { value: '1', viewValue: 'Voted' },
    { value: '2', viewValue: 'Charged' }
  ];

  fundType_List: ListValue[] = [{
    value: '1', viewValue: 'Consolidated'
  }, {
    value: '2', viewValue: 'Contingency '
  }, {
    value: '3', viewValue: 'Public Accounts'
  },
  ];

  typeOfExpenditure_List: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];


  objectClass_list: ListValue[] = [{
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

  budType_List: ListValue[] = [{
    value: '1', viewValue: 'State'
  }, {
    value: '2', viewValue: 'CSS '
  },
  ];

  ddo_List: ListValue[] = [
    { value: '1', viewValue: 'Pay & Account Office, Ahmedabad' },

  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' },
  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices ' },
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

  objectClass_List: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '8', viewValue: 'C7' },
  ];


  From_Expenditure_Data: ExpenditureList[] = [
    {
      edpCode: '0101', amount: '1000'
    }
  ];
  fromExpenditureDetailsDataSource = new MatTableDataSource<any>(this.From_Expenditure_Data);
  fromExpenditureDetailsDisplayedColumns: any[] = ['edpCode', 'amount', 'action'];

  From_Recovery_Data: ExpenditureList[] = [
    {
      edpCode: ' ', amount: ' '
    }
  ];
  fromRecoveryDetailsDataSource = new MatTableDataSource<any>(this.From_Recovery_Data);
  fromRecoveryDetailsDisplayedColumns: any[] = ['edpCode', 'amount', 'action'];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.transferEntryPaymentForm = this.fb.group({
      challanDate: [''],
      lastChallanNoUsed: [''],
      challanAmount: ['1000'],
      fromPayOrRec: ['1'],
      fromDo: ['1'],
      fromClass: ['1'],
      fromFund: ['1'],
      fromBudType: ['1'],
      fromTypeOfExpenditure: ['1'],
      fromCardexNo: ['51'],
      fromDdo: ['1'],
      fromSchemeNo: ['000000'],
      fromDemandNo: ['1'],
      fromMajorHead: ['1'],
      fromSubMajorHead: ['1'],
      fromMinorHead: ['1'],
      fromSubHead: ['1'],
      fromDetailHead: ['00:Agricultural and Co-operation Department'],
      fromObjectClass: ['2'],
      particulars: ['']
    });
  }

  fromAddExpenditurRow() {
    const p_data = this.fromExpenditureDetailsDataSource.data;

    this.fromIsExpenditureDelete = true;
    p_data.push({
      edpCode: '',
      amount: ''
    });
    this.fromExpenditureDetailsDataSource.data = p_data;
  }


  fromDeletExpenditureRow(index) {
    this.fromExpenditureDetailsDataSource.data.splice(index, 1);
    this.fromExpenditureDetailsDataSource = new MatTableDataSource(
      this.fromExpenditureDetailsDataSource.data
    );
  }

  fromAddRecoveryRow() {
    const p_data = this.fromRecoveryDetailsDataSource.data;

    this.fromIsRecoveryDelete = true;
    p_data.push({
      edpCode: '',
      amount: ''
    });
    this.fromRecoveryDetailsDataSource.data = p_data;
  }


  fromDeletRecoveryRow(index) {
    this.fromRecoveryDetailsDataSource.data.splice(index, 1);
    this.fromRecoveryDetailsDataSource = new MatTableDataSource(
      this.fromRecoveryDetailsDataSource.data
    );
  }

  goToDashboard() {

  }
  onSave() {
    if (this.transferEntryPaymentForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
