
// tslint:disable-next-line: max-line-length
import { AuditBillsAccountantDialogComponent } from './../../audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../party-details/party-details.component';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { ListValue, EpaymentCustody } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-epayment-in-custody',
  templateUrl: './epayment-in-custody.component.html',
  styleUrls: ['./epayment-in-custody.component.css']
})
export class EpaymentInCustodyComponent implements OnInit {



  epaymentCustodyForm: FormGroup;
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  valueRequired: Boolean = false;
  Element_Data: EpaymentCustody[] =
    [
      {
        billNo: '156',
        ePayment: 'TRY61-382932',
        ePaymentAmount: '100.00',
        regNo: '554',
        inwardDate: '25-Feb-2019 11:00 AM',
        billDate: '01-Mar-2019 10:00 AM',
        partyName: 'Chandreshwar Vishwanath Bhagat	',
        tokenNo: '551',
        billAmount: '100.00',
        billType: 'Pay Bill',
        ddoNo: '115',
        cardex: '4',
        billGrossAmount: '900.00',
        majorHead: '2054',
        category: 'Regular',
        officeName: 'Collector Office, Gandhinagar',
        exempted: 'Yes',
      },

      {
        billNo: '56',
        ePayment: 'TRY61-382932',
        ePaymentAmount: '100.00',
        regNo: '555',
        inwardDate: '25-Feb-2019 09:00 AM',
        billDate: '01-Mar-2019 11:40 AM',
        partyName: 'Mr. A M Joshi',
        tokenNo: '551',
        billAmount: '2540.00',
        billGrossAmount: '3574.00',
        billType: 'Pay Bill',
        ddoNo: '115',
        cardex: '4',
        majorHead: '2054',
        category: 'Regular',
        officeName: 'Collector Office, Gandhinagar',
        exempted: 'No',
      },

      {
        billNo: '1',
        ePayment: 'TRY61-382932',
        ePaymentAmount: '100.00',
        billGrossAmount: '3650.00',
        tokenNo: '551',
        officeName: 'Collector Office, Gandhinagar',
        billAmount: '1540.00',
        billType: 'Pay Bill',
        ddoNo: '115',
        cardex: '4',
        majorHead: '2054',
        category: 'Regular',
        exempted: 'Yes',
        regNo: '558',
        inwardDate: '25-Feb-2019 11:00 AM',
        billDate: '01-Mar-2019 10:00 AM',
        partyName: 'Mr. ABC',
      },
    ];
  ddoname_list: any = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];

  displayedColumns: string[] = ['checkBox', 'billNo', 'regNo', 'tokenNo',
    'ePayment', 'partyName', 'ePaymentAmount',
    'billDate', 'inwardDate', 'ddoNo', 'cardex', 'officeName', 'billType',
    'majorHead', 'category', 'billGrossAmount', 'billAmount', 'action'];



  searchListForm: FormGroup;
  ddonameCtrl: FormControl = new FormControl();

  todayDate = Date.now();
  selectedAll: Boolean = false;


  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];


  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];


  major_list: ListValue[] = [{ value: '1', viewValue: '3451:Secretariat-Economic Services' },
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

  exempted_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  stroy = new Subject<void>();

  dataSource = new MatTableDataSource<any>(this.Element_Data);

  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.epaymentCustodyFormData();
  }

  epaymentCustodyFormData() {
    this.epaymentCustodyForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      billamount: [''],
      netamount: [''],
      partyName: [''],
      auditorname: [''],
      billcategory: [''],
      billtypes: [''],
      ddoNo: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      Tokenno: [''],
      regBill: [''],
      BillFromDate: [''],


    });
  }


  FromDate(event) {
    const fromdate = this.epaymentCustodyForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(AuditBillsAccountantDialogComponent, {
        width: '1200px'
      });
    }, 100);
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  clearForm() {
    this.searchListForm.reset();
  }

  search() {
    this.showTable = true;
  }

  goToInwardAudit() {
    this.router.navigate(['../inward/inward-physical-bill-audit-level']);

  }

}




