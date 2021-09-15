import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { SuccessfulSubmitionComponent } from '../successful-submition/successful-submition.component';
import { AccountGenerationDialog, AddRowVoucherEntry, AddRowChallan } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher-entry.component.html',
  styleUrls: ['./voucher-entry.component.css']
})
export class VoucherEntryComponent implements OnInit {
  // Variable 
  errorMessage;
  selection = new SelectionModel<any>(true, []);
  totalRemainingAmount = null;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  //  Form Gorup 
  public gpfVoucherEntryForm: FormGroup;
  // Form COntrol
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfHeadCtrl: FormControl = new FormControl();
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


  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];

  classTypeOfHead: ListValue[] = [
    { value: '1', viewValue: '8009' },
    { value: '2', viewValue: 'HEAD 2' },

  ];


  Element_Data: [AddRowVoucherEntry] = [
    {
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',



    },
  ];

  Element_Data2: [AddRowChallan] = [
    {
      voucherNo: '',
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',



    },
  ];
  // Table Source
  recoveryColumn = ['voucherNo', 'cardexNo', 'ddo', 'amount', 'select', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);
  recoveryColumnChallan = ['voucherNo', 'challanNo', 'challanAmount', 'remainingAmount', 'amount', 'action'];
  recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);

  fileData: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;


    this.gpfVoucherEntryForm = this.fb.group({

      inwardNumber: '',
      dateInward: '',
      treasuryPao: '',
      year: '',
      month: '',
      paymentType: '',
      tcChallan: '',
      majorHead: '',
      majorHeadAmount: '',
      head: '',
      headamount: '',

    });


  }

  onCheck(event, element, index) {
    if (event.checked) {
      this.Element_Data2.splice(0, 1, {
        voucherNo: element.voucherNo,
        challanNo: '',
        challanAmount: '',
        remainingAmount: '',
        amount: element.amount,
      });
      this.recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);

    } else {
      this.Element_Data2.splice(0, 1, {
        voucherNo: '',
        challanNo: '',
        challanAmount: '',
        remainingAmount: '',
        amount: '',
      });

      this.recoveryDataSourceChallan = new MatTableDataSource(this.Element_Data2);
    }

  }

  calculateRemainingAMount(element): number {

    let remainingAmount = null;

    if (element.amount !== '' && element.challanAmount !== '' && (element.amount >= element.challanAmount)) {

      remainingAmount = Number(element.amount) - Number(element.challanAmount);
    }

    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach(() => {
      amount = amount + remainingAmount;
    });
    this.totalRemainingAmount = amount;
    return remainingAmount;
  }
  enterDdoName(element, index) {
    this.Element_Data[index].ddo = 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad';
    this.recoveryDataSource = new MatTableDataSource(this.Element_Data);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.recoveryDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.recoveryDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  addRecoveryDetailRowChallan() {
    const push_data = this.recoveryDataSourceChallan.data;
    push_data.push({
      voucherNo: '',
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',

    });
    this.recoveryDataSourceChallan.data = push_data;
  }


  workflowDetails() {
    const dialogRef = this.dialog.open(SuccessfulSubmitionComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  resetForm() {
    this.gpfVoucherEntryForm.reset();
  }

  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(VoucherEntryDialog, {
      width: '1200px',
      height: 'auto',

    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfVoucherEntryForm.patchValue({

        inwardNumber: '11/02230/3456',
        dateInward: new Date('05/07/2020'),
        treasuryPao: 'District Treasury Office, Gandhinagar',
        year: '1',
        month: '1',
        paymentType: '2',
        tcChallan: 'Voucher',
        majorHead: '8009',
        majorHeadAmount: '200000',
        head: '1',
        headamount: '200000',
        groupHead: 'DIST TREASURY ACCOUNT',

      });
    });


  }

  enterInwardNo() {
    this.gpfVoucherEntryForm.patchValue({

      inwardNumber: '11/02230/3456',
      dateInward: new Date('05/07/2020'),
      treasuryPao: 'District Treasury Office, Gandhinagar',
      year: '1',
      month: '1',
      paymentType: '2',
      tcChallan: 'Voucher',
      majorHead: '8009',
      majorHeadAmount: '200000',
      head: '1',
      headamount: '200000',
      groupHead: 'DIST TREASURY ACCOUNT',

    });

  }
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    // tslint:disable-next-line: curly
    if (month.length < 2) month = '0' + month;
    // tslint:disable-next-line: curly
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  totalRecovery(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  totalRecoveryChallan(): number {
    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach((element) => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  totalRemainingAmountValue(): number {
    return this.totalRemainingAmount;
  }


  totalChallanAmount(): number {
    let amount = 0;
    this.recoveryDataSourceChallan.data.forEach((element) => {
      amount = amount + Number(element.challanAmount);
    });
    return amount;
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',
    });
    this.recoveryDataSource.data = Col_Data;
  }

  addRecoveryChallan() {
    const Col_Data = this.recoveryDataSourceChallan.data;
    Col_Data.push({
      voucherNo: '',
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',
    });
    this.recoveryDataSourceChallan.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({

      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }

  recoveryDataChallan() {
    const Col_Data = this.recoveryDataSourceChallan.data,
      self = this;
    Col_Data.push({

      voucherNo: '',
      challanNo: '',
      challanAmount: '',
      remainingAmount: '',
      amount: '',
    });
    Col_Data.splice(this.recoveryDataSourceChallan.data.length - 2, 1);
    this.recoveryDataSourceChallan.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }


  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  deleteRowRecoveryChallan(index) {
    this.recoveryDataSourceChallan.data.splice(index, 1);
    this.recoveryDataSourceChallan = new MatTableDataSource(
      this.recoveryDataSourceChallan.data
    );
  }



}





@Component({
  selector: 'app-voucher-entry-dialog',
  templateUrl: './voucher-entry-dialog.html',
  styleUrls: ['./voucher-entry.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class VoucherEntryDialog {
  maxDate = new Date();
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

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
    public dialogRef: MatDialogRef<VoucherEntryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // tslint:disable-next-line: use-life-cycle-interface
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

