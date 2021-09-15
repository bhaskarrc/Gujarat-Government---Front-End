import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ElementWithdrawVal } from 'src/app/model/stamp-processing';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


@Component({
  selector: 'app-online-request-for-withdrawal-of-valuables-view',
  templateUrl: './online-request-for-withdrawal-of-valuables-view.component.html',
  styleUrls: ['./online-request-for-withdrawal-of-valuables-view.component.css']
})
export class OnlineRequestForWithdrawalOfValuablesViewComponent implements OnInit {
  // Entry Field Details
  reqType_List: CommonListing[] = [
    { value: '1', viewValue: 'Deposit' },
    { value: '2', viewValue: 'Withdrawal' },
  ];

  withType_List: CommonListing[] = [
    { value: '1', viewValue: 'Final Withdrawal' },
    { value: '2', viewValue: 'Partial Withdrawal' },
    { value: '3', viewValue: 'Temporary Withdrawal' },
  ];

  reqNo_List: CommonListing[] = [
    { value: '1', viewValue: '19-20/Apr/0001' },
    { value: '2', viewValue: '19-20/Apr/0002' },
  ];
  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Supporting document',
    },
  ];
  reqTypeCtrl: FormControl = new FormControl();
  withTypeCtrl: FormControl = new FormControl();
  reqNoCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onlineForm: FormGroup;
  date: any = new Date();
  deptVal = 'Revenue Department';
  reqNoVal = '19-20/Apr/0001';
  valWithVal = 'Treasury Office, Ahmedabad';
  fileBrowseIndex: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private el: ElementRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.onlineForm = this.fb.group({
      finYear: ['2019-2020'],
      dept: ['Revenue Department'],
      reqType: [''],
      reqWithDate: [''],
      withType: ['1'],
      valWith: ['Treasury Office, Ahmedabad'],
      reqNo: ['1'],
      reqNoWithdraw: ['19-20/Apr/0001'],
      dateName: ['14-Apr-2020'],
      withSubBy: ['Mr. Rajesh Patel'],
      valSub: ['Treasury Office, Ahmedabad'],
      valSubBy: ['Mr. Rajesh Patel'],
      desig: ['Account Officer'],
      valName: ['Election Article'],
      valSubName: ['Control Unit'],
      valReg: ['19-20/Apr/0001'],
      qtyArtDep: ['20'],
      qtyArtWith: ['20'],
      messenger: ['Mr. Rajesh Patel'],
      messengerdes: ['Senior Clerk'],
      remark: [''],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/request-for-withdrawal-of-articles-list']);
  }
}
