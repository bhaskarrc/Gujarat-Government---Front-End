import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { RangeAllocationnew, RangeAllocation } from 'src/app/model/ppo';

const ELEMENT_DATA: RangeAllocation[] = [{
  counterName: 'R1',
  startRange: 1,
  endRange: 1000,
  lastToken: 501,
  action: '""',
}];

const newELEMENT_DATA: RangeAllocationnew[] = [{
  newCounterName: 'R1',
  newStartRange: 1,
  newEndRange: 1100,
  newLastToken: 500,
  newAction: '',
}];

@Component({
  selector: 'app-range-allocation-master-pension',
  templateUrl: './range-allocation-master-pension.component.html',
  styleUrls: ['./range-allocation-master-pension.component.css']
})
export class RangeAllocationMasterPensionComponent implements OnInit {
  // variables
  todayDate = new Date();
  iconisSearch: Boolean = true;
  isSearch: Boolean = true;
  isdisabled: Boolean = false;
  public toggleButton = true;
  isTokentable: Boolean = false;
  selectedOption: string;
  rangeTypeValue = 'Reference';
  errorMessages = {
    rangetype: 'Please select range Type',
  };
  rangeAllocationmsterForm: FormGroup;
  rangetypeCtrl: FormControl = new FormControl();
  public chooes = '';

  // table data
  displayedColumns: string[] = ['countername', 'startrange', 'endrange', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedColumnstoken: string[] = ['countername', 'startrange', 'endrange', 'lasttoken', 'action'];
  dataSourcetoken = new MatTableDataSource<any>(ELEMENT_DATA);

  newdisplayedColumns: string[] = ['newcountername', 'newstartrange', 'newendrange', 'newaction'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  nnewdisplayedColumns: string[] = ['newcountername', 'newstartrange', 'newendrange', 'lasttoken', 'newaction'];
  nnewdataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  // lists
  rangetype_list: any[] = [
    { value: '1', viewValue: 'Reference' },
    { value: '2', viewValue: 'Advice' },
    { value: '3', viewValue: 'Token' },
    { value: '4', viewValue: 'TC Advice' },
    { value: '5', viewValue: 'PDC Advice' },

  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.rangeAllocationmsterFormData();
  }

  rangeAllocationmsterFormData() {
    this.rangeAllocationmsterForm = this.fb.group({
      rangetype: ['1'],
    });
  }
  // on click on add new range button
  addBrowse() {
    this.isSearch = false;
  }

  // on click on edit
  addfiled() {
    this.iconisSearch = false;
    this.toggleButton = false;
  }
  // on click on save
  saveclick() {
    this.toggleButton = true;
    this.iconisSearch = true;
  }
  // adds data in table
  SaveRangeAllocation() {
    this.dataSource.data.push(['countername', 'startrange', 'endrange', 'action']);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // selects range type
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


}
