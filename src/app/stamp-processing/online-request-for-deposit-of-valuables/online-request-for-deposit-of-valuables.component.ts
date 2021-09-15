import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, startWith, takeUntil } from 'rxjs/operators';

declare function SetEnglish();
declare function SetGujarati();


@Component({
  selector: 'app-online-request-for-deposit-of-valuables',
  templateUrl: './online-request-for-deposit-of-valuables.component.html',
  styleUrls: ['./online-request-for-deposit-of-valuables.component.css']
})
export class OnlineRequestForDepositOfValuablesComponent implements OnInit {
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  // Entry Field Details
  reqType_List: CommonListing[] = [
    { value: '1', viewValue: 'Deposit' },
    { value: '2', viewValue: 'Withdrawal' },
  ];
  valName_List: CommonListing[] = [
    { value: '1', viewValue: 'Cashbox' },
    { value: '2', viewValue: 'Cheque Book / Roll' },
    { value: '3', viewValue: 'Election Article' },
    { value: '4', viewValue: 'Exam Article' },
    { value: '5', viewValue: 'Padlocks and Key' },
    { value: '6', viewValue: 'Sealed Packet' },
    { value: '7', viewValue: 'Valuables Article' },
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
    { value: '1', viewValue: 'Supporting document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];

  reqTypeCtrl: FormControl = new FormControl();
  valNameCtrl: FormControl = new FormControl();
  valSubNameCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  treSubTreCtrl: FormControl = new FormControl();
  messengerdesCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

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
      finYear: ['2019-2020', Validators.required],
      dept: ['Revenue Department', Validators.required],
      reqType: ['', Validators.required],
      reqNo: ['19-20/Apr/0001', Validators.required],
      dateName: ['14-Apr-2020', Validators.required],
      treSubTre: ['', Validators.required],
      troffice: ['Gandhinagar Treasury Office', Validators.required],
      trofficeForSub: ['Gandhinagar Treasury Office', Validators.required],
      subTreOff: ['', Validators.required],
      valSubBy: ['Mr. Rajesh Patel', Validators.required],
      desig: ['Account Officer', Validators.required],
      email: [''],
      phone: ['9532145785', Validators.required],
      valName: ['', Validators.required],
      valSubName: ['', Validators.required],
      valReg: ['', Validators.required],
      qtyVal: ['', Validators.required],
      remark: ['', Validators.required],
      messenger: ['', Validators.required],
      messengerdes: ['', Validators.required],
    });
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
  // Method to Open Workflow Details for request for deposit
  sumbitRequestWorkkflow(): void {
    const dialogRef = this.dialog.open(RequestForDepositWorkflowComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('From Common');
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/request-for-deposit-of-articles-list']);
  }
  // Eng Guj functions starts
    setEnglishOnFocusOut() {
      SetEnglish();
    }
    setGujaratiDefault() {
      if (!this.isLangChange) {
        SetGujarati();
        this.currentLang.next('Eng');
      }
    }
    toggleLanguage() {
      this.isLangChange = true;
      const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
      if (elements != undefined) {
        if (this.currentLang.value == 'Guj') {
          SetEnglish();
          this.currentLang.next('Eng');
        } else {
          SetGujarati();
          this.currentLang.next('Guj');
        }
        elements.focus();
      }
    }

}

@Component({
  selector: 'app-request-for-deposit-workflow',
  templateUrl: './request-for-deposit-workflow.component.html',
  styleUrls: ['./online-request-for-deposit-of-valuables.component.css']
})
export class RequestForDepositWorkflowComponent implements OnInit {

  currentLang = new BehaviorSubject<string>('Eng');
    isLangChange = false;
    hasFocusSet: number;
    public showData = true;
    showAction: Boolean = true;

    fileBrowseIndex: number;
    date: any = new Date();
    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
        uploadedBy: undefined

    }];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
    headerJso: HeaderElement[] = [
        { label: 'Financial Year', value: '2019-2020' },
        { label: 'Name of Office / Department', value: 'Revenue Department' },
        { label: 'Articles Submitted to Treasury / Sub Treasury', value: 'Gandhinagar Treasury Office' },
        { label: 'Deposit Request Number', value: '19-20/Apr/0001' },
        { label: 'Request Date of Deposit', value: '22-Sep-2020' },
    ];
    displayData = false;

    attachment = [
        { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
        { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
    ];
    sample = 'src/assets/img/pdf-test.pdf';
    fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
    show = false;
    page = 1;
    totalPages: number;
    isLoaded = false;
    sampleFlag: boolean;
    tabDisable: Boolean = true;
    selectedIndex: number;

    actionForm: FormGroup;

    errorMessages = {
        FIN_YEAR: 'Please select any Financial Year',
        DEPARTMENT: 'Please select any Department',
    };

    forwardDialog_history_list: any[] = [
        { id: 1, userName: 'Shri S M Modi', designation: 'Deputy Section Officer',
         // tslint:disable-next-line: max-line-length
         role: 'Creator', date: '1/11/2019', comment: 'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.' },
        { id: 2, userName: 'Shri C Patel', designation: 'Section Officer',
         role: 'Verifier', date: '10/11/2019', comment: 'We may approve' },
        { id: 3, userName: 'Shri P M Shah', designation: 'Deputy Secretaryr',
         role: 'Approver', date: '11/11/2019', comment: 'We may approve' },
    ];

    action_list: CommonListing[] = [
        { value: '1', viewValue: 'Forward' },
        { value: '2', viewValue: 'Return' },
        { value: '3', viewValue: 'Send Back' },
        { value: '4', viewValue: 'Verify' },
        { value: '2', viewValue: 'Approve' },
        { value: '3', viewValue: 'Reject' },
        { value: '4', viewValue: 'Cancel' },
    ];

    user_list: CommonListing[] = [
        { value: '1', viewValue: 'Satendra Zala (DDO)' },
    ];

    attachmentType_list: CommonListing[] = [
      { value: '1', viewValue: 'Supporting document' },
      { value: '2', viewValue: 'Sanction Order' },
      { value: '3', viewValue: 'Others' },
    ];

    actionCtrl: FormControl = new FormControl();
    filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    userCodeCtrl: FormControl = new FormControl();
    filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    attachmentTypeCodeCtrl: FormControl = new FormControl();
    filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    private _onDestroy = new Subject<void>();

    constructor(private elem: ElementRef,
        private toastr: ToastrService,
        private router: Router,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<RequestForDepositWorkflowComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private el: ElementRef,
    ) { }

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();

    ngOnInit() {
        // additionalText :['', Validators.required]
        this.createForm();
        if (this.action_list) {
            this.filteredAction.next(this.action_list.slice());
        }
        this.actionCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.action_list, this.actionCtrl.value, this.filteredAction);
            });
        if (this.user_list) {
            this.filteredUserCode.next(this.user_list.slice());
        }
        this.userCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.user_list, this.userCodeCtrl.value, this.filteredUserCode);
            });
        this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
        this.attachmentTypeCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
            });
        console.log('data', this.data);
        this.options = this.data;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );

        this.actionForm.patchValue({
            actionCode: '1',
            userCode: '1',
            additionalText: ''
        });
    }

    gotoListing() {
        this.router.navigate(['']);
    }

    filterObjValue(arrValue, searchValue, filteredValue) {
        if (!arrValue) {
            return;
        }
        // get the search keyword
        let search = searchValue;
        if (!search) {
            filteredValue.next(arrValue.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the values
        filteredValue.next(
            arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
        );
    }
    uploadAttachment() {
        this.tabDisable = false;
        this.selectedIndex = 2;
    }
    createForm() {
        this.actionForm = this.fb.group({
            actionCode: ['', Validators.required],
            userCode: ['', Validators.required],
            additionalText: ['', Validators.required]
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    onNoClick(): void {
        this.dialogRef.close('no');
    }

    forwardConsolidate() {
        console.log('forwardConsolidate');
        this.dialogRef.close('yes');
    }

    nextPage() {
        this.page += 1;
        if (this.page > this.totalPages) {
            this.page = this.totalPages;
        }
    }

    previousPage() {
        this.page -= 1;
        if (this.page < 1) {
            this.page = 1;
        }
    }

    afterLoadComplete(pdfData: any) {
        // console.log("pdfData",  pdfData)
        this.totalPages = pdfData.numPages;
        // this.isLoaded = true;
    }
    checkDisplayFile(data) {
        for (let i = 0; i < this.attachment.length; i++) {
            if (data.fileType === 'image') {
                if (this.showAction = true) {
                    this.showAction = false;
                }
                if (this.attachment[i].fileName === data.fileName) {
                    this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
                    this.show = this.attachment[i].imgStatus ? true : false;
                    // this.showAction = true;
                } else {
                    this.attachment[i].imgStatus = false;
                    // this.show = false;
                }
            } else if (data.fileType === 'pdf') {
                if (this.showAction = true) {
                    this.showAction = false;
                }
                if (this.attachment[i].fileName === data.fileName) {
                    this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
                    this.show = this.attachment[i].pdfStatus ? true : false;
                    // this.showAction = true;
                } else {
                    this.attachment[i].pdfStatus = false;
                }
            } else {
            }
            if (this.show === false) {
                this.showAction = true;
                if (this.attachment[i].fileType === 'image') {
                    this.attachment[i].imgStatus = false;
                } else if (this.attachment[i].fileType === 'pdf') {
                    this.attachment[i].pdfStatus = false;
                }
            }
        }
        console.log(data);
    }


    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
        }
    }

    openFileSelector(index) {
        this.el.nativeElement.querySelector('#fileBrowse').click();
        this.fileBrowseIndex = index;
    }

    onBrowseSelectChange() { }

    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                    uploadedBy: undefined
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }
    checkDisplayFileToggle() {
        this.showAction = true;
        this.show = false;
    }
    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }

    setEnglishOnFocusOut() {
        SetEnglish();
    }
    toggleLanguage() {
        this.isLangChange = true;
        const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
        if (elements !== undefined) {
            if (this.currentLang.value === 'Guj') {
                SetEnglish();
                this.currentLang.next('Eng');
            } else {
                SetGujarati();
                this.currentLang.next('Guj');
            }
            elements.focus();
        }
    }

}
