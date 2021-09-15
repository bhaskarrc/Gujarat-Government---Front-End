import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { CtsAccountMappingListing } from 'src/app/model/cheque-inventory';

@Component({
  selector: 'app-cts-account-mapping-listing',
  templateUrl: './cts-account-mapping-listing.component.html',
  styleUrls: ['./cts-account-mapping-listing.component.css']
})
export class CtsAccountMappingListingComponent implements OnInit {
  // variables
  maxDate = new Date();
  ctsAccountMappingListingForm: FormGroup;

  // form controls
  financialYearCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  // status list
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved as Draft' },
    { value: '2', viewValue: 'Submitted' }
  ];

  // financialYear list
  financialYear_list: ListValue[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2019-2020' }
  ];

  // Data of table
  Element_Data: CtsAccountMappingListing[] = [
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/001',
      refDate: new Date('12/08/2019'),
      ddoNo: '2001',
      cardexNo: '1002',
      status: '1',
      lyingWith: '',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/002',
      refDate: new Date('11/08/2019'),
      ddoNo: '2001',
      cardexNo: '1002',
      status: '2',
      lyingWith: '',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/003',
      refDate: new Date('11/08/2019'),
      ddoNo: '2001',
      cardexNo: '1002',
      status: '1',
      lyingWith: '',
      edit: true
    },
  ];

  dataSource = new MatTableDataSource<CtsAccountMappingListing>(this.Element_Data);
  // table columnDef
  displayedColumns: string[] = ['position', 'financialYear', 'refNo', 'refDate', 'ddoNo', 'cardexNo', 'status', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    this.ctsAccountMappingListingForm = this.fb.group({
      financialYear: [''],
      ddoNo: [''],
      cardexNo: [''],
      refNo: [''],
      refDate: [''],
      status: [''],
    });
    this.dataSource.paginator = this.paginator;

  }

  // To clear form
  clearForm() {
    this.ctsAccountMappingListingForm.reset();
  }

  // To delete row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // to edit row
  onEdit() {
    this.router.navigate(['./ci/cts-account-mapping']);
  }


}
