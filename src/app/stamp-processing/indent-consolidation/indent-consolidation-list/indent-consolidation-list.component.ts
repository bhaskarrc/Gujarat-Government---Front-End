
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementIndConList } from 'src/app/model/stamp-processing';
import { HistoryDetailsCommonDialogComponent } from '../../history-details-common-dialog/history-details-common-dialog.component';
import { DataService } from 'src/app/common/data.service';

// Listing table Data
const ELEMENT_DATA: ElementIndConList[] = [
  {
    fYear: '2020-2021',
    indNo: '3',
    indType: 'Regular Indent',
    cIndentNumber: '-',
    refNo: '-',
    recFromOn: '-',
    sentToON: '-',
    lyingWith: '-',
    wStatus: '-',
    status: '-',
  },

  {
    fYear: '2020-2021',
    indNo: '2',
    indType: 'Regular Indent',
    cIndentNumber: '-',
    refNo: '19-20/STM/IC/001',
    recFromOn: '-',
    sentToON: '-',
    lyingWith: '-',
    wStatus: '-',
    status: 'Draft',
  },
  {
    fYear: '2020-2021',
    indNo: '2',
    indType: 'Regular Indent',
    cIndentNumber: '51/00057/072019/25',
    refNo: '19-20/STM/IC/002',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Pending',
  },
  {
    fYear: '2020-2021',
    indNo: '2',
    indType: 'Regular Indent',
    cIndentNumber: '51/00057/072019/26',
    refNo: '19-20/STM/IC/004',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Approved',
  },
  {
    fYear: '2020-2021',
    indNo: '2',
    indType: 'Mid-term Indent',
    cIndentNumber: '51/00057/072019/27',
    refNo: '19-20/STM/IC/006',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Cancelled',
    status: 'Cancelled',
  },
  {
    fYear: '2020-2021',
    indNo: '2',
    indType: 'Mid-term Indent',
    cIndentNumber: '51/00057/072019/27',
    refNo: '19-20/STM/IC/007',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Rejected by Approver',
    status: 'Rejected',
  },

];

@Component({
  selector: 'app-indent-consolidation-list',
  templateUrl: './indent-consolidation-list.component.html',
  styleUrls: ['./indent-consolidation-list.component.css']
})
export class IndentConsolidationListComponent implements OnInit {
  // Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];

  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Returned' },
    { value: '4', viewValue: 'Cancelled' },
  ];

  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];
  indType_List: CommonListing[] = [
    { value: '1', viewValue: 'Regular Indent' },
    { value: '2', viewValue: 'Mid-Term Indent' },
  ];
  wStatus_List: CommonListing[] = [
    { value: '1', viewValue: 'Cancelled'},
    { value: '2', viewValue: 'Forwarded to Verifier'},
    { value: '3', viewValue: 'Returned to Creator'},
    { value: '4', viewValue: 'Forwarded to Approver'},
    { value: '5', viewValue: 'Returned to Verifier'},
    { value: '6', viewValue: 'Approved by Approver'},
    { value: '7', viewValue: 'Returned to Creator'},
    { value: '8', viewValue: 'Rejected by Approver'},
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'indNo', 'indType', 'cIndentNumber', 'refNo',
    'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  indTypeCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  indentConsolidationListForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.indentConsolidationListForm = this.fb.group({
      finYear: ['10', Validators.required],
      refNo: [''],
      fromDate: [''],
      toDate: [''],
      indNumber: [''],
      indType: [''],
      refFromDate: [''],
      refToDate: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      lyingWith: [''],
      status: [''],
      wStatus: [''],
    });
  }
  // History Details Dialog
  showHistoryDialog(): void {

    const dialogRef = this.dialog.open(HistoryDetailsCommonDialogComponent, {
      width: '2700px',
      height: '600px',
      data: 'fromIndentConsolidationList'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  clearForm() {
    this.indentConsolidationListForm.reset();
  }
  // Delete
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  onView() {
    this.dataService.setOption('fromIndentConsolidationList', 'viewMode');
    this.router.navigate(['./stamp-processing/indent-consolidated']);
  }
}

