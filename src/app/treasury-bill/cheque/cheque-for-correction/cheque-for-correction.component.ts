import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { CancleChequeComponent } from './cancle-cheque/cancle-cheque.component';
import { ListValue, ChequeForCorrection, ChequeDetailForCorrection } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';




@Component({
  selector: 'app-cheque-for-correction',
  templateUrl: './cheque-for-correction.component.html',
  styleUrls: ['./cheque-for-correction.component.css']
})
export class ChequeForCorrectionComponent implements OnInit {
  ELEMENT_DATA: ChequeForCorrection[] = [
    {
      tokenNo: '5124',
      inwardDate: '19-Feb-2020 01:00 AM',
      requestStatus: 'Open',
      chequeNo: 'PAOGNR-436287',
      chequeNo1: 'PAOGNR-436288',
      chequeStatus: 'open',
      chequeStatus1: 'open'
    },
  ];

  DetailsELEMENT_DATA: ChequeDetailForCorrection[] = [
    {
      chequeFromDate: '12-Dec-2019 10:00AM',
      chequeTodate: '12-Mar-2020 11:40AM',
      cardexNo: '4',
      inwardDate: '19-Feb-2020 11:00AM',
      dispatchDate: '19-Feb-2020 11:59 AM',
      billNetAmount: '90000.00',
      chequeAmount: '90000.00',
      chequeAmount1: '9000.00',
      requestStatus: 'Open',
      chequeNo: 'PAOGNR-436287',
      chequeNo1: 'PAOGNR-436288',
      chequeStatus: 'open',
      partyName: 'JANK',
      partyName1: 'TANK',
      chequeStatus1: 'open'
    },
  ];
  // Variable
  isSearch: Boolean = false;
  isSubmitted = false;
  // Form Group
  inwarChequeForm: FormGroup;
  chequepreprationForm: FormGroup;
  // Form Control
  chequetypeCtrl: FormControl = new FormControl();
  auditorctrl: FormControl = new FormControl();
  billcategoryCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  // Table Soure
  newdisplayedColumns: string[] = ['srno', 'tokenNo', 'inwardDate', 'requestStatus', 'chequeNo', 'discard', 'chequeStatus', 'discardReq'];
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  detailsnewdisplayedColumns: string[] = ['srno', 'inwardDate', 'cardexNo', 'dispatchDate', 'billNetAmount', 'chequeNo',
    'partyName', 'chequeAmount', 'chequeFromDate', 'chequeTodate'];
  detailsnewdataSource = new MatTableDataSource<any>(this.DetailsELEMENT_DATA);
  // List
  action_list: ListValue[] = [
    { value: '1', viewValue: 'Cancel' },
    { value: '2', viewValue: 'Duplicate' },

  ];

  auditor_list: ListValue[] = [
    { value: '1', viewValue: 'Shri. Pratik Shah' },
  ];

  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
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

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];

  ddoname_list: any = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];
  acountShortname_list: ListValue[] = [
    { value: '1', viewValue: 'PAOGNR' },
  ];


  cheque_list: ListValue[] = [
    { value: '1', viewValue: 'CTS2010' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // Form  Inward cheque Validate
  inwarChequeData() {
    this.inwarChequeForm = this.fb.group({
      Tokenno: ['5112', Validators.required],
      cardexno: ['4', Validators.required],
      chequetype: ['1'],
      chequepayment: [''],
      actionstype: ['1'],
      acountShortname: ['1']
    });
  }

  ngOnInit() {
    this.inwarChequeData();
    this.chequepreprationFormFormData();
  }
  // Form   cheque Prepration Validate
  chequepreprationFormFormData() {
    this.chequepreprationForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      billtype: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      billregno: [''],
      auditorctrl: ['1'],
      grossamount: [''],
      chequeamount: [''],
      chequeno: [''],
      discardReq: ['']

    });
  }
  // add row newdata source
  addrow() {
    this.newdataSource.data.push(['srno', 'chequepayment', 'actionstype', 'action']);
    this.newdataSource = new MatTableDataSource(this.newdataSource.data);
  }
  // delete row newdata source
  delete(element) {
    this.newdataSource.data.splice(element, 1);
    this.newdataSource = new MatTableDataSource(this.newdataSource.data);
  }

  billDetails() {
    this.isSearch = true;
  }
  // cancel cheque 
  discard() {
    const dialogRef = this.dialog.open(CancleChequeComponent, {
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  rename() {

  }

}

