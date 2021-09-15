import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { ListValue, BillForCorrection } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-bill-for-correction',
  templateUrl: './bill-for-correction.component.html',
  styleUrls: ['./bill-for-correction.component.css']
})
export class BillForCorrectionComponent implements OnInit {

  ELEMENT_DATA: BillForCorrection[] = [
    {
      billrefNo: '368',
      tokenNo: '552',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billregno: '331',
      billAmount: '6000.00',
      billGrossAmount: '15000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      authiorName: ''
    }
  ];
  // Date
  todayDate = new Date();
  // Form Group
  cardexBillForm: FormGroup;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  forwardauthoCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Variable
  isSearch: Boolean = true;
  valueRequired: Boolean = false;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billrefNo', 'tokenNo',
    'billDate', 'ddoNo', 'cardexNo', 'ddoName', 'billType', 'mhead', 'billCat',
    'billGrossAmount', 'billAmount', 'authiorName', 'action'];

  newdataSource = new MatTableDataSource<BillForCorrection>(this.ELEMENT_DATA);

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: 'Collector Office, Gandhinagar' },
  ];

  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  signs_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
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

  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  forward_list: ListValue[] = [
    { value: '1', viewValue: 'Authority' },

  ];

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.cardexFormData();
  }

  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }

  submitToNextLevel() {
    this.router.navigate(['/treasury-bill/token-print']);
  }
  goToDashboard() {
    this.router.navigate(['/treasury-bill/inward-bill']);
  }
  // Cardex Form Data FUnction Navigation
  cardexFormData() {
    this.cardexBillForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      forwardautho: [''],
      billregno: [''],
      auditorctrl: ['1'],
      signsctrl: ['1'],
      gorssamount: [''],
      BillFromDate: [''],
    });
  }
  FromDate(event) {
    const fromdate = this.cardexBillForm.get('BillFromDate').value;
    if (fromdate !== '') {
      this.valueRequired = true;
    }
  }

  // Search function
  search() {
    this.isSearch = false;
  }
}
