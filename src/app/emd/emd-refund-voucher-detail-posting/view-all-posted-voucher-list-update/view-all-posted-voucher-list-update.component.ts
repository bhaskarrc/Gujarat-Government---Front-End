
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmdRecordRoom } from 'src/app/model/emd';
@Component({
  selector: 'app-view-all-posted-voucher-list-update',
  templateUrl: './view-all-posted-voucher-list-update.component.html',
  styleUrls: ['./view-all-posted-voucher-list-update.component.css']
})
export class ViewAllPostedVoucherListUpdateComponent implements OnInit {
  showTable: Boolean = false;
  searchListForm: FormGroup;

  // FormGroup
  postedVoucherListForm: FormGroup;
  // dates
  maxDate = new Date();
  initiatiomdate = new Date();
  // Display Element Data

  ELEMENT_DATA: EmdRecordRoom[] =
    [
      {
        pdate: '21-Apr-2019',
        srNo: '192000001',
        code: 'SD',
        ecode: '00',
        vNo: '01',
        type: 'Cheques',
        tNo: '442',
        majorHead: '8443',
        tDate: '09-Apr-2019',
        pDate: '15-Apr-2019',
        amount: '20000',
        iTC: '-',
      },

      {
        pdate: '21-Apr-2019',
        srNo: '192000002',
        code: 'RD',
        ecode: '00',
        vNo: '02',
        type: 'Cheques',
        tNo: '442',
        majorHead: '8443',
        tDate: '09-Apr-2019',
        pDate: '15-Apr-2019',
        amount: '450000',
        iTC: '-',
      },

      {
        pdate: '21-Apr-2019',
        srNo: '192000003',
        code: 'TD',
        ecode: '00',
        vNo: '03',
        type: 'Cheques',
        tNo: '442',
        majorHead: '8443',
        tDate: '09-Apr-2019',
        pDate: '15-Apr-2019',
        amount: '50000',
        iTC: '-',
      },

    ];

  // Display Columns
  displayedColumns: string[] = ['srNo', 'pdate', 'code', 'ecode', 'vNo', 'type',
    'tNo', 'majorHead', 'tDate', 'pDate', 'amount', 'iTC', 'action'];

  // Table Source
  dataSource = new MatTableDataSource<EmdRecordRoom>(this.ELEMENT_DATA);
  private paginator: MatPaginator;
  private sort: MatSort;
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
  ngOnInit() {
    this.postedVoucherData();
  }
  postedVoucherData() {
    this.postedVoucherListForm = this.fb.group({
      // FormGroup Fields
      srNo: [''],
      code: [''],
      edpCode: [''],
      voucherNumber: [''],
      type: [''],
      tokenNo: [''],
      majorHead: [''],
      amount: [''],
      internalTc: [''],



    });
  }
  // sets paginator and sort variables
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // function to clear form

  clearForm() {
    this.postedVoucherListForm.reset();
  }
  // shows and hides table
  search() {
    this.showTable = true;
  }

}


