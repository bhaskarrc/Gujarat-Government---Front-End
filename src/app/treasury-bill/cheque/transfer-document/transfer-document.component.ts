
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ListValue, TransferDocument } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';


@Component({
  selector: 'app-transfer-document',
  templateUrl: './transfer-document.component.html',
  styleUrls: ['./transfer-document.component.css']
})
export class TransferDocumentComponent implements OnInit {
  valueRequired: Boolean = false;
  selectedAll: Boolean = false;
  // Table Content
  Element_Data: TransferDocument[] =
    [

      {
        refNo: '7',
        tokenNo: '1110',
        majorHead: '2071',
        billType: 'Grant In Aid Others',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Collector Office, Gandhinagr',
        billDate: '19-Apr-2019 11:00 AM',
        netGrossAmount: '10000.00',
        netAmount: '1000.00',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        status: 'Pending'
      },
    ];

  // Lists
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

  hierarchy_list: ListValue[] = [
    { value: '1', viewValue: 'Bill Processing PAO Gandhinagar Office' },
    { value: '2', viewValue: 'MLA Bill Processing PAO Gandhinagar Office' },
  ];

  levelctrl_list: ListValue[] = [
    { value: '1', viewValue: 'Auditory Authority' },
    { value: '2', viewValue: 'Cardex Authority' },

  ];

  selectUser_list: ListValue[] = [
    { value: '1', viewValue: 'Pratik K Shah [District Treasury Officer]' },
    { value: '1', viewValue: 'D V DAVDA [Sub Accountant]' },
    { value: '2', viewValue: 'P P Sodha [Sub Accountant]' },

  ];

  selectToUser_list: ListValue[] = [
    { value: '1', viewValue: 'Pratik K Shah [District Treasury Officer]' },
    { value: '1', viewValue: 'D V DAVDA [Sub Accountant]' },
    { value: '2', viewValue: 'P P Sodha [Sub Accountant]' },

  ];


  ddoname_list: any = [
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

  displayedColumns: string[] = ['checkBox', 'refNo', 'tokenNo', 'billDate', 'ddoNo', 'cardexNo',
    'ddo', 'billType', 'majorHead', 'category', 'netGrossAmount', 'netAmount',
    'auditor', 'action'];
  // Form Group
  searchListForm: FormGroup;
  transferDocumentForm: FormGroup;
  transferDocumentForm1: FormGroup;
  // Form Control
  majorheadctrl: FormControl = new FormControl();
  hierarchyctrl: FormControl = new FormControl();
  levelctrl: FormControl = new FormControl();
  selectUserctrl: FormControl = new FormControl();
  selectToUserctrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.transferDocumentForm = this.fb.group({
      refNumber: [''],
      tokenNumber: [''],
      majorHead: [''],
      billType: [''],
      ddoNumber: [''],
      netGrossAmount: [''],
      cardex: [''],
      ddo: [''],
      bDate: [''],
      netAmount: [''],
      auditor: [''],
      category: [''],
      BillFromDate: [''],
    });

    this.transferDocumentForm1 = this.fb.group({
      hierarchy: [''],
      level: [''],
      selectUser: [''],
      selectToUser: [''],

    });
  }

  FromDate(event) {
    const fromdate = this.transferDocumentForm.get('BillFromDate').value;
    if (fromdate != '') {
      this.valueRequired = true;
    }
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
    this.transferDocumentForm.reset();
  }

  search() {
    this.showTable = true;
  }
  // Navigation
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }

}
