import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-online-challan-approval',
  templateUrl: './online-challan-approval.component.html',
  styleUrls: ['./online-challan-approval.component.css']
})
export class OnlineChallanApprovalComponent implements OnInit {
  isSubmitted = false;
  // FormGroup
  onlineChallanForm: FormGroup;
  maxDate = new Date();
  selection = new SelectionModel<any>(true, []);
  majorHeadCtrl: FormControl = new FormControl();
  // List values
  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      cinNo: '57000220000002554155035',
      majorHead: '0040',
      partyName: 'TEST FIRM',
      bank: 'Oriental Bank Of Commerce',
      bankDate: '13-Mar-2016',
      amount: '30.00',
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['checkBox', 'cinNo', 'majorHead', 'partyName', 'bank', 'bankDate', 'amount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.onlineChallanForm = this.fb.group({
    });
  }


  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
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
