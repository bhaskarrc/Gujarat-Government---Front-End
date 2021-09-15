// tslint:disable-next-line:max-line-length
import { AuditBillsAccountantDialogComponent } from './../../audit/dialog/audit-bills-accountant-dialog/audit-bills-accountant-dialog.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { PartyDetailsComponent } from '../party-details/party-details.component';
import { ChequePrepration, ListValue } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-cheque-prepration',
  templateUrl: './cheque-prepration.component.html',
  styleUrls: ['./cheque-prepration.component.css']
})
export class ChequePreprationComponent implements OnInit {
  // Lists
  Element_Data: ChequePrepration[] =
    [
      {
        refNo: '3',
        regNo: '251',
        billInwardDate: '27-Jul-2019 10:00 AM',
        tokenNo: '2000',
        majorHead: '2071',
        billType: 'Death Cum Retirement Gratuity',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Collector Officer, Bhuj ',
        billDate: '27-Jul-2019 11:00 AM',
        billAmount: '2564.00',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: 'Radha Hanshraja',
        billGrossAmount: '5578.00',
        status: 'Pending'
      },

      {
        refNo: '4',
        tokenNo: '10115',
        regNo: '252',
        billInwardDate: '28-Jul-2019 01:00 PM',
        majorHead: '2071',
        billType: 'Pension Bill',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Dist. Treasury Officer, Bhuj',
        billDate: '7-Apr-2018 02:00 PM',
        billAmount: '102.00',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: 'ZalakDevi ',
        billGrossAmount: '3500.00',
        status: 'Pending'
      },

      {
        refNo: '4',
        tokenNo: '2001',
        majorHead: '2071',
        regNo: '255',
        billInwardDate: '29-Jul-2019 05:00 PM',
        billType: 'Commutation Value Of Pension',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Dist. Treasury Officer, Bhuj',
        billDate: '27-Jul-2019 11:00 AM',
        billAmount: '7541.00',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: ' Multiple Party',
        billGrossAmount: '8147.00',
        status: 'Pending'
      },


      {
        refNo: '7',
        tokenNo: '1120',
        regNo: '258',
        billInwardDate: '30-Jul-2019 01:25 PM',
        majorHead: '2071',
        billType: 'Grant In Aid Others',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Collect Officer, Bhuj',
        billDate: '19-Jul-2019 10:00 AM',
        billAmount: '3657.00',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: 'Kanchan S',
        billGrossAmount: '5421.00',
        status: 'Pending'
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
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];
  billtype_list: ListValue[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }
  ];
  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];

  // Table Source
  displayedColumns: string[] = ['checkBox', 'refNo', 'regNo', 'tokenNo', 'billDate',
    'billInwardDate', 'ddoNo', 'cardexNo', 'ddo', 'billType', 'majorHead', 'category',
    'billGrossAmount', 'billAmount', 'party', 'auditor', 'action'];
  // Form Group
  searchListForm: FormGroup;
  chequePreparationForm: FormGroup;
  // Form Control
  majorheadctrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  // Variable
  selectedAll: Boolean = false;
  // Date
  todayDate = Date.now();
  _onDestroy = new Subject<void>();
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



  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.chequePreparationForm = this.fb.group({
      refNumber: [''],
      tokenNumber: [''],
      majorHead: [''],
      billType: [''],
      ddoNumber: [''],
      cardex: [''],
      ddo: [''],
      bDate: [''],
      billAmount: [''],
      auditor: [''],
      category: [''],
      party: [''],
      billgrossAmount: [''],
      regNo: ['']

    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(AuditBillsAccountantDialogComponent, {
        width: '1200px'
      });
    }, 100);
  }

  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
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
    this.chequePreparationForm.reset();
  }

  search() {
    this.showTable = true;
  }

}






