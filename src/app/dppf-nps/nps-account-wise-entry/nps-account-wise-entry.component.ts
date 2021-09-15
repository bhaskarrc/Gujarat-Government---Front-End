import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { Router } from '@angular/router';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-nps-account-wise-entry',
  templateUrl: './nps-account-wise-entry.component.html',
  styleUrls: ['./nps-account-wise-entry.component.css']
})
export class NpsAccountWiseEntryComponent implements OnInit {
  // List
  headList: CommonListing[] = [
    { value: '1', viewValue: '2014' }
  ];

  headAmountList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  voucherList: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];

  gradePayList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  upTypeList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  detailsData: any[] = [
    // { head: '', amount: '' }
  ];
  // Table Source
  detailsColumn: string[] = [
    'ppaNo', 'pranNo', 'name', 'basic', 'gradePay', 'dp', 'da', 'amount', 'up', 'forMonth', 'forYear', 'upType', 'remarks', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  // Variable
  inwardDetails = true;
  // Form GOrup
  accountWiseEntryForm: FormGroup;
  // FOrm COntrol
  headCTRL: FormControl = new FormControl();
  headAmountCTRL: FormControl = new FormControl();
  voucherCTRL: FormControl = new FormControl();
  gradePayCTRL: FormControl = new FormControl();
  forMonthCTRL: FormControl = new FormControl();
  forYearCTRL: FormControl = new FormControl();
  upTypeCTRL: FormControl = new FormControl();
  // Table Source
  detailsDataSource = new MatTableDataSource<any>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective(this.router);
  // Constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.accountWiseEntryFormData();
  }

  accountWiseEntryFormData() {
    this.accountWiseEntryForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      treasuryPAO: [''],
      year: [''],
      month: [''],
      group: [''],
      groupHead: [''],
      creditDebit: [''],
      tcChallan: [''],
      majorHead: [''],
      majorHeadAmount: [''],
      head: [''],
      headAmount: [''],
      voucherNo: [''],
      voucherAmount: [''],
      ddo: [''],
      scheduleNo: [''],
      dp: [''],
      da: [''],
      forMonth: [''],
      forYear: [''],
      cursorOnRow: [''],
      totalrows: [''],
      upTotal: [''],
      accountWiseTotal: [''],
    });
  }

  // open WorkFlow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Open Inward Npo Dialog
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountWiseEntryForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

  // open ppan Dialog
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountWiseEntryForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }
  // Add Details Data
  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      ppaNo: '', pranNo: '', name: '', basic: '', gradePay: '', dp: '', da: '', amount: '', up: '',
      forMonth: '', forYear: '', upType: '', remarks: ''
    });
    this.detailsDataSource.data = Col_Data;
  }
  // open Dialog Schedule Number Function
  openDialogScheduleNumber() { }

}
