import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
const ELEMENT_DATA: any[] = [
  {
    fileName: 'CN87484165118421',
    noOfChallan: '5000.00',
    amount: '5000000.00',
    totalChallan: '5000.00',
    totalAmount: '5000000.00'
  },
  {
    fileName: 'CN87484165118421',
    noOfChallan: '5000.00',
    amount: '5000000.00',
    totalChallan: '5000.00',
    totalAmount: '5000000.00'
  },
  {
    fileName: 'CN87484165118421',
    noOfChallan: '5000.00',
    amount: '5000000.00',
    totalChallan: '5000.00',
    totalAmount: '5000000.00'
  },

];
@Component({
  selector: 'app-gst-filr-accounting-ao',
  templateUrl: './gst-filr-accounting-ao.component.html',
  styleUrls: ['./gst-filr-accounting-ao.component.css']
})
export class GstFilrAccountingAoComponent implements OnInit {
  maxDate = new Date();
  todayDate = new Date();
  gftFileAccountingForm: FormGroup;
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'fileName', 'noOfChallan', 'amount', 'totalChallan', 'totalAmount', 'newaction'];
  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, ) { }
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.gftFileAccountingData();

  }
  gftFileAccountingData() {
    this.gftFileAccountingForm = this.fb.group({
      fromDate: [''],
      toDate: ['']
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  commentEpaoDetails(): void {
    const dialogRef = this.dialog.open(WorkFlowEPaoComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  navigate() {
    this.router.navigate(['./e-pao/gst-file-accounting-ao-listing']);
  }

}
