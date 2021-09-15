
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { GtrEightyFiveOther } from 'src/app/model/ddo-forms';


@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  // variables
  gtrEightyFive = 'Form GTR 85 Others - Advance Bill ';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  detailHeaderLable2 = 'Advance Bill Details';
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  amount;

  // Date
  todayDate = Date.now();
  maxDate = new Date();

  // form control
  statusCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  statuList: ListValue[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' },
  ];
  // lists end


  // gtr-85-other table
  gtrDetailList: GtrEightyFiveOther[] = [
    { subVoucher: '', description: '', amount: '0', incomeTax: 0, AdvanceAmount: 0 },
  ];
  gtrTbableColumn = [
    'establishment',
    'Incumbent',
    'designation',
    'sorderNo',
    'sDate',
    'status',
    'basicPay',
    'AdvanceAmount',
    'remarks',
    'action'
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrEightyFiveOther>(this.gtrDetailList);
  // gtr-85-other table end

  // directive object for workflow
  directiveObject = new DdoDirective(this.dialog);

  // constructor
  constructor(public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // calculate total advance amount
  totalAdvanceAmount(): number {
    let AdvanceAmount = 0;
    this.gtrDetailDataSource.data.forEach((element) => {
      AdvanceAmount = AdvanceAmount + Number(element.AdvanceAmount);
    });
    return AdvanceAmount;
  }

  // reset form
  resetForm() {
  }

  // add new row in gtr-85 other details listing
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      subVoucher: '', description: '', amount: '0', incomeTax: 0, AdvanceAmount: 0
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // delete row in gtr-85 other details listing
  deleteDetialDataRow(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(this.gtrDetailDataSource.data);
  }

  // click on view bill navigates to gtr-85 reports
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-85']);
  }
}
