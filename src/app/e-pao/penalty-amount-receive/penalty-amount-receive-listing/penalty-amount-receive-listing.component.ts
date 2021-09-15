
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EPaoDirectives } from 'src/app/common/directive/epao';
import { PenaltyAmount, ListValue } from 'src/app/model/epaoModel';

@Component({
  selector: 'app-penalty-amount-receive-listing',
  templateUrl: './penalty-amount-receive-listing.component.html',
  styleUrls: ['./penalty-amount-receive-listing.component.css']
})
export class PenaltyAmountReceiveListingComponent implements OnInit {
  ELEMENT_DATA: PenaltyAmount[] = [
    {
      refNo: '1241324',
      refDate: '12-Aug-2020',
      mor: 'Draft',
      bank: 'Bank Of Baroda, Baroda',
      claimAmt: '2000.00',
    },

    {
      refNo: '1241325',
      refDate: '12-Aug-2020',
      mor: 'Draft',
      bank: 'Bank Of Baroda, Baroda',
      claimAmt: '4000.00',
    },

  ];
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  maxDate = new Date();
  // Error Message
  errorMessages = EPOAMessage;
  // vaiable
  isSubmitted = false;
  // Form Group
  penaltyAmountListForm: FormGroup;

  // FormControl
  bankTypeCtrl: FormControl = new FormControl();
  morCtrl: FormControl = new FormControl();
  // List
  bankType_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Of Baroda, Baroda' },
    { value: '2', viewValue: 'HDFC Bank' },

  ];


  mor_list: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'NEFT/RTGS' },
    { value: '3', viewValue: 'RBI' },
    { value: '4', viewValue: 'Draft' },
    { value: '5', viewValue: 'Challan/Cash' }

  ];
  // Table Source
  displayedColumns = ['checkBox', 'refNo', 'refDate', 'bank', 'mor', 'claimAmt', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.penaltyAmountListForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      bankType: [''],
    });
  }

  onSave() {
    if (this.penaltyAmountListForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.penaltyAmountListForm.reset();
  }


}



