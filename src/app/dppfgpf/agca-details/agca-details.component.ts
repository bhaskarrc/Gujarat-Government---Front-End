import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { AccountGenerationDialog, AddRowAgca } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-agca-details',
  templateUrl: './agca-details.component.html',
  styleUrls: ['./agca-details.component.css']
})
export class AgcaDetailsComponent implements OnInit {

  // Variable
  errorMessage;
  fileData: any;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // List
  classTypeOfCreditDebit: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

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


  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },

  ];

  Element_Data: [AddRowAgca] = [
    {
      codeNo: '1234',
      treasuryName: 'District Treasury Office,Gandhinagar',
      amount: '3456',
      agacAmount: '3432',
      remarks: 'Approved',
    },
  ];

  // Form Group
  public gpfVoucherEntryForm: FormGroup;
  // Form Control
  typeOfCreditDebitCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  // Table Source
  recoveryColumn = ['codeNo', 'treasuryName', 'amount', 'agacAmount', 'remarks', 'action'];
  recoveryDataSource = new MatTableDataSource(this.Element_Data);

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;


    this.gpfVoucherEntryForm = this.fb.group({

      inwardNumber: '',
      dateInward: '',
      month: '',
      year: '',
      agcaAmount: '',
      agacAmount: '',
      creditDebit: '',



    });


  }

  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      codeNo: '',
      treasuryName: '',
      amount: '',
      agacAmount: '',
      remarks: '',

    });
    this.recoveryDataSource.data = push_data;
  }



  workflowDetails(): void {

    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
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
    const dialogRef = this.dialog.open(AgcaDetailsDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      this.gpfVoucherEntryForm.patchValue({
        inwardNumber: '11/02230/3456',
        month: '1',
        year: '6',



      });

      this.gpfVoucherEntryForm.get('dateInward').patchValue(this.formatDate(new Date()));
    });


  }

  enterInwardNo() {
    this.gpfVoucherEntryForm.patchValue({
      inwardNumber: '11/02230/3456',
      month: '1',
      year: '6',
    });

    this.gpfVoucherEntryForm.get('dateInward').patchValue(this.formatDate(new Date()));
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

  totalRecoveryAgac(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach((element) => {
      amount = amount + Number(element.agacAmount);
    });
    return amount;
  }



  addRecovery() {
    const Col_Data = this.recoveryDataSource.data;
    Col_Data.push({
      codeNo: '',
      treasuryName: '',
      amount: '',
      agacAmount: '',
      remarks: '',
    });
    this.recoveryDataSource.data = Col_Data;
  }



  recoveryData() {
    const Col_Data = this.recoveryDataSource.data,
      self = this;
    Col_Data.push({

      codeNo: '',
      treasuryName: '',
      amount: '',
      agacAmount: '',
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

}




@Component({
  selector: 'app-agca-details-dialog',
  templateUrl: './agca-details-dialog.html',
  styleUrls: ['./agca-details.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class AgcaDetailsDialog implements OnInit {
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
    { value: '1', viewValue: '2010' },
    { value: '2', viewValue: '2011' },
    { value: '3', viewValue: '2012' },
    { value: '4', viewValue: '2013' },
    { value: '5', viewValue: '2014' },
    { value: '6', viewValue: '2015' },
    { value: '7', viewValue: '2016' },
    { value: '8', viewValue: '2017' },
    { value: '9', viewValue: '2018' },
    { value: '10', viewValue: '2019' },
    { value: '11', viewValue: '2020' },

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
    public dialogRef: MatDialogRef<AgcaDetailsDialog>,
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


