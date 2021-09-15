import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { TransferJoiningList } from 'src/app/model/transfer-joining';

@Component({
  selector: 'app-transfer-joining-list',
  templateUrl: './transfer-joining-list.component.html',
  styleUrls: ['./transfer-joining-list.component.css']
})
export class TransferJoiningListComponent implements OnInit {

  ELEMENT_DATA: TransferJoiningList[] = [
    {
      transNo: 1002, empNumber: 1100100012,
      employeeName: 'Narendra', empDesignation: 'Assistant Manager',
      officeName: 'Pension Payment Office, Ahmedabad', relivingDate: '12-Oct-2020'
    },
    {
      transNo: 1003, empNumber: 1100100020,
      employeeName: 'Pankaj', empDesignation: 'Dy. Manager',
      officeName: 'District Treasury Office, Ahmedabad', relivingDate: '12-Oct-2020'
    },
    {
      transNo: 1004, empNumber: 1100102000,
      employeeName: 'Amit', empDesignation: 'Manager',
      officeName: 'Pay & Accounts Office Ahmedabad', relivingDate: '12-Oct-2020'
    },
  ];

  displayedColumns: string[] = ['position', 'transNo', 'empNumber', 'employeeName',
    'empDesignation', 'officeName', 'relivingDate', 'action'];

  designation_list: CommonListing[] = [
    { value: '1', viewValue: 'Under Secretary' },
    { value: '2', viewValue: 'Deputy Secretary' },
    { value: '3', viewValue: 'Secretary' },
    { value: '4', viewValue: 'Joint Secretary' },
    { value: '5', viewValue: 'Assistant Secretary' },
    { value: '6', viewValue: 'Section Officer' },
  ];

  district_list: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Dahod' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Gandhinagar' },
  ];

  cardexNo_list: CommonListing[] = [
    { value: '1', viewValue: '0124' },
    { value: '2', viewValue: '0125' },
    { value: '3', viewValue: '0246' },
    { value: '4', viewValue: '0259' },
    { value: '5', viewValue: '0345' },
  ];

  ddoNo_list: CommonListing[] = [
    { value: '1', viewValue: '1589' },
    { value: '2', viewValue: '1680' },
    { value: '3', viewValue: '1750' },
    { value: '4', viewValue: '1780' },
    { value: '5', viewValue: '1785' },
  ];

  eventsFrom: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;

  designationCtrl: FormControl = new FormControl;
  districtCtrl: FormControl = new FormControl;
  cardexNoCtrl: FormControl = new FormControl;
  ddoNoCtrl: FormControl = new FormControl;

  dataSourceTransfer = new MatTableDataSource<TransferJoiningList>(this.ELEMENT_DATA);

  setDataSourceAttributes() {
    this.dataSourceTransfer.paginator = this.paginator;
    this.dataSourceTransfer.sort = this.sort;
  }

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
  ) { }

  ngOnInit() {
    this.eventsFrom = this.fb.group({
      dateCreatedFrom: [''],
      dateCreatedTo: [''],
      transactionNo: [''],
      employeeNo: [''],
      employeeName: [''],
      designation: [''],
      gpfNo: [''],
      cpfNo: [''],
      panNo: [''],
      district: [''],
      cardexNo: [''],
      ddoNo: [''],
    });
  }

  goToDashboard() { }
  saveDesign(){}
  clearForm(){}
}
