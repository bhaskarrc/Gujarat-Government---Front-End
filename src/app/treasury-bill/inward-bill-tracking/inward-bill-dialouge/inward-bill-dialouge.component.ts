

import { Router } from '@angular/router';

import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-inward-bill-dialouge',
  templateUrl: './inward-bill-dialouge.component.html',
  styleUrls: ['./inward-bill-dialouge.component.css']
})
export class InwardBillDialougeComponent implements OnInit {
  todayDate = Date.now();
  public toggleButton = false;
  initiatiomdate = new Date((new Date()));
  isRelease = false;
  iswithdraw = false;
  inwardBillForm: FormGroup;
  maxDate = new Date();


  districtCtrl: FormControl = new FormControl();
  district_list: any = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Kutch' },
    { value: '3', viewValue: 'Mehsana' },
    { value: '4', viewValue: 'Gandhinagar' },
    { value: '5', viewValue: 'Banaskantha' },

  ];
  officeCtrl: FormControl = new FormControl();
  office_list: any = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'Sub Treasury Office, Dholka, Ahmedabad' },
    { value: '3', viewValue: 'Sub Treasury Office, Dhandhuka, Ahmedabad' },
    { value: '4', viewValue: 'Pay & Accounts Office, Ahmedabad' },
    { value: '5', viewValue: 'District Treasury Office, Bhuj' },
    { value: '6', viewValue: 'Sub Treasury Office, Mandavi' },
    { value: '7', viewValue: 'Sub Treasury Office, Mundra' },
    { value: '8', viewValue: 'Sub Treasury Office, Rapar' },
    { value: '9', viewValue: 'Sub Treasury Office, Anjar' },



  ];
  deptCtrl: FormControl = new FormControl();
  dept_list: any = [
    { value: '1', viewValue: 'Energy & Petrochemicals Department' },
    { value: '2', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '3', viewValue: 'Science & Technology Department' },
    { value: '4', viewValue: 'Social Justice & Empowerment Department' },
    { value: '5', viewValue: 'Tribal Development Department' },
    { value: '6', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '7', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '8', viewValue: 'Women & Child Development Department' },
    { value: '9', viewValue: 'Climate Change Department' },
  ];
  selection = new SelectionModel<any>(true, []);
  selection2 = new SelectionModel<any>(true, []);
  Element_Data: any[] = [
    {

      ddo: '234',
      cardex: '563',
      office: 'Mamlatdar Office, Ahmedabad'
    },
    {

      ddo: '235',
      cardex: '246',
      office: 'Collector Office, Ahmedabad'
    },

    {

      ddo: '325',
      cardex: '64',
      office: 'Industrial Institute of Training, Ahmedabad'
    },
    {

      ddo: '264',
      cardex: '366',
      office: 'Mead day Mead Office, Ahmedabad'
    },
    {

      ddo: '746',
      cardex: '757',
      office: 'Treasury Office, Ahmedabad'
    },
    {

      ddo: '436',
      cardex: '457',
      office: 'Session Court, Ahmedabad'
    },
    {

      ddo: '245',
      cardex: '637',
      office: 'District Panchayat, Ahmedabad'
    },

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['srNo', 'ddo', 'cardex', 'office', 'checkBox', 'checkBox1'];



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.inwardBillForm = this.fb.group({
      dept: [''],
      ddo: [''],
      cardex: [''],
      office: [''],
      dist: [''],
      toName: [''],
    });
  }
  clearForm() {
    this.inwardBillForm.reset();
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
  enabledata() {

    if (this.toggleButton === true) {
      this.toggleButton = false;
    } else {
      this.toggleButton = true;
    }
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  isAllSelected2() {
    const numSelected = this.selection2.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle2() {
    this.isAllSelected2() ?
      this.selection2.clear() :
      this.dataSource.data.forEach(row => this.selection2.select(row));
  }
  checkboxLabel2(row?: any): string {
    if (!row) {
      return `${this.isAllSelected2() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
