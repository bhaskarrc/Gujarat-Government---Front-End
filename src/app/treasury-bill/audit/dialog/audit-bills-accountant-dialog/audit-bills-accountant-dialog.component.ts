import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from 'src/app/treasury-bill/workflow-details-grant/workflow-details-grant.component';
import { PartyDetailsComponent } from 'src/app/treasury-bill/cheque/party-details/party-details.component';

const ELEMENT_DATA: any[] = [{

  billrefno: '368',
  tokenno: '552',
  mhead: '2054',
  cardexno: '4',
  billregno: '331',
  billgrossamount: '11000.00',
  billamount: '10000.00',
  billtype: 'Pay Bill',
  billdate: '25-Feb-2019  11:00 AM',
  inwardDate: '25-Feb-2019 05:00 PM',
  ddoname: '	Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  vitocode: '152',
  partyName: 'Mr. Abc'
},
{

  billrefno: '369',
  tokenno: '553',
  mhead: '2154',
  cardexno: '4',
  billregno: '332',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Mar-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-Jul-2019 05:00 PM',
},
{

  billrefno: '370',
  tokenno: '554',
  mhead: '2254',
  cardexno: '4',
  billregno: '333',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Apr-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-Jun-2019 05:00 PM',
},
{

  billrefno: '371',
  tokenno: '555',
  mhead: '2260',
  cardexno: '4',
  billregno: '334',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-May-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '27-July-2019 05:00 PM',
},
{

  billrefno: '372',
  tokenno: '557',
  mhead: '2266',
  cardexno: '4',
  billregno: '336',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Aug-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '25-Aug-2019 05:00 PM',
},
{

  billrefno: '373',
  tokenno: '558',
  mhead: '2268',
  cardexno: '4',
  billregno: '337',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Aug-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '28-Aug-2019 05:00 PM',
},
{

  billrefno: '374',
  tokenno: '559',
  mhead: '2270',
  cardexno: '4',
  billregno: '338',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '25-Aug-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '01-Sep-2019 05:00 PM',
},
{

  billrefno: '375',
  tokenno: '560',
  mhead: '2272',
  cardexno: '4',
  billregno: '339',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '02-Sep-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '02-Sep-2019 05:00 PM',
},
{

  billrefno: '376',
  tokenno: '561',
  mhead: '2274',
  cardexno: '4',
  billregno: '340',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '02-Sep-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '08-Sep-2019 05:00 PM',
},
{

  billrefno: '377',
  tokenno: '562',
  mhead: '2276',
  cardexno: '4',
  billregno: '341',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '03-Sep-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '10-Sep-2019 05:00 PM',
},
{

  billrefno: '378',
  tokenno: '563',
  mhead: '2277',
  cardexno: '4',
  billregno: '342',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '11-Sept-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '11-Sept-2019 05:00 PM',
},
{

  billrefno: '379',
  tokenno: '564',
  mhead: '2278',
  cardexno: '4',
  billregno: '343',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '12-Sept-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '14-Sept-2019 05:00 PM',
},
{

  billrefno: '380',
  tokenno: '565',
  mhead: '2279',
  cardexno: '4',
  billregno: '344',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '16-Sept-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '26-Sept-2019 05:00 PM',
},
{

  billrefno: '381',
  tokenno: '566',
  mhead: '2280',
  cardexno: '4',
  billregno: '345',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '18-Sept-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '30-Sept-2019 05:00 PM',
},
{

  billrefno: '382',
  tokenno: '567',
  mhead: '2282',
  cardexno: '4',
  billregno: '346',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '2-Oct-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '2-Oct-2019 05:00 PM',
},
{

  billrefno: '383',
  tokenno: '568',
  mhead: '2284',
  cardexno: '4',
  billregno: '347',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '5-Oct-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '8-Oct-2019 05:00 PM',
},
{

  billrefno: '384',
  tokenno: '569',
  mhead: '2286',
  cardexno: '4',
  billregno: '348',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '9-Oct-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '12-Oct-2019 05:00 PM',
},
{

  billrefno: '385',
  tokenno: '570',
  mhead: '2288',
  cardexno: '4',
  billregno: '349',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '12-Oct-2019 11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '14-Oct-2019 05:00 PM',
},
{

  billrefno: '386',
  tokenno: '571',
  mhead: '2290',
  cardexno: '4',
  billregno: '350',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '15-Oct-2019   11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '18-Oct-2019  05:00 PM',
},
{

  billrefno: '387',
  tokenno: '572',
  mhead: '2291',
  cardexno: '4',
  billregno: '351',
  billamount: '10000.00',
  billgrossamount: '11000.00',
  billtype: 'Pay Bill',
  billdate: '18-Oct-2019  11:00 AM',
  ddoname: '  Collector Office, Gandhinagar',
  billcat: 'Regular',
  authiorname: 'Shri Pratik Ramlal Shah',
  district: 'Gandhinagar',
  ddono: '4',
  partyName: 'Mr. Abc',
  vitocode: '152',
  inwardDate: '01-Nov-2019 05:00 PM',
}];

@Component({
  selector: 'app-audit-bills-accountant',
  templateUrl: './audit-bills-accountant-dialog.component.html',
  styleUrls: ['./audit-bills-accountant-dialog.component.css']
})
export class AuditBillsAccountantDialogComponent implements OnInit {

  auditAccountantForm: FormGroup;
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();

  majorheadCtrl: FormControl = new FormControl();
  isSearch: Boolean = true;
  // tslint:disable-next-line: max-line-length
  auditor_list: any[] = [{
    value: '1',
    viewValue: 'Shri. Pratik Shah'
  },

  ];


  major_list: any[] = [
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


  billcategory_list: any[] = [{
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
  billtype_list: any[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];
  // tslint:disable-next-line: max-line-length
  newdisplayedColumns: string[] = ['select', 'billrefno', 'billregno', 'tokenno', 'billdate', 'inwardDate', 'ddono', 'cardexno', 'ddoname', 'billtype', 'mhead', 'billcat', 'billgrossamount', 'billamount', 'partyName', 'authiorname'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, public dialogRef: MatDialogRef<AuditBillsAccountantDialogComponent>) { }
  ngOnInit() {
    this.newdataSource.paginator = this.paginator;
    this.auditAccountantFormData();
  }


  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(PartyDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  auditAccountantFormData() {
    this.auditAccountantForm = this.fb.group({
      BillRefNo: [''],
      Tokenno: [''],
      majorhead: [''],
      billtype: [''],
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
      regNo: ['']
    });
  }

  search() {
    this.isSearch = false;
  }
  workflowDetails() {
    // const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
    //   width: '1200px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
  onClose(): void {
    this.dialogRef.close('onClose');
  }
}
