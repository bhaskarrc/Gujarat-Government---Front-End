import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { MatTableDataSource, MatSelect, MatDialog,  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { DialogData } from 'src/app/model/post-creation';
import { HeaderElement } from 'src/app/model/common-listing';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-post-creation',
    templateUrl: './post-creation.component.html',
    styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent implements OnInit {
    postForm: FormGroup;

    tabDisableForPost: Boolean = true;
    selectedIndexForPost: number;
    doneHeaderForPost: Boolean = false;
    fileBrowseIndex: number;
    isDesignation: boolean;
    today_date = Date.now();
    district = 'Ahmedabad';
    ddoNo = 5344;
    cardexNo = 5622;
    ddoOffice = 'Collector Office';
    attachmentType = 'Supporting Document';
    displayedPostBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

    postErrorMessages = {
        District: 'Please Display District Name',
        DDO_No: 'Please Display DDO Number',
        Cardex_No: 'Please Display Cardex Number ',
        DDO_Office: 'Please Enter Name of DDO Office',
        Designation: 'Please Select Designation'
    };

    prefixList: any[] = [
        { value: '1', viewValue: 'Mr.' },
        { value: '2', viewValue: 'Shri' },
        { value: '3', viewValue: 'Smt' },
        { value: '4', viewValue: 'Dr.' },
        { value: '5', viewValue: 'Mrs.' },
        { value: '6', viewValue: 'Ms.' }
    ];

    designationList: any[] = [
        { value: '1', viewValue: 'Under Secretary' },
        { value: '2', viewValue: 'Deputy Secretary' },
        { value: '3', viewValue: 'Clerk' },
        { value: '4', viewValue: 'Deputy Section Officer' },
        { value: '5', viewValue: 'Assistant Secretary' }
    ];

    vacantPostList: any[] = [
        { value: '1', viewValue: 'Clerk - 1' },
        { value: '2', viewValue: 'Account Officer - 2' }
    ];

    attachmentTypeCode: any[] = [
        { value: '1', viewValue: 'Supporting Document' },
        { value: '2', viewValue: 'Sanction Order' },
    ];


    designationCtrl: FormControl = new FormControl();

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        private el: ElementRef,
        public dialog: MatDialog
    ) { }

    browseData: any[] = [{
        name: undefined,
        file: undefined,
    }];

    dataSourceBrowse = new MatTableDataSource(this.browseData);

    ngOnInit() {
        this.postCreationForm();
    }

    onSubmit() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(MappingForwardDialogComponent, {
          width: '2700px',
          height: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log('The dialog was closed', result);
          } else if (result === 'yes') {
            console.log('The dialog was closed', result);
          }
        });
      }

  postListDilogue() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(PostialogComponent, {
          width: '400px',
          height: '400px'
          });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log('The dialog was closed', result);
          } else if (result === 'yes') {
            console.log('The dialog was closed', result);
          }
        });
      }

    postCreationForm() {
        this.postForm = this.fb.group({
            requestNo: [''],
            district: ['', Validators.required],
            ddoNo: ['', Validators.required],
            cardexNo: ['', Validators.required],
            ddoOffice: ['', Validators.required],
            designationName: ['', Validators.required],
            postName: [''],
            // branchName: [''],
            // vacantPost: ['']
        });
    }

    goToNextForPost() {
        if (this.postForm.controls.district.invalid) {
            this.tabDisableForPost = true;
            _.each(this.postForm.controls, function (control) {
                if (control.status === 'INVALID') {
                    control.markAsTouched({ onlySelf: true });
                }
            });
        } else {
            this.tabDisableForPost = false;
            this.selectedIndexForPost = 1;
            this.doneHeaderForPost = true;
        }
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



    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
        }
    }


    openFileSelector(index) {
        this.el.nativeElement.querySelector('#fileBrowse').click();
        this.fileBrowseIndex = index;
    }
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

    postNameList(designation) {
        if (designation.length > 0) {
            this.isDesignation = true;
        } else {
            this.isDesignation = false;
        }

    }

    saveAllData() {
    }

}





@Component({
    selector: 'app-mapping-forward-dialog',
    templateUrl: 'mapping-forward-dialog.html',
    styleUrls: ['./post-creation.component.css']
  })
  export class MappingForwardDialogComponent implements OnInit {
    showAction: Boolean = true;

    fileBrowseIndex: number;
    date: any = new Date();
    brwoseData: any[] = [
      {
        name: undefined,
        file: undefined
      }
    ];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = [
      'attachmentType',
      'fileName',
      'browse',
      'uploadedFileName',
      'action'
    ];
    headerJso: HeaderElement[] = [
      { label: 'GR No.', value: 'DAT/EDP/01032019/0001' },
      { label: 'Office Type', value: 'DDO ' },
      { label: 'Office Name', value: 'Mamlatdar Office, Ahmedabad' },
      { label: 'Designation', value: 'Mamlatdar' },
      { label: 'District', value: 'Ahmedabad' },
      { label: 'Mobile No', value: '9122887722' },
      { label: 'Email ID', value: 'ahm-mam@gujarat.gov.in' },
      { label: 'HOD', value: 'Collector Office' }
    ];

    displayData = false;

    attachment = [
      {
        fileName: 'Attachment 1',
        fileType: 'image',
        filePath: '../../../assets/sample-attachments/image-sample.jpg',
        imgStatus: false
      },
      {
        fileName: 'Attachment 2',
        fileType: 'pdf',
        filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
        pdfStatus: false
      }
    ];
    sample = 'src/assets/img/pdf-test.pdf';
    fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
    show = false;
    page = 1;
    totalPages: number;
    isLoaded = false;
    sampleFlag: boolean;
    errorMessages;
    tabDisable: Boolean = true;

    actionForm: FormGroup;

    forwardDialog_history_list: any[] = [
      {
        id: 1,
        userName: 'Mr. M Raja',
        designation: 'Deputy Section Officer',
        role: 'HOD/AD Creator',
        date: '1/11/2019',
        comment: 'New Office needs to be created as Collector Office'
      },
      {
        id: 2,
        userName: 'Mr. S S Trikoti',
        designation: 'Section Officer',
        role: 'HOD/AD Verifier',
        date: '10/11/2019',
        comment: 'Details Verified'
      },
      {
        id: 3,
        userName: 'Mr. R Shukla',
        designation: 'Deputy Secretaryr',
        role: 'HOD/AD Approver',
        date: '11/11/2019',
        comment: 'Approved'
      }
    ];

    action_list: any[] = [{ value: '1', viewValue: 'Forward' }];

    user_list: any[] = [{ value: '1', viewValue: 'Mr. Shah ' }];

    attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];

    actionCtrl: FormControl = new FormControl();
    filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    userCodeCtrl: FormControl = new FormControl();
    filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    attachmentTypeCodeCtrl: FormControl = new FormControl();
    filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
      1
    );

    private _onDestroy = new Subject<void>();
    selectedIndex: number;

    constructor(
      private router: Router,
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<MappingForwardDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private el: ElementRef
    ) {}

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();

    ngOnInit() {
      this.errorMessages = edpMessage;
      this.createForm();
      if (this.action_list) {
        this.filteredAction.next(this.action_list.slice());
      }
      this.actionCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(
            this.action_list,
            this.actionCtrl.value,
            this.filteredAction
          );
        });
      if (this.user_list) {
        this.filteredUserCode.next(this.user_list.slice());
      }
      this.userCodeCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(
            this.user_list,
            this.userCodeCtrl.value,
            this.filteredUserCode
          );
        });
      this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
      this.attachmentTypeCodeCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterObjValue(
            this.attachmentType_list,
            this.attachmentTypeCodeCtrl.value,
            this.filteredAttachmentTypeCode
          );
        });
      console.log('data', this.data);
      this.options = this.data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.actionForm.patchValue({
        actionCode: '1',
        userCode: '1'
      });
    }

    deleteBrowse(index) {
      this.dataSourceBrowse.data.splice(index, 1);
      this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }

    gotoListing() {
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate(['./../postCreation']); '';
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
        userCode: ['', Validators.required]
      });
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
      );
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
      this.totalPages = pdfData.numPages;
    }

    checkDisplayFile(data) {
      for (let i = 0; i < this.attachment.length; i++) {
        if (data.fileType === 'image') {
          if ((this.showAction = true)) {
            this.showAction = false;
          }
          if (this.attachment[i].fileName == data.fileName) {
            this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
            this.show = this.attachment[i].imgStatus ? true : false;
          } else {
            this.attachment[i].imgStatus = false;
          }
        } else if (data.fileType === 'pdf') {
          if ((this.showAction = true)) {
            this.showAction = false;
          }
          if (this.attachment[i].fileName === data.fileName) {
            this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
            this.show = this.attachment[i].pdfStatus ? true : false;
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
    }

    onFileSelection(fileSelected) {
      if (fileSelected.target && fileSelected.target.files) {
        this.dataSourceBrowse.data[this.fileBrowseIndex].file =
          fileSelected.target.files[0];
      }
    }

    openFileSelector(index) {
      this.el.nativeElement.querySelector('#fileBrowse').click();
      this.fileBrowseIndex = index;
    }

    onBrowseSelectChange() {}

    addBrowse() {
      if (this.dataSourceBrowse) {
        const data = this.dataSourceBrowse.data[
          this.dataSourceBrowse.data.length - 1
        ];
        if (data && data.name && data.file) {
          const p_data = this.dataSourceBrowse.data;
          p_data.push({
            name: undefined,
            file: undefined
          });
          this.dataSourceBrowse.data = p_data;
        } else {
          // this.toastr.error('Please fill the detail.');
        }
      }
    }
  }


  
@Component({
  selector: 'app-cpost-dialog',
  templateUrl: './post.dialog.html',
  styleUrls: ['./post-creation.component.css']

})

export class PostialogComponent implements OnInit {
  confirmDialog: FormGroup;


  constructor(

      public dialogRef: MatDialogRef<PostialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private fb: FormBuilder,
  
    ) {}



   confirMation: any[] = [
      { value: '1', viewValue: 'Yes' },
      { value: '2', viewValue: 'No' }
  ];

  confCtrl: FormControl = new FormControl();
  ngOnInit() {
      this.createForm();
  }

  onCancel(): void {
    this.dialogRef.close('no');
  }

  onSave(): void {
    this.dialogRef.close('save');
  }

  createForm() {
      this.confirmDialog = this.fb.group({
          confirm: ['']
      });
  }

  // tslint:disable-next-line: member-ordering
  errorMessages = {
      confirm: 'Please select confirmation'
  };
}