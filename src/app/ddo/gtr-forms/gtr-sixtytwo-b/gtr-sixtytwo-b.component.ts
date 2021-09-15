import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ddoMasage } from 'src/app/common/error-message/common-message.constants';
import { GrantAddBillNo } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

// Grant in add bill table
const GRANT_ADD_BILL: GrantAddBillNo[] = [
  {
    gpfAcno: '',
    amt: '5555.00'
  },
];
@Component({
  selector: 'app-gtr-sixtytwo-b',
  templateUrl: './gtr-sixtytwo-b.component.html',
  styleUrls: ['./gtr-sixtytwo-b.component.css']
})
export class GtrSixtytwoBComponent implements OnInit {

  // variables
  errorMessage;
  fileBrowseIndex: number;
  selectedIndex: number;
  showAction: Boolean = true;
  show = false;
  tabDisable: Boolean = true;

  // date
  todayDate = Date.now();
  maxDate = new Date();

  // directive object for workflow dialog
  directiveObject = new DdoDirective(this.dialog);

  // form group
  formsixtytwo: FormGroup;

  // Form Control
  date = new FormControl(new Date());

  // list start
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // list end

  // gpf bill table
  grantinbillColumn: string[] = [
    'gpfAcno',
    'orDate',
    'sanctioBy',
    'grantInAdd',
    'amt'
  ];
  grantinbillDataSource = new MatTableDataSource<GrantAddBillNo>(GRANT_ADD_BILL);
  // gpf bill table end

  // constructor
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.errorMessage = ddoMasage;
    this.formsixtytwoformData();
  }

  // form data
  formsixtytwoformData() {
    this.formsixtytwo = this.fb.group({
      utcRemarks: [''],
      UTCCheckbox: ['true']
    });
  }

  // get tab index
  getTabIndex(event) { }

  // reset form
  resetForm() { }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // go to checklist
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-62b']);
  }
}

