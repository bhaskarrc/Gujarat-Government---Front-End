import { Router } from '@angular/router';

import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { InwardBillDialougeComponent } from './inward-bill-dialouge/inward-bill-dialouge.component';
import { ListValue, InwardBillTracking } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-inward-bill-tracking',
  templateUrl: './inward-bill-tracking.component.html',
  styleUrls: ['./inward-bill-tracking.component.css']
})
export class InwardBillTrackingComponent implements OnInit {
  todayDate = Date.now();
  // Date
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // Variable
  public toggleButton = false;
  // Form Group
  inwardTrackingForm: FormGroup;


  districtCtrl: FormControl = new FormControl();
  officeCtrl: FormControl = new FormControl();
  deptCtrl: FormControl = new FormControl();
  // Lists
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Kutch' },
    { value: '3', viewValue: 'Mehsana' },
    { value: '4', viewValue: 'Gandhinagar' },
    { value: '5', viewValue: 'Banaskantha' },

  ];
  office_list: ListValue[] = [
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
  dept_list: ListValue[] = [
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
  // selection 
  selection = new SelectionModel<any>(true, []);
  selection2 = new SelectionModel<any>(true, []);
  // table source
  Element_Data: InwardBillTracking[] = [
    {
      toName: 'District Treasury Office, Ahmedabad',
      dist: 'Ahmedabad',
    },
    {
      toName: 'District Treasury Office, Ahmedabad',
      dist: 'Ahmedabad',
    },

    {
      toName: 'Sub Treasury Office, Dhandhuka, Ahmedabad',
      dist: 'Ahmedabad',
    },

    {
      toName: 'Pay & Accounts Office, Ahmedabad',
      dist: 'Ahmedabad',
    },

    {
      toName: 'District Treasury Office, Bhuj',
      dist: 'Kutch',
    },

    {
      toName: 'Sub Treasury Office, Mandavi',
      dist: 'Kutch',
    },

    {
      toName: 'Sub Treasury Office, Mundra',
      dist: 'Kutch',
    },
    {
      toName: 'Sub Treasury Office, Rapar',
      dist: 'Kutch',
    },
    {
      toName: 'Sub Treasury Office, Anjar',
      dist: 'Kutch',
    },


  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);

  displayedColumns: any[] = ['srNo', 'toName', 'dist', 'checkBox', 'checkBox1'];



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.inwardTrackingForm = this.fb.group({
      district: [''],
      ddo: [''],
      cardex: [''],
      office: [''],
      paoName: [''],
      dept: [''],
    });
  }
  clearForm() {
    this.inwardTrackingForm.reset();
  }

  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
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
  enabledata() {

    if (this.toggleButton === true) {
      this.toggleButton = false;
    } else {
      this.toggleButton = true;
    }
  }


  checkboxLabel2(row?: any): string {
    if (!row) {
      return `${this.isAllSelected2() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  search() {
    const dialogRef = this.dialog.open(InwardBillDialougeComponent, {
      width: '1200px',
      height: '450px'
    });
  }

}

