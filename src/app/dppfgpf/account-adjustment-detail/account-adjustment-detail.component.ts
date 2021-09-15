import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogData } from 'src/app/model/standing-charge';
import { SuccessfulSubmitionComponent } from '../successful-submition/successful-submition.component';
import { AddRow, AccountGenerationData, AccountGenerationDialog } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-account-adjustment-detail',
  templateUrl: './account-adjustment-detail.component.html',
  styleUrls: ['./account-adjustment-detail.component.css']
})
export class AccountAdjustmentDetailComponent implements OnInit {
  // Variable
  errorMessage;
  index = null;
  upNo = null;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  accountAdjustmentDetailForm: FormGroup;
  // Form OCntrol
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfEmpClassCtrl: FormControl = new FormControl();
  upNoTypeCodeCtrl: FormControl = new FormControl();
  forMonthTypeCodeCtrl: FormControl = new FormControl();
  forYearTypeCodeCtrl: FormControl = new FormControl();
  gpfCtrl: FormControl = new FormControl();
  // List
  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: ' Ahmedabad' },
    { value: '2', viewValue: 'Mahisagar' },
    { value: '3', viewValue: 'Panchmahal' },
    { value: '4', viewValue: 'Vadodara' },


  ];
  classTypeOfTreasury: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad ' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },

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

  classTypeOfEmpClass: ListValue[] = [
    { value: '1', viewValue: 'Class 4' },
    { value: '2', viewValue: 'DW' },
    { value: '3', viewValue: 'WC' },
  ];

  upNoTypeCode: ListValue[] = [
    { value: '0', viewValue: 'UP/00282/2/2020' },
    { value: '1', viewValue: 'UP/00272/2/2020' },
    { value: '2', viewValue: 'UP/00572/2/2020' },

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


  forYearTypeCode: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];



  Element_Data: [AddRow] = [
    {
      upNo: this.upNo,
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      remarks: '',


    },
  ];

  // Table Source
  recoveryColumn = ['upNo', 'gpfNo', 'name', 'subAmount', 'loanAmount', 'other', 'da', 'total', 'forMonth', 'forYear', 'remarks', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);

  // tslint:disable-next-line: max-line-length
  recoveryColumnn = ['select', 'yearTab', 'monthTab', 'creditDebit', 'head', 'voucherNo', 'upNo', 'amount', 'clearedAmount', 'remarks'];
  recoveryDataSourcee = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.accountAdjustmentDetailForm = this.fb.group({

      district: '',
      treasury: '',
      year: '',
      month: '',
      empClass: '',
    });
  }

  deleteRowRecovery(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      upNo: this.upNo,
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      remarks: '',

    });
    this.recoveryDataSource.data = Col_Data;
  }

  totalAmount(element, i): number {
    let amount = null;
    amount = Number(element.subAmount) + Number(element.loanAmount) + Number(element.other) + Number(element.da);
    return amount;
  }

  addRecoveryTab() {
    if (
      this.accountAdjustmentDetailForm.controls.district.value !== '' &&
      this.accountAdjustmentDetailForm.controls.treasury.value !== '' &&
      this.accountAdjustmentDetailForm.controls.year.value !== '' &&
      this.accountAdjustmentDetailForm.controls.month.value !== '' &&
      this.accountAdjustmentDetailForm.controls.empClass.value !== ''
    ) {
      const Col_Dataa = this.recoveryDataSourcee.data;
      Col_Dataa.push({
        yearTab: '2020',
        monthTab: 'January',
        creditDebit: 'Credit',
        head: '2059',
        voucherNo: '44',
        upNo: 'UP/00282/2/2020',
        amount: '10000',
        clearedAmount: '0',
        remarks: 'pw/dat/590 9 p j'

      });
      Col_Dataa.push({
        yearTab: '2020',
        monthTab: 'January',
        creditDebit: 'Credit',
        head: '2210',
        voucherNo: '144',
        upNo: 'UP/00272/2/2020',
        amount: '10000',
        clearedAmount: '0',
        remarks: 'wanting schedule'

      });
      Col_Dataa.push({
        yearTab: '2118',
        monthTab: 'January',
        creditDebit: 'Credit',
        head: '2059',
        voucherNo: '424',
        upNo: 'UP/00572/2/2020',
        amount: '10000',
        clearedAmount: '0',
        remarks: 'wanting'

      });
      this.recoveryDataSourcee.data = Col_Dataa;
    }

  }
  // checkbox
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.recoveryDataSourcee.data.forEach(row =>
        this.selection.select(row)
      );
  }
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.recoveryDataSource.data.length;
    return numSelected === numRows;
  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      upNo: '',
      gpfNo: '',
      name: '',
      subAmount: '',
      loanAmount: '',
      other: '',
      da: '',
      total: '',
      forMonth: '',
      forYear: '',
      remarks: '',

    });
    this.recoveryDataSource.data = push_data;
  }

  openInwardDialog(item, i) {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AccountAdjustmentDialog, {
      width: '1200px',
      height: 'auto',

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      const Col_Data = this.recoveryDataSource.data;
      item.gpfNo = result;
      item.name = 'Raman Kumar Singh';
      Col_Data.splice(i, 1, item
      );
      this.recoveryDataSource.data = Col_Data;

    });
  }

  resetForm() { }

  workflowDetails(): void {
    const dialogRef = this.dialog.open(SuccessfulSubmitionComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectedRow(event, index) {
    if (event.checked) {
      this.index = index;
      const upNumberValue = this.recoveryDataSourcee.data[index].upNo;
      for (let i = 0; i < this.upNoTypeCode.length; i++) {
        if (this.upNoTypeCode[i].viewValue === upNumberValue) {
          this.upNo = i;
        }
      }
      this.Element_Data.splice(0, 1, {
        upNo: this.upNoTypeCode[this.upNo].value,
        gpfNo: '',
        name: '',
        subAmount: '',
        loanAmount: '',
        other: '',
        da: '',
        total: '',
        forMonth: '',
        forYear: '',
        remarks: '',
      });

      this.recoveryDataSource = new MatTableDataSource<any>(this.Element_Data);
    } else {
      this.Element_Data.splice(0, 1, {
        upNo: '',
        gpfNo: '',
        name: '',
        subAmount: '',
        loanAmount: '',
        other: '',
        da: '',
        total: '',
        forMonth: '',
        forYear: '',
        remarks: '',
      });

      this.recoveryDataSource = new MatTableDataSource<any>(this.Element_Data);
    }
  }

}




@Component({
  selector: 'app-account-adjustment-dialog',
  templateUrl: './account-adjustment-dialog.html',
  styleUrls: ['./account-adjustment-detail.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class AccountAdjustmentDialog implements OnInit {
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
  Element_Data: AccountGenerationData[] = [
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
  dataSource = new MatTableDataSource<AccountGenerationData>(this.Element_Data);
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AccountAdjustmentDialog>,
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
