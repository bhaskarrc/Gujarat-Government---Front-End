
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-accept-payment-scroll-from-bank',
  templateUrl: './accept-payment-scroll-from-bank.component.html',
  styleUrls: ['./accept-payment-scroll-from-bank.component.css']
})
export class AcceptPaymentScrollFromBankComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  errorMessages = eaMessage;

  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  isSubmitted = false;
  // FormGroup
  acceptPaymentScrollBankForm: FormGroup;
  // FormControl
  bankTypeCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();
  // Display Element Data
  Element_Data: any[] = [
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '50',
      cType: 'Treasury',
      amount: '10,500.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '40',
      cType: 'LC',
      amount: '31,568.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '25',
      cType: 'PLA',
      amount: '78,589.00',
      details: 'Details',

    },
    {
      bName: 'State Bank of India',
      branchCode: '1200',
      sDate: '14-June-2019',
      challan: '5',
      cType: 'GST Refund',
      amount: '12,345.00',
      details: 'Details',

    }
  ];

  bankType_list: any[] = [
    { value: '1', viewValue: 'State Bank of India' },
    { value: '2', viewValue: 'State Bank of India' }
  ];
  cheque_list: any[] = [
    { value: '1', viewValue: 'Treasury' },
    { value: '2', viewValue: 'LC' },
    { value: '1', viewValue: 'PLA' },
    { value: '2', viewValue: 'GST Refund' }
  ];

  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['checkBox', 'bName', 'branchCode', 'sDate', 'challan', 'cType', 'amount', 'details'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    // FormGroup Fields
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.acceptPaymentScrollBankForm = this.fb.group({
      scrollFromDate: [''],
      scrollToDate: [''],
      bankName: [''],
      chequeType: [''],
    });

  }
  // function to clear form
  clearForm() {
    this.acceptPaymentScrollBankForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }
  onSave() {
    if (this.acceptPaymentScrollBankForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

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
  backCharge() {

  }
}

