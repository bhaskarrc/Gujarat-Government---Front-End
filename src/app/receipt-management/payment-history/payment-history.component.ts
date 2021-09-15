
import { receiptManagement } from './../../common/error-message/common-message.constants';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PaymentHistory } from 'src/app/model/receipt-management';
@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  // variables
  isSubmitted = false;
  errorMessages = receiptManagement;
  payHistoryForm: FormGroup;
  maxDate = new Date();

  // table data
  Element_Data: PaymentHistory[] = [
    {
      cin: '122333',
      grn: '88888',
      id: '100001',
      pDate: '11-May-2018',

    }
  ];
  dataSource = new MatTableDataSource<PaymentHistory>(this.Element_Data);
  displayedColumns: string[] = ['srNo', 'cin', 'grn', 'id', 'pDate', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.payHistoryForm = this.fb.group({
      grn: [''],
      cin: [''],
      tId: [''],
      payDate: [''],
    });
  }

  // clears form
  clearForm() {
    this.payHistoryForm.reset();
  }

  // saves form
  onSave() {
    if (this.payHistoryForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  // deletes record
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

}
