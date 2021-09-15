import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { HeaderElement, CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { DialogData } from 'src/app/model/senior-scale';
import { takeUntil, startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-approver-event-view',
    templateUrl: './approver-event-view.component.html',
    styleUrls: ['./approver-event-view.component.css']
})
export class ApproverEventViewComponent implements OnInit {

    eventDetails: HeaderElement[] = [

        { label: 'Transaction Number', value: '1001' },
        { label: 'Init Date', value: '12-12-2019' },
        { label: 'Office Name', value: 'DDO1' },
        { label: 'Pay Commission', value: '7th Pay Commission' },
        { label: 'Event Order Number', value: '10001' },
        { label: 'Event Order Date', value: '10-11-2019' },
        { label: 'Event Effective Date', value: '15-11-2019' },
    ];

    eventEmpCurrentDetails: HeaderElement[] = [
        { label: 'Type', value: 'Change of Scale' },
        { label: 'Employee Number', value: '1105100100' },
        { label: 'Employee Name', value: 'Amit Pandey' },
        { label: 'Class', value: 'Class III' },
        { label: 'Designation', value: 'Manager' },
        { label: 'Pay Level', value: 'Level 1' },
        { label: 'Cell Id', value: '1' },
        { label: 'Basic Pay', value: '5200' },
        { label: 'Date of Joining', value: '05-10-1960' },
        { label: 'Date of Retirement', value: '31-10-2020' },
        { label: 'Office Name', value: 'Office 1' },
    ];

    eventEmpPostDetails: HeaderElement[] = [
        { label: 'Pay Level', value: 'Level 1' },
        { label: 'Cell Id', value: '1' },
        { label: 'Basic Pay', value: '5200' },
        { label: 'Next Increment Date', value: '05-10-1970' },
    ];

    eventNotionalPeriodDetails: HeaderElement[] = [
        { label: 'From Date', value: '05-10-1970' },
        { label: 'To Date', value: '05-10-1980' },
        { label: 'Duration (Days)', value: '120' },
    ];

    approverEventTransactionForm: FormGroup;

    attachment_type_list: CommonListing[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
    ];

    date = new FormControl(new Date());
    showDate: Boolean = false;
    val: number;
    newDynamic: any = {};

    fileBrowseIndex: number;
    brwoseData: any[] = [{
        attachmentType: 'Supporting Document', fileName: 'pan', uploadedFileName: 'pan.jpg', uploadedBy: 'Amit Pandey'
    }];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'uploadedFileName', 'uploadedBy', 'action'];

    constructor
        (
            private fb: FormBuilder,
            private toastr: ToastrService,
            private el: ElementRef,
            public dialog: MatDialog,
        ) {
    }

    ngOnInit() {
        this.approverEventTransactionForm = this.fb.group({
            remarks: ['']
        });
    }

    saveEstimate(data) {
    }
    // submitDetails() {
    //     this.toastr.success('Data submit successfully');
    // }
    goToDashboard() { }
    resetForm() {
        this.approverEventTransactionForm.reset();
    }
    submitDetails2(): void {
        // const employees: string[] = [
        //   'Satendra Zala',
        //   'Hardik Chaudhary',
        //   'C.K Brahmbhatt',
        // ];
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(ApprovedForwardDialogComponent, {

            // StandingChargeConsolidateForwardDialogComponent
            width: '2700px',
            height: '600px'
            // data: employees
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'no') {
                console.log('The dialog was closed', result);
            } else if (result === 'yes') {
                console.log('The dialog was closed', result);
                this.showConfirmationPopup();
            }
        });
    }
    showConfirmationPopup() {}
}

@Component({
    selector: 'app-approved-forward-dialog',
    templateUrl: 'approved-forward-dialog.html',
    styleUrls: ['./approver-event-view.component.css']
})
export class ApprovedForwardDialogComponent implements OnInit {

    showAction: Boolean = true;

    fileBrowseIndex: number;
    date: any = new Date();
    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
    }];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
    headerJso: HeaderElement[] = [
        { label: 'Financial Year', value: '2019-2020' },
        { label: 'Demand', value: '010: Other expenditure ' },
        { label: 'Revenue/Capital', value: 'Revenue' },
        { label: 'Major Head', value: '2205: Art and Culture' },
        { label: 'Sub Major Head', value: '00: ' },
        { label: 'Minor Head', value: '101: Fine Arts Education' },
        { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
        { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
        { label: 'Charged/Voted', value: 'Voted' },
    ];

    displayData: boolean = false;

    attachment = [
        // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
        { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
        // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
        { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
    ]
    sample: string = 'src/assets/img/pdf-test.pdf';
    fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number)
    show: boolean = false;
    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;
    sampleFlag: boolean;
    tabDisable: Boolean = true;
    selectedIndex: number;

    actionForm: FormGroup;

    errorMessages = {
        FIN_YEAR: 'Please select any Financial Year',
        DEPARTMENT: 'Please select any Department',
    };

    forwardDialog_history_list: any[] = [
        { id: 1, userName: 'Shri S M Modi', designation: 'Deputy Section Officer', role: 'Creator', date: '1/11/2019', comment: 'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.' },
        { id: 2, userName: 'Shri C Patel', designation: 'Section Officer', role: 'Verifier', date: '10/11/2019', comment: 'We may approve' },
        { id: 3, userName: 'Shri P M Shah', designation: 'Deputy Secretaryr', role: 'Approver', date: '11/11/2019', comment: 'We may approve' },
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    ]

    action_list: any[] = [
        { value: '1', viewValue: 'Send to Class' },
        { value: '2', viewValue: 'Send Back' },
        { value: '3', viewValue: 'Return' },
        { value: '4', viewValue: 'Authorize' },
    ];

    user_list: any[] = [
        { value: '1', viewValue: 'Satendra Zala (DDO)' },
        // { value: '2', viewValue: 'Hardik Chaudhary' },
        // { value: '3', viewValue: 'C.K Brahmbhatt' },
    ];

    attachmentType_list: any[] = [
        { value: '1', viewValue: 'WorkFlow' },
    ];

    actionCtrl: FormControl = new FormControl();
    filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    userCodeCtrl: FormControl = new FormControl();
    filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    attachmentTypeCodeCtrl: FormControl = new FormControl();
    filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    private _onDestroy = new Subject<void>();

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<ApprovedForwardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private el: ElementRef,
    ) { }

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();

    ngOnInit() {
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
            'actionCode': '1',
            'userCode': '1'
        });
    }

    gotoListing() {
        this.router.navigate(['./budget/standing-charge-list']);
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
                if (this.attachment[i].fileName == data.fileName) {
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
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
}