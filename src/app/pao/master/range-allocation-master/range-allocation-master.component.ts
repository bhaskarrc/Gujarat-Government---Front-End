import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantPaoComponent } from '../../cheque/cheque-for-correction/workflow-details-grant-pao/workflow-details-grant-pao.component';
import { ListValue } from 'src/app/model/paoModel';
import { Router } from '@angular/router';
import { PaoDirectives } from 'src/app/common/directive/pao';


export class RangeAllocation {
  countername: string;
  startrange: number;
  endrange: number;
  lasttoken: number;
  action: number | string;
}

export class RangeAllocationnew {

  newcountername: string;
  newstartrange: number;
  newendrange: number;
  newlasttoken: number;
  newaction: number | string;
}

const ELEMENT_DATA: RangeAllocation[] = [
  {

    countername: 'R1',
    startrange: 1,
    endrange: 1000,
    lasttoken: 501,
    action: '""',
  }

];

const newELEMENT_DATA: RangeAllocationnew[] = [
  {

    newcountername: 'R1',
    newstartrange: 1,
    newendrange: 1100,
    newlasttoken: 500,
    newaction: '',
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
  displayedColumns: string[] = ['countername', 'startrange', 'endrange', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedColumnstoken: string[] = ['countername', 'startrange', 'endrange', 'lasttoken', 'action'];
  dataSourcetoken = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['newcountername', 'newstartrange', 'newendrange', 'newaction'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  nnewdisplayedColumns: string[] = ['newcountername', 'newstartrange', 'newendrange', 'lasttoken', 'newaction'];
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
  directiveObject = new PaoDirectives(this.router, this.dialog);
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
    this.dataSource.data.push(['countername', 'startrange', 'endrange', 'action']);
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
