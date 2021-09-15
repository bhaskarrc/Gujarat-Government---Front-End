import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementWithdrawValList, ElementDepositValList } from 'src/app/model/stamp-processing';


// Listing table Data
const ELEMENT_DATA: ElementDepositValList[] = [
  {
    fYear: '2019-2020',
    dept: 'Department',
    subTo: 'Treasury Office, Ahmedabad',
    depDate: '14-Apr-2020',
    valCat: 'Election Article',
    subCat: 'Control Unit',
    refNo: '',
    recFromOn: '-',
    sentToON: '-',
    lyingWith: '',
    wStatus: '-',
    status: 'Approved'
   },
   {
    fYear: '2019-2020',
    dept: 'Department',
    subTo: 'Treasury Office, Ahmedabad',
    depDate: '14-Apr-2020',
    valCat: 'Sealed Packet',
    subCat: '-',
    refNo: '19-20/STM/SIP/004',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Pending'
   },
   {
    fYear: '2019-2020',
    dept: 'Department',
    subTo: 'Treasury Office, Ahmedabad',
    depDate: '14-Apr-2020',
    valCat: 'Election Article',
    subCat: 'Postal Ballet',
    refNo: '19-20/STM/SIP/010',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Draft'
   }
];
@Component({
  selector: 'app-online-request-for-deposit-of-valuables-list',
  templateUrl: './online-request-for-deposit-of-valuables-list.component.html',
  styleUrls: ['./online-request-for-deposit-of-valuables-list.component.css']
})
export class OnlineRequestForDepositOfValuablesListComponent implements OnInit {
// Search Field Details
    valName_List: CommonListing[] = [
      { value: '1', viewValue: 'Cashbox'},
      { value: '2', viewValue: 'Cheque Book / Roll'},
      { value: '3', viewValue: 'Election Article'},
      { value: '4', viewValue: 'Exam Article'},
      { value: '5', viewValue: 'Padlocks and Key'},
      { value: '6', viewValue: 'Sealed Packet'},
      { value: '7', viewValue: 'Valuables Article'},
      { value: '8', viewValue: 'Others'},
    ];

    treSubTre_List: CommonListing[] = [
      { value: '1', viewValue: 'Treasury Office' },
      { value: '2', viewValue: 'Sub Treasury Office' },
    ];
    subTre_List: CommonListing[] = [
      { value: '1', viewValue: 'Sub Treasury Office, Dahegam, Gandhinagar' },
      { value: '2', viewValue: 'Sub Treasury Office, Mansa, Gandhinagar' },
      { value: '2', viewValue: 'Sub Treasury Office, Kalol, Gandhinagar' },
    ];
    valSubName_List: CommonListing[] = [
      { value: '1', viewValue: 'Ballet Unit'},
      { value: '2', viewValue: 'Control Unit'},
      { value: '3', viewValue: 'Postal Ballet'},
      { value: '4', viewValue: 'Others'},
    ];
    receive_List: CommonListing[] = [
      { value: '1', viewValue: 'Received From' },
      { value: '2', viewValue: 'Sent To' },
    ];
    status_List: CommonListing[] = [
      { value: '1', viewValue: 'Draft'},
      { value: '2', viewValue: 'Pending'},
      { value: '2', viewValue: 'Approved'},
      { value: '2', viewValue: 'Returned'},
      { value: '2', viewValue: 'Cancelled'},
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
  displayedColumns: string[] = ['position', 'fYear', 'dept', 'subTo', 'depDate', 'valCat', 'subCat',
  'refNo', 'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'];
    valNameCtrl: FormControl = new FormControl();
    valSubNameCtrl: FormControl = new FormControl();
    subTreOffCtrl: FormControl = new FormControl();
    treSubTreCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    wStatusCtrl: FormControl = new FormControl();
    receiveCtrl: FormControl = new FormControl();
    errorMessages = stampProcessMessage;
    directiveObject = new StampProcessingDirectives(this.router, this.dialog);

    onlineForm: FormGroup;
  date: any = new Date();
  deptVal = 'Revenue Department';
  reqNoVal = '19-20/Apr/0001';
  valSubVal = 'Treasury Office, Ahmedabad';
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
      dept: [''],
      refNo: [''],
      fromDateRef: [''],
      toDateRef: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      treSubTre: [''],
      troffice: ['Gandhinagar Treasury Office'],
      trofficeForSub: ['Gandhinagar Treasury Office'],
      subTreOff: [''],
      valSubBy: [''],
      fromDate: [''],
      toDate: [''],
      valName: [''],
      valSubName: [''],
      wStatus: [''],
      status: [''],
    });
  }

  clearForm() {
    this.onlineForm.reset();
  }

  deleteConfirmPopup(index) {
    const dialogRef = this.dialog.open(DeleteConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRec(index);
      }
    });
  }
// Delete

  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }


}
