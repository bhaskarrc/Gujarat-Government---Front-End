import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsEaComponent } from '../../workflow-details-ea/workflow-details-ea.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-revert-documents-for-correction',
  templateUrl: './revert-documents-for-correction.component.html',
  styleUrls: ['./revert-documents-for-correction.component.css']
})
export class RevertDocumentsForCorrectionComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  errorMessages = eaMessage;
  isSubmitted = false;
  // FormGroup
  revertDocumentForm: FormGroup;
  // FormControl
  sendToCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  // List values
  sendTo_list: any[] = [
    { value: '1', viewValue: 'Mr. A.B. Patel' }
  ];

  type_list: any[] = [
    { value: '1', viewValue: 'Voucher' },
    { value: '2', viewValue: 'Challan' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office , Bhuj' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      majorHead: '8782',
      voucherNo: '1',
      amount: '100.00',
      tcAmount: '200.00',
      grossAmount: '300.00',
    },
    {
      majorHead: '8782',
      voucherNo: '2',
      amount: '50.00',
      tcAmount: '100.00',
      grossAmount: '150.00',
    }
  ];
  // Table Source

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['checkBox', 'majorHead', 'voucherNo', 'amount', 'tcAmount', 'grossAmount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.revertDocumentForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      type: ['1'],
      subTreasuryName: ['1'],
      majorHead: [''],
      bankDate: [''],
      sendTo: [''],
      amount: [''],

    });
  }
  // function to clear form
  clearForm() {
    this.revertDocumentForm.reset();
  }

  totalExpeAmount(): number {
    let amountExp = 0;
    this.dataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.grossAmount);
    });
    return amountExp;
  }

  totaAmount(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.amount);
    });
    return amt;
  }

  totaTcAmount(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.tcAmount);
    });
    return amt;
  }

  totaVoucher(): number {
    let amt = 0;
    this.dataSource.data.forEach((element) => {
      amt = amt + Number(element.voucherNo);
    });
    return amt;
  }
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  onSave() {
    if (this.revertDocumentForm.valid) {
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
}
