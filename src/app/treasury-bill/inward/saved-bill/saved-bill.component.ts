import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { SavedBill, ListValue } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-saved-bill',
  templateUrl: './saved-bill.component.html',
  styleUrls: ['./saved-bill.component.css']
})
export class SavedBillComponent implements OnInit {
  Element_Data: SavedBill[] = [
    {
      billRefNo: '368',
      tokenNo: '552',
      billRegNo: '331',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billAmount: '10000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 12:00 AM',
      inwardBillDate: '25-Jan-2019 11:00 AM',
      ddoName: '	Collector Office, Gandhinagar',
      bilCat: 'Regular',
      billGrossAmount: '11000.00',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }
  ];

  // Form Group
  savedOnlineBillForm: FormGroup;
  // Variable
  isSearch: Boolean = true;
  AddShow: Boolean = false;
  valueRequired: Boolean = false;
  // table source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo',
    'tokenNo', 'billDate', 'inwardBillDate', 'ddoNo', 'cardexNo', 'ddoName',
    'billType', 'mhead', 'bilCat', 'billGrossAmount', 'billAmount', 'partyName', 'approverName', 'action'];
  newdataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  // Form Control
  forwardtypeCtrl: FormControl = new FormControl();
  majorheadeCtrl: FormControl = new FormControl();
  billtypeeCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billcategoryCtrl: FormControl = new FormControl();


  // Lists

  auditor_list: ListValue[] = [{
    value: '1',
    viewValue: 'Shri. Pratik Shah'
  },

  ];

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];

  major_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];


  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  forward_list: ListValue[] = [
    { value: '1', viewValue: 'Authority' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.savedOnlineBillFormData();
  }
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }

  // navigation
  goToDashboard() {
    this.router.navigate(['/treasury-bill/inward-bill']);
  }
  savedOnlineBillFormData() {
    this.savedOnlineBillForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      billType: [''],
      Billtype: [''],
      cardexNo: [''],
      ddoName: [''],
      billate: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      forwardautho: [''],
      billRegNo: [''],
      auditorctrl: ['1'],
      ddoNo: [''],
      grossamount: [''],
      inardbilldate: [''],
      BillFromDate: ['']
    });
  }

  search() {
    this.isSearch = false;
  }

  isAllSelected() {
    if (this.selection.selected.length === 1) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 2) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 0) {
      this.AddShow = false;
    } else {
      this.AddShow = false;
    }
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.selection.selected.length === 1) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 2) {
      this.AddShow = true;
    } else if (this.selection.selected.length === 0) {
      this.AddShow = false;
    } else {
      this.AddShow = false;
    }
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }
  FromDate(event) {
    const fromdate = this.savedOnlineBillForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
