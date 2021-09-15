import { eaMessage } from './../../../common/error-message/common-message.constants';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-ex-bank-scroll-payment',
  templateUrl: './ex-bank-scroll-payment.component.html',
  styleUrls: ['./ex-bank-scroll-payment.component.css']
})
export class ExBankScrollPaymentComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  date = new Date();
  isSubmitted = false;
  // FormGroup
  bankScroll: FormGroup;
  // FormControl
  selectBankCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();

  // Display Columns
  displayedBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  // Display Element Data
  ELEMENT_DATA: any[] = [
    { name: undefined, file: undefined, attachment: 'Supporting Document' }
  ];
  // Table Source
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);

  dataSourceofficestablishment = ['attachmentType', 'action'];
  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  constructor(public fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private el: ElementRef) { }
  errorMessages = eaMessage;
  // List values
  bank_list: any[] = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank Of India' },
    { value: '3', viewValue: 'ICIC Bank' },
  ];
  ngOnInit() {
    this.bankScrollata();
  }
  // function to add file to table
  addBrowse() {
    this.dataSourceBrowse.data.push(['sr_no', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action']);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);

  }
  bankScrollata() {
    this.bankScroll = this.fb.group({
      // FormGroup Fields
      bankdate: [''],
      ifscCode: [''],
      selectBank: [''],
      desc: ['']
    });
  }
  submitDetails() {
    if (this.bankScroll.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
  goToDashboard() {

  }


}
