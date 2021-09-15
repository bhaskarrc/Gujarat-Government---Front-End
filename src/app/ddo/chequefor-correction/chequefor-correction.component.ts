
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ChequeforCorrection } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-chequefor-correction',
  templateUrl: './chequefor-correction.component.html',
  styleUrls: ['./chequefor-correction.component.css']
})
export class ChequeforCorrectionComponent implements OnInit {

  // Date
  todayDate = new Date();

  // variables
  isSubmitted = false;

  // FormGroup
  chequeCorrection: FormGroup;
  // FormControl
  actionCtrl: FormControl = new FormControl();

  // List start
  actionList: ListValue[] = [
    { value: '1', viewValue: 'Cancel' },
    { value: '2', viewValue: 'Rename' },
    { value: '3', viewValue: 'Duplicate' },
    { value: '4', viewValue: 'Cancle and New' }
  ];
  // list end

  // table data start
  elementData: ChequeforCorrection[] = [

    {
      position: '1',
      ddoName: '	District Treasury Office Gandhinagar',
      billType: '	Pay Bill',
      billDate: '12-Jun-2020',
      chequeDate: '12-Jun-2020',
      action: ''
    }
  ];
  dataSource = new MatTableDataSource<ChequeforCorrection>(this.elementData);
  displayedColumns: string[] = ['position', 'ddoName', 'billType', 'billDate', 'chequeDate', 'action'];
  // table data end

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.chequeCorrection = this.fb.group({
      chequeNo: [''],
      action: [''],
    });
  }

  // function to clear form
  clearForm() {
    this.chequeCorrection.reset();
  }

  // on click on save
  onSave() {
    if (this.chequeCorrection.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}
