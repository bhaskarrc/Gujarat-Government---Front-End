import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { AddRowMissingAccountWiseEntry, HeadDataDeleteGpfYearEndProcess } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-missing-account-wise-entry',
  templateUrl: './missing-account-wise-entry.component.html',
  styleUrls: ['./missing-account-wise-entry.component.css']
})
export class MissingAccountWiseEntryComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();

  public gpfMissingAccountWiseEntryForm: FormGroup;
  // Form Control
  yearTypeCodeCtrl: FormControl = new FormControl();
  monthTypeCodeCtrl: FormControl = new FormControl();
  creditDebitTypeCodeCtrl: FormControl = new FormControl();
  forMonthTypeCodeCtrl: FormControl = new FormControl();
  forYearTypeCodeCtrl: FormControl = new FormControl();
  // List
  monthTypeCode: ListValue[] = [
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
  forMonthTypeCode: ListValue[] = [
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


  yearTypeCode: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];
  forYearTypeCode: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];

  creditDebitTypeCode: ListValue[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' },
  ];
  // Table Source
  Element_Data: [AddRowMissingAccountWiseEntry] = [
    {
      month: '',
      year: '',
      creditDebit: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
    },
  ];

  recoveryColumn = ['month', 'year', 'creditDebit', 'subAmount', 'loanAmount', 'other', 'da', 'total', 'forMonth', 'forYear', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);
  fileData: any;

  constructor(private fb: FormBuilder, private el: ElementRef, private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.gpfMissingAccountWiseEntryForm = this.fb.group({
      gpfNumber: '',
      shortName: '',
      firstName: '',
      middleName: '',
      lastName: '',
    });
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      month: '',
      year: '',
      creditDebit: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  resetForm() {
    this.gpfMissingAccountWiseEntryForm.reset();
  }

  openGpfDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(MissingAccountWiseEntryDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfMissingAccountWiseEntryForm.patchValue({
        gpfNumber: '11/02230/3456',
        shortName: 'Raj',
        firstName: 'Rajesh',
        middleName: 'Srinivas',
        lastName: 'Iyer',

      });
    });
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      month: '',
      year: '',
      creditDebit: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',

    });
    this.recoveryDataSource.data = Col_Data;
  }

  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({

      month: '',
      year: '',
      creditDebit: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
    });
    Col_Data.splice(this.recoveryDataSource.data.length - 2, 1);
    this.recoveryDataSource.data = Col_Data;
    setTimeout(() => { document.getElementById('amount-' + Col_Data.length).focus(); }, 0);
  }


  totalRecoveryy(): number {
    let da = 0;
    this.recoveryDataSource.data.forEach((element) => {
      da = da + Number(element.da);
    });
    return da;
  }

  recoveryTotal() {
    let total = 0;
    this.recoveryDataSource.data.forEach((element) => {
      total = total + Number(element.total);
    });
    return total;
  }

  totalRecoverySub(): number {
    let sub = 0;
    this.recoveryDataSource.data.forEach((element) => {
      sub = sub + Number(element.subAmount);
    });
    return sub;
  }

  totalRecoveryLoan(): number {
    let loan = 0;
    this.recoveryDataSource.data.forEach((element) => {
      loan = loan + Number(element.loanAmount);
    });
    return loan;
  }

  otherTotal(): number {
    let ot = 0;
    this.recoveryDataSource.data.forEach((element) => {
      ot = ot + Number(element.other);
    });
    return ot;
  }

  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }
}

@Component({
  selector: 'app-missing-account-wise-dialog',
  templateUrl: './missing-account-wise-dialog.html',
  styleUrls: ['./missing-account-wise-entry.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class MissingAccountWiseEntryDialog implements OnInit {
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

  dataSource = new MatTableDataSource<HeadDataDeleteGpfYearEndProcess>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MissingAccountWiseEntryDialog>,
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

}





