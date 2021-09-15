
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { ChequeforCorrectionList } from 'src/app/model/ddo-forms';
@Component({
  selector: 'app-chequefor-correction-list',
  templateUrl: './chequefor-correction-list.component.html',
  styleUrls: ['./chequefor-correction-list.component.css']
})
export class ChequeforCorrectionListComponent implements OnInit {

  // Date
  initiatiomdate = new Date();
  maxDate = new Date();

  // FormGroup
  chequeCorrectionList: FormGroup;

  // FormControl
  actionCtrl: FormControl = new FormControl();
  actTypeCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  // list start
  billTypeList: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office 1' },
    { value: '2', viewValue: 'Sub Treasury Office 2' }
  ];
  actionList: ListValue[] = [
    { value: '1', viewValue: 'Cancel' },
    { value: '2', viewValue: 'Rename' },
    { value: '3', viewValue: 'Duplicate' },
    { value: '4', viewValue: 'Cancle and New' }
  ];

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Cancel' },
    { value: '2', viewValue: 'Pending' },
  ];
  // lists end

  // table data start
  elementData: ChequeforCorrectionList[] = [

    {
      cardex: '143',
      refNo: '10000',
      refDate: '13-Aug-2020',
      ddo: '133',
      office: 'District Treasury Office , Gandhinagar',
      chequeNo: '1234567',
      chequeDate: '13-Jun-2020',
      billType: 'GTR 30- Pay Bill',

      typeAction: 'Cancel',
      status: 'Pending',
      lyingWith: 'Mr. Patel',
      action: ''
    }
  ];
  dataSource = new MatTableDataSource<ChequeforCorrectionList>(this.elementData);
  displayedColumns: string[] = ['position',
    'cardex',
    'refNo',
    'refDate',
    'ddo',
    'office',
    'chequeNo',
    'chequeDate',
    'billType',
    'typeAction',
    'status',
    'lyingWith',
    'action'
  ];
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.chequeCorrectionList = this.fb.group({
      chequeNo: [''],
      chequeDate: [''],
      actionType: [''],
      billType: [''],
      status: [''],
      lyingWith: ['']
    });
  }

  // function to clear form
  clearForm() {
    this.chequeCorrectionList.reset();
  }

}
