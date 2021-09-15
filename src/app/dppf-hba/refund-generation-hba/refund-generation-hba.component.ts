import { CommonListing } from 'src/app/model/common-listing';
import { RefundGenerationHba } from './../../model/dppf-hba';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
const ELEMENT_Details: RefundGenerationHba[] = [
  {
    actual: '',
    recoverd: '',
    refund: '',
    amountDesc: 'Loan Amount',
  },
  {
    actual: '',
    recoverd: '',
    refund: '',
    amountDesc: 'Interest Amount',
  },
  {
    actual: '',
    recoverd: '',
    refund: '',
    amountDesc: 'Penalty Interest Amount',
  },
];
@Component({
  selector: 'app-refund-generation-hba',
  templateUrl: './refund-generation-hba.component.html',
  styleUrls: ['./refund-generation-hba.component.css']
})
export class RefundGenerationHbaComponent implements OnInit {
  directiveObject = new DPPFHbaDirectives(this.dialog);

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  refundForm: FormGroup;
  // Table Source
  displayedColumns: string[] = ['amountDesc', 'actual', 'recoverd', 'refund'];
  dataSource = new MatTableDataSource<RefundGenerationHba>(ELEMENT_Details);
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }
  // List
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Reopen' },
    { value: '2', viewValue: 'Close' },
  ];
  ngOnInit() {
    this.refundData();
  }
  refundData() {
    this.refundForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      refund: [''],
      holderName: [''],
      hBAMCANo: [''],
      total: [''],
      noting: [''],
      treasury: ['']
    });
  }

  // Inward No Popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
