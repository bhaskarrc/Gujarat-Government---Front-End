import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';


@Component({
  selector: 'app-online-request-for-deposit-of-valuables-view',
  templateUrl: './online-request-for-deposit-of-valuables-view.component.html',
  styleUrls: ['./online-request-for-deposit-of-valuables-view.component.css']
})
export class OnlineRequestForDepositOfValuablesViewComponent implements OnInit {
  valName_List: CommonListing[] = [
    { value: '1', viewValue: 'Valuables Article' },
    { value: '2', viewValue: 'Cashbox' },
    { value: '3', viewValue: 'Sealed Packet' },
    { value: '4', viewValue: 'Cheque Book / Roll' },
    { value: '5', viewValue: 'Election Article' },
    { value: '6', viewValue: 'Exam Article' },
    { value: '7', viewValue: 'Padlocks and Key' },
    { value: '8', viewValue: 'Others' },
  ];
  valSubName_List: CommonListing[] = [
    { value: '1', viewValue: 'Ballet Unit' },
    { value: '2', viewValue: 'Control Unit' },
    { value: '3', viewValue: 'Postal Ballet' },
    { value: '4', viewValue: 'Others' },
  ];
  messengerdes_List: CommonListing[] = [
    { value: '1', viewValue: 'Deputy Section Officer' },
    { value: '2', viewValue: 'Section Officer' },
    { value: '3', viewValue: 'Senior Clerk' },
    { value: '4', viewValue: 'Junior Clerk' },
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

  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'WorkFlow' },
  ];
  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Supporting document',
    },
  ];
  valNameCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  valSubNameCtrl: FormControl = new FormControl();
  messengerdesCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();

  onlineForm: FormGroup;
  date: any = new Date();
  deptVal = 'Revenue Department';
  reqNoVal = '19-20/Apr/0001';
  venNameVal = 'Vendor';
  valSubVal = 'Treasury Office, Ahmedabad';
  valSubValBy = 'Mr. Rajesh Patel';
  desigVal = 'Account Officer';
  emailVal = 'rajesh@gmail.com';
  phoneVal = '9532145785';
  fileBrowseIndex: number;
  fileNameVal = 'file uploaded';
  valRegVal = '5262';
  qtyValVal = '5';
  remarkVal = 'N/A';
  messengerVal = 'Mr. S H Parmar';

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
      reqNo: [''],
      dateName: [''],
      treSubTre: ['1'],
      troffice: ['Gandhinagar Treasury Office'],
      trofficeForSub: ['Gandhinagar Treasury Office'],
      subTreOff: ['1'],
      valSubBy: [''],
      valSub: [''],
      desig: [''],
      email: [''],
      phone: [''],
      valName: ['5'],
      valSubName: ['3'],
      valReg: [''],
      qtyVal: [''],
      remark: [''],
      messenger: [''],
      messengerdes: ['1'],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/request-for-deposit-of-articles-list']);
  }
}
