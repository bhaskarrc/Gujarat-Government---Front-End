// tslint:disable-next-line: max-line-length
import { AuditBillsAccountantDialogComponent } from './../../audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-generate-epayment',
  templateUrl: './generate-epayment.component.html',
  styleUrls: ['./generate-epayment.component.css']
})
export class GenerateEpaymentComponent implements OnInit {
  // Form Group
  searchListForm: FormGroup;
  valueRequired: Boolean = false;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  // Form Group
  printedChequeForm: FormGroup;
  // Lists
  Element_Data: any[] =
    [
      {
        refNo: '1',
        tokenNo: '5558',
        epaymentCode: '1020003',
        majorHead: '2054',
        billType: 'Pay Bill',
        cardexNo: '4',
        ddoNo: '115',
        cheque: '50.00',
        regNo: '555',
        inwardDate: '25-Feb-2019 10:00 AM',
        officeName: 'Collector Office, Gandhinagar',
        billDate: '01-Mar-2019 11:00 AM',
        partyName: 'Pay of Officers',
        lastEpayCode: '221212',
        billAmount: '1000.00',
        auditor: 'Mr. A M Joshi',
        billgrossAmount: '9100.00',
        category: 'Regular',
        status: 'Pending'
      },


      {
        refNo: '2',
        tokenNo: '5531',
        epaymentCode: '1020004',
        majorHead: '2054',
        billType: 'Pay Bill',
        cardexNo: '4',
        ddoNo: '115',
        cheque: '50.00',
        regNo: '552',
        inwardDate: '25-Feb-2019 01:00 PM',
        officeName: 'District Treasury Office, Gandhinagar',
        billDate: '01-Mar-2019 02:00 PM',
        partyName: 'Mr. ABC',
        lastEpayCode: '221212',
        billAmount: '2400.00',
        auditor: 'Mr. Y M Joshi',
        billgrossAmount: '9100.00',
        category: 'Regular',
        status: 'Pending'
      },

      {
        refNo: '3',
        tokenNo: '5522',
        epaymentCode: '1020005',
        majorHead: '2054',
        billType: 'Pay Bill',
        cardexNo: '4',
        ddoNo: '115',
        cheque: '50.00',
        regNo: '553',
        inwardDate: '25-Feb-2019 10:00 AM',
        officeName: 'Collector Office, Gandhinagar',
        billDate: '01-Mar-2019 11:00 AM',
        partyName: 'Pay of Officers',
        lastEpayCode: '221212',
        billAmount: '1000.00',
        auditor: 'Mr. pratik Joshi',
        billgrossAmount: '9100.00',
        category: 'Regular',
        status: 'Pending'
      },

      {
        refNo: '4',
        tokenNo: '5521',
        epaymentCode: '1020006',
        majorHead: '2054',
        billType: 'Pay Bill',
        cardexNo: '4',
        ddoNo: '115',
        cheque: '50.00',
        regNo: '554',
        inwardDate: '25-Feb-2019 11:30 AM',
        officeName: 'District Treasury Office, Gandhinagar',
        billDate: '01-Mar-2019 09:00 AM',
        partyName: 'Mr. ABC',
        lastEpayCode: '221212',
        billAmount: '5742.00',
        billgrossAmount: '9100.00',
        auditor: 'Mr. Pratik K shah',
        category: 'Regular',
        status: 'Pending'
      },

    ];
  ddoname_list: any = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];

  todayDate = Date.now();


  auditor_list: any[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billtype_list: any[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];


  billcategory_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
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
  // Table Source

  displayedColumns: string[] = ['checkBox', 'epaymentCode', 'refNo', 'regNo', 'tokenNo',
    'billDate', 'inwardDate', 'ddoNo', 'cardexNo', 'officeName', 'billType', 'majorHead',
    'category', 'billgrossAmount', 'billAmount', 'partyName', 'cheque', 'auditor', 'action'
  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Variables
  stroy = new Subject<void>();
  private paginator: MatPaginator;
  private sort: MatSort;
  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  selectedAll: Boolean = false;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
  ) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);


  ngOnInit() {
    this.printedChequeFormData();
  }

  printedChequeFormData() {
    this.printedChequeForm = this.fb.group({
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      billamount: [''],
      netamount: [''],
      partyName: [''],
      lastEpayCode: [''],
      auditorname: [''],
      billcategory: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      Tokenno: [''],
      regBill: [''],
      BillFromDate: [''],
    });
  }

  FromDate(event) {
    const fromdate = this.printedChequeForm.get('BillFromDate').value;
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


}




