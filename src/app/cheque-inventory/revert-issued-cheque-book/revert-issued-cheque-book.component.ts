import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { RevertIssuedChequeBook } from 'src/app/model/revert-issued-cheque-book';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

// confirmation-dialogbox
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialogComponent {
  isYes = false;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) { }
  // closes dialog
  cancel(): void {
    this.dialogRef.close();
  }
  // routing
  goTo() {
    this.isYes = !this.isYes;
  }
}

@Component({
  selector: 'app-revert-issued-cheque-book',
  templateUrl: './revert-issued-cheque-book.component.html',
  styleUrls: ['./revert-issued-cheque-book.component.css']
})
export class RevertIssuedChequeBookComponent implements OnInit {
  // variables
  errorMessages = ciMessage;
  showTable = false;
  todayDate = Date.now();
  directiveObj = new CommonDirective(this.router);
  revertIssuedChequeBook: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }
  // form controls
  chequeTypeCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();

  // chequeType list
  chequeType_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Deposit' },
    { value: '3', viewValue: 'Treasury' }
  ];
  // branch list
  branch_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Treasury' },
    { value: '3', viewValue: 'Parliamentary' },
    { value: '4', viewValue: 'Deposit' }];

  // table data
  Element_Data: RevertIssuedChequeBook[] = [
    {
      revisionNo: '4386', fromSeries: '181', toSeries: '251', issueDate: new Date('01/12/2019'),
      chequeType: 'LC', accountNo: 'EE1', accountName: 'Executive Engineer, Road and Building Department', remarks: ''
    },

  ];
  dataSource = new MatTableDataSource<RevertIssuedChequeBook>(this.Element_Data);
  displayedColumns: string[] = ['select', 'position', 'revisionNo', 'fromSeries', 'toSeries', 'issueDate', 'chequeType',
    'accountNo', 'accountName', 'action'];
  @ViewChild(MatSort) Sort: MatSort;
  @ViewChild(MatPaginator) Paginator: MatPaginator;

  ngOnInit() {
    this.revertIssuedChequeBook = this.fb.group({
      fromDate: [''],
      toDate: [''],
      chequeType: [''],
      branch: [''],
      accountNo: [''],
      issueDate: [''],
      accountNumber: [''],
    });
    this.dataSource.sort = this.Sort;
    this.dataSource.paginator = this.Paginator;

  }
  // on search
  onSearch() {
    this.showTable = true;
  }
  // to clear form
  clearForm() {
    this.showTable = false;
  }


  // to open ConfirmationDialogComponent dialog
  revert() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  // routing
  goToListing() {
    this.router.navigate(['./ci/revert-issued-cheque-book-listing']);
  }
}
