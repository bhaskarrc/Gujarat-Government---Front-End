import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CancelIssuedChequeBook } from 'src/app/model/cheque-inventory';

@Component({
  selector: 'app-revert-issued-cheque-book-listing',
  templateUrl: './revert-issued-cheque-book-listing.component.html',
  styleUrls: ['./revert-issued-cheque-book-listing.component.css']
})
export class RevertIssuedChequeBookListingComponent implements OnInit {
  // variables
  todayDate = Date.now();
  maxDate = new Date();
  revertIssuedChequeBookSearch: FormGroup;

  // form controls
  financialYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  chequeFormatTypeCtrl: FormControl = new FormControl();


  // status list
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved as Draft' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
  ];

  // financialYear list
  financialYear_list: ListValue[] = [
    { value: '1', viewValue: '2016-2017' },
    { value: '2', viewValue: '2017-2018' },
    { value: '3', viewValue: '2019-2020' }
  ];

  // chequeFormatType list
  chequeFormatType_list: CommonListing[] = [
    { value: '1', viewValue: 'Cheque Book' },
    { value: '2', viewValue: 'Continuous Roll' }
  ];

  // Table Data
  Element_Data: CancelIssuedChequeBook[] = [
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/001',
      refDate: new Date('12/08/2019'),
      status: '1',
      lyingWith: '',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/002',
      refDate: new Date('11/08/2019'),
      status: '2',
      lyingWith: '',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/003',
      refDate: new Date('11/08/2019'),
      status: '3',
      lyingWith: '',
      edit: true
    },
  ];

  dataSource = new MatTableDataSource<CancelIssuedChequeBook>(this.Element_Data);
  displayedColumns: string[] = ['position', 'financialYear', 'refNo', 'refDate', 'status', 'lyingWith', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.revertIssuedChequeBookSearch = this.fb.group({
      financialYear: [''],
      refNo: [''],
      refDate: [''],
      status: [''],
      department: ['']
    });
    this.dataSource.paginator = this.paginator;

  }
  // to clear form
  clearForm() {
    this.revertIssuedChequeBookSearch.reset();
  }

  // delete row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // edit row
  onEdit() {
    this.router.navigate(['./ci/revert-issued-cheque-book']);
  }

  // routing
  closeListingPage() {
    this.router.navigate(['./ci/revert-issued-cheque-book']);
  }
}
