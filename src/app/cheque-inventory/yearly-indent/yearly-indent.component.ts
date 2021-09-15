import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource, MatDialogRef } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ChequeRequestDetails, ChequeDetails } from 'src/app/model/yearly-indent';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { YearlyIndent } from 'src/app/model/cheque-inventory';
import { ChequeInventoryDirective } from 'src/app/common/directive/cheque-inventory';
import { WorkflowDetailsCiComponent } from '../workflow-details-ci/workflow-details-ci.component';
@Component({
  selector: 'app-success-message-dialog',
  templateUrl: 'success-message-dialog.html',
})

export class SuccessMessageDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessMessageDialogComponent>) { }
  // closes dialog
  cancel(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-yearly-indent',
  templateUrl: './yearly-indent.component.html',
  styleUrls: ['./yearly-indent.component.css']
})
export class YearlyIndentComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private fb: FormBuilder, private router: Router) { }
  // variables
  errorMessages = ciMessage;
  directiveObj = new CommonDirective(this.router);
  todayDate = Date.now();
  public isWorkflowClosed = false;
  yearlyIndentPreparation: FormGroup;
  ciDirectiveObj = new ChequeInventoryDirective(this.dialogRef);

  // form controls
  accountHolderNameTypeCtrl: FormControl = new FormControl();
  chequeFormatTypeCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();
  indentPreparedByCtrl: FormControl = new FormControl();
  indentPreparedToCtrl: FormControl = new FormControl();
  // lists
  indentPreparedBy_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury' },
    { value: '2', viewValue: 'Sub Treasury' }
  ];

  indentPreparedTo_list: ListValue[] = [
    { value: '1', viewValue: 'DAT' },
    { value: '2', viewValue: 'Self' },
    { value: '3', viewValue: 'Others' }
  ];

  // accountHolderNameType list
  accountHolderNameType_list: CommonListing[] = [
    { value: '1', viewValue: 'A B Patel' },
    { value: '2', viewValue: 'C D Patel' },
    { value: '3', viewValue: 'E F Patel' }
  ];

  // chequeFormatType list
  chequeFormatType_list: CommonListing[] = [
    { value: '1', viewValue: 'Cheque Book' },
    { value: '2', viewValue: 'Continuous Roll' }
  ];

  // chequeType list
  chequeType_list: CommonListing[] = [
    { value: '1', viewValue: 'CTS 2019' },
    { value: '2', viewValue: 'CTS 2020' }
  ];
  // table data
  Element_Data: YearlyIndent[] = [
    {
      department: 'Agriculture Department', chequeFormat: '1', chequeLeaves: '50', quantity: '22', chequeType: 'CTS 2019',
      treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016',
      contactNo: '9874562130',
      emailId: '',
      edit: true
    },
    {
      department: 'Tribal Department', chequeFormat: '2', chequeLeaves: '100', quantity: '10', chequeType: 'CTS 2020',
      treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016',
      contactNo: '9587461230',
      emailId: ' ',
      edit: true
    }
  ];
  dataSource = new MatTableDataSource<YearlyIndent>(this.Element_Data);
  columns: string[] = ['select', 'position', 'department', 'chequeFormat', 'chequeLeaves',
    'quantity', 'chequeType', 'treasuryOfficerName', 'districtTreasuryAddress', 'contactNo', 'emailId', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // table ChequeRequestDetails data
  Element_Data_1: ChequeRequestDetails[] = [
    { department: 'Agriculture Department', chequeFormat: '1', chequeLeaves: '50', quantity: '22' },
    { department: 'Tribal Department', chequeFormat: '2', chequeLeaves: '100', quantity: '10' },
    { department: 'Education Department', chequeFormat: '1', chequeLeaves: '100', quantity: '15' }
  ];
  chequeRequestDetailsDataSource = new MatTableDataSource<ChequeRequestDetails>(this.Element_Data_1);
  chequeRequestDetailsDisplayedColumns = [
    'position', 'department', 'chequeFormat', 'chequeLeaves', 'quantity'
  ];

  // table ChequeDetails data
  Element_Data_2: ChequeDetails[] = [
    {
      chequeType: 'CTS 2019',
      treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016',
      contactNo: '9874562130',
      emailId: '',
      edit: true
    },
    {
      chequeType: 'CTS 2020',
      treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016',
      contactNo: '9587461230',
      emailId: ' ',
      edit: true
    }
  ];

  chequeDetailsDataSource = new MatTableDataSource<ChequeDetails>(this.Element_Data_2);
  chequeDetailsDisplayedColumns = [
    'position', 'chequeType', 'treasuryOfficerName', 'districtTreasuryAddress', 'contactNo', 'emailId', 'action'
  ];

  @ViewChild(MatSort) chequeRequestSort: MatSort;
  @ViewChild(MatPaginator) chequeRequestPaginator: MatPaginator;

  @ViewChild(MatSort) chequeDetailsSort: MatSort;
  @ViewChild('chequeDetailsPaginator', { read: MatPaginator }) chequeDetailsPaginator: MatPaginator;

  ngOnInit() {
    this.yearlyIndentPreparation = this.fb.group({
      indentDate: new Date(),
      bankBranch: [''],
      treasury: [''],
      accountHolderName: [''],
      accountNo: [''],
      accountType: [''],
      otherDetails: [''],
      sNo: ['1'],
      department: [''],
      chequeFormat: [''],
      chequeLeaves: [''],
      quantity: [''],
      chequeType: ['1'],
      treasuryOfficer: ['Treasury Officer, Gandhinagar'],
      treasuryAddress: ['Ground Floor, Block D, M. S. Building, Gandhinagar - 382016'],
      contactNo: [''],
      emailId: [''],
      indentPreparedBy: [''],
      indentPreparedTo: ['']
    });
    this.chequeRequestDetailsDataSource.sort = this.chequeRequestSort;
    this.chequeRequestDetailsDataSource.paginator = this.chequeRequestPaginator;

    this.chequeDetailsDataSource.sort = this.chequeDetailsSort;
    this.chequeDetailsDataSource.paginator = this.chequeDetailsPaginator;

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // to open SuccessMessageDialogComponent dialog instead of workflow
  openPopUp() {

    const dialogRef = this.dialogRef.open(WorkflowDetailsCiComponent, {
      width: '1200px',
      data: 'yearly-indent'
    });

    dialogRef.afterClosed().subscribe(result => {
      const dialogRef1 = this.dialogRef.open(SuccessMessageDialogComponent, {
        width: '450px',
        height: '200px'
      });
      dialogRef1.afterClosed().subscribe(() => {
        console.log('sucess');
      });
    });

  }

  // delete rows ChequeDetails
  delete(element) {
    this.chequeDetailsDataSource.data.splice(element, 1);
    this.chequeDetailsDataSource = new MatTableDataSource(this.chequeDetailsDataSource.data);
  }
  // edit rows
  onEdit(element) {
    element.edit = !element.edit;
  }
  // add rows to both tables
  onSave() {

    this.chequeDetailsDataSource.data.push({
      chequeType: '',
      treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block D, M. S. Building, Gandhinagar - 382016',
      contactNo: '',
      emailId: '',
      edit: true
    });
    this.chequeDetailsDataSource.data = this.chequeDetailsDataSource.data;
    this.chequeRequestDetailsDataSource.data.push({
      department: '',
      chequeFormat: '',
      chequeLeaves: '',
      quantity: '',
    });
    this.chequeRequestDetailsDataSource.data = this.chequeRequestDetailsDataSource.data;
  }

}
