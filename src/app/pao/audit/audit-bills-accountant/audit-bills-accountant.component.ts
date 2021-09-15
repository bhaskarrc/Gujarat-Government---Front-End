import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from '../../party-details/party-details.component';
// import { PartyDetailsComponent } from '../../cheque/party-details/party-details.component';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantPaoComponent } from '../../cheque/cheque-for-correction/workflow-details-grant-pao/workflow-details-grant-pao.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ListValue } from 'src/app/model/paoModel';
import { AuditorAccountant } from 'src/app/model/treasury-bill';

const ELEMENT_DATA: any[] = [{

  billRefNo: '368',
  tokenNo: '552',
  mhead: '2054',
  cardexno: '4',
  billregno: '331',
  billgrossamount: '11000.00',
  billamount: '10000.00',
  billtype: 'Pay Bill',
  billdate: '25-Feb-2019',
  inwardDate: '25-Feb-2019',
  ddoname: '	Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik K Shah',
  district: 'Gandhinagar',
  ddono: '4',
  vitocode: '152',
  partyName: 'Mr. Abc'
},
{

  billRefNo: '369',
  tokenNo: '553',
  mhead: '2154',
  cardexno: '4',
  billregno: '332',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Mar-2019',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik K Shah',
  district: 'Gandhinagar',
  ddono: '45',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-Jul-2019'
}];

@Component({
  selector: 'app-audit-bills-accountant',
  templateUrl: './audit-bills-accountant.component.html',
  styleUrls: ['./audit-bills-accountant.component.css']
})
export class AuditBillsAccountantComponent implements OnInit {
  ELEMENT_DATA: AuditorAccountant[] = [{

    billRefNo: '368',
    tokenNo: '552',
    mhead: '2054',
    cardexNo: '4',
    billRegNo: '331',
    billGrossAmount: '11000.00',
    billAmount: '10000.00',
    billType: 'Pay Bill',
    billDate: '25-Feb-2019 10:00 AM',
    inwardDate: '25-Feb-2019 11:00 AM',
    ddoName: '	Collector Office, Gandhinagar',
    billCat: 'Regular',
    authiorName: 'Shri Pratik Ramlal Shah',
    district: 'Gandhinagar',
    ddono: '4',
    vitocode: '152',
    partyName: 'Mr. Abc'
  },
  {

    billRefNo: '369',
    tokenNo: '553',
    mhead: '2154',
    cardexNo: '4',
    billRegNo: '332',
    billAmount: '10000.00',
    billGrossAmount: '11000.00',
    billType: 'Pay Bill',
    billDate: '25-Mar-2019 02:00 PM',
    ddoName: '  Collector Office, Gandhinagar',
    billCat: 'Regular',
    authiorName: 'Shri Pratik Ramlal Shah',
    district: 'Gandhinagar',
    ddono: '45',
    partyName: 'Mr. Abc',
    vitocode: '152',
    inwardDate: '25-Jul-2019 01:00 PM'
  }];
  // Date
  todayDate = new Date();
  // Form Group
  auditAccountantForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();

  majorheadCtrl: FormControl = new FormControl();
  // Variable
  isSearch: Boolean = true;
  valueRequired: Boolean = false;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo', 'tokenNo', 'billDate', 'inwardDate',
    'ddoNo', 'cardexNo', 'ddoName', 'billType', 'mhead', 'billCat', 'billGrossAmount', 'billAmount', 'partyName',
    'authiorName', 'action'];
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
  directiveObject = new PaoDirectives(this.router, this.dialog);
  ngOnInit() {
    this.auditAccountantFormData();
  }


  auditAccountantFormData() {
    this.auditAccountantForm = this.fb.group({
      BillRefNo: [''],
      billtype: [''],
      Tokenno: [''],
      majorhead: [''],
      // billtype: [''],
      cardexno: [''],
      Gorssamount: [''],
      ddoname: [''],
      billate: [''],
      district: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      billregno: [''],
      auditorctrl: ['1'],
      regNo: [''],
      BillFromDate: ['']
    });
  }
  FromDate(event) {
    const fromdate = this.auditAccountantForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }
  search() {
    this.isSearch = false;
  }
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
}
