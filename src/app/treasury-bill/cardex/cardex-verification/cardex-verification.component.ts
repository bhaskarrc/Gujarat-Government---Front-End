import { AuditBillsAccountantDialogComponent } from './../../audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from '../../cheque/party-details/party-details.component';
import { CardexVerification, ListValue } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';





@Component({
  selector: 'app-cardex-verification',
  templateUrl: './cardex-verification.component.html',
  styleUrls: ['./cardex-verification.component.css']
})
export class CardexVerificationComponent implements OnInit {
  Element_Data: CardexVerification[] = [
    {

      billRefNo: '368',
      tokenNo: '552',
      mhead: '2054',
      ddoNo: '4',
      cardexNo: '4',
      billRegNo: '331',
      billAmount: '10000.00',
      billGrossAmount: '11000.00',
      billType: 'Pay Bill',
      billDate: '25-Feb-2019 11:00 AM',
      inwardDate: '25-Feb-2019 05:00 PM',
      ddoName: '	collector Office, Gandhinagar',
      billCat: 'Regular',
      // authiorname: '',
      partyName: 'Mr. Abc',
      approverName: 'Mr.Pratik Ramlal Shah'
    }
  ];
  // Form Group
  cardexBillForm: FormGroup;
  // Form Conreol
  ddonameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  forwardauthoCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Variable
  isSearch: Boolean = true;
  valueRequired: Boolean = false;
  // Table Source
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo',
    'tokenNo', 'billDate', 'inwardDate', 'ddoNo', 'cardexNo', 'ddoName',
    'billType', 'mhead', 'billCat', 'billGrossAmount', 'billAmount', 'partyName', 'approverName', 'sign', 'signature', 'action'];
  newdataSource = new MatTableDataSource<any>(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  // List

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: 'Collector Office, Gandhinagar' },
  ];

  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  signs_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
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

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(AuditBillsAccountantDialogComponent, {
        width: '1200px'
      });
    }, 100);
  }
  // Navigate
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
  opendialog() {
    const dialogRef = this.dialog.open(signatureDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }


  submitToNextLevel() {
    this.router.navigate(['/treasury-bill/token-print']);
  }
  goToDashboard() {
    this.router.navigate(['/treasury-bill/inward-bill']);
  }
  cardexFormData() {
    this.cardexBillForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      billtypes: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      billate: [''],
      regBill: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      forwardautho: [''],
      billRegNo: [''],
      auditorctrl: ['1'],
      signsctrl: ['1'],
      gorssamount: [''],
      BillFromDate: ['']
    });
  }
  FromDate(event) {
    const fromdate = this.cardexBillForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }

  search() {
    this.isSearch = false;
  }


}

// vita-dialog
@Component({
  selector: 'signature-dialog',
  templateUrl: 'signature-dialog.html',
})

export class signatureDialog {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<signatureDialog>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }
  print() {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/treasury-bill/vitoReport']);
    }, 0);
  }


}
