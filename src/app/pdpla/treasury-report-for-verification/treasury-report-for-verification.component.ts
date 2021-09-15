import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, ApprovalList } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';



@Component({
  selector: 'app-treasury-report-for-verification',
  templateUrl: './treasury-report-for-verification.component.html',
  styleUrls: ['./treasury-report-for-verification.component.css']
})
export class TreasuryReportForVerificationComponent implements OnInit {
  // Form COntrol
  codeCtrl: FormControl = new FormControl();
  approvedCtrl: FormControl = new FormControl();
  // Variable
  selectedAll: Boolean = false;
  public toggleButton = false;
  selectedIndex: number;
  showTable: Boolean = false;
  errorMessages = pdplaMessage;
  // Date
  initiatiomdate = new Date();
  todayDate = Date.now();
  // Form Group
  reportVerificationform: FormGroup;
  selection = new SelectionModel<any>(true, []);


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }
  directiveObject = new PdplaDirectives(this.router, this.dialog);
  // List
  code_list: ListValue[] = [
    { value: '1', viewValue: 'AFR001' },
    { value: '2', viewValue: 'AFR002' },
    { value: '3', viewValue: 'AFR003' },
    { value: '4', viewValue: 'AFR004' },

  ];

  approved_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },

  ];
  Element_Data: ApprovalList[] = [
    {
      pdplaAc: 'DHE.PF',
      advice: '1',
      entrydt: '12-May-2018',
      dept: 'Finance Department',
      bank: 'State Bank of India',
      amt: '100000.00',
      deduction: '10000.00',
      netAmount: '90000.00',
      approved: 'Yes',
      approvedDate: '21-Aug-2019',
    },
    {
      pdplaAc: 'DHE.PF',
      advice: '2',
      entrydt: '18-Apr-2019',
      dept: 'Finance Department',
      bank: 'State Bank of India',
      amt: '200000.00',
      deduction: '20000.00',
      netAmount: '180000.00',
      approved: 'Yes',
      approvedDate: '15-Dec-2019',
    },

  ];
  dataSource = new MatTableDataSource<ApprovalList>(this.Element_Data);
  displayedColumnssplitisting: any[] = [
    'checkBox',
    'srNo',
    'pdplaAc',
    'advice',
    'entrydt',
    'dept',
    'bank',
    'amt',
    'deduction',
    'netAmount',
    'approved',
    'approvedDate'

  ];


  ngOnInit() {
    this.reportVerificationform = this.fb.group({
      // Formfields
      adviceNo: [''],
      code: [''],
      approved: [''],



    });
  }

  enabledata() {

    if (this.toggleButton === true) {
      this.toggleButton = false;
    } else {
      this.toggleButton = true;
    }
  }

  // clears form
  clearForm() {
    this.reportVerificationform.reset();
  }



}

