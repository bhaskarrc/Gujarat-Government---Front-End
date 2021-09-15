import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { GrpDetailsInner, GrpDetailsDeduction, ReceiptDetails, RecoveryDetails, EdpDetails } from 'src/app/model/ddo-forms';
import { HeaderElement } from 'src/app/model/common-listing';

@Component({
  selector: 'app-bill-preparation-form',
  templateUrl: './bill-preparation-form.component.html',
  styleUrls: ['./bill-preparation-form.component.css']
})

export class BillPreparationFormComponent implements OnInit {

  // Date
  todayDate = Date.now();

  // variables
  tabDisable: Boolean = true;
  selectedIndex: number;
  selectedIndexTable;
  selectedValue;

  // form group
  billpreprationForm: FormGroup;

  // form controls
  empTypeCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  votedChargedCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  ddoGrantHeadCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objectClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  previousBillCtrl: FormControl = new FormControl();
  paymentTypeCtrl: FormControl = new FormControl();
  schemeNoCtrl: FormControl = new FormControl();


  // lists
  headerJson: HeaderElement[] = [
    { label: 'DDO No', value: '416' },
    { label: 'Cardex No', value: '1' },
    { label: 'Name', value: 'D C DAVE' },
    { label: 'Designation', value: 'District Treasury Officer' },
    { label: 'Office Name', value: 'District Treasury Officer, District Treasury Office, Gandhinagar' },
    { label: 'District Code', value: '57' },
    { label: 'Bill Creator', value: '' },
    { label: 'Bill Approver', value: '' },

  ];

  grossTotl: HeaderElement[] = [
    { label: 'Gross Total', value: '0.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '0.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '' },
    { label: 'Amount in Rs.', value: '' },
    { label: 'Disbursement Amount', value: '0.00' },
    { label: 'Appropriation For', value: '' },
    { label: 'Expenditure including this bill', value: '' },
    { label: 'Balance', value: '' },
  ];

  employeeTypeList: ListValue[] = [
    { value: '1', viewValue: 'Govet' },
    { value: '2', viewValue: 'Private' }
  ];

  designationList: ListValue[] = [
    { value: '1', viewValue: 'Designation' },
    { value: '2', viewValue: 'Designation' }
  ];

  monthList: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  financialYearList: ListValue[] = [
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' }
  ];

  votedChargedList: ListValue[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted ' }
  ];


  fundTypeList: ListValue[] = [
    { value: '01', viewValue: 'Consolidated' },
    { value: '02', viewValue: 'Contingency' }
  ];

  schemeTypeList: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];

  ddoGrantHeadList: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shyam Sundar' }
  ];

  demandList: ListValue[] = [
    {
      value: '1', viewValue: '001:Agriculture and Co-operation Department'
    },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
  ];

  majorHeadList: ListValue[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];

  subMajorHeadList: ListValue[] = [
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

  minorHeadList: ListValue[] = [
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

  subHeadList: ListValue[] = [
    {
      value: '1',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value: '2',
      viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },

    {
      value: '3',
      viewValue: '01:AGR-15 Information & Technology'
    },

    {
      value: '4',
      viewValue: '02:Expenditure for Training'
    },

    {
      value: '5',
      viewValue: '01:AGR-Renovation Of The Department'
    },

    {
      value: '6',
      viewValue: '01:Direcorate of Agriculture'
    },

    {
      value: '7',
      viewValue: '02:Divisional Establishmen'
    },

    {
      value: '8',
      viewValue: '03:District Establishment'
    },

    {
      value: '9',
      viewValue: '01:Intensive Agricultural District Programme'
    },


    {
      value: '10',
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

  detailedHeadList: ListValue[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
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
      value: '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue: '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '00:National Food Security Mission',
      viewValue: '00:National Food Security Mission'
    },

    {
      value: '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue: '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
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
      viewValue: '00:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value: '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue: '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value: '00:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue: '00:IND-45 Evaluation of Schemes under the Industries and Mines Department'
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
      value: '00:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue: '00:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '00:IND-11 Directorate of Printing and Stationery',
      viewValue: '00:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue: '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value: '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue: '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    },
  ];

  objectClassList: ListValue[] = [
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

  exemptedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    { value: '1', viewValue: 'Bill Code 1005' },
    { value: '2', viewValue: 'Bill Code 1006' },
    { value: '3', viewValue: 'Bill Code 1007' },
    { value: '4', viewValue: 'Bill Code 1008' },
    { value: '5', viewValue: 'Bill Code 1009' },
    { value: '6', viewValue: 'Bill Code 1009' },
    { value: '6', viewValue: 'Bill Code 1010' },
    { value: '7', viewValue: 'Bill Code 1011' },
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Bill 1' },
    { value: '2', viewValue: 'Bill 2' },
  ];

  previousBillTypeList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  paymentTypeList: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' },
  ];

  schemeNoList: ListValue[] = [
    { value: '1', viewValue: 'Scheme No 1' },
    { value: '1', viewValue: 'Scheme No 2' },
  ];
  // lists end

  // grp inner details earning
  grpDetailsInner: GrpDetailsInner[] = [
    {
      position: 1,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 2,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 3,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 4,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 5,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 6,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 7,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 8,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 9,
      EmpNo: '244567',
      EmpName: 'S.K Shukala',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },

    {
      position: 10,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 11,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


    {
      position: 12,
      EmpNo: '1544567',
      EmpName: 'Amit Mishsra',
      Designation: 'Head Accountant',
      payScale: '19500-44400',
      ph: 'NO',
      empGrp: '',
      basiPay: '',
      ficPay: '',
      da: '',
      hRa: '',
      cLa: '',
      mealAllow: '',
      washAllow: '',
      transAllow: '',
      specialPay: '',
      grossPay: '',
      slo: '',
    },


  ];
  displayedColumnsGrpInner: string[] = [
    'position',
    'EmpNo',
    'EmpName',
    'Designation',
    'payScale',
    'ph',
    'empGrp',
    'basiPay',
    'ficPay',
    'da',
    'hRa',
    'cLa',
    'mealAllow',
    'washAllow',
    'transAllow',
    'specialPay',
    'grossPay',
    'slo'
  ];
  dataSourceGrpInner = new MatTableDataSource<GrpDetailsInner>(this.grpDetailsInner);
  // End grp inner details earning


  // grp inner details deduction
  grpDetailsDeduction: GrpDetailsDeduction[] = [
    {
      position: 1,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 2,
      EmpNo: '23467',
      EmpName: 'P.R Binoy',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 3,
      EmpNo: '21542687',
      EmpName: 'Atul Trivedi',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 4,
      EmpNo: '24682687',
      EmpName: 'Riya Gohil',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 5,
      EmpNo: '24687645',
      EmpName: 'Reena Patel',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 6,
      EmpNo: '23467',
      EmpName: 'R.k Sharma',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 7,
      EmpNo: '23467',
      EmpName: 'P.R Binoy',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 8,
      EmpNo: '21542687',
      EmpName: 'Atul Trivedi',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 9,
      EmpNo: '24682687',
      EmpName: 'Riya Gohil',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },

    {
      position: 10,
      EmpNo: '24687645',
      EmpName: 'Reena Patel',
      Designation: 'Head Accountant',
      incomeTax: '',
      proTax: '',
      hrDeal: '',
      hraIntesrt: '',
      gpfReg: '',
      gpfIv: '',
      gpfAdv: '',
      govFund: '',
      totalDEdiction: '15500',
      netPay: '39,400',
    },


  ];
  displayedColumnsGrpDeduction: string[] = [
    'position',
    'EmpNo',
    'EmpName',
    'Designation',
    'incomeTax',
    'proTax',
    'hrDeal',
    'hraIntesrt',
    'gpfReg',
    'gpfIv',
    'gpfAdv',
    'govFund',
    'totalDEdiction',
    'netPay'

  ];
  dataSourceGrpDeduction = new MatTableDataSource<GrpDetailsDeduction>(this.grpDetailsDeduction);
  // End grp inner details deduction


  // recovery table start
  recoveryColumn: string[] = ['budgetCode', 'description', 'edpCode', 'amount'];
  recoveryList: RecoveryDetails[] = [
    { budgetCode: '0101', description: 'Pay of Officers', edpCode: '0101' },
    { budgetCode: '0102', description: 'Pay of Establishment', edpCode: '0102' },
    { budgetCode: '7057', description: 'Festival Advances', edpCode: '7057' },
    { budgetCode: '7058', description: 'Food Grains Advances', edpCode: '7058' }
  ];
  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.recoveryList);
  // recovery table ends

  // expenditure table start
  expenditureColumn: string[] = ['budgetCode', 'description', 'edpCode', 'amount'];
  expenditureList: EdpDetails[] = [
    { budgetCode: '0101', description: 'Pay of Officers', edpCode: '0101' },
    { budgetCode: '0102', description: 'Pay of Establishment', edpCode: '0102' },
    { budgetCode: '0103', description: 'Festival Advances', edpCode: '0103' },
    { budgetCode: '0104', description: 'Other Allowance', edpCode: '0104' },
    { budgetCode: '0107', description: 'Medical Allowance', edpCode: '0107' },
    { budgetCode: '0108', description: 'Bonus', edpCode: '0108' },
    { budgetCode: '0109', description: 'Leave Encashment', edpCode: '0109' },
  ];
  expenditureDataSource = new MatTableDataSource<EdpDetails>(this.expenditureList);
  // expenditure table end

  // receipt table start
  receiptColumn: string[] = [
    'edpCode', 'description', 'dedType', 'majorHead', 'subMajorHead', 'minerHead', 'subHead', 'amount'];
  receiptList: ReceiptDetails[] = [
    {
      edpCode: '9510',
      description: 'Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: 0
    },
    {
      edpCode: '9520',
      description: 'Surcharge On Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: 0
    },
    {
      edpCode: '9530',
      description: 'Postal Life Insurance',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '103',
      subHead: '00',
      amount: 0
    },
    {
      edpCode: '9531',
      description: 'G.P.F. Class IV ',
      dedType: 'A',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '02',
      amount: 0
    },
    {
      edpCode: '9620',
      description: 'I.A.S Provident Fund',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '104',
      subHead: '01',
      amount: 0
    },
    {
      edpCode: '9670',
      description: 'G.P.F. Other Then Class IV ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '01',
      amount: 0
    },
    {
      edpCode: '9680',
      description: 'G.P.Fund-Divisional Accountant ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '101',
      subHead: '03',
      amount: 0
    },
    {
      edpCode: '9690',
      description: 'Contributory Provident Fund ',
      dedType: 'B',
      majorHead: '8009',
      subMajorHead: '01',
      minerHead: '102',
      subHead: '01',
      amount: 0
    },
    {
      edpCode: '9720',
      description: 'Fan Advance',
      dedType: 'B',
      majorHead: '7610',
      subMajorHead: '00',
      minerHead: '800',
      subHead: '01',
      amount: 0
    },
  ];
  receiptDataSource = new MatTableDataSource<ReceiptDetails>(this.receiptList);
  // receipt table end

  // constructor
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.billpreprationForm = this.fb.group({
      claimant: [''],
      status: [''],
      empType: [''],
      empName: [''],
      designation: [''],
      Establishment: ['District Treasury Officer, Gandhinagar'],
      monthOf: ['2'],
      financialYear: ['3'],
      votedCharged: [''],
      fundType: [''],
      schemeType: [''],
      ddoGrantHead: [''],
      schemeNo: [''],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      objectClass: [''],
      exempted: [''],
      headChargeable: [''],
      billCode: [''],
      billCategory: [''],
      previousBill: [''],
      scheduleNo: [''],
      paymentType: ['']
    });
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  // go to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // officer list
  officerList(): void { }

  // selected
  selected(getTabIndex, data): any {
    return [this.selectedIndexTable = getTabIndex, this.selectedValue = data.label];
  }

  // on change
  onChange(data) {
    this.monthList = [];
    if (data.value === '3') {
      this.monthList = [

        { value: '1', viewValue: 'May' },
        { value: '2', viewValue: 'April' },
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
    } else {
      this.monthList = [
        { value: '1', viewValue: 'January' },
        { value: '2', viewValue: 'February' },
        { value: '3', viewValue: 'March' },
        { value: '4', viewValue: 'April' },
        { value: '5', viewValue: 'May' },
        { value: '6', viewValue: 'June' },
        { value: '7', viewValue: 'July' },
        { value: '8', viewValue: 'August' },
        { value: '9', viewValue: 'September' },
        { value: '10', viewValue: 'October' },
        { value: '11', viewValue: 'November' },
        { value: '12', viewValue: 'December' },
      ];
    }

  }
}
