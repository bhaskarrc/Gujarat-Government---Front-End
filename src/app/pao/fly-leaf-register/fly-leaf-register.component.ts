import { treasuryBillMessage, paoMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map, flatMap } from 'rxjs/operators';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { Router } from '@angular/router';
import { ListValue, FlyLeafRegister } from 'src/app/model/paoModel';

@Component({
  selector: 'app-fly-leaf-register',
  templateUrl: './fly-leaf-register.component.html',
  styleUrls: ['./fly-leaf-register.component.css']
})
export class FlyLeafRegisterComponent implements OnInit {
  // Variavle
  isSubmitted = false;
  ELEMENT_DATA: FlyLeafRegister[] =
    [
      {
        tokenNo: '',
        billDate: '03-03-2020',
        billRefNo: '5001',
        majorHead: '2071',
        billType: 'GTR 30 Pay Bill',
        cardexNo: '4',
        ddo: 'Collector Officer, Bhuj ',
        billInward: '03-03-2020',
        billAmount: '2564.00',
        category: 'Regular',
      },
    ];
  remark_list: ListValue[] = [
    { value: '1', viewValue: 'LE' },
    { value: '2', viewValue: 'GIS' },
  ];
  date = new FormControl(new Date());
  expendCharges = false;
  showSearch = false;
  displayedColumns: string[] = ['checkBox', 'tokenNo', 'billDate', 'billRefNo', 'billInward', 'cardexNo', 'ddo', 'billType',
    'majorHead', 'category', 'billAmount', 'action'];
  maxDate = new Date();
  flyLeafRegisterEntry: FormGroup;
  remarkCtrl: FormControl = new FormControl();
  todayDate = Date.now();
  _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  private sort: MatSort;

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  ngOnInit() {
    this.flyLeafRegisterEntry = this.fb.group({
      tokenNumber: ['', Validators.required],
      ddo: [''],
      bDate: [''],
      empNumber: [''],
      empName: [''],
      designation: [''],
      daysInCashed: [],
      remarks: [''],
      bdate: [''],
      date: [''],
    });
    this.flyLeafRegisterEntry.patchValue({
      empName: 'Mr.Sanket Modi',
      designation: 'Treasury Officer',
      tokenNumber: '4157',
    });
  }
  clearForm() {
    this.flyLeafRegisterEntry.reset();
  }
  search() {
  }
  add() {
    this.expendCharges = true;
  }
  clickSearch() {
    this.showSearch = true;
  }



  numericKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

}







