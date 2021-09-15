import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, TokenStatus, InwardBill } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

const ELEMENT_DATA: InwardBill[] = [
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '368',
    lastUsedToken: '558',
    cardexNo: '4',
    billRegNo: '331',
    tokenNo: '10237',
    billGrossAmount: '11000.00',
    billAmount: '10000.00',
    billType: 'Pay Bill',
    billDate: '25/Feb/2019 05:00 PM',
    ddoNo: '4',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2054',
    billCat: 'Regular',
    authiorName: '',
    partyName: 'Mr. ABC',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  },
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '378',
    lastUsedToken: '558',
    cardexNo: '6',
    billRegNo: '341',
    tokenNo: '10245',
    billGrossAmount: '21000.00',
    billAmount: '15000.00',
    billType: 'TA Bill',
    billDate: '25/Mar/2019 01:00 PM',
    ddoNo: '6',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2354',
    billCat: 'TC',
    authiorName: '',
    partyName: 'Mr. XYZ',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  },
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '388',
    lastUsedToken: '558',
    cardexNo: '7',
    billRegNo: '351',
    tokenNo: '10257',
    billGrossAmount: '25000.00',
    billAmount: '20000.00',
    billType: 'Pay Bill',
    billDate: '25/June/2019 11:00 AM',
    ddoNo: '7',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2358',
    billCat: 'Regular',
    authiorName: '',
    partyName: 'Mr. EFG',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  },
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '398',
    lastUsedToken: '558',
    cardexNo: '8',
    billRegNo: '361',
    tokenNo: '10265',
    billGrossAmount: '17000.00',
    billAmount: '12000.00',
    billType: 'Advance Bill',
    billDate: '25/Feb/2020 04:00 PM',
    ddoNo: '8',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2362',
    billCat: 'Regular/Challan',
    authiorName: '',
    partyName: 'Mr. DEF',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  },
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '399',
    lastUsedToken: '558',
    cardexNo: '5',
    billRegNo: '371',
    tokenNo: '10268',
    billGrossAmount: '18000.00',
    billAmount: '10500.00',
    billType: 'Pay Bill',
    billDate: '25/Mar/2020 01:00 PM',
    ddoNo: '5',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2365',
    billCat: 'Regular',
    authiorName: '',
    partyName: 'Mr. IJK',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  },
  {
    billcontrol: '416/61/1804/368',
    billRefNo: '400',
    lastUsedToken: '558',
    cardexNo: '9',
    billRegNo: '381',
    tokenNo: '10300',
    billGrossAmount: '13000.00',
    billAmount: '10550.00',
    billType: 'Pay Bill',
    billDate: '25/May/2020 12:00 AM',
    ddoNo: '9',
    ddoName: 'Collector Office, Gandhinagar ',
    mhead: '2370',
    billCat: 'Regular',
    authiorName: '',
    partyName: 'Mr. MNO',
    chequeFromdate: '12-Dec-2019',
    chequeTodate: '12-Mar-2019',
  }
];
@Component({
  selector: 'app-inward-bill',
  templateUrl: './inward-bill.component.html',
  styleUrls: ['./inward-bill.component.css']
})
export class InwardBillComponent implements OnInit {
  // Variable
  isSearch: Boolean = true;
  myModel = true;
  public toggleButton = true;
  valueRequired: Boolean = false;
  dateFill: string;

  // Form Group
  inwardOnlineBillForm: FormGroup;
  // Form COntrol
  auditorctrl: FormControl = new FormControl();
  billcategoryCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  majorheadctrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  // Table SOurce
  newdisplayedColumns: string[] = ['select', 'billRefNo', 'billRegNo', 'tokenNo',
    'billDate', 'ddoNo', 'cardexNo', 'ddoName', 'billType', 'mhead', 'billCat', 'billGrossAmount',
    'billAmount', 'partyName', 'authiorName', 'action'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  // Lists
  dept_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '2', viewValue: 'Forest Department' },
    { value: '3', viewValue: 'Industries and Mines Department' }
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

  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // Check MUltiple checkbox
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
  // Push Data on CLick
  enable($event) {
    if (this.toggleButton === true) {
      this.toggleButton = false;
      const p_data = this.newdataSource.data;
      p_data.push({
        billcontrol: '416/61/1804/368',
        billRefNo: '368',
        lastUsedToken: '558',
        cardexNo: '4',
        billRegNo: '331',
        tokenNo: '10237',
        partyName: 'Mr. Abc',
        billGrossAmount: '11000.00',
        billAmount: '1000.00',
        billType: 'Pay Bill',
        billDate: '25/Feb/2019',
        ddoNo: '4',
        ddoName: 'Collector Office, Gandhinagar ',
        mhead: '2054',
        billCat: 'Regular',
        authiorName: ''
      });
      p_data.splice(this.newdataSource.data.length - 2, 1);
      this.newdataSource.data = p_data;
    } else {
      this.toggleButton = true;
    }
  }

  // Navigate
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }


  FromDate(event) {
    const fromdate = this.inwardOnlineBillForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(tokenrange, {
        width: '450px',
        height: '200px'
      });
    }, 100);


  }




  ngOnInit() {
    this.inwardOnlineBillFormData();
  }

  inwardOnlineBillFormData() {
    this.inwardOnlineBillForm = this.fb.group({
      Billrefernum: [''],
      tokenNo: [''],
      majorhead: [''],
      dept: [''],
      billType: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      billate: [''],
      netamount: [''],
      auditorname: [''],
      billcategory: [''],
      billRegNo: [''],
      auditorctrl: ['1'],
      grossamount: [''],
      BillFromDate: [''],

    });
  }

  search() {
    this.isSearch = false;
  }

  // vita Dialog Box

  vitadialogbox() {
    // tslint:disable-next-line: no-use-before-declare
    const mdialogRef = this.dialog.open(vitadialogComponent, {
      width: '500px',
      height: '200px'
    });
  }


}


// token-range-dialogbox
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'token-range-dialogbox',
  templateUrl: 'token-range-dialogbox.html',
})


export class tokenrange {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<tokenrange>
  ) { }
  vitocancel(): void {
    this.dialogRef.close();
  }

  goTo() {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/treasury-bill/counter-allocation-token']);
    }, 0);
  }
}
// vita-dialog
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vita-dialog',
  templateUrl: 'vita-dialog.html',
})

// tslint:disable-next-line:class-name
export class vitadialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<vitadialogComponent>
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
