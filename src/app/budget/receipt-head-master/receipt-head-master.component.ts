import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { BudgetFormType } from 'src/app/model/budget';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
const ELEMENT_DATA: any[] = [{
  budgetHead: 'FinYear:1601:00:240:00',
  map: '0010',
  detailshead: '00',
  objdescp: '',
  submajorhead: '8 : Other Transfer/Grants to States',
  minorhead: '102 : Small Scale Industries',
  subhead: '60'

}];
@Component({
  selector: 'app-receipt-head-master',
  templateUrl: './receipt-head-master.component.html',
  styleUrls: ['./receipt-head-master.component.css']
})
export class ReceiptHeadMasterComponent implements OnInit {
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  majorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  codeCtrl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  newdisplayedColumns: string[] = ['select', 'budgetHead', 'action'];
  majorHead_list: any[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
    { value: '6', viewValue: '1601  : Object Heads' },
  ];
  subHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  detailHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' }
  ];
  receiptObjectHeadMasterForm: FormGroup;
  finance_list: any[] = [
    { value: '1', viewValue: '2010-2011' },
    { value: '2', viewValue: '2011-2012' },
    { value: '3', viewValue: '2012-2013' },
    { value: '4', viewValue: '2013-2014' },
    { value: '5', viewValue: '2014-2015' },
    { value: '6', viewValue: '2015-2016' },
    { value: '7', viewValue: '2016-2017' },
    { value: '8', viewValue: '2017-2018' },
    { value: '9', viewValue: '2018-2019' },
    { value: '10', viewValue: '2019-2020' },
    { value: '11', viewValue: '2020-2021' },
  ];

  subMajorHeadCode_list: BudgetFormType[] = [
    { value: '8 : Other Transfer/Grants to States', viewValue: '8 : Other Transfer/Grants to States' },
    { value: '6 : Centrally Sponsored Schemes', viewValue: '6 : Centrally Sponsored Schemes' },
  ];

  minorHeadCode_list: BudgetFormType[] = [
    {
      value: '101 : Forest Conservation, Development and Regeneration',
      viewValue: '101 : Forest Conservation, Development and Regeneration'
    },
    { value: '102 : Small Scale Industries', viewValue: '102 : Small Scale Industries' },
    { value: '105 : Forest Produce', viewValue: '105 : Forest Produce' },
  ];

  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '0010' },
    { value: '2', viewValue: '0011' },
    { value: '3', viewValue: '0012' },
    { value: '4', viewValue: '0013' },
    { value: '5', viewValue: '5400' },
    { value: '6', viewValue: '3131' }
  ];
  date: any = new Date();
  errorMessages = budgetMessage;
  constructor(private el: ElementRef, public dialog: MatDialog, private fb: FormBuilder, public router: Router, ) {
  }

  ngOnInit() {
    this.receiptObjectHeadMasterData();
  }
  receiptObjectHeadMasterData() {
    this.receiptObjectHeadMasterForm = this.fb.group({
      financeYear: [' '],
      majorHeadCode: ['6'],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      detailHeadCode: [''],
      subHeadCode: [''],
      objectCode: [''],
      bpnNo: ['2'],
      obectheaddesc: ['']
    });
  }
  gotopage(index) {
    this.newdataSource.data.splice(index, 1);
    this.newdataSource = new MatTableDataSource(this.newdataSource.data);
  }

  viewdata() {
    // tslint:disable-next-line: no-use-before-declare
    const dailogRef = this.dialog.open(ObjectHradMasterComponent,
      {
        width: '800px',
        height: 'auto',
      });

  }

}

// vita-dialog
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'receipt-head-master-dialog',
  templateUrl: 'receipt-head-master-dialog.html',
})

// tslint:disable-next-line: class-name
export class ObjectHradMasterComponent {
  newdataSourcepopup = new MatTableDataSource<any>(ELEMENT_DATA);
  newdisplayedColumnspopup: any[] = ['select', 'submajorhead', 'minorhead', 'subhead', 'map', 'detailshead', 'objdescp'];
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ObjectHradMasterComponent>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }


}
