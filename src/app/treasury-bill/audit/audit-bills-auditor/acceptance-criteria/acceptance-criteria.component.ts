import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { Router } from '@angular/router';

// Element table source
const ELEMENT_DATA: any[] = [
  {
    refNo: '2',
    regNo: '552',
    tokenNo: '10113',
    party: 'CHANDRESHWAR VISHWANATH BHAGAT',
    majorHead: '2071',
    ddoNo: '115',
    cardexNo: '4',
    billAmount: '200.00',
    billGrossAmount: '200.00',
    chequeamount: '50.00',
    chequeePayment: 'Cheque',
    billdate: '25-Feb-2019',
    inwarddate: '25-Feb-2019',
    challanNo: '1920003',
    ddoname: '	collector Office, Gandhinagar',
    billcat: 'Regular',
    billtype: 'Pay Bill',
    amount: '2000.00',
    chequeno: 'TRY61-286971',
    paidAmount: '20.00',
    coded: 'TDS',
    department: 'Finance Department'
  },
  {
    refNo: '3',
    regNo: '553',
    tokenNo: '10114',
    party: 'Pratik k Shah',
    majorHead: '2071',
    ddoNo: '115',
    cardexNo: '4',
    billAmount: '2000.00',
    billGrossAmount: '2000.00',
    chequeamount: '4000.00',
    chequeePayment: 'Cheque',
    billdate: '24-Feb-2019',
    inwarddate: '24-Feb-2019',
    challanNo: '1920003',
    ddoname: '	collector Office, Gandhinagar',
    billcat: 'Regular',
    billtype: 'Pay Bill',
    chequeno: 'TRY61-286971',
    paidAmount: '2000.00',
    coded: 'TDS',
    amount: '2000.00',
    department: 'Forest Department'
  },
];

@Component({
  selector: 'app-acceptance-criteria',
  templateUrl: './acceptance-criteria.component.html',
  styleUrls: ['./acceptance-criteria.component.css']
})
export class AcceptanceCriteriaComponent implements OnInit {
  // Variable
  selectedAll = false;
  // Form Group
  auditAuditorChallanForm: FormGroup;
  auditAuditorAcceptanceForm: FormGroup;
  // Form Ontrol
  partyNameCtrl: FormControl = new FormControl();
  noOfChallanCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  challandataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['checkBox', 'challanNo', 'refNo', 'coded', 'tokenNo', 'billdate', 'inwarddate',
    'ddoNo', 'cardexNo', 'ddoname', 'billtype', 'majorHead', 'billGrossAmount', 'billAmount', 'party',
    'department', 'paidAmount', 'chequeamount', 'action'];
  challandisplayedColumns: string[] = ['checkBox', 'coded', 'challanNo', 'refNo', 'tokenNo', 'billdate', 'chequeamount', 'amount', 'action']
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AcceptanceCriteriaComponent>,
  ) { }


  party_list: any[] = [{
    value: '1', viewValue: 'Mr. Abc'
  },
  ];
  noOfChallan_list: any[] = [{
    value: '1', viewValue: 'Single'
  },
  { value: '2', viewValue: 'Multiple' },
  ];

  ngOnInit() {
    this.auditAuditorAcceptanceFormData();
    this.auditAuditorChallanForm = this.fb.group({
      challanamount: [''],
      amounttoa: [''],
      entries: ['']
    });
  }
  auditAuditorAcceptanceFormData() {
    this.auditAuditorAcceptanceForm = this.fb.group({
      partyName: ['1'],
      challanno: [''],
      deppartment: [''],
      amount: [''],
      code: [''],
      noOfChallan: ['1'],
      subHead: [''],
      minorHead: [''],
      subMajorHead: [''],
      mHead: ['']
    });
  }


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
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  paidamounthis() {
    const dialogRef = this.dialog.open(BillHistoryComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  show_data() {
    this.selectedAll = true
  }
  clickEventHandler() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);

  }

  delete_low(index) {
    this.challandataSource.data.splice(index, 1);
    this.challandataSource = new MatTableDataSource(this.challandataSource.data);
  }

  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  getTotal(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.challandataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.amount);
    });
    return calcCurrentCss;
  }
  getchequeTotal(): number {
    let calcCurrentCss = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.challandataSource.data.forEach((element) => {
      calcCurrentCss = calcCurrentCss + Number(element.chequeamount);
    });
    return calcCurrentCss;
  }
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(4);
    }
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,4})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  close() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }
}
