
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { emdMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-emd-refund-entry',
  templateUrl: './emd-refund-entry.component.html',
  styleUrls: ['./emd-refund-entry.component.css']
})
export class EmdRefundEntryComponent implements OnInit {
  // variables
  maxDate = new Date();
  date = new Date();
  containers = [];
  DDO: Boolean = true;
  private _onDestroy = new Subject<void>();
  errorMessages = emdMessage;
  initiatiomdate = new Date();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // FormGroup
  emdRefundEntryForm: FormGroup;
  // FormControl
  codeTypeCtrl: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();

  // Table Source Aattatchment Tab
  dataSourceofficestablishment = ['attachmentType', 'action'];

  attachment_type_list: ListValue[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.emdRefundEntryForm = this.fb.group({
      // FormGroup Fields
      passingDate: [''],
      type: ['Adjustment'],
      detailHead: ['1234'],
      fgCode: ['1212'],
      code: ['TDS'],
      codeDescription: ['Revenue Tenancy Deposit'],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits(Not Bearing Interest)'],
      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['101'],
      minorHeadDecscription: ['Revenue Deposit'],
      subHead: ['01'],
      subHeadDecscription: ['Revenue Tenancy Deposit'],
      amount: ['2000.00'],
      amountInWord: ['Two Thousands Only'],
      narration: ['EMD refunded'],
      docDescription: ['Sanction order']
    });

    this.containers.push(this.containers.length);
    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));

  }

  // filters value
  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    filteredValue.next(
      // tslint:disable-next-line: no-use-before-declare
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );

    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }



}



