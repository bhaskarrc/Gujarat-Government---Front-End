import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { SuccessfulSubmitionComponent } from '../successful-submition/successful-submition.component';
import { AddRowAccountWiseEntry, AccountWiseEntryDialog1, AccountGenerationDialog } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-account-wise-entry',
  templateUrl: './account-wise-entry.component.html',
  styleUrls: ['./account-wise-entry.component.css']
})

export class AccountWiseEntryComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();

  selected = new Date().getMonth() - 1;
  // Variable
  errorMessage;

  daTotal: number;
  subTotal: number;
  loa: number;
  loanAmount: number;
  otherTotalAmount: number;
  togggeButton = false;
  // Form Group
  public gpfAccountWiseEntryForm: FormGroup;
  public gpfAccountWiseGpfEntryForm: FormGroup;
  // Form Control

  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfHeadCtrl: FormControl = new FormControl();
  typeOfVoucherCtrl: FormControl = new FormControl();
  gpfNoTypeCodeCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfTcChallanCtrl: FormControl = new FormControl();
  typeOfForMonthCtrl: FormControl = new FormControl();
  typeOfForYearCtrl: FormControl = new FormControl();
  typeOfTypeCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];
  classTypeOfMonth: ListValue[] = [
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


  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];

  classTypeOfHead: ListValue[] = [
    { value: '1', viewValue: '8009' },
    { value: '2', viewValue: 'HEAD 2' },

  ];

  classTypeOfVoucher: ListValue[] = [
    { value: '1', viewValue: '1 ' },
    { value: '2', viewValue: '2' },

  ];

  gpfNoTypeCode: ListValue[] = [
    { value: '1', viewValue: 'PW/DAT/7654 ' },
    { value: '2', viewValue: 'PW/DAT/4532' },


  ];

  classTypeOfTreasuryPAO: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office, Ahmedabad ' },


  ];
  classTypeOfTcChallan: ListValue[] = [
    { value: '1', viewValue: 'TC ' },
    { value: '2', viewValue: ' Challan' },
    { value: '3', viewValue: ' Gross Amount' },
    { value: '4', viewValue: ' Voucher' },

  ];

  classTypeOfForMonth: ListValue[] = [
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


  classTypeOfForYear: ListValue[] = [
    { value: '2020', viewValue: '2020 ' },
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023 ' },
    { value: '2024', viewValue: '2024' },
    { value: '2025', viewValue: '2025' },

  ];
  classTypeOfType: ListValue[] = [
    { value: '1', viewValue: 'DENT' },
    { value: '2', viewValue: 'USUP' },
    { value: '3', viewValue: 'HBAUP' },
    { value: '4', viewValue: 'MCAUP' },
    { value: '5', viewValue: 'GPFUP' },
    { value: '6', viewValue: 'TR' },
    { value: '7', viewValue: 'NPUP' },
    { value: '8', viewValue: 'UPEMP' },
    { value: '9', viewValue: 'LITE' },
    { value: '10', viewValue: 'UPRJK' },
    { value: '11', viewValue: 'UP' },

  ];

  Element_Data: [AddRowAccountWiseEntry] = [
    {
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: this.classTypeOfForMonth[new Date().getMonth() - 1].viewValue,
      forYear: '2020',
      type: '',
      upNo: '',
      remarks: '',



    },
  ];



  // tslint:disable-next-line: max-line-length
  recoveryColumn = ['gpfNo', 'name', 'subAmount', 'loanAmount', 'other', 'da', 'total', 'forMonth', 'forYear', 'type', 'upNo', 'remarks', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);
  fileData: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.gpfAccountWiseEntryForm = this.fb.group({

      inwardNumber: '',
      dateInward: '',
      treasuryPao: '',
      year: '',
      month: '',
      paymentType: '',
      tcChallan: '',
      majorHead: ['', { disable: false }],
      majorHeadAmount: '',
      head: '',
      headamount: '',
      groupHead: '',
      voucherAmount: '',
      voucherNo: '',
      ddo: '',
      gpfNo: '',

    });

    this.gpfAccountWiseGpfEntryForm = this.fb.group({
      gpfNo: '',
    });

  }

  findCurrentMonth() {
    const month = String(new Date().getMonth() - 1);

    for (let i = 0; i < this.classTypeOfForMonth.length; i++) {
      if (this.classTypeOfForMonth[i].value === month) {
        this.Element_Data[0].forMonth = this.classTypeOfForMonth[i].value;
        this.recoveryDataSource = new MatTableDataSource(this.Element_Data);
      }
    }
  }

  selectVoucher() {
    this.gpfAccountWiseEntryForm.patchValue({
      voucherAmount: '140000',
      ddo: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
    });
  }
  workflowDetails(): void {
    const dialogRef = this.dialog.open(SuccessfulSubmitionComponent, {
      width: '500px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      type: '',
      upNo: '',
      remarks: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  resetForm() {
    this.gpfAccountWiseEntryForm.reset();
  }

  openGpfDialogg(item, i) {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GpfDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      const Col_Data = this.recoveryDataSource.data;
      item.gpfNo = result;
      item.name = 'Raman Kumar Singh';
      Col_Data.splice(i, 1, item);
      this.recoveryDataSource.data = Col_Data;

    });


  }

  enterName(element, index) {
    const Col_Data = this.recoveryDataSource.data;
    element.gpfNo = element.gpfNo;
    element.name = 'Raman Kumar Singh';
    element.forYear = '2020',
      element.forMonth = 'June',
      Col_Data.splice(index, 1, element);
    this.recoveryDataSource.data = Col_Data;

  }

  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AccountWiseEntryDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.togggeButton = true;
      this.gpfAccountWiseEntryForm.patchValue({
        inwardNumber: '11/02230/3456',
        dateInward: new Date('05/07/2020'),
        treasuryPao: '1',
        year: '1',
        month: '1',
        paymentType: '2',
        tcChallan: '4',
        majorHead: '8009',
        majorHeadAmount: '200000',
        head: '1',
        headamount: '200000',
        groupHead: 'DIST TREASURY ACCOUNT',
      });
    });


  }

  enterAccountWiseEntryDetails() {
    this.togggeButton = true;
    this.gpfAccountWiseEntryForm.patchValue({
      inwardNumber: this.gpfAccountWiseEntryForm.value.inwardNumber,
      dateInward: new Date('05/07/2020'),
      treasuryPao: '1',
      year: '1',
      month: '1',
      paymentType: '2',
      tcChallan: '4',
      majorHead: '8009',
      majorHeadAmount: '200000',
      head: '1',
      headamount: '200000',
      groupHead: 'DIST TREASURY ACCOUNT',
    });
  }

  recoveryTotal() {
    let total = 0;
    total = this.loanAmount + this.subTotal + this.daTotal + this.otherTotalAmount;

    return total;


  }


  totalRecoveryy(): number {

    let da = 0;
    this.recoveryDataSource.data.forEach((element) => {
      da = da + Number(element.da);
    });
    this.daTotal = da;
    return da;
  }

  totalRecoverySub(): number {
    let sub = 0;
    this.recoveryDataSource.data.forEach((element) => {
      sub = sub + Number(element.subAmount);
    });
    this.subTotal = sub;
    return sub;

  }

  totalRecoveryLoan(): number {

    let loan = 0;
    this.recoveryDataSource.data.forEach((element) => {
      loan = loan + Number(element.loanAmount);
    });
    this.loanAmount = loan;
    return loan;

  }

  otherTotal(): number {

    let ot = 0;
    this.recoveryDataSource.data.forEach((element) => {
      ot = ot + Number(element.other);
    });
    this.otherTotalAmount = ot;
    return ot;

  }

  totalamt() {
    let amttot = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amttot = amttot + Number(element.subAmount);
    });
    return amttot;
  }

  totalAmount(element, i): number {
    let amount = null;
    amount = Number(element.subAmount) + Number(element.loanAmount) + Number(element.other) + Number(element.da);
    return amount;
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      type: '',
      upNo: '',
      remarks: '',
    });
    this.recoveryDataSource.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      type: '',
      upNo: '',
      remarks: '',
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }

  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  selectionType(event, i) {
    if (event.value === '2') {
      this.Element_Data[i].upNo = '2345';
      this.recoveryDataSource = new MatTableDataSource(this.Element_Data);
    }
  }
}






@Component({
  selector: 'app-account-wise-entry-dialog',
  templateUrl: './account-wise-entry-dialog.html',
  styleUrls: ['./account-wise-entry.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class AccountWiseEntryDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  maxDate = new Date();
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },


  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];


  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: 'Class 4/DW/WC' },
    { value: '3', viewValue: 'Final Payment Register' },
    { value: '4', viewValue: 'Transfer Balance' },
    { value: '5', viewValue: ' Supplementary Payment Transfer' },
    { value: '6', viewValue: 'AGCA ' },
    { value: '7', viewValue: 'AGTA Misclassified Entry' },

  ];

  classTypeOfMonth: ListValue[] = [
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
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];
  selection = new SelectionModel<AccountGenerationDialog>(true, []);

  Element_Data: AccountGenerationDialog[] = [
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      typeOfInward: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPao: 'Raman Singh',
      year: '2020',
      month: 'January',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'typeOfInward',
    'district',
    'treasuryPao',
    'year',
    'month',

  ];

  dataSource = new MatTableDataSource<AccountGenerationDialog>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountWiseEntryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.accountDetailDialogForm = this.fb.group({
      inwardNumber: '',
      inwardDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      month: '',

    });


  }



  okClick($event?) {
    this.dialogRef.close();
  }



  resetForm() {
    this.accountDetailDialogForm.reset();
  }

  checkboxLabel(row?: AccountGenerationDialog): string {
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
    if (this.accountDetailDialogForm.controls.inwardNumber.value.length > 0) {
      this.searchVariable = true;
    }
  }

}



@Component({
  selector: 'app-gpf-dialog',
  templateUrl: './gpf-dialog.html',
  styleUrls: ['./account-wise-entry.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class GpfDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfDistrictCtrl: FormControl = new FormControl();

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },
  ];

  selection = new SelectionModel<AccountGenerationDialog>(true, []);
  Element_Data: AccountWiseEntryDialog1[] = [
    {
      gpfNo: 'PW/DAT/6436',
      firstName: 'Raman ',
      middleName: 'Kumar',
      lastName: 'Singh'
    },
  ];
  displayedColumns: any[] = [
    'select',
    'gpfNo',
    'firstName',
    'middleName',
    'lastName',
  ];
  dataSource = new MatTableDataSource<AccountWiseEntryDialog1>(this.Element_Data);
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GpfDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  ngOnInit() {
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
  checkboxLabel(row?: AccountGenerationDialog): string {
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

  createGpfNo($event) {
    const data = 'PW/DAT/13456';
    this.dialogRef.close(data);

  }
}



