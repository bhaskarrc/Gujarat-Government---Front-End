import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-expenditure-voucher-distrubation',
  templateUrl: './expenditure-voucher-distrubation.component.html',
  styleUrls: ['./expenditure-voucher-distrubation.component.css']
})
export class ExpenditureVoucherDistrubationComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  maxDate = new Date();
  // FormGroup
  distributeVouchersForm: FormGroup;
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  selection = new SelectionModel<any>(true, []);


  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  // List values
  majorHead_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];
  auditor_list: any[] = [
    {
      value: '1', viewValue: 'Shri. Pratik Shah',
    },
    {
      value: '1', viewValue: 'Shri.Sanket Modi',
    }
  ];

  // Display Element Data
  ELEMENT_DATA: any[] =
    [
      {
        vDate: '10-May-2019',
        majorHead: '2054',
        voucherNumber: '2',
        totalAmount: '300.00',
        distributeTo: 'Shri. Pratik K Shah',
      },
    ];

  // Display Columns
  displayedColumns: string[] = ['checkBox', 'vDate', 'majorHead', 'voucherNumber', 'totalAmount', 'distributeTo'];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.distributeVouchersForm = this.fb.group({
      // FormGroup Fields
      voucherDate: [''],
      majorHead: [''],
      distributeToctrl: ['1'],
    });
  }

  searchMlaAuthorityData() {

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
