
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-receive-receipt-scroll-details',
  templateUrl: './receive-receipt-scroll-details.component.html',
  styleUrls: ['./receive-receipt-scroll-details.component.css']
})
export class ReceiveReceiptScrollDetailsComponent implements OnInit {

  isSubmitted = false;
  // FormGroup
  scrollDetailsForm: FormGroup;
  // Display Element Data
  Element_Data: any[] = [
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'RTO',
      amt: '3000.00',
      bCode: '12000',
      branchCode: '1200',
      rNo: '1000000008721',
      from: '14-May-2018',
      to: '14-May-2019',
    },
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'RTO',
      amt: '3000.00',
      bCode: '12000',
      branchCode: '1200',
      rNo: '1000000008721',
      from: '14-May-2018',
      to: '14-May-2019',
    },
    {
      cinNo: '587388899845665',
      tDate: '14-Mar-2019',
      sDate: '14-Mar-2018',
      pName: 'TEST',
      mHead: '8443',
      smHead: '00',
      minorHead: '00',
      sHead: '101',
      cType: 'RTO',
      amt: '3000.00',
      bCode: '10001',
      branchCode: '1200',
      rNo: '1000000008721',
      from: '14-May-2018',
      to: '14-May-2019',
    },
  ];
  // Display Columns
  displayedColumns: any[] = ['select', 'cinNo', 'tDate', 'sDate', 'pName', 'mHead', 'smHead',
    'minorHead', 'sHead', 'cType', 'amt', 'bCode', 'branchCode', 'rNo',
    'from', 'to'];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.scrollDetailsForm = this.fb.group({
    });
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
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

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

