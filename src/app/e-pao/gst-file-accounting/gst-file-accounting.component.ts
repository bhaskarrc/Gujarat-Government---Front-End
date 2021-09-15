import { group } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { GSTFileAccounting } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-gst-file-accounting',
  templateUrl: './gst-file-accounting.component.html',
  styleUrls: ['./gst-file-accounting.component.css']
})
export class GstFileAccountingComponent implements OnInit {
  ELEMENT_DATA: GSTFileAccounting[] = [
    {
      fileName: 'CN87484165118421',
      noOfChallan: '100',
      amount: '10000.00',
    },
    {
      fileName: 'CN87484165118421',
      noOfChallan: '200',
      amount: '20000.00',
    },
    {
      fileName: 'CN87484165118421',
      noOfChallan: '300',
      amount: '30000.00',
    },

  ];
  // date
  maxDate = new Date();
  todayDate = new Date();
  // form group
  gftFileAccountingForm: FormGroup;
  // table source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'fileName', 'noOfChallan', 'amount', 'action'];
  newdisplayedFooterColumns: string[] = ['fileName', 'noOfChallan', 'amount', 'action'];

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);
  // error message
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.gftFileAccountingData();

  }
  gftFileAccountingData() {
    this.gftFileAccountingForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      fileName: ['']
    });
  }
  // navigation
  navigate() {
    this.router.navigate(['./e-pao/gst-file-accounting-listing']);
  }

  totalChallan(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.noOfChallan);
    });
    return amountExp;
  }

  totalAmmount(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amount);
    });
    return amountExp;
  }


}
