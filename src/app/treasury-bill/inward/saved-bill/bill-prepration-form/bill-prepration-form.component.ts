import { Component, OnInit, Inject, ElementRef, ViewChild, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatInput } from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { group } from '@angular/animations';
import { element } from 'protractor';
// tslint:disable-next-line:max-line-length
import { GTR44DialogCheckList, GTR44Dialog, IncomeTaxDetailsDialog, IncomeTaxDetailsCheckListDialog } from 'src/app/ddo/gtr-forms/gtr-fourty-four/gtr-fourty-four.component';
import { treasuryBillMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsGrantComponent } from 'src/app/treasury-bill/workflow-details-grant/workflow-details-grant.component';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
// import { ResizeEvent } from '`angular-resizable-element`';
declare function SetGujarati();
declare function SetEnglish();

const newELEMENT_DATA = [
  {
    objectioncode: '3',
    objectiondesc: 'બીલ સાથે સામેલ તફાવતના પત્રકમા વાવચર નબર લખવામા આવેલ નથી ',
  },
  {
    objectioncode: '47 ',
    objectiondesc: 'મુદત બહારનો દાવો હોવાથી મળવાપાત્ર નથી ',
  },
  {
    objectiondesc: 'મહેકમ મંજુરીના હુકમ નમ્બરની નોધ પગાર બીલ નામથાળેથયેલ નથી  ',
    objectioncode: '45 '
  },
  {
    objectiondesc: 'બીલમાં દર્શાવેલ ખર્ચાનો ઇડીપી કોડ સુંસંગત નથી. જે ઓનલાઇન તેમજ બીલ ઉપર સુધારી બીલ રજુ કરવું ',
    objectioncode: '43'
  },
  {
    objectiondesc: 'બીલમાં દર્શાવેલ કપાતનો ઇડીપી કોડ ખોટો જણાય છે. જે ઓનલાઇન સીસ્ટમમાં તેમજ બીલ ઉપર સુધારી ફરી રજુ કરવુ.  ',
    objectioncode: '41'
  },
  {
    objectiondesc: 'બીલમા સરવાળા મેળમા નથી. ',
    objectioncode: '3'
  },
  {
    objectiondesc: 'બીલમા નિયંત્રણ અધિકારીશ્રીની સહી અને કોડ નંબર દર્શાવેલ નથી.  ',
    objectioncode: '23'
  },
  {
    objectiondesc: 'બીલમા ઉપાડ અધિકારીની સહી થયેલ નથી. ',
    objectioncode: '21'
  },
  {
    objectiondesc: 'બીલમા ઈડીપી કોડ્ સાચા દર્શાવેલ નથી  ',
    objectioncode: '19 '
  },
  {
    objectiondesc: 'બીલમા આકારવામા આવેલ રુ.૧૦૦૦/-થી ઉપરના કિસ્સામા પાર્ટીના નામ જોગ ચેક માગવો રહે. ',
    objectioncode: '27'
  },
  {
    objectiondesc: 'બીલના મથાળે અવર-જવર પુસ્તિકામાં માં નોંધ કર્યા અંગેનુ પ્રમાણપત્ર આપેલ નથી.  ',
    objectioncode: '19'
  },
  {
    objectiondesc: 'બીલ મોડુ રજુ કરવાનુ કારણ દરશાવવુ રહે ',
    objectioncode: '13'
  },
  {
    objectiondesc: 'ડીસીબીલ પ્રમાણપત્ર બીલ સાથે સામેલ નથી  ',
    objectioncode: '6'
  },
  {
    objectiondesc: 'જુથવિમામાં જોડાયા તારીખની કરેલ નોંધના સર્વિસબુકના પાનાની નકલ પ્રમાણિત કરી બીલ સાથે સામેલ ',
    objectioncode: '5'
  },
  {
    objectiondesc: 'ગુજરાત્ નાણાકીય નિયમ211 મુજબ બિલ્ રજુ કરો.  ',
    objectioncode: '5 '
  },

];

const ELEMENT: any[] = [
  {
    objCode: '13',
    oremarks: 'બીલ મોડુ રજુ કરવાનુ કારણ દરશાવવુ રહે',

  }
];

@Component({
  selector: 'app-bill-prepration-form',
  templateUrl: './bill-prepration-form.component.html',
  styleUrls: ['./bill-prepration-form.component.css']
})
export class BillPreprationFormComponent implements OnInit {
  ObjectionDialogForm: FormGroup;
  hasFocusSet: number;
  isLangChange = false;
  currentLang = new BehaviorSubject<string>('Eng');
  errorMessages = treasuryBillMessage;
  AdduserList = false;
  isAdd = false;
  animal: string;
  name: string;
  gtrfourtyFout = 'GTR Form 30 - Pay Bill';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'TBP';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  ddoInfo = 'DDO Information';
  budgetDetail = 'Budget Details';
  detailHeaderLable = 'Contingent Bill Details';
  detailHeaderLable2 = 'Detailed Bill For Contingent Charges';
  billRemarks = 'Bill Remarks Details';

  newdisplayedColumns1: string[] = ['srno', 'objCode', 'oremarks'];
  newdataSource1 = new MatTableDataSource<any>(ELEMENT);

  newdisplayedColumns: string[] = ['select', 'objectioncode', 'objectiondesc'];
  newdataSource = new MatTableDataSource<any>(newELEMENT_DATA);
  todayDate = Date.now();
  date = new FormControl(new Date());
  tabDisable: Boolean = true;
  isSubmitted: Boolean = false;
  selectedIndex: number;
  selection = new SelectionModel<any>(true, []);
  billpreprationform: FormGroup;
  billpreprationformFourtyFour: FormGroup;
  incomeCategory: FormGroup;

  checkTable = false;
  epayment = true;




  // tslint:disable-next-line:member-ordering
  financialYear_list: any[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' },
    { value: '3', viewValue: '2021' }
  ];

  // tslint:disable-next-line:member-ordering
  monthList: any[] = [
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
    { value: '12', viewValue: 'December' }
  ];

  // tslint:disable-next-line:member-ordering
  classType: any[] = [
    { value: '1', viewValue: '1-Voted' },
    { value: '2', viewValue: '2-Charged' }
  ];

  fundType: ListValue[] = [
    { value: '1', viewValue: '3-Consolidated' },
    { value: '2', viewValue: '4-Contingency' }
  ];

  schemeType_list: ListValue[] = [
    { value: '1', viewValue: '1-State' },
    { value: '2', viewValue: '2-CSS' }
  ];

  ddoGrantHead_list: ListValue[] = [
    { value: '1', viewValue: 'Mr. Shyam Sundar' }
  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClass_list: ListValue[] = [
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' }
  ];
  exemptedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  billCodeList: ListValue[] = [
    { value: '1', viewValue: '1 - Pay allow Retirement benefit i.e. ltc & leave encas. at reti' },
    { value: '2', viewValue: '2 - Widow Relief Assistance To Aged Helpless' },
    { value: '3', viewValue: '3 - Bills Of Scarcity' },
    { value: '4', viewValue: '4 - Bills Of Diet Charges Of Hospital' },
    { value: '5', viewValue: '5 - Scolarship / Stipend Bills' },
    { value: '6', viewValue: '6 - Relief On Salestax Levied On Diesel Of Fisherman' },
    { value: '7', viewValue: '7 - Telephone / Light Bills' },
    { value: '8', viewValue: '8 - Petrol / Diesel Bill' }
  ];

  billCategoryList: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'Regular/Challan' },
    { value: '3', viewValue: 'TC' },
    { value: '4', viewValue: 'NIL' },
  ];

  SelectTaxList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  PaymentType: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'e-payment' }
  ];
  scheme_list: ListValue[] = [
    { value: '1', viewValue: 'Scheme No 1' },
    { value: '1', viewValue: 'Scheme No 2' }
  ];

  type_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item' },
    { value: '3', viewValue: 'New Work' },
    { value: '4', viewValue: 'Item Continuous' },
    { value: '5', viewValue: 'Work-In-Progress' }
  ];

  checkType: ListValue[] = [
    { value: '1', viewValue: 'Beneficiary' },
    { value: '2', viewValue: 'Contractor' },
    { value: '3', viewValue: 'Grant In Aid' },
    { value: '4', viewValue: 'GST TDS' },
    { value: '5', viewValue: 'Scholarship' },
    { value: '6', viewValue: 'Service Provider' },
    { value: '7', viewValue: 'Supplier' },
  ];

  checklist: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
    { value: '2', viewValue: 'DDO Cheque' }
  ];

  itemName_list: ListValue[] = [
    {
      value: '1',
      viewValue: 'Purchase of new car for Director of Agriculture'
    },
    { value: '2', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '3', viewValue: 'Purchase Furniture for record room of Office' },
    {
      value: '4',
      viewValue: 'Purchase of new Furniture for the Joint Director Office'
    },
    {
      value: '5',
      viewValue: 'Purchase of new Furniture for the Deputy Director'
    }
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
    // { type: 'view' }
  ];

  expenditureColumn = [
    'budgetCode',
    'description',
    'edpCode',
    'amountExp',
    'action'
  ];

  expenditureList: any[] = [
    { budgetCode: '0200', description: 'Wages', edpCode: '0201', amountExp: '2000.00' },
    { budgetCode: '1300', description: 'Office Expenses', edpCode: '1301', amountExp: '2000.00' },
    { budgetCode: '2800', description: 'Payment Of Prof. & Special Services', edpCode: '2801', amountExp: '2000.00' },
  ];

  receiptColumn = [
    'edpCode',
    'description',
    'dedType',
    'majorHead',
    'subMajorHead',
    'minerHead',
    'subHead',
    'amount',
    'action'
  ];

  summaryData = [
    'edpCode',
    'chlanDate',
    'pdAccount',
    'party',
    'amount',
    'action'
  ];

  deductionCol = ['expenditure', 'recovery', 'decuctionA', 'decuctionB'];

  receiptList: any[] = [
    {
      edpCode: '9510', description: 'Income Tax',
      dedType: 'A', majorHead: '8658', subMajorHead: '00',
      minerHead: '112', subHead: '00', amount: '100.00'
    },
    {
      edpCode: '9520', description: 'Surcharge On Income Tax',
      dedType: 'A', majorHead: '8658', subMajorHead: '00', minerHead:
        '112', subHead: '00', amount: '400.00'
    },
    {
      edpCode: '9600', description: 'Security Deposit',
      dedType: 'A', majorHead: '8443', subMajorHead: '00',
      minerHead: '103', subHead: '00', amount: '500.00'
    },

  ];

  CheckColumn = [
    'checkType', 'partyName', 'address', 'accountNo', 'checkAmount', 'action'];

  checkList: any[] = [
    {
      budgetCode: '0101',
      description: 'Pay of Officers',
      edpCode: '0101',
      checkAmount: 0
    }
  ];

  gtrDetailList: any[] = [
    { subVoucher: '', description: '', amount: '0.00', incomeTax: 'No' },
  ];

  epaymentColumn = ['payeeName', 'accountNo', 'ifscCode', 'amount', 'action'];
  recoveryColumn = ['budgetCode', 'description', 'edpCode', 'amount', 'action'];

  recoveryList: any[] = [
    { budgetCode: '0101', description: 'Pay of Officers', edpCode: '0101', amount: '100.00' },
    { budgetCode: '7057', description: 'Festival Advances', edpCode: '7057', amount: '300.00' },
    { budgetCode: '7058', description: 'Food Grains Advances', edpCode: '7058', amount: '400.00' }
  ];
  summaryDataList: any[] = [
    { edpCode: '', chlanDate: '', pdAccount: '', party: '', amount: '' }
  ];

  epaymentList: any[] = [
    { payeeName: '', accountNo: 0, ifscCode: '', amount: 100 }
  ];

  deductionList: any[] = [
    { decuctionA: '1000.00', decuctionB: '0.00', expenditure: '6000.00', recovery: '0.00' }
  ];

  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];

  fileBrowseIndex: number;



  gtrTbableColumn = ['subVoucher', 'description', 'amount', 'incomeTax', 'viewLink', 'action'];

  checkDataSource = new MatTableDataSource(this.checkList);
  epaymentDataSource = new MatTableDataSource([]);
  expenditureDataSource = new MatTableDataSource(this.expenditureList);
  receiptDataSource = new MatTableDataSource(this.receiptList);
  summaryDataSource = new MatTableDataSource([]);
  deductionDataSource = new MatTableDataSource(this.deductionList);
  gtrDetailDataSource = new MatTableDataSource(this.gtrDetailList);
  recoveryDataSource = new MatTableDataSource([]);

  monthOfCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  fundTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  ddoGrantHeadCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  exemptedCtrl: FormControl = new FormControl();
  billCodeCtrl: FormControl = new FormControl();
  billCatCtrl: FormControl = new FormControl();

  paymentTypeCtrl: FormControl = new FormControl();
  schemeNoCtrl: FormControl = new FormControl();
  checkTypeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  checkTypeTwoCtrl: FormControl = new FormControl();

  taxCtrl: FormControl = new FormControl();

  attachmentTypeCodeCtrl: FormControl = new FormControl();

  status = false;
  // tslint:disable-next-line: member-ordering
  show = false;
  paymentTypeDropDown = true;

  isItemList = false;




  attachment_data: any[] = [
    {
      fileName: 'Sample Image',
      fileType: 'image', filePath: 'assets/img/img-pdf.PNG', imgStatus: false
    }];

  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private elem: ElementRef,
    private router: Router) {

  }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }

  toggleLanguage() {
    this.isLangChange = true;

    const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
    // tslint:disable-next-line: triple-equals

    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
  checkGujarati(data) {
    this.ObjectionDialogForm.patchValue({
      workNameGuj: data
    });
  }

  objectionDialogData() {
    this.ObjectionDialogForm = this.fb.group({
      modulername: [''],
      object_desc: ['', Validators.required],
      billtype: [''],

    });
  }
  setGEnglishDefault() {

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }


  attachments() {
    this.status = !this.status;
    this.show = false;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  // tslint:disable-next-line:member-ordering
  amount;
  // tslint:disable-next-line:member-ordering
  billRigister;
  // tslint:disable-next-line:member-ordering
  BillTransit;
  // tslint:disable-next-line:member-ordering
  message;

  // tslint:disable-next-line:member-ordering
  grossTotl: any[] = [
    { label: 'Gross Total', value: '6000.00' },
    { label: 'Recovery', value: '0.00' },
    { label: 'Deduction A', value: '1000.00' },
    { label: 'Deduction B', value: '0.00' },
    { label: 'Net Total', value: '5000.00' },
    { label: 'Amount in Rs.', value: 'Five Thousand Only' },
    { label: 'Appropriation For', value: '80000.00' },
    { label: 'Expenditure including this bill', value: '10000.00' },
    { label: 'Balance', value: '70000.00' },
  ];


  addUser() {
    this.AdduserList = false;
    this.isAdd = true;
    const p_data = this.newdataSource1.data;
    p_data.push({
      srno: this.billpreprationform.value[''],
      objCode: this.billpreprationform.value[''],
      oremarks: this.billpreprationform.value['oremarks'],


    });
    this.newdataSource1.data = p_data;
    this.clearForm();
  }

  clearForm() {
    this.billpreprationform.reset();
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
    console.log('pdfData', pdfData);
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }
  checkDisplayImg(data) {
    for (let i = 0; i < this.attachment_data.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment_data[i].fileName === data.fileName) {
          this.attachment_data[i].imgStatus = !this.attachment_data[i].imgStatus;
          this.show = this.attachment_data[i].imgStatus ? true : false;
        } else {
          this.attachment_data[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.attachment_data[i].fileName === data.fileName) {
          this.attachment_data[i].pdfStatus = !this.attachment_data[i].pdfStatus;
          this.show = this.attachment_data[i].pdfStatus ? true : false;
        } else {
          this.attachment_data[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment_data[i].fileType === 'image') {
          this.attachment_data[i].imgStatus = false;
        } else if (this.attachment_data[i].fileType === 'pdf') {
          this.attachment_data[i].pdfStatus = false;
        }
      }
    }
    console.log(data);

  }


  goToNextTab() {
    this.tabDisable = false;
    this.selectedIndex = 4;

  }
  ngOnInit() {
    this.billpreprationformFourtyFour = this.fb.group({
      status: [''],
      billRigister: [''],
      billTransitRigister: [''],
      nameOfMessanger: [''],
      monthOf: ['2'],
      financialYear: ['2'],
      classExp: ['1', Validators.required],
      fundType: ['1', Validators.required],
      type: ['1', Validators.required],
      schemeType: ['1', Validators.required],
      ddoGrantHead: [''],
      schemeNo: [''],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      itemName: ['', Validators.required],
      exempted: ['1'],
      headChargeable: ['', Validators.required],
      billCode: ['', Validators.required],
      billCategory: ['1', Validators.required],
      previousBill: [''],
      paymentType: ['2', Validators.required],
      establishment: [''],
      checkType: ['']
    });
    this.incomeCategory = this.fb.group({
      incomeTax: ['2']
    });

    this.billpreprationform = this.fb.group({
      oremarks: ['']
    });
  }

  billValues(data) {
    if (data.value === '3' || data.value === '4') {
      this.paymentTypeDropDown = false;
    }
    if (data.value === '1' || data.value === '2') {
      this.paymentTypeDropDown = true;
    }
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  officerList(): void { }


  payment(data) {
    if (data.value === '1') {
      this.epayment = false;
      this.checkTable = true;
    }
    if (data.value === '2') {
      this.checkTable = false;
      this.epayment = true;
    }
  }


  itemSelect(selectedValue) {
    console.log(selectedValue);
    if (selectedValue.value !== '1') {
      return (this.isItemList = true);
    }
    if (selectedValue.value === '1') {
      return (this.isItemList = false);
    }
  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
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

  removeDecimalValue(event: any) {
    const pattern = /^\d+(\\d{0})?$/;
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
  removedecimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(0);
    }
  }

  decimalPoint2(data) {
    if (data) {
      data = Number(data).toFixed(2);
    }
  }

  getTotalAmount(): number {
    let checkAmount = 0;
    this.checkDataSource.data.forEach(element => {
      checkAmount = checkAmount + Number(element.checkAmount);
    });
    return checkAmount;
  }

  totalAmountEpay(): number {
    let amount = 0;
    this.epaymentDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  totalExpeAmount(): number {
    let amountExp = 0;
    this.expenditureDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amountExp);
    });
    return amountExp;
  }

  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    })
    return amount;
  }

  totalSummary(): number {
    let amount = 0;
    this.summaryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount)
    });
    return amount;
  }

  totalexpenditure(): number {
    let expenditure = 0;
    this.deductionDataSource.data.forEach((element) => {
      expenditure = expenditure + Number(element.expenditure)
    });
    return expenditure;
  }

  totalrecovery(): number {
    let recovery = 0;
    this.deductionDataSource.data.forEach((element) => {
      recovery = recovery + Number(element.recovery)
    });
    return recovery;
  }

  totaldecuctionA(): number {
    let decuctionA = 0;
    this.deductionDataSource.data.forEach((element) => {
      decuctionA = decuctionA + Number(element.decuctionA)
    });
    return decuctionA;
  }
  totaldecuctionB(): number {
    let decuctionB = 0;
    this.deductionDataSource.data.forEach((element) => {
      decuctionB = decuctionB + Number(element.decuctionB)
    });
    return decuctionB;
  }

  reciptTotal(): number {
    let amount = 0;
    this.receiptDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount)
    });
    return amount;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(GTR44Dialog, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.billpreprationformFourtyFour.patchValue({
        // class: 'Class I',
        schemeNo: '000000',
        demand: '1',
        majorHead: '1',
        subMajorHead: '1',
        minorHead: '1',
        subHead: '1',
        detailHead: '1',
        objectClass: '2',
        headChargeable: '2054:00:095:01:00:C2 '
      });
    });
  }



  resetForm() {
    this.billpreprationformFourtyFour.reset();
  }

  checkDialog(): void {
    const dialogRef = this.dialog.open(GTR44DialogCheckList, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      const p_data = this.epaymentDataSource.data;
      this.isInputEdpCode = false;
      this.isDelete = true;

      p_data.push({
        checkType: 'Supplier',
        designation: 'Pay of Officers',
        payeeName: 'ABC Ltd',
        accountNo: 32373007812,
        ifscCode: 'SBIN002636',
        amount: '0.00'
      });
      this.epaymentDataSource.data = p_data;
    });
  }



  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }




  isInputEdpCode = true;
  isDelete = false;
  addLeave() {
    const p_data = this.expenditureDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.expenditureDataSource.data = p_data;
  }

  fillData() {
    const p_data = this.expenditureDataSource.data;
    p_data.push({
      budgetCode: '1600',
      description: 'Publications',
      edpCode: '1601',
      amountExp: '0.00',
    });
    p_data.splice(this.expenditureDataSource.data.length - 2, 1);
    this.expenditureDataSource.data = p_data;
  }

  addNewRow() {
    const p_data = this.checkDataSource.data;
    p_data.push({
      partyName: '',
      accountNo: '',
      checkAmount: ''
    });
    this.checkDataSource.data = p_data;
  }

  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '',
      description: '',
      amount: '',
      incomeTax: 'NO'
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  addnewRowreceipt(data) {
    const Col_Data = this.summaryDataSource.data;
    Col_Data.push({
      edpCode: '9720'
    });
    this.summaryDataSource.data = Col_Data;
  }

  isInputEdpCode1 = true;
  AddnewEdpRow() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '',
      description: '',
      dedType: '',
      majorHead: '',
      subMajorHead: '',
      minerHead: '',
      subHead: '',
      amount: '0.00'
    })
    this.receiptDataSource.data = Col_Data;
    this.isInputEdpCode1 = false;
  }

  fillEdpDSescription() {
    const Col_Data = this.receiptDataSource.data;
    Col_Data.push({
      edpCode: '9520',
      description: 'Surcharge On Income Tax',
      dedType: 'A',
      majorHead: '8658',
      subMajorHead: '00',
      minerHead: '112',
      subHead: '00',
      amount: '0.00'
    })
    Col_Data.splice(this.receiptDataSource.data.length - 2, 1);
    this.receiptDataSource.data = Col_Data;
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      budgetCode: '0102',
      description: 'Pay of Establishment',
      edpCode: '0102',
      amount: '0.00'
    })
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
  }



  deleteDetail(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(
      this.gtrDetailDataSource.data
    );
  }

  // removeRow(index) {
  //   this.summaryDataSource.data.splice(index, 1);
  //   this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  // }

  removeRow(index) {
    this.receiptDataSource.data.splice(index, 1);
    this.summaryDataSource.data = [];
    this.receiptDataSource = new MatTableDataSource(
      this.receiptDataSource.data
    );

  }

  deletExpenditureRow(index) {
    this.expenditureDataSource.data.splice(index, 1);
    this.expenditureDataSource = new MatTableDataSource(
      this.expenditureDataSource.data
    );
  }

  deletepaymentRow(index) {
    this.epaymentDataSource.data.splice(index, 1);
    this.epaymentDataSource = new MatTableDataSource(
      this.epaymentDataSource.data
    );
  }

  removeRowsummary(index) {
    this.summaryDataSource.data.splice(index, 1);
    this.summaryDataSource = new MatTableDataSource(this.summaryDataSource.data);
  }

  addDeletecheckDataRow(index) {
    this.checkDataSource.data.splice(index, 1);
    this.checkDataSource = new MatTableDataSource(this.checkDataSource.data);
  }
  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }
  DDoParty;
  changeDDovalue(data) {
    if (data.value == '1') {
      this.DDoParty = "";

    }
    if (data.value == '2') {
      this.DDoParty = "District Treasury Officer, District Treasury Office, Gandhinagar"
    }
  }
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-44']);
  }
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }
  viewIncomeTax() {
    const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openModelIncomeTax(deviceValue) {
    if (deviceValue.value == '1') {
      const dialogRef = this.dialog.open(IncomeTaxDetailsDialog, {
        width: '900px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

    }
  }
  onSubmit() {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

  }

  checkListTaxDetail(deviceValue) {
    const dialogRef = this.dialog.open(IncomeTaxDetailsCheckListDialog, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  netDeduction = '500.00';
  otherDeduction = '600';
  decuction = 10;
  amountTax = 0;
  netTotal = 0;
  updateSum(): number {
    const totalDeduction = Number(
      Number(this.decuction) +
      Number(this.otherDeduction) +
      Number(this.netDeduction)
    );
    // this.netDeduction = Number(
    //   Number(this.decuction) + Number(this.otherDeduction).toFixed(2)
    // );
    return (this.netTotal = Number(this.amountTax) - Number(totalDeduction));
  }

}


const INCOMETAX_DETAILS_DATA: any[] = [
  { panNo: '', rate: '', amountTax: '', remarks: '' }
];

const INCOMETAX_DATA: any[] = [
  { personName: 'Raj Kumar', panNo: 'EOXPS8888O', rate: '10', amountTax: '500', remarks: '' }
];

const ELEMENT_DATA: any[] = [
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'Standing Charges',
    itemName: '-',
    schemeNo: '000000'
  },
  {
    fundType: 'Consolidated',
    voted: 'Voted',
    stateCss: 'State',
    bSubHeadSt: '017:2054:00:095:01:00:C2 ',
    subHeadDes: 'Treasuries',
    expenditure: 'New Item',
    itemName: 'Purchase of new car for Director of Agriculture',
    schemeNo: '000000'
  }
];

const ELEMENT_DATA1: any[] = [
  { vender: 'ABC Ltd', checkType: 'Contractor', accountNo: '3600178925', panNo: 'EOXPS8331P ' },
  // {vender:'Tech mahindra', checkType: 'Contractor', accountNo:'3600178926', panNo: 'RTXPS8331P'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
