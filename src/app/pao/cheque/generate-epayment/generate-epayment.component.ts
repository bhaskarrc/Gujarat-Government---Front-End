
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from '../../party-details/party-details.component';
@Component({
  selector: 'app-generate-epayment',
  templateUrl: './generate-epayment.component.html',
  styleUrls: ['./generate-epayment.component.css']
})
export class GenerateEpaymentComponent implements OnInit {
  selectedAll: Boolean = false;
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  printedChequeForm: FormGroup;

  ELEMENT_DATA: any[] =
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
        inwardDate: '25-Feb-2019',
        officeName: 'Collector Office, Gandhinagar',
        billDate: '01-Mar-2019',
        partyName: 'Pay of Officers',
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
        inwardDate: '25-Feb-2019',
        officeName: 'District Treasury Office, Gandhinagar',
        billDate: '01-Mar-2019',
        partyName: 'Mr. ABC',
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
        inwardDate: '25-Feb-2019',
        officeName: 'Collector Office, Gandhinagar',
        billDate: '01-Mar-2019',
        partyName: 'Pay of Officers',
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
        inwardDate: '25-Feb-2019',
        officeName: 'District Treasury Office, Gandhinagar',
        billDate: '01-Mar-2019',
        partyName: 'Mr. ABC',
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


  displayedColumns: string[] = ['checkBox', 'refNo', 'regNo', 'tokenNo', 'epaymentCode',
    'billDate', 'inwardDate', 'ddoNo', 'cardexNo', 'officeName', 'billType',
    'majorHead', 'category', 'billgrossAmount', 'billAmount', 'partyName', 'cheque', 'auditor',
  ];



  searchListForm: FormGroup;
  ddonameCtrl: FormControl = new FormControl();

  todayDate = Date.now();
  auditor_list: any[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  },
  ];

  billtype_list: any[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];


  billcategory_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }
  ];


  major_list: any[] = [{
    value: '1',
    viewValue: '2011'
  },
  {
    value: '2',
    viewValue: '2012'
  },
  {
    value: '3',
    viewValue: '2014'
  },
  {
    value: '3',
    viewValue: '2029'
  },
  {
    value: '3',
    viewValue: '2030'
  },
  {
    value: '3',
    viewValue: '2039'
  },
  {
    value: '3',
    viewValue: '2040'
  },
  {
    value: '4',
    viewValue: '2015'
  }
  ];

  stroy = new Subject<void>();

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

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
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }


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
      auditorname: [''],
      billcategory: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      Tokenno: [''],
      regBill: ['']

    });
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





  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(PartyDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  submitDetails() {
  }

}




