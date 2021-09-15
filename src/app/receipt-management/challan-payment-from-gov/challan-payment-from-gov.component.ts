import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { ChallanPaymentFromGovt } from 'src/app/model/receipt-management';

@Component({
  selector: 'app-challan-payment-from-gov',
  templateUrl: './challan-payment-from-gov.component.html',
  styleUrls: ['./challan-payment-from-gov.component.css']
})
export class ChallanPaymentFromGovComponent implements OnInit {
  // variables
  isSelectedPaymentGateway = false;
  isInputEdpCode = true;
  isDelete = false;
  receiptManegmentForm: FormGroup;
  errorMessages = receiptManagement;
  isSelectedDeposite = false;
  isSelectedReceipt = true;
  isSelected1 = true;
  isSelected2 = false;
  isSelectedOverTheCounter = false;
  isSelectedCheque = false;
  isSelectedDD = false;
  departmentType = '1';
  // date
  initiatiomdate = new Date();
  // table data
  Element_Data: ChallanPaymentFromGovt[] = [
    {
      amt: '',
      amtInword: 'Ten Thousand',
      totalAmt: '',
      pCode: '',
      pCode1: '',
      mjrHead: '000',
      subMjrHead: '000',
      mrHead: '00',
      subHead: '00',
    },
  ];
  dataSourceClhallanPre = new MatTableDataSource<ChallanPaymentFromGovt>(this.Element_Data);
  displayedColumnschallnPreListing: string[] = [
    'pCode',
    'mjrHead',
    'subMjrHead',
    'mrHead',
    'subHead',
    'amt',
    'action',
  ];
  // form control
  pCodeCtrl: FormControl = new FormControl();
  depositType1Ctrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  minorheadCtrl: FormControl = new FormControl();
  majorCtrl: FormControl = new FormControl();
  purposeCtrl: FormControl = new FormControl();
  challanTypeCtrl: FormControl = new FormControl();
  depositeCtrl: FormControl = new FormControl();
  paymentModeCtrl: FormControl = new FormControl();
  submodeCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();
  departCtrl: FormControl = new FormControl();
  headdepartCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  tresuryCtrl: FormControl = new FormControl();
  subTresuryCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  depositTypeCtrl: FormControl = new FormControl();
  paymentGatewayCtrl: FormControl = new FormControl();
  ofcCTRL: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  // list
  purpose: ListValue[] = [
    { value: '1', viewValue: 'Tax under rule 13' },
    { value: '2', viewValue: 'Penalty' },
    { value: '3', viewValue: 'Interest' },

  ];

  challanType_list: ListValue[] = [
    { value: '1', viewValue: 'Receipt' },
    { value: '2', viewValue: 'Deposit' },

  ];
  deposit1Type_list: ListValue[] = [
    { value: '1', viewValue: 'PD/PLA' },
    { value: '2', viewValue: 'EMD' },

  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8449 : Other Deposite' },
    { value: '2', viewValue: '8342 : Other Deposite' },
  ];

  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00:Secretariat-Economic Services' },
    { value: '2', viewValue: '00:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '00:Crop Husbandry' },
    { value: '4', viewValue: '00:Secretariat-Economic Services' },
    { value: '5', viewValue: '00:Capital Outlay on other General Economics Services' },
    { value: '6', viewValue: '01:Civil' },
    { value: '7', viewValue: '00:Stationery and Printing' },
    { value: '8', viewValue: '00::Co-operatio' }
  ];


  minorhead_list: ListValue[] = [
    { value: '1', viewValue: '090:Secretariat' },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '3', viewValue: '101:Direction And Administration' },
    { value: '4', viewValue: '102:Food grain Crops' },
    { value: '5', viewValue: '103:Seed' },
    { value: '6', viewValue: '800:Other Expenditure' },
    { value: '7', viewValue: '108:Contribution to Provident Funds' },
    { value: '8', viewValue: '001:Direction and Administration' },
    { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '10', viewValue: '103:Government Presses' },
    { value: '11', viewValue: '105:Government Publications' },
    { value: '12', viewValue: '797:Transfer to Reserve fund and Deposite Account' },
    { value: '13', viewValue: '108:Assistance to other co-operatives' },
    { value: '14', viewValue: '800:Other Expenditure' },
  ];


  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:Agricultural and Co-operation Department' },
    { value: '2', viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development ' },
    { value: '3', viewValue: '01:AGR-15 Information & Technology' },
    { value: '4', viewValue: '02:Expenditure for Training' },
    { value: '5', viewValue: '01:AGR-Renovation Of The Department' },
    { value: '6', viewValue: '01:Direcorate of Agriculture' },
    { value: '7', viewValue: '02:Divisional Establishmen' },
    { value: '8', viewValue: '03:deposuteType Establishment' },
    { value: '9', viewValue: '01:Intensive Agricultural deposuteType Programme' },
    { value: '10', viewValue: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)' },
    { value: '11', viewValue: '03:National Food Security Mission' },
    { value: '12', viewValue: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)' },
    { value: '13', viewValue: '01:Multiplication and Distribution of various type of cotton' },
    { value: '14', viewValue: '02:Seed Testing Laboratory' },
    { value: '15', viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms' },
    { value: '16', viewValue: '04:Adj.Establishment of seed cell' },
    { value: '17', viewValue: '01:IND-51 Industries and Mines Department' },
    { value: '18', viewValue: '01:IND-1 Planning Machinery in the Industries & Mines Department' },
    { value: '19', viewValue: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department' },
    { value: '20', viewValue: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department' },
    { value: '21', viewValue: '01:IND-44 Information Technology' },
    { value: '22', viewValue: '01:OIN-17 Industries & Mines Department' },
    { value: '23', viewValue: '01:Contribution towards employees Provident Funds Scheme for Presses' },
    { value: '24', viewValue: '01:IND-11 Directorate of Printing and Stationery' },
    { value: '25', viewValue: '01:Stationery offices Stores' },
    { value: '26', viewValue: '01:IND-48 Government Presses' },
    { value: '27', viewValue: '02:IND-42 Apprentice Training in Government Presses' },
    { value: '28', viewValue: '01:IND-32 Government Book Depots' },
    { value: '29', viewValue: '01:Depreciation Reserve Fund for Government Presses' },
    { value: '30', viewValue: '01:IND-48 Government Presses' },
    { value: '31', viewValue: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies' },
    { value: '32', viewValue: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme' }
  ];

  purposeForDeposit_list: ListValue[] = [
    { value: '1', viewValue: 'Security Deposit' }
  ];

  purpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' },
  ];


  depositType_list: ListValue[] = [
    { value: '1', viewValue: 'Ready Built House' },
    { value: '2', viewValue: 'Construction' },
    { value: '3', viewValue: 'Loan Purchase And Construction' },
    { value: '4', viewValue: 'Construction' },
    { value: '5', viewValue: 'Others' },
  ];

  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finanace Department' },
    { value: '2', viewValue: 'Labour Department' },
    { value: '3', viewValue: 'Revenue Department' }
  ];

  headDepartmentForFinance_list: ListValue[] = [
    { value: '1', viewValue: 'Commissioner of Commercial Tax' },
    { value: '2', viewValue: 'Director of Accounts and Treasury' },
    { value: '3', viewValue: 'Director of Pension and Provident Fund' }
  ];
  headDepartmentForLabour_list: ListValue[] = [
    { value: '1', viewValue: '	Director of Labour' },
    { value: '2', viewValue: '	Director of Industrial safety and Health' }
  ];
  headDepartmentForRevenue_list: ListValue[] = [
    { value: '1', viewValue: '	Superintendent of Stamp' }
  ];

  districtList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Aravalli-Modasa' },
    { value: '5', viewValue: 'Banasakantha – Palanpur' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Botad' },
    { value: '9', viewValue: 'Chhota Udepur' },
    { value: '10', viewValue: 'Dahod' },
    { value: '11', viewValue: 'Dang – Ahwa' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya' },
    { value: '13', viewValue: 'Gandhinagar' },
    { value: '14', viewValue: 'Gir somnath (Veraval)' },
    { value: '15', viewValue: 'Jamnagar' },
    { value: '16', viewValue: 'Junagadh' },
    { value: '17', viewValue: 'Kheda-Nadiad' },
    { value: '18', viewValue: 'Kutch (Bhuj)' },
    { value: '19', viewValue: 'Mahesana' },
    { value: '20', viewValue: 'Mahisagar-Lunawada' },
    { value: '21', viewValue: 'Morbi' },
    { value: '22', viewValue: 'Narmada-Rajpipala' },
    { value: '23', viewValue: 'Navsari' },
    { value: '24', viewValue: 'Panchmahal (Godhara)' },
    { value: '25', viewValue: 'Patan' },
    { value: '26', viewValue: 'Porbandar' },
    { value: '27', viewValue: 'Rajkot' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'Surat' },
    { value: '30', viewValue: 'Surendranagar' },
    { value: '31', viewValue: 'Tapi – Vyara' },
    { value: '32', viewValue: 'Vadodara' },
    { value: '33', viewValue: 'Valsad' },
  ];


  Treasury_List: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Amreli' },
    { value: '3', viewValue: 'District Treasury Office, Anand' },
    { value: '4', viewValue: 'District Treasury Office, Aravalli-Modasa' },
    { value: '5', viewValue: 'District Treasury Office, Banasakantha - Palanpur' },
    { value: '6', viewValue: 'District Treasury Office, Bhavnagar' },
    { value: '7', viewValue: 'District Treasury Office, Bhuj' },
    { value: '8', viewValue: 'District Treasury Office, Botad' },
    { value: '9', viewValue: 'District Treasury Office, Chhota Udepur' },
    { value: '10', viewValue: 'District Treasury Office, Dahod' },
    { value: '11', viewValue: 'District Treasury Office, Dang Ahwa' },
    { value: '12', viewValue: 'District Treasury Office, Devbhumi-Dwarka' },
    { value: '13', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '14', viewValue: 'District Treasury Office, Gir-Somnath' },
    { value: '15', viewValue: 'District Treasury Office, Jamnagar' },
    { value: '16', viewValue: 'District Treasury Office, Junagadh' },
    { value: '17', viewValue: 'District Treasury Office, Kheda-Nadiad' },
    { value: '18', viewValue: 'District Treasury Office, Kutch (Bhuj)' },
    { value: '19', viewValue: 'District Treasury Office, Mahisagar-Lunawadav' },
    { value: '20', viewValue: 'District Treasury Office, Mahisagar' },
    { value: '21', viewValue: 'District Treasury Office, Morbi' },
    { value: '22', viewValue: 'District Treasury Office, Narmada-Rajpipala' },
    { value: '23', viewValue: 'District Treasury Office, Navsari' },
    { value: '24', viewValue: 'District Treasury Office, Panchmahal (Godhara)' },
    { value: '25', viewValue: 'District Treasury Office, Patan' },
    { value: '26', viewValue: 'District Treasury Office, Porbandar' },
    { value: '27', viewValue: 'District Treasury Office, Rajkot' },
    { value: '28', viewValue: 'District Treasury Office, Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'District Treasury Office, Surat' },
    { value: '30', viewValue: 'District Treasury Office, Surendranagar' },
    { value: '31', viewValue: 'District Treasury Office, Tapi - Vyara' },
    { value: '32', viewValue: 'District Treasury Office, Vadodara' },
    { value: '33', viewValue: 'District Treasury Office, Valsad' },
  ];

  subTresury_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office' },
    { value: '2', viewValue: 'Amreli Treasury Office' },
    { value: '3', viewValue: 'Anand Treasury Office' },
    { value: '4', viewValue: 'Aravalli-Modasa Treasury Office' },
    { value: '5', viewValue: 'Banasakantha – Palanpur Treasury Office' },
    { value: '6', viewValue: 'Bhavnagar Treasury Office' },
    { value: '7', viewValue: 'Bharuch Treasury Office' },
    { value: '8', viewValue: 'Botad Treasury Office' },
    { value: '9', viewValue: 'Chhota Udepur Treasury Office' },
    { value: '10', viewValue: 'Dahod Treasury Office' },
    { value: '11', viewValue: 'Dang – Ahwa Treasury Office' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya Treasury Office' },
    { value: '13', viewValue: 'Gandhinagar Treasury Office' },
    { value: '14', viewValue: 'Gir somnath (Veraval) Treasury Office' },
    { value: '15', viewValue: 'Jamnagar Treasury Office' },
    { value: '16', viewValue: 'Junagadh Treasury Office' },
    { value: '17', viewValue: 'Kheda-Nadiad Treasury Office' },
    { value: '18', viewValue: 'Kutch (Bhuj) Treasury Office' },
    { value: '19', viewValue: 'Mahesana Treasury Office' },
    { value: '20', viewValue: 'Mahisagar-Lunawada Treasury Office' },
    { value: '21', viewValue: 'Morbi Treasury Office' },
    { value: '22', viewValue: 'Narmada-Rajpipala Treasury Office' },
    { value: '23', viewValue: 'Navsari Treasury Office' },
    { value: '24', viewValue: 'Panchmahal (Godhara) Treasury Office' },
    { value: '25', viewValue: 'Patan Treasury Office' },
    { value: '26', viewValue: 'Porbandar Treasury Office' },
    { value: '27', viewValue: 'Rajkot Treasury Office' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar Treasury Office' },
    { value: '29', viewValue: 'Tapi – Vyara Treasury Office' },
    { value: '30', viewValue: 'Vadodara Treasury Office' },
    { value: '31', viewValue: 'Valsad Treasury Office' },
    { value: '32', viewValue: 'Surat Treasury Office' },
    { value: '33', viewValue: 'Surendranagar Treasury Office' },
  ];


  Officelocation_list: ListValue[] = [
    { value: '1', viewValue: 'Pay & Accounts Office Ahmedabad' },
    { value: '2', viewValue: 'Pension Payment Office, Ahmedabad' },
    { value: '3', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda' },
    { value: '4', viewValue: 'District Treasury Office, Ahmedabad' },
  ];

  deposite_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];

  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Payment' },
    { value: '2', viewValue: 'NEFT / RTGS' },
    { value: '3', viewValue: 'Over the Counter' },
    { value: '4', viewValue: 'Payment Gateway' }
  ];

  submode_list: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'Cheque' },
    { value: '3', viewValue: 'DD' }
  ];

  BankName_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank Of India' }
  ];

  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Central Sales Tax' },
    { value: '3', viewValue: 'Entry Tax' }
  ];
  paymentGateway_list: ListValue[] = [
    { value: '1', viewValue: 'SBI e-Pay' },
    { value: '2', viewValue: 'Pay GOV' }
  ];

  ngOnInit() {
    this.receiptManegmentForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      cType: [''],
      nameOfprayer: [''],
      phone: [''],
      emailID: [''],
      district: [''],
      depositType: [''],
      department: ['1'],
      headDepartment: ['1'],
      tresury: [''],
      subTresury: [''],
      ofc: [''],
      pdpla: [''],
      challanType: [''],
      deposiyeType: [''],
      bank: [''],
      paymentMode: [''],
      reMarks: [''],
      pCode: [''],
      pCode1: [''],
      mjrHead: [''],
      subMjrHead: [''],
      mrHead: [''],
      subHead: [''],
      submodes: [''],
      chequeNo: [''],
      ddNo: [''],
      taxPurpose: [''],
      paymentGateway: [''],
      depositType1: ['']
    });
  }

  // selects department  type
  selectDepartment(type) {
    this.departmentType = type;
  }

  // selects payment mode
  selectPaymentMode(type) {
    if (type === '3') {
      this.isSelectedOverTheCounter = true;
      this.isSelectedPaymentGateway = false;
    } else if (type === '4') {
      this.isSelectedOverTheCounter = false;
      this.isSelectedPaymentGateway = true;
    } else {
      this.isSelectedPaymentGateway = false;
      this.isSelectedOverTheCounter = false;
    }
  }

  // selects submode
  selectSubMode(type) {
    if (type === '2') {
      this.isSelectedCheque = true;
      this.isSelectedDD = false;
    } else if (type === '3') {
      this.isSelectedCheque = false;
      this.isSelectedDD = true;
    }
  }

  // routing
  gotoListing() {
    // this.router.navigate(['./pdpla/create-account-closing-request-listing']);
  }

  // adds leave
  addLeave() {
    const p_data = this.dataSourceClhallanPre.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      amtInword: '',
      totalAmt: '',
      pCode: '',
      pCode1: '',
      mjrHead: '000',
      subMjrHead: '00',
      mrHead: '00',
      subHead: '00',
      amt: '0.00'
    });
    this.dataSourceClhallanPre.data = p_data;
  }

  // patches form value on selection of challan type
  selectChallan(type) {
    if (type === 'Tax under rule 13') {
      this.receiptManegmentForm.patchValue({
        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',

      });
    } else if (type === 'Penalty') {
      this.receiptManegmentForm.patchValue({
        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',
      });
    } else if (type === 'Interest') {
      this.receiptManegmentForm.patchValue({
        mjrHead: '0040',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '02',
      });
    } else {
      this.receiptManegmentForm.patchValue({
        mjrHead: '8043',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',
      });
    }
  }
  // sets variable value
  selectChallanType(type) {
    if (type === '2') {
      this.isSelectedReceipt = false;
      this.isSelectedDeposite = true;
    } else if (type === '1') {
      this.isSelectedReceipt = true;
      this.isSelectedDeposite = false;
    }

  }

  // patches form value on selection of deposit type
  selectDepositType(type) {
    if (type === 1) {
      this.isSelected2 = true;
      this.receiptManegmentForm.patchValue({
        pCode1: 'Security Deposite',
        mjrHead: '8043',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '01',

      });
    } else if (type === 2) {
      this.isSelected2 = true;
      this.receiptManegmentForm.patchValue({
        pCode1: 'Money Deposite',
        mjrHead: '8043',
        subMjrHead: '00',
        mrHead: '101',
        subHead: '02',
      });

    }
  }

  // deletes expenditure record
  deletExpenditureRow(index) {
    this.dataSourceClhallanPre.data.splice(index, 1);
    this.dataSourceClhallanPre = new MatTableDataSource(
      this.dataSourceClhallanPre.data
    );
  }

  // calculates total  exp amount
  totalExpeAmount(): number {
    let amountExp = 0;
    this.dataSourceClhallanPre.data.forEach((element) => {
      amountExp = amountExp + Number(element.amt);
    });
    return amountExp;
  }

  // sets amount in words
  totalExpeAmountWords(): string {
    const amountExp = 'Ten Thousand Only';

    return amountExp;
  }


}
