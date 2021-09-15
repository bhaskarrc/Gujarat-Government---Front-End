import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { CancelIssuedChequeBook } from 'src/app/model/cheque-inventory';

@Component({
  selector: 'app-cheque-book-issue-to-department',
  templateUrl: './cheque-book-issue-to-department.component.html',
  styleUrls: ['./cheque-book-issue-to-department.component.css']
})
export class ChequeBookIssueToDepartmentComponent implements OnInit {
  // variables
  todayDate = Date.now();
  maxDate = new Date();
  chequeBookIssueToDepartmentform: FormGroup;
  isSubmitted = false;

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
  // table data
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

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.chequeBookIssueToDepartmentform = this.fb.group({
      financialYear: [''],
      refNo: [''],
      refDate: [''],
      status: [''],
      department: ['']
    });
    this.dataSource.paginator = this.paginator;

  }

  // clears form
  clearForm() {
    this.chequeBookIssueToDepartmentform.reset();
  }

  // deletes row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // edits row
  onEdit(element) {
    element.edit = !element.edit;
  }

  // sets value if form data is valid
  onSearch() {
    if (this.chequeBookIssueToDepartmentform.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}
