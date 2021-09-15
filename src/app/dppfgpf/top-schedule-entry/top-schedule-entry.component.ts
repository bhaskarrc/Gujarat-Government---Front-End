import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { AccountGenerationDialog, AddRowTopScheduleEntry } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-alert-message-dialog',
  templateUrl: './alert-message-dialog.html',
})
export class AlertMessageDialogComponent {
  isYes = false;
  isDataSame = false;
  constructor(
    public dialogRef: MatDialogRef<AlertMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isDataSame = data;
    if (this.isDataSame) {
      this.isYes = !this.isYes;
    }
  }

  goTo() {

    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-top-schedule-entry',
  templateUrl: './top-schedule-entry.component.html',
  styleUrls: ['./top-schedule-entry.component.css']
})
export class TopScheduleEntryComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Variable
  debitChallan = true;
  totalAmount = null;
  isAmountSame = false;
  // Form Group
  public gpfTopScheduleEntryForm: FormGroup;
  // Form Control
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfTcChallanCtrl: FormControl = new FormControl();
  typeOfTcChallanDebitCtrl: FormControl = new FormControl();
  // Lists
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

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },


  ];

  classTypeOfTcChallan: ListValue[] = [
    { value: '1', viewValue: 'TC ' },
    { value: '2', viewValue: 'Challan' },
    { value: '3', viewValue: 'Gross Amount' },
  ];

  classTypeOfTcChallanDebit: ListValue[] = [
    { value: '1', viewValue: 'Voucher ' },
  ];

  Element_Data: [AddRowTopScheduleEntry] = [
    {
      head: '',
      amount: '',


    },
  ];
  recoveryColumn = ['head', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);

  fileData: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;


    this.gpfTopScheduleEntryForm = this.fb.group({
      inwardNumber: '',
      dateInward: '',
      treasuryPao: '',
      year: '',
      month: '',
      paymentType: '',
      tcAmount: '',
      challanAmount: '',
      voucherAmount: '',
      amount: '',
      tcChallanDebit: '',
      tcChallan: ''
    });
  }

  onSubmit() {

    if ((String(this.totalAmount)) === this.gpfTopScheduleEntryForm.value.voucherAmount) {
      this.isAmountSame = true;
    } else {
      this.isAmountSame = false;
    }
    const dialogRef = this.dialog.open(AlertMessageDialogComponent, {
      width: '750px', data: this.isAmountSame
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  topScheduleEntryDetails() {
    this.gpfTopScheduleEntryForm.patchValue({
      inwardNumber: this.gpfTopScheduleEntryForm.value.inwardNumber,
      dateInward: new Date('05/07/2020'),
      treasuryPao: '1',
      year: '1',
      month: '1',
      paymentType: '2',
      tcChallanDebit: '1',
      voucherAmount: '140000',

    });
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      head: '',
      amount: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  resetForm() {
    this.gpfTopScheduleEntryForm.reset();
  }

  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(TopScheduleDialog, {
      width: '1200px',
      height: 'auto',

    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfTopScheduleEntryForm.patchValue({
        inwardNumber: '11/02230/3456',
        dateInward: new Date('05/07/2020'),
        treasuryPao: '1',
        year: '1',
        month: '1',
        paymentType: '2',
        tcChallanDebit: '1',
        voucherAmount: '140000',

      });

      this.gpfTopScheduleEntryForm.get('dateInward').patchValue(this.formatDate(new Date()));

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
    this.totalAmount = amount;
    return amount;
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      head: '',
      amount: ''
    });
    this.recoveryDataSource.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({

      head: '',
      amount: '',
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

  tcChallanSelection(event) {
    if (event.value === '1') {
      this.debitChallan = false;
    } else {
      this.debitChallan = true;
    }
  }


}







@Component({
  selector: 'app-top-schedule-dialog',
  templateUrl: './top-schedule-dialog.html',
  styleUrls: ['./top-schedule-entry.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class TopScheduleDialog implements OnInit {
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
    public dialogRef: MatDialogRef<TopScheduleDialog>,
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

