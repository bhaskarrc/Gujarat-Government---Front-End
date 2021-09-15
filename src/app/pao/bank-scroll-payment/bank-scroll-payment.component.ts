import { ListValue } from './../../model/letter-of-credit';
import { AttachmentDetails } from 'src/app/model/stepping-up';
import { pvuMessage, paoMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bank-scroll-payment',
  templateUrl: './bank-scroll-payment.component.html',
  styleUrls: ['./bank-scroll-payment.component.css']
})
export class BankScrollPaymentComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    { name: undefined, file: undefined, attachment: 'Supporting Document' }
  ];
  // Date
  date = new Date();
  displayedBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  // Form Gorup
  bankScroll: FormGroup;
  // Table Source
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  dataSourceofficestablishment = ['attachmentType', 'action'];
  // List
  bank_list: ListValue[] = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank Of India' },
    { value: '3', viewValue: 'ICIC Bank' },
  ];
  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },

  ];
  // Form Control
  attachmentTypeCtrl: FormControl = new FormControl();
  selectBankCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  constructor(public fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private el: ElementRef,) { }
  // Variable
  errorMessages = paoMessage;

  ngOnInit() {
    this.bankScrollata();
  }
  addBrowse() {
    this.dataSourceBrowse.data.push(['sr_no', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action']);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);

  }
  bankScrollata() {
    this.bankScroll = this.fb.group({
      bankdate: [''],
      ifscCode: [''],
      selectBank: [''],
      desc: ['']
    });
  }
  submitDetails() {

  }
  goToDashboard() {

  }
  onFileSelection(event) {

  }

}
