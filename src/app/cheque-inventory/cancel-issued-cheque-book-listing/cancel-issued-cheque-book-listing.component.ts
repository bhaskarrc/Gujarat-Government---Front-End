import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CancelIssuedChequeBook } from 'src/app/model/cheque-inventory';

@Component({
  selector: 'app-cancel-issued-cheque-book-listing',
  templateUrl: './cancel-issued-cheque-book-listing.component.html',
  styleUrls: ['./cancel-issued-cheque-book-listing.component.css']
})
export class CancelIssuedChequeBookListingComponent implements OnInit {
  // variables
  todayDate = Date.now();
  cancelIssuedChequeBookSearch: FormGroup;
  isSubmitted = false;
  maxDate = new Date();

  // form controls
  financialYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  chequeFormatTypeCtrl: FormControl = new FormControl();

  // Status List
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved as Draft' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
  ];

  // FianncialYear List
  financialYear_list: ListValue[] = [
    { value: '1', viewValue: '2016-2017' },
    { value: '2', viewValue: '2017-2018' },
    { value: '3', viewValue: '2019-2020' }
  ];

  // ChequeFormateType List
  chequeFormatType_list: CommonListing[] = [
    { value: '1', viewValue: 'Cheque Book' },
    { value: '2', viewValue: 'Continuous Roll' }
  ];

  // Table Data Cheque Book Issue To Department
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

  // Data Source of  Cheque Book Issue To Department
  dataSource = new MatTableDataSource<CancelIssuedChequeBook>(this.Element_Data);

  // Columns of  Cheque Book Issue To Department
  displayedColumns: string[] = ['position', 'financialYear', 'refNo', 'refDate', 'status', 'lyingWith', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {

    this.cancelIssuedChequeBookSearch = this.fb.group({
      financialYear: [''],
      refNo: [''],
      refDate: [''],
      status: [''],
      department: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

  //  clears form
  clearForm() {
    this.cancelIssuedChequeBookSearch.reset();
  }

  // Delete Table Action
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // On Edit Table Action
  onEdit() {
    this.router.navigate(['./ci/cheque-book-cancel']);
  }

  // On Search button of Form
  onSearch() {
    if (this.cancelIssuedChequeBookSearch.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
  // routing
  closeListingPage() {
    this.router.navigate(['./ci/cheque-book-cancel']);
  }
}
