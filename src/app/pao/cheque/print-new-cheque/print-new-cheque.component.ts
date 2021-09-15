import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { PrintNewCheque } from 'src/app/model/treasury-bill';

@Component({
  selector: 'app-print-new-cheque',
  templateUrl: './print-new-cheque.component.html',
  styleUrls: ['./print-new-cheque.component.css']
})
export class PrintNewChequeComponent implements OnInit {
  // Form Group
  chequePrintinglistForm: FormGroup;
  // variable
  chequeprint = false;
  // Lists
  ELEMENT_DATA: PrintNewCheque[] = [{
    party: 'CHANDRESHWAR VISHWANATH BHAGAT',
    billAmount: '397790.00',
    fromDate: '18-Feb-2020',
    Todate: '19-May-2020'
  },

  ];
  // table data source
  displayedColumns: string[] = ['checkBox', 'srno', 'billAmount', 'party', 'fromDate', 'Todate'
  ];

  startingCheque_list: any[] = [{
    value: '1',
    viewValue: 'TRY61-286971'
  },];

  format_list: any[] = [{
    value: '1',
    viewValue: 'CTS2010'
  },

  ];


  selectedAll = false;
  stroy = new Subject<void>();

  dataSource = new MatTableDataSource<PrintNewCheque>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;

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

  directiveObject = new PaoDirectives(this.router, this.dialog);


  ngOnInit() {
    this.chequePrintingFormData();
  }

  chequePrintingFormData() {

    this.chequePrintinglistForm = this.fb.group({
      startingCheque: ['1'],
      format: ['1'],
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  printg() {
    this.chequeprint = true;
  }
}
