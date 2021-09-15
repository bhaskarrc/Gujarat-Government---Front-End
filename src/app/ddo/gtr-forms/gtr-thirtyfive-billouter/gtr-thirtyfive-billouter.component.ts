import { Component, OnInit } from '@angular/core';
import {
  MatDialog

} from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';

/** GtrThirtyfiveBillouterComponent starts */
@Component({
  selector: 'app-gtr-thirtyfive-billouter',
  templateUrl: './gtr-thirtyfive-billouter.component.html',
  styleUrls: ['./gtr-thirtyfive-billouter.component.css']
})
export class GtrThirtyfiveBillouterComponent implements OnInit {

  // form control
  date = new FormControl(new Date());

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  // variables
  fileBrowseIndex: number;
  selectedIndex: number;
  tabDisable: Boolean = true;

  // Date
  todayDate = Date.now();

  // directive object for workflow dialog
  directiveObject = new DdoDirective(this.dialog);

  // constructor
  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // get current tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  resetForm() { }

  // pass the control to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // redirects to cheque-list
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }

  // redirect to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-35']);
  }
}
/** GtrThirtyfiveBillouterComponent ends */
