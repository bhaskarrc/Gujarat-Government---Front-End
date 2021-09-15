import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogData } from 'src/app/model/standing-charge';
import { AddRowAccountTransfer, AccountTransferData, AccountGenerationDialog } from 'src/app/model/dppfgpf';


@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css']
})
export class AccountTransferComponent implements OnInit {
  // VAriable
  errorMessage;
  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  accountTransferForm: FormGroup;
  accountWiseDetailsFormGroup: FormGroup;
  accountTransferVoucherForm: FormGroup;
  // Form COntrol
  typeOfTreasuryPAOCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  typeOfTcChallanCtrl: FormControl = new FormControl();
  typeOfHeadCtrl: FormControl = new FormControl();
  typeOfVoucherNoCtrl: FormControl = new FormControl();
  typeOfTypeCtrl: FormControl = new FormControl();
  typeOfForMonthCtrl: FormControl = new FormControl();
  typeOfForYearCtrl: FormControl = new FormControl();
  typeOfTypeeCtrl: FormControl = new FormControl();

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

  classTypeOfTreasuryPAO: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar ' },

  ];

  classTypeOfCreditCredit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit ' },

  ];
  classTypeOfTcChallan: ListValue[] = [
    { value: '1', viewValue: 'TC ' },
    { value: '2', viewValue: 'Challan ' },
    { value: '3', viewValue: 'Voucher' },

  ];
  classTypeOfHead: ListValue[] = [
    { value: '1', viewValue: '8009' },
    { value: '2', viewValue: 'Head 2 ' },

  ];

  classTypeOfVoucherNo: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },

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
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];
  classTypeOfTypee: ListValue[] = [
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
  Element_Data: [AddRowAccountTransfer] = [
    {
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
      upNo: '54675632',
      remarks: '',
    },
  ];

  // tslint:disable-next-line: max-line-length
  recoveryColumn = ['radioButton', 'gpfNo', 'name', 'subAmount', 'loanAmount', 'other', 'da', 'total', 'forMonth', 'forYear', 'type', 'upNo', 'remarks',
    //  'action'
  ];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);
  daTotal: number;
  subTotal: number;
  loa: number;
  loanAmount: number;
  otherTotalAmount: number;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.accountTransferForm = this.fb.group({
      inwardNumber: '',
      dateInward: '',
      treasuryPao: '',
      year: '',
      month: '',
      groupHead: '',
      creditDebit: '',
      majorHead: '',
      majorHeadAmount: '',
      headAmount: '',
      tcChallan: '',
      head: '',
    });

    this.accountTransferVoucherForm = this.fb.group({
      voucherNo: '',
      voucherAmount: '',
      ddo: '',
    });

    this.accountWiseDetailsFormGroup = this.fb.group({
      type: '',
      fromGpfNo: '',
      from: '',
      gpfNumber: '',
      to: '',
      transferAmount: '',
      remarks: '',
      toGpfNo: '',
    });

  }

  selectVoucherNo() {
    this.accountTransferVoucherForm.patchValue({
      voucherAmount: '140000',
      ddo: 'District Treasury Officer,DISTRICT TREASURY OFFICE Ahmedabad',
    });
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

  recoveryTotal() {
    let total = 0;
    total = this.loanAmount + this.subTotal + this.daTotal + this.otherTotalAmount;
    return total;
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
      upNo: '54675632',
      remarks: '',
    });
    this.recoveryDataSource.data = Col_Data;
  }

  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }
  reset() {
    this.accountTransferForm.reset();
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
      upNo: '54675632',
      remarks: '',

    });
    this.recoveryDataSource.data = push_data;
  }


  openGpfDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AccountWiseEntryTransferDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.accountWiseDetailsFormGroup.patchValue({
        gpfNumber: 'PW/DAT/6436',
        from: 'Pawan Kumar Singh'

      });
    });

  }

  openToGpfDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AccountWiseEntryTransferDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.accountWiseDetailsFormGroup.patchValue({
        toGpfNo: 'PW/DAT/6456',
        to: 'Raman Kumar Singh'

      });
    });

  }

  openGpfTableDialog(element, i) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GpfTableDialog, {
      width: '1200px',
      height: 'auto',

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      const Col_Data = this.recoveryDataSource.data;
      element.gpfNo = result;
      element.name = 'Raman Kumar Singh';
      Col_Data.splice(i, 1, element);
      this.recoveryDataSource.data = Col_Data;

    });

  }


  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AccountTransferInwardDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.accountTransferForm.patchValue({
        inwardNumber: '1234/45/66',
        dateInward: new Date('05/07/2020'),
        treasuryPao: '2',
        year: '1',
        month: '3',
        groupHead: 'DIST TREASURY ACCOUNT',
        creditDebit: '2',
        majorHead: '8009',
        majorHeadAmount: '200000',
        headAmount: '200000',
        tcChallan: '3',
        head: '1',
      });
    });
  }

  enterInwardNo() {
    this.accountTransferForm.patchValue({
      inwardNumber: '1234/45/66',
      dateInward: new Date('05/07/2020'),
      treasuryPao: '2',
      year: '1',
      month: '3',
      groupHead: 'DIST TREASURY ACCOUNT',
      creditDebit: '2',
      majorHead: '8009',
      majorHeadAmount: '200000',
      headAmount: '200000',
      tcChallan: '3',
      head: '1',
    });
  }

  totalAmount(element, i): number {
    let amount = null;
    amount = Number(element.subAmount) + Number(element.loanAmount) + Number(element.other) + Number(element.da);
    return amount;
  }

}



@Component({
  selector: 'app-account-wise-transfer-entry-dialog',
  templateUrl: './account-wise-transfer-entry-dialog.html',
  styleUrls: ['./account-transfer.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class AccountWiseEntryTransferDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
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

  Element_Data: AccountTransferData[] = [
    {
      gpfNo: 'PW/DAT/6436',
      firstName: 'Raman ',
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

  dataSource = new MatTableDataSource<AccountTransferData>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountWiseEntryTransferDialog>,
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

}


@Component({
  selector: 'app-account-transfer-dialog',
  templateUrl: './account-transfer-dialog.html',
  styleUrls: ['./account-transfer.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class AccountTransferInwardDialog implements OnInit {
  maxDate = new Date();
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
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
    public dialogRef: MatDialogRef<AccountTransferInwardDialog>,
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
  selector: 'app-gpf-dialog-table',
  templateUrl: './gpf-dialog-table.html',
  styleUrls: ['./account-transfer.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class GpfTableDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Ahmedabad ' },
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

  Element_Data: AccountTransferData[] = [
    {
      gpfNo: 'PW/DAT/6436',
      firstName: 'Raman ',
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

  dataSource = new MatTableDataSource<AccountTransferData>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountWiseEntryTransferDialog>,
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
