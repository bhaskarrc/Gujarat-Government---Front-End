import { CommonListing } from 'src/app/model/common-listing';
import { AccountTransferHbaAccountWiseDetails, TransferHistory } from './../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { AccountWiseHbaComponent } from '../account-entry-wise/account-wise-hba/account-wise-hba.component';
const ELEMENT_Details: AccountTransferHbaAccountWiseDetails[] = [
  {
    inwardNo: '	TSC/9/2020/1111 ',
    head: ' 2014',
    voucher: ' 1',
    principleRecoveryAmount: ' 5000.0000',
    interestRecoveryAmount: '0.0000',
  },

];
@Component({
  selector: 'app-account-transfer-hba',
  templateUrl: './account-transfer-hba.component.html',
  styleUrls: ['./account-transfer-hba.component.css']
})
export class AccountTransferHbaComponent implements OnInit {
  // Form Control
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  oldCtrl: FormControl = new FormControl();
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // variables
  showNameVal = false;
  name = 'Ramprasad Patil';
  showTable = false;
  isSubmitted = false;
  showTransferDetails = false;
  errorMessage;
  // Form Group
  accountTransferForm: FormGroup;
  // Table Source
  displayedColumns: string[] = [
    'select',
    'inwardNo',
    'head',
    'voucher',
    'principleRecoveryAmount',
    'interestRecoveryAmount',
    'action'
  ];

  // Table Data for Transfer History
  TransferHistryData: TransferHistory[] = [
    {
      inwardNo: 'TSC/9/2020/1111', head: '2054', voucher: '15', transferredAmount: '500',
      accountHolderName: 'P M ATODARIYA', toAccountNo: '1690520',
    },
    {
      inwardNo: 'TSC/9/2020/1138', head: '2071', voucher: '5', transferredAmount: '1000',
      accountHolderName: 'P M ATODARIYA', toAccountNo: '1690520',
    }
  ];

  // Table Data Columns for Transfer History Column
  TransferHistryDataColumn: string[] = [
    'srno', 'inwardNo', 'head', 'voucher', 'transferredAmount', 'accountHolderName', 'toAccountNo'
  ];

  dataSource = new MatTableDataSource<AccountTransferHbaAccountWiseDetails>(ELEMENT_Details);
  TransferHistryDataSource = new MatTableDataSource<TransferHistory>(this.TransferHistryData);
  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // Lists
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'New(From 2004) ' },
    { value: '2', viewValue: 'Old(Before 2004)  ' },
  ];
  year_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: CommonListing[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  ngOnInit() {
    this.accountTransferData();
    this.errorMessage = dppfHbaMessage;
  }
  accountTransferData() {
    this.accountTransferForm = this.fb.group({
      hbaNo: [''],
      name: [''],
      month: [''],
      year: [''],
      status: [''],
      amount: ['']
    });
  }

  // showName() {
  //   if (this.accountTransferForm.controls['hbaNo'].value !== '') {
  //     this.showNameVal = true;
  //   }
  // }

  // Checkbox methods
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: any): string {
    if (this.selection.isSelected(row)) {
      this.showTransferDetails = true;
    } else {
      this.showTransferDetails = false;
    }

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;

    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

  // Navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-transfer-listing']);
  }

  viewUpDetails() {
    if (this.accountTransferForm.controls['year'].value !== '' && this.accountTransferForm.controls['month'].value !== '' &&
      this.accountTransferForm.controls['hbaNo'].value !== '') {
      this.showTable = true;
    } else {
      this.isSubmitted = true;
    }
  }

  // open dialog AccountWiseHbaComponent
  hbaMca() {
    const dialogRef = this.dialog.open(AccountWiseHbaComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.accountTransferForm.patchValue({
        hbaNo: '',
        name: 'Ravi Patel'
      });
      console.log('The dialog was closed');
    });
  }
}
