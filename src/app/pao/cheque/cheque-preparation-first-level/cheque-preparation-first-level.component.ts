import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/paoModel';
import { TypeChequePrepration, ChequePreprationFirstLevel } from 'src/app/model/treasury-bill';
@Component({
  selector: 'app-cheque-preparation-first-level',
  templateUrl: './cheque-preparation-first-level.component.html',
  styleUrls: ['./cheque-preparation-first-level.component.css']
})
export class ChequePreparationFirstLevelComponent implements OnInit {
  // Form Group
  chequePreparationFirstLevelForm: FormGroup;
  billInformationForm: FormGroup;
  searchListForm: FormGroup;
  // List
  ELEMENT_DATA: ChequePreprationFirstLevel[] =
    [
      {
        billNo: '45456645545',
        tokenNo: '2065',
        majorHead: '2054',
        billGrossAmount: '500.00',
        billAmount: '450.00',
        netAmount: '400.00',
        billRegNo: '545',

        billInwardDate: '29-Jul-2019',
        billType: 'Commutation Value Of Pension',
        cardexNo: '4',
        ddoNo: '416',
        ddo: 'Dist. Treasury Officer, Bhuj',
        billDate: '27-Jul-2019',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: ' Multiple Party',
        status: 'Pending'
      },
      {
        billNo: '789531216586',
        tokenNo: '5130',
        majorHead: '2057',
        billGrossAmount: '800.00',
        billAmount: '750.00',
        netAmount: '700.00',
        billRegNo: '45758',

        billInwardDate: '9-Jul-2019',
        billType: 'General provident fund',
        cardexNo: '4',
        ddoNo: '516',
        ddo: 'Dist. Treasury Officer, Bhuj',
        billDate: '20-Jul-2019',
        auditor: 'Shri Pratik k Shah ',
        category: 'Regular',
        party: ' Multiple Party',
        status: 'Pending'
      },
    ];

  ELEMENT_DATA1: TypeChequePrepration[] = [
    {

      type: '',
      partyMaster: 'DIST.TREASURY OFFICER,BHUJ',
      accountNumber: '',
      chequeAmount: '',
      remchequeAmount: '',
      status: 'Pending',

    }
  ];

  auditor_list: ListValue[] = [
    { value: '1', viewValue: 'DDO Cheque' },
    { value: '2', viewValue: 'Party Cheque' },

  ];
  // DAte
  todayDate = Date.now();

  _onDestroy = new Subject<void>();

  // Table Source
  displayedColumns: string[] = ['srNo', 'billNo', 'billRegNo', 'tokenNo',
    'billDate', 'billInwardDate', 'ddoNo', 'cardexNo', 'ddo', 'billType', 'majorHead',
    'billGrossAmount', 'billAmount',
    'netAmount'];

  displayedColumns1: string[] = ['type', 'partyMaster', 'accountNumber', 'chequeAmount', 'action'];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<any>(this.ELEMENT_DATA1);
  // Control
  auditorctrl: FormControl = new FormControl();
  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;
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
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  ngOnInit() {
    this.chequePreparationFirstLevelFormData();

  }
  chequePreparationFirstLevelFormData() {
    this.chequePreparationFirstLevelForm = this.fb.group({
      auditorctrl: ['1']

    });

    this.billInformationForm = this.fb.group({

    })
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

  selectAll() {
    this.dataSource.data.forEach(_d => {
      _d.selected = this.selectedAll;
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  checkIfAllSelected() {
    this.selectedAll = this.dataSource.data.every((item) => {
      return item.selected === true;
    });
  }

}
