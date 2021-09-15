import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-ex-freez-account',
  templateUrl: './ex-freez-account.component.html',
  styleUrls: ['./ex-freez-account.component.css']
})
export class ExFreezAccountComponent implements OnInit {

  lockdate = new FormControl(new Date());
  initiatiomdate = new Date((new Date()));

  disableSelectpay = new FormControl(false);
  disableSelectrec = new FormControl(false);

  majorHeadPay = false;
  majorHeadRec = false;


  // Receipt
  majorheadrecColumns: string[] = [
    'select',
    'mjrHead',
    'descr',
    'lockDate',
  ];
  // Receipt Data
  rec_Data: any[] = [
    {
      mjrHead: '0005',
      descr: 'Central Goods and Services Tax(CGST)',
      lockDate: '',
    },

    {
      mjrHead: '0006',
      descr: 'State Goods and Services Tax(SGST)',
      lockDate: '',
    },

    {
      mjrHead: '0008',
      descr: 'Integrated Goods and Services Tax(IGST)',
      lockDate: '',
    },

    {
      mjrHead: '0020',
      descr: 'Corporation Tax',
      lockDate: '',
    },

    {
      mjrHead: '0021',
      descr: 'Taxes on Income other than Corporation Tax',
      lockDate: '',
    },

  ];
  // Table Source Receipt
  majorHeadRecSource = new MatTableDataSource<any>(this.rec_Data);



  // Payment
  majorheadpayColumns: string[] = [
    'select',
    'mjrHead',
    'descr',
    'lockDate',
  ];
  // Payment Data
  pay_Data: any[] = [
    {
      mjrHead: '2011',
      descr: 'State Legislature',
      lockDate: '',
    },

    {
      mjrHead: '2012',
      descr: 'Governor',
      lockDate: '',
    },

    {
      mjrHead: '2013',
      descr: 'Council of Ministers',
      lockDate: '',
    },

    {
      mjrHead: '2014',
      descr: 'Administration of Justice',
      lockDate: '',
    },

    {
      mjrHead: '2015',
      descr: 'Elections',
      lockDate: '',
    },

  ];
  // Payment Table Source
  majorHeadPaySource = new MatTableDataSource<any>(this.pay_Data);
  // FormGroup
  freexAcForm: FormGroup;

  selection = new SelectionModel(true, []);


  constructor(
    private fb: FormBuilder, private _dialog: MatDialog
  ) { }
  // List values
  accont_type_list: any = [
    { value: '1', viewValue: 'Payment' },
    { value: '2', viewValue: 'Receipt' }
  ];


  majorHead_list: any[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];
  // FormControl
  freezeTypeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();


  ngOnInit() {
    this.freexAcFormData();
  }

  freexAcFormData() {
    this.freexAcForm = this.fb.group({
      // FormGroup Fields
      FreezeType: [''],
      majorHeadCode: [''],
      lockdate: [''],
      disableSelectpay: [''],
      disableSelectrec: [''],
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.majorHeadPaySource.data.length;


    return numSelected === numRows;

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.majorHeadPaySource.data.forEach(row => this.selection.select(row));


  }


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

  // Account Type Selection
  type(majorHeadShow: { value: string; }) {
    if (majorHeadShow.value === '1') {
      this.majorHeadPay = true;
      this.majorHeadRec = false;

    } else if (majorHeadShow.value === '2') {
      this.majorHeadPay = false;
      this.majorHeadRec = true;
    }
  }


  onEdit(data, event): void {
    event.stopPropagation();
  }


  registerOnChange() { }

  onSave() {
    const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {

    });
  }

  onSaveReceipt() {
    const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
