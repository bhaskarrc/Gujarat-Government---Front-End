import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from '../../cheque/party-details/party-details.component';
import { ListValue, ApproveReject } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';



@Component({
  selector: 'app-audit-bills-approved-reject',
  templateUrl: './audit-bills-approved-reject.component.html',
  styleUrls: ['./audit-bills-approved-reject.component.css']
})
export class AuditBillsApprovedRejectComponent implements OnInit {

  ELEMENT_DATA: ApproveReject[] = [{

    billRefNo: '368',
    tokenNo: '552',
    mhead: '2054',
    cardexNo: '4',
    billRegNo: '331',
    billAmount: '10000.00',
    billGrossAmount: '11000.00',
    billType: 'Pay Bill',
    billDate: '25-Feb-2019 11:00 AM',
    ddoName: '  Collector Office, Gandhinagar',
    billCat: 'Regular',
    authiorName: 'Shri Pratik K Shah',
    district: 'Gandhinagar',
    ddoNo: '4',
    partyName: 'Mr. Abc',
    approverName: 'Mr. Praik Ramlal Shah',
    vitocode: '152',
    inwardDate: '25-feb-2019 10:00 AM',
    status: 'Pass'
  },
  {

    billRefNo: '268',
    tokenNo: '452',
    mhead: '2044',
    cardexNo: '4',
    billRegNo: '311',
    billAmount: '10045.00',
    billGrossAmount: '12000.00',
    billType: 'Pay Bill',
    billDate: '25-Feb-2019 11:00 AM',
    ddoName: '  Collector Office, Gandhinagar',
    billCat: 'Regular',
    authiorName: 'Shri Pratik K Shah',
    district: 'Gandhinagar',
    ddoNo: '4',
    partyName: 'Mr. Abc',
    approverName: 'Mr. Praik Ramlal Shah',
    vitocode: '152',
    inwardDate: '25-feb-2019 10:00 AM',
    status: 'Pass'
  }];


  // Date
  todayDate = new Date();
  // Form Group
  auditApproveRejectForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  // Variable
  isSearch: Boolean = true;
  valueRequired: Boolean = false;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo', 'tokenNo',
    'billDate', 'inwardDate', 'ddoNo', 'cardexNo', 'ddoName', 'billType', 'mhead',
    'billCat', 'billGrossAmount', 'billAmount', 'partyName', 'approverName', 'status', 'action'];
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  selection = new SelectionModel<any>(true, []);
  // Lists
  auditor_list: ListValue[] = [{
    value: '1',
    viewValue: 'Shri. Pratik Shah'
  },

  ];


  major_list: ListValue[] = [
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
  ddoname_list: any = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];


  billcategory_list: ListValue[] = [{
    value: '1',
    viewValue: 'Regular'
  },
  {
    value: '2',
    viewValue: 'TC'
  },
  {
    value: '3',
    viewValue: 'NIL'
  },
  {
    value: '4',
    viewValue: 'Regular/Challan'
  }
  ];
  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];




  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  ngOnInit() {
    this.auditApproveRejectFormData();
  }

  auditApproveRejectFormData() {
    this.auditApproveRejectForm = this.fb.group({
      BillRefNo: [''],
      billType: [''],
      Tokenno: [''],
      majorhead: [''],
      Billtype: [''],
      cardexNo: [''],
      ddoName: [''],
      billate: [''],
      district: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      billRegNo: [''],
      auditorctrl: ['1'],
      Grossamount: [''],
      BillFromDate: [''],
      regNo: ['']
    });
  }
  FromDate(event) {
    const fromdate = this.auditApproveRejectForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }

  search() {
    this.isSearch = false;
  }

  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
}
