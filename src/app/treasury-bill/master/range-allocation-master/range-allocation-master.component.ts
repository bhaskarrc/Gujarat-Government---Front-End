import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { RangeAllocationnew, ListValue, RangeAllocation } from 'src/app/model/treasury-bill';

const ELEMENT_DATA: RangeAllocation[] = [
  {
    counterName: 'R1',
    startRange: 1,
    endRange: 1000,
    lastToken: 501,
    action: '""',
  }
];
const newELEMENT_DATA: RangeAllocationnew[] = [
  {
    newCounterName: 'R1',
    newStartRange: 1,
    newendRange: 1100,
    newLastToken: 500,
    newAction: '',
  }
];
@Component({
  selector: 'app-range-allocation-master',
  templateUrl: './range-allocation-master.component.html',
  styleUrls: ['./range-allocation-master.component.css']
})
export class RangeAllocationMasterComponent implements OnInit {
  // Variable
  iconisSearch: Boolean = true;
  isSearch: Boolean = true;
  isdisabled: Boolean = false;
  public toggleButton = true;
  isTokentable: Boolean = false;
  selectedOption: string;
  public chooes = '';
  rangeTypeValue = 'Reference';
  // values of each child FormControl into one object
  rangeAllocationmsterForm: FormGroup;
  // Control form
  rangetypeCtrl: FormControl = new FormControl();
  // provided to the header and data row.
  displayedColumns: string[] = ['counterName', 'startRange', 'endRange', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedColumnstoken: string[] = ['counterName', 'startRange', 'endRange', 'lastToken', 'action'];
  dataSourcetoken = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['newCounterName', 'newStartRange', 'newendRange', 'newAction'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  nnewdisplayedColumns: string[] = ['newCounterName', 'newStartRange', 'newendRange', 'lastToken', 'newAction'];
  nnewdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // Lists
  rangetype_list: ListValue[] = [
    { value: '1', viewValue: 'Reference' },
    { value: '2', viewValue: 'Advice' },
    { value: '3', viewValue: 'Token' },
    { value: '4', viewValue: 'TC Advice' },
    { value: '5', viewValue: 'PDC Advice' },
  ];
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  ngOnInit() {
    this.rangeAllocationmsterFormData();
  }

  // tslint:disable-next-line:member-ordering
  errorMessages = {
    rangetype: 'Please select range Type',
  };

  rangeAllocationmsterFormData() {
    this.rangeAllocationmsterForm = this.fb.group({
      rangetype: ['1'],
    });
  }

  addBrowse() {
    this.isSearch = false;
  }
  addfiled() {
    this.iconisSearch = false;
    this.toggleButton = false;
  }

  saveclick() {
    this.toggleButton = true;
    this.iconisSearch = true;
  }
  // after save data
  SaveRangeAllocation() {
    this.dataSource.data.push(['counterName', 'startRange', 'endRange', 'action']);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // On selection
  ontoken(index) {
    console.log(index.value);
    for (const item of this.rangetype_list) {
      if (item.value === index.value) {
        this.rangeTypeValue = item.viewValue;
      }
    }

    if (index.value === '3') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }
  // navigation 
}
