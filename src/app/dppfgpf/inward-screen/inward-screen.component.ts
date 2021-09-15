import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { TabelElement, HeadDataDeleteGpfYearEndProcess } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-inward-screen',
  templateUrl: './inward-screen.component.html',
  styleUrls: ['./inward-screen.component.css']
})
export class InwardScreenComponent implements OnInit {
  // Date
  maxDate = new Date();
  selectedIndex = 0;
  selectedIndexMain = 0;
  errorMessage;
  fileBrowseIndex: number;
  DDO: Boolean = true;
  isNonDDO = false;
  attachment: false;
  isSupplementaryTransferPayment = false;
  isSupplementaryPaymentRegister = false;
  // Date
  todayDate = Date.now();
  // Form Group
  public gpfInwardDetailsForm: FormGroup;
  receivedDetailsFinalPayment: FormGroup;
  receivedDetailsRequestForAccountGeneration: FormGroup;
  receivedDetailsTopSchedule: FormGroup;
  receivedDetailsTransferBalanceRegister: FormGroup;
  // LIst
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: ' Request For Account Generation' },
    { value: '3', viewValue: 'Debit/Credit Correction Entry' },
    { value: '4', viewValue: 'AG CA Figure ' },
    { value: '5', viewValue: 'AGTE Misclassified Entry' },
    { value: '6', viewValue: 'Final Payment Register' },
    { value: '7', viewValue: 'Transfer Balance Register' },
    { value: '8', viewValue: 'Supplementary Transfer Payment ' },
    { value: '9', viewValue: 'Supplementary Payment Register' },

  ];

  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },

  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Gandhinagar ' },
    { value: '2', viewValue: 'Ahmedabad' },


  ];
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },



  ];

  classTypeOfTreasuryPaoAhm: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad' },


  ];



  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];

  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January ' },
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

  classTypeOfTcChallan: ListValue[] = [
    { value: '1', viewValue: 'TC ' },
    { value: '2', viewValue: 'Challan' },
    { value: '3', viewValue: 'Gross Amount' },
  ];

  classTypeOfTcChallanDebit: ListValue[] = [
    { value: '1', viewValue: 'Voucher ' },

  ];
  classTypeOfEmployeeType: ListValue[] = [
    { value: '1', viewValue: 'Type 1 ' },
    { value: '2', viewValue: 'Type 2 ' },
    { value: '3', viewValue: 'Type 3 ' },

  ];



  ELEMENT_DATA: TabelElement[] = [
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Head Of The Office'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Of DDO By Admin.dept In Concurrence With FD'
    },
    { name: undefined, file: undefined, attachment: 'Approved Establishment' },
    {
      name: undefined,
      file: undefined,
      attachment: 'Statement As Per Notification Dated 02/06/2001'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Certificate Regarding Inclusion As a New Item In Budget'
    },
    {
      name: undefined,
      file: undefined,
      attachment:
        'Order Of Distribution Of Employees( in case of split of office)'
    },
    { name: undefined, file: undefined, attachment: 'Supporting Document' }
  ];
  displayedBrowseColumns = [
    'sr_no',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  isFinalPayment = false;
  requestForAccountGeneration = false;
  topSchedule = false;
  isTransferBalanceRegister = false;
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private toastr: ToastrService) { }
  // Form COntrol
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfTcChallanCtrl: FormControl = new FormControl();
  typeOfTcChallanDebitCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoAhmCtrl: FormControl = new FormControl();
  amount1;
  receivedDetailsSupplementaryTransferPayment: FormGroup;
  receivedDetailsSupplementaryPaymentRegister: FormGroup;
  receivedDetailsDebitCreditCorrectionEntry: FormGroup;
  receivedDetailsAgCaFigure: FormGroup;
  receivedDetailsActeMisclassifiedEntry: FormGroup;

  isAgteMisclassifiesEntry = false;
  isAgCaFigure = false;
  isDebitCreditCorrectionEntry = false;

  ngOnInit(): void {
    this.errorMessage = DppfgpfMessage;
    this.gpfInwardDetailsForm = this.fb.group({
      dateInward: new Date(),
      LetterNumber: '',
      letterDate: '',
      typeOfInward: ['', Validators.required],
      grossAmount: '',
      accountHolderName: '',
      gpfNo: '',
      agCaAmountAgteMisclassifiedEntry: '',
      agCaAmountAgCaFigure: '',
      agAccountAmountAgteMisclassifiedEntry: '',
      agAccountAmountAgCaFigure: '',
      tcChallanDebit: '',
      treasuryPaoAhm: '',
      tcAmount: '',
      challanAmount: '',
      tcChallan: '',
      voucherAmount: '',
      employeeNameRequestForAccountGeneration: '',
      employeeNameFinalPayment: '',
      employeeNoRequestForAccountGeneration: '',
      employeeNoFinalPayment: '',
      employeeNoTransferBalance: '',
      employeeNoSupplementaryTransferPayment: '',
      employeeNoSupplementaryPaymentRegister: '',
      gpfNumberSupplementaryPaymentRegister: '',
      gpfNumberSupplementaryTransferPayment: '',
      gpfNumberTransferBalanceRegister: '',
      gpfNumberFinalPaymentType: '',
      employeeClassTopSchedule: '',
      employeeClassAgteMisclassifiedEntry: '',
      employeeClassAgCaFigure: '',
      employeeClassFinalPaymentType: '',
      employeeClassTransferBalanceRegister: '',
      employeeClassSupplementaryTransferPayment: '',
      employeeClassSupplementaryPaymentRegister: '',
      paymentTypeTopSchedule: '',
      paymentTypeAgCaFigure: '',
      paymentTypeTransferBalanceRegister: '',
      paymentTypeSupplementaryTransferPayment: '',
      paymentTypeSupplementaryPaymentRegister: '',
      monthTopSchedule: '',
      monthAgteMisclassifiedEntry: '',
      monthAgCaFigure: '',
      monthTransferBalanceRegister: '',
      monthSupplementaryTransferPayment: '',
      monthSupplementaryPaymentRegister: '',
      yearTopSchedule: '',
      yearAgteMisclassifiedEntry: '',
      yearAgCaFigure: '',
      yearTransferBalanceRegister: '',
      yearSupplementaryTransferPayment: '',
      yearSupplementaryPaymentRegister: ''
    });

    this.receivedDetailsFinalPayment = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsRequestForAccountGeneration = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });
    this.receivedDetailsTopSchedule = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsTransferBalanceRegister = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsSupplementaryTransferPayment = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsSupplementaryPaymentRegister = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsDebitCreditCorrectionEntry = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });

    this.receivedDetailsAgCaFigure = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });
    this.receivedDetailsActeMisclassifiedEntry = this.fb.group({
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      treasuryPaoAhm: ['', Validators.required],
      CardexNumber: '',
      ddoName: '',
      address: '',
      remarks: '',
      contactNo: '',
      mobileNo: '',
    });


  }

  receivedDetailsValueForRequest() {

    this.gpfInwardDetailsForm.patchValue({
      employeeNameRequestForAccountGeneration: 'Raman Kumar Singh'
    });
    this.receivedDetailsRequestForAccountGeneration.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });

  }

  receivedDetailsValue() {
    this.gpfInwardDetailsForm.patchValue({
      gpfNumberFinalPaymentType: 'PW/DAT/5643',
      employeeClassFinalPaymentType: '1',
      employeeNameFinalPayment: 'Raman Kumar Singh'
    });
    this.receivedDetailsFinalPayment.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  receivedDetailsValueTransferRegister() {
    this.gpfInwardDetailsForm.patchValue({
      gpfNumberTransferBalanceRegister: 'PW/DAT/5643',
      employeeClassTransferBalanceRegister: '1',
      paymentTypeTransferBalanceRegister: '2',
      monthTransferBalanceRegister: '7',
      yearTransferBalanceRegister: '1'
    });
    this.receivedDetailsTransferBalanceRegister.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }
  receivedDetailsValueSupplementaryTransferPayment() {
    this.gpfInwardDetailsForm.patchValue({
      gpfNumberSupplementaryTransferPayment: 'PW/DAT/5643',
      employeeClassSupplementaryTransferPayment: '1',
      paymentTypeSupplementaryTransferPayment: '2',
      monthSupplementaryTransferPayment: '7',
      yearSupplementaryTransferPayment: '1'
    });
    this.receivedDetailsSupplementaryTransferPayment.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  receivedDetailsValueSupplementaryPaymentRegister() {
    this.gpfInwardDetailsForm.patchValue({
      gpfNumberSupplementaryPaymentRegister: 'PW/DAT/5643',
      employeeClassSupplementaryPaymentRegister: '1',
      paymentTypeSupplementaryPaymentRegister: '2',
      monthSupplementaryPaymentRegister: '7',
      yearSupplementaryPaymentRegister: '1'
    });
    this.receivedDetailsSupplementaryPaymentRegister.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }
  isFinalPaymentType() {
    if (this.gpfInwardDetailsForm.value.typeOfInward === '6') {
      this.isFinalPayment = true;
    } else {
      this.isFinalPayment = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '2') {
      this.requestForAccountGeneration = true;
    } else {
      this.requestForAccountGeneration = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '7') {
      this.isTransferBalanceRegister = true;
    } else {
      this.isTransferBalanceRegister = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '8') {
      this.isSupplementaryTransferPayment = true;
    } else {
      this.isSupplementaryTransferPayment = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '9') {
      this.isSupplementaryPaymentRegister = true;
    } else {
      this.isSupplementaryPaymentRegister = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '3') {
      this.isDebitCreditCorrectionEntry = true;
    } else {
      this.isDebitCreditCorrectionEntry = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '4') {
      this.isAgCaFigure = true;
    } else {
      this.isAgCaFigure = false;
    }
    if (this.gpfInwardDetailsForm.value.typeOfInward === '5') {
      this.isAgteMisclassifiesEntry = true;
    } else {
      this.isAgteMisclassifiesEntry = false;
    }

  }
  setAmount1(event) {
    this.amount1 = Number(event);
  }

  sum(event) {
    this.gpfInwardDetailsForm.patchValue({ grossAmount: this.amount1 + Number(event) });
  }


  ddoNameGenerator(event) {

    const ddoNam = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    const address = 'Sec- 11,Gandhinagar';

    this.receivedDetailsTopSchedule.patchValue({ ddoName: ddoNam });
    this.receivedDetailsTopSchedule.patchValue({ address: address });

  }

  ddoNameGeneratorDebitCreditCorrectionEntry(event) {

    const ddoNam = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    const address = 'Sec- 11,Gandhinagar';

    this.receivedDetailsDebitCreditCorrectionEntry.patchValue({ ddoName: ddoNam });
    this.receivedDetailsDebitCreditCorrectionEntry.patchValue({ address: address });

  }

  ddoNameGeneratorreceivedDetailsAgCaFigure(event) {

    const ddoNam = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    const address = 'Sec- 11,Gandhinagar';

    this.receivedDetailsAgCaFigure.patchValue({ ddoName: ddoNam });
    this.receivedDetailsAgCaFigure.patchValue({ address: address });

  }

  ddoNameGeneratorreceivedDetailsActeMisclassifiedEntry(event) {

    const ddoNam = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    const address = 'Sec- 11,Gandhinagar';

    this.receivedDetailsActeMisclassifiedEntry.patchValue({ ddoName: ddoNam });
    this.receivedDetailsActeMisclassifiedEntry.patchValue({ address: address });

  }

  inwardDetailsFinalPaymentType() {
    this.gpfInwardDetailsForm.patchValue({
      employeeNoFinalPayment: '1009887632',
      gpfNumberFinalPaymentType: this.gpfInwardDetailsForm.value.gpfNumberFinalPaymentType,
      employeeClassFinalPaymentType: '1',
      employeeNameFinalPayment: 'Raman Kumar Singh'
    });
    this.receivedDetailsFinalPayment.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  inwardDetailsTransferBalanceRegister() {
    this.gpfInwardDetailsForm.patchValue({
      employeeNoTransferBalance: '1009887632',
      gpfNumberTransferBalanceRegister: this.gpfInwardDetailsForm.value.gpfNumberTransferBalanceRegister,
      employeeClassTransferBalanceRegister: '1',
      paymentTypeTransferBalanceRegister: '2',
      monthTransferBalanceRegister: '7',
      yearTransferBalanceRegister: '1'
    });
    this.receivedDetailsTransferBalanceRegister.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  inwardDetailsSupplementaryTransferPayment() {
    this.gpfInwardDetailsForm.patchValue({
      employeeNoSupplementaryTransferPayment: '1009887632',
      gpfNumberSupplementaryTransferPayment: this.gpfInwardDetailsForm.value.gpfNumberSupplementaryTransferPayment,
      employeeClassSupplementaryTransferPayment: '1',
      paymentTypeSupplementaryTransferPayment: '2',
      monthSupplementaryTransferPayment: '7',
      yearSupplementaryTransferPayment: '1'
    });
    this.receivedDetailsSupplementaryTransferPayment.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  inwardDetailsSupplementaryPaymentRegister() {
    this.gpfInwardDetailsForm.patchValue({
      employeeNoSupplementaryPaymentRegister: '1009887632',
      gpfNumberSupplementaryPaymentRegister: this.gpfInwardDetailsForm.value.gpfNumberSupplementaryPaymentRegister,
      employeeClassSupplementaryPaymentRegister: '1',
      paymentTypeSupplementaryPaymentRegister: '2',
      monthSupplementaryPaymentRegister: '7',
      yearSupplementaryPaymentRegister: '1'
    });
    this.receivedDetailsSupplementaryPaymentRegister.patchValue({
      district: '1',
      treasuryPao: '1',
      CardexNumber: '4',
      ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
      address: 'Sec- 11,Gandhinagar',
      contactNo: '9856785645',
      mobileNo: '8945678178',


    });
  }

  openAttachment() {
  }

  getTabIndexMain(tabIndex) {
    this.selectedIndexMain = tabIndex;
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
          attachment: 'Supporting Document'
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
  resetForm() { }

  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

  openGpfDialogSupplementaryPaymentRegister(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfInwardDetailsForm.patchValue({
        gpfNumberSupplementaryPaymentRegister: 'PW/DAT/5643',
      });
    });
  }

  openGpfDialogDebitCreditCorrectionEntry(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfInwardDetailsForm.patchValue({
        gpfNo: 'PW/DAT/5643',
      });
    });
  }




  openGpfDialogSupplementaryTransferPayment(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfInwardDetailsForm.patchValue({
        gpfNumberSupplementaryTransferPayment: 'PW/DAT/5643',
      });
    });
  }


  openGpfDialogTransferBalanceRegister(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfInwardDetailsForm.patchValue({
        gpfNumberTransferBalanceRegister: 'PW/DAT/5643',
      });
    });
  }


  openGpfDialogFinalPaymentType(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {


      this.gpfInwardDetailsForm.patchValue({
        employeeNoFinalPayment: '1009888721',
        gpfNumberFinalPaymentType: 'PW/DAT/5643',
        employeeClassFinalPaymentType: '1',
        employeeNameFinalPayment: 'Raman Kumar Singh'
      });
      this.receivedDetailsFinalPayment.patchValue({
        district: '1',
        treasuryPao: '1',
        CardexNumber: '4',
        ddoName: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
        address: 'Sec- 11,Gandhinagar',
        contactNo: '9856785645',
        mobileNo: '8945678178',


      });
    });
  }

  onSubmit() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AcceptInwardScreenDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }
}

@Component({
  selector: 'app-accept-inward-screen-dialog',
  templateUrl: './accept-inward-screen-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class AcceptInwardScreenDialog implements OnInit {
  acceptDialogForm: FormGroup;
  isYes = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AcceptInwardScreenDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.acceptDialogForm = this.fb.group({

    });
  }

  onNo($event?) {
    this.dialogRef.close();
  }
  onYes() {
    this.isYes = !this.isYes;
  }
  onSubmit($event?) {
    if (this.acceptDialogForm.valid) {
      this.dialogRef.close();
    }
  }
}




@Component({
  selector: 'app-inward-screen-dialog',
  templateUrl: './inward-screen-dialog.html',
  styleUrls: ['./inward-screen.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class InwardScreenDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfDistrictCtrl: FormControl = new FormControl();

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];

  selection = new SelectionModel<HeadDataDeleteGpfYearEndProcess>(true, []);

  Element_Data: HeadDataDeleteGpfYearEndProcess[] = [
    {
      gpfNo: 'PW/DAT/6436',
      firstName: 'Raman',
      middleName: 'Kumar',
      lastName: 'Singh',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'gpfNo',
    'firstName',
    'middleName',
    'lastName',
  ];

  dataSource = new MatTableDataSource<HeadDataDeleteGpfYearEndProcess>(this.Element_Data);


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<InwardScreenDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.accountDetailDialogForm = this.fb.group({
      gpfNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      district: '',
    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }



  resetForm() {
    this.accountDetailDialogForm.reset();
  }


  checkboxLabel(row?: HeadDataDeleteGpfYearEndProcess): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  searchInwardNo() {
    if (this.accountDetailDialogForm.controls.gpfNo.value.length > 0) {
      this.searchVariable = true;
    }
  }

  onSubmit() {
    this.dialogRef.close();
  }

}


