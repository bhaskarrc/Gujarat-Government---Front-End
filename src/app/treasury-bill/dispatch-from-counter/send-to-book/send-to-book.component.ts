import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { SenToBook } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-send-to-book',
  templateUrl: './send-to-book.component.html',
  styleUrls: ['./send-to-book.component.css']
})
export class SendToBookComponent implements OnInit {
  ELEMENT_DATA: SenToBook[] = [
    {
      advice: '100302',
      adviceDate: '25/Feb/2019',
      billRefNo: '5174',
      ChequeNo: '100302',
      tokenNo: '10236',
      cardexNo: '4',
      ddoNo: '4',
      billRegNo: '251',
      billDate: '25-Feb-2019 01:00 PM',
      inwardDate: '25-Feb-2019 05:00 PM',
      officeName: '	collector Office, Gandhinagar',
      billGrossAmount: '234500.00',
      billAmount: '234500.00',
      billType: 'MLA Bill',
      mhead: '2012',
      billCat: 'Regular',
      cheAmmount: '234500.00'
    }
  ];
  // Date
  todayDate = new Date();
  // From Group
  sendToBookBillForm: FormGroup;
  // Form Control
  majorHeadCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo', 'tokenNo', 'billDate', 'inwardDate', 'ddoNo',
    'cardexNo', 'officeName', 'advice', 'adviceDate', 'billType', 'mhead',
    'billCat', 'billGrossAmount', 'billAmount', 'action'];
  newdataSource = new MatTableDataSource<SenToBook>(this.ELEMENT_DATA);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  // Lists
  majorHead_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },
  ];

  billType_list: any[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  billCategory_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  ngOnInit() {
    this.sendToBookBillForm = this.fb.group({
      chequeNo: [''],
      BillReferNum: [''],
      majorHead: [''],
      tokenNO: [''],
      cardexNO: [''],
      grossAmount: [''],
      netAmount: [''],
      billCategory: [''],
      ddoNo: [''],
      billType: [''],
      chequeAmount: [''],
      adviceNo: [''],
      adviceDate: ['']
    });
  }
  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }

}
