import { CommonListing } from './../../model/common-listing';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { startWith, takeUntil, map } from 'rxjs/operators';
import { HeaderElement } from 'src/app/model/common-listing';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
declare function SetGujarati();
declare function SetEnglish();

@Component({
    selector: 'app-submit-confirm-common-dialig',
    templateUrl: './submit-confirm-common-dialig.component.html',
    styleUrls: ['./submit-confirm-common-dialig.component.css']
})
export class SubmitConfirmCommonDialigComponent implements OnInit {

    screenName = 'Stamp Processing Workflow Model';
    currentLang = new BehaviorSubject<string>('Eng');
    isLangChange = false;
    hasFocusSet: number;
    public showData = true;
    showAction: Boolean = true;
    readMoreId;
    file_name;
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
        { label: 'Financial Year', value: '2020-2021' },
        { label: 'Date of Indent Consolidation', value: '15-Oct-2018' },
        { label: 'Indent Number', value: '51/00057/072019/23' },
        { label: 'Indent Duration', value: '01-Jul-2019 to 31-Dec-2019' },
        { label: 'Type of Indent', value: 'Regular Indent' },
        { label: 'Date of Last Consoldiated Indent', value: '21-Mar-2019' },
        { label: 'Gross Total of Indent', value: 'Rs. 54000' },
    ];

    displayData = false;

    attachment = [
        // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
        { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
        // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
        { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
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
        ACTION: 'Please select Action',
    };

    forwardDialog_history_list: any[] = [
        {
            id: 1, userName: 'Shri S M Modi', designation: 'Deputy Section Officer',
            // tslint:disable-next-line: max-line-length
            role: 'Creator', date: '1/11/2019', comment: 'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
        },
        {
            id: 2, userName: 'Shri C Patel', designation: 'Section Officer',
            role: 'Verifier', date: '10/11/2019', comment: 'We may approve'
        },
        {
            id: 3, userName: 'Shri P M Shah', designation: 'Deputy Secretaryr',
            role: 'Approver', date: '11/11/2019', comment: 'We may approve'
        },
    ];

    action_list: CommonListing[] = [
        { value: '1', viewValue: 'Forward' },
        { value: '2', viewValue: 'Return' },
        { value: '3', viewValue: 'Send Back' },
        { value: '4', viewValue: 'Verify' },
        { value: '5', viewValue: 'Approve' },
        { value: '6', viewValue: 'Reject' },
        { value: '7', viewValue: 'Cancel' },
        { value: '8', viewValue: 'Authorize' },
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
        public dialogRef: MatDialogRef<SubmitConfirmCommonDialigComponent>,
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

        if (this.data === 'preparationOfChallanTo') {
            this.screenName = 'Preparation of Challan';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
                { label: 'Mode of Payment', value: 'Online Payment (Receipt Management Portal)' },
                { label: 'Challan Number', value: '51/00057/072019/23' },
                { label: 'Net Amount of Challan', value: 'Rs. 12000' },
                { label: 'Date of Challan', value: '14-Apr-2020' },
                { label: 'Vendor Name and Code', value: 'B S Patel (10005)' }];
        } else if (this.data === 'stampReceipt') {
            this.screenName = 'Stamp Receipt';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
                { label: 'Received From', value: 'Superintendent of Stamps Office' },
                { label: 'Date of Receipt', value: '01-Sep-2019' },
            ];

        } else if (this.data === 'doubleSingleLock') {
            this.screenName = 'Double Lock to Single Lock';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Office Name', value: 'District Treasury Office, Ahmedabad' },
                { label: 'Date of Transfer', value: '30-Sep-2020' },
                { label: 'Mode of Transfer', value: 'Challan' },
                { label: 'Challan Number', value: '51/00057/072019/23' },
            ];
        } else if (this.data === 'singleDoubleLock') {
            this.screenName = 'Single Lock to Double Lock';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Office Name', value: 'District Treasury Office, Ahmedabad' },
                { label: 'Date of Transfer', value: '30-Sep-2020' },
                { label: 'Mode of Transfer', value: 'Challan' },
                { label: 'Challan Number', value: '51/00057/072019/23' },
            ];
        } else if (this.data === '1stampIssue' || this.data === '2stampIssue') {
            this.screenName = 'Stamp Issue';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Stamp Issue To', value: 'District Treasury Office, Rajkot' },
                { label: 'Date of Issue', value: '21-Mar-2019' },
                { label: 'Indent Number', value: '51/00057/072019/23' },
                { label: 'Type of Indent', value: 'Regular Indent' },
            ];
        } else if (this.data === '3stampIssue') {
            this.screenName = 'Stamp Issue';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Stamp Issue To', value: 'Vendor / Party' },
                { label: 'Name of Vendor / Party', value: 'B.S.Patel (000123)' },
                { label: 'Challan Number', value: '51/00057/072019/23' },
                { label: 'Date of Challan', value: '14-Apr-2020' },
            ];
        } else if (this.data === 'revertStampIssue') {
            this.screenName = 'Revert Stamp Issue';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Name of Office', value: 'District Treasury Office, Gandhinagar' },
                { label: 'Date of Revert Issued Stamp', value: '14-Apr-2020' },
                { label: 'Vendor / Party Name', value: 'B.S.Patel (000123)' },
            ];
        } else if (this.data === 'stampReturnSsoTo') {
            this.screenName = 'Stamp Return to Sup. Of Stamp / Return to Treasury from STO Issue';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Return To', value: 'Superintendent of Stamps Office' },
                { label: 'Date of Return', value: '14-Apr-2020' },
                { label: 'Indent Number', value: '51/00057/072019/23' },
            ];
        } else if (this.data === 'fromAuthorizationOfChallanTo') {
            this.screenName = 'Authorization of Challan';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Challan Number', value: '51/00057/072019/23' },
                { label: 'Date of Challan', value: '14-Apr-2020' },
                { label: 'Challan Amount', value: 'Rs. 23500/-' },
                { label: 'Name of Vendor and Code', value: 'B S Patel (000123)' },
                { label: 'Bank Scroll Ref. No', value: 'TO/GNR/2020-21/37' },
                { label: 'Bank Scroll Amount', value: 'Rs. 22500/-' }
            ];
        } else {
            this.screenName = 'Stamp Processing Workflow Model';
            this.headerJso = [
                { label: 'Financial Year', value: '2020-2021' },
                { label: 'Date of Indent Consolidation', value: '15-Oct-2018' },
                { label: 'Indent Number', value: '51/00057/072019/23' },
                { label: 'Indent Duration', value: '01-Jul-2019 to 31-Dec-2019' },
                { label: 'Type of Indent', value: 'Regular Indent' },
                { label: 'Date of Last Consoldiated Indent', value: '21-Mar-2019' },
                { label: 'Gross Total of Indent', value: 'Rs. 54000' },
            ];
        }
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
    setGEnglishDefault() {
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
