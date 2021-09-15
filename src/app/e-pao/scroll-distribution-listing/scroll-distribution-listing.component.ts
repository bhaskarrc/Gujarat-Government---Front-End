import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';

import { EPaoDirectives } from 'src/app/common/directive/epao';
import { ListValue, ScrollDisListing } from 'src/app/model/epaoModel';

@Component({
  selector: 'app-scroll-distribution-listing',
  templateUrl: './scroll-distribution-listing.component.html',
  styleUrls: ['./scroll-distribution-listing.component.css']
})
export class ScrollDistributionListingComponent implements OnInit {
  ELEMENT_DATA: ScrollDisListing[] = [
    {
      refNo: '9846546466943',
      refDate: '22-FEB-2020',
      scrollName: 'ENV87484165118421',
      noOfChallan: '50',
      amount: '10000.00',
      branch: 'Receipt Branch 1',
      status: 'Distributed',
    },
    {
      refNo: '9846943',
      refDate: '12-FEB-2020',
      scrollName: 'ENV84165118421',
      noOfChallan: '50',
      amount: '20000.00',
      branch: 'Receipt Branch 2',
      status: 'Distributed',
    },
    {
      refDate: '22-AUG-2020',
      refNo: '49864165132123',
      scrollName: 'ENV484165118421',
      noOfChallan: '50',
      amount: '30000.00',
      branch: 'Receipt Branch 3',
      status: 'Distributed',
    },
  ];
  maxDate = new Date();
  // FormGroup
  scrollForm: FormGroup;
  // FormControl
  branchCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  // MatTableDataSource
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'refNo', 'refDate', 'scrollName', 'noOfChallan', 'amount', 'branch', 'status', 'newaction'];

  // List
  branch_list: ListValue[] = [{
    value: '1', viewValue: ' Receipt Branch 1',
  },
  {
    value: '2', viewValue: 'Receipt Branch 2',
  }
    ,
  {
    value: '2', viewValue: 'Receipt Branch 3',
  }
  ];
  status_list: ListValue[] = [{
    value: '1', viewValue: 'Distributed',
  },
  {
    value: '2', viewValue: 'Received',
  }
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  directiveObject = new EPaoDirectives(this.router, this.dialog);
  // error Messages
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.scrollData();

  }
  scrollData() {
    this.scrollForm = this.fb.group({
      scrollName: [''],
      branch: [''],
      fromDate: [''],
      toDate: [''],
      status: [''],

    });
  }



}
